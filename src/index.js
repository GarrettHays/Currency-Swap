import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency-exchange';

async function makeApiCall(currencyAmt, currencyFrom, currencyTo) {
  const response = await CurrencyExchange.getExchange(currencyAmt, currencyFrom, currencyTo);
  getElements(response);
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
