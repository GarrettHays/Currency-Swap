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

// error handling - check how error is passed back from API call
// response "result": "error" or "error-type" 
// another IF? 404?

function getElements(response) {
  const exchange = JSON.parse(response);
  $('#userCurrency').text(`Base Currency: ${exchange.base_code}`);
  $('#newCurrency').text(`Converted Currency: ${exchange.target_code}`);
  $('#conversionRate').text(`Conversion Rate: ${exchange.conversion_rate}`);
  $('#amountConverted').text(`Amount in Converted Currency: ${exchange.conversion_result}`);
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
