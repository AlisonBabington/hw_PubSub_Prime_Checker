const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const resultFromNumber = event.detail;
    this.displayResult(resultFromNumber);
  })
};

ResultView.prototype.displayResult = function (inputResult) {
  const result = document.querySelector('#result');
  if (inputResult === true) {
    result.textContent = `This number is a prime number!`
  }
  else {
    result.textContent = `This number is not a prime number!`
  };
};

module.exports = ResultView;
