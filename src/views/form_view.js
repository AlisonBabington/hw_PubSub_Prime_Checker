const PubSub = require('../helpers/pub_sub.js');

const FormView = function () {

};

FormView.prototype.bindEvents = function () {
  const primeForm = document.querySelector('#prime-checker-form')
  primeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputNumber = event.target.number.value;
    PubSub.publish('FormView:inputNumber', inputNumber);
  });
};

module.exports = FormView;
