// form view
//  publish
//  number_submitted
//
// prime_checker
// check_number
// bindEvents
//  subscribe -- number_submitted;
//  publish -- result_calculated;
//
//  resultView
//  subscribe -- result_calculated

const PubSub = require('../helpers/pub_sub.js')

const PrimeChecker = function () {

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:inputNumber', (event) => {
    const inputNumber = event.detail;
    const result = this.checkNumber(inputNumber);
    PubSub.publish('PrimeChecker:result-calculated', result)
  })
};

PrimeChecker.prototype.checkNumber = function (num) {
  if (num < 2) {
    return false};
  if (num === 2) {
    return true};

  const squared = Math.sqrt(num);

  for (let i = 2; i <= squared; i++)
    if (num % i === 0) return false;
  return true;
};

module.exports = PrimeChecker;
