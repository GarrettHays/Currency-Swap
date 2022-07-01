import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$('#currencyButton').submit(function(event) {
  event.preventDefault();
  let currencyAmt = $('#currencyAmount').val();
  let currencyFrom = $('#currencyFrom').val();
  let currencyTo = $('#currencyTo').val();
  clearFields();
  // clearOutput();
  makeApiCall(currencyAmt, currencyFrom, currencyTo);
});
