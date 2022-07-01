import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency-exchange';

function clearFields() {
  $('#currencyAmount').val("");
  $('#currencyFrom').val("");
  $('#currencyTo').val("");
}

function clearOutput() {
  $('#userCurrency').text("");
  $('#newCurrency').text("");
  $('#conversionRate').text("");
  $('#amountConverted').text("");
  $('#errorMessage').text("");
}

function getElements(response) {
  const exchange = JSON.parse(response);
  if (response.includes("unsupported-code")) {
    $('.showConversion').hide();
    $('.errorDisplay').show();
    $('#errorMessage').text(`We do not currently support this currency. Please confirm currency code is correct and try again.`);
  } else {
    $('.showConversion').show();
    $('.errorDisplay').hide();
    $('#userCurrency').text(`Base Currency: ${exchange.base_code}`);
    $('#newCurrency').text(`Converted Currency: ${exchange.target_code}`);
    $('#conversionRate').text(`Conversion Rate: ${exchange.conversion_rate}`);
    $('#amountConverted').text(`Amount in ${exchange.target_code} after converted from ${exchange.base_code}: ${exchange.conversion_result}`);
  }
}

async function makeApiCall(currencyAmt, currencyFrom, currencyTo) {
  const response = await CurrencyExchange.getExchange(currencyAmt, currencyFrom, currencyTo);
  getElements(response);
  console.log(response);
}

$(document).ready(function() {
  $('#currencyButton').click(function(event) {
    event.preventDefault();
    clearOutput();
    let currencyAmt = $('#currencyAmount').val();
    let currencyFrom = $('#currencyFrom').val();
    let currencyTo = $('#currencyTo').val();
    makeApiCall(currencyAmt, currencyFrom, currencyTo);
    clearFields();
  });
});
