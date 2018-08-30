const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateMessageInput(data) {
  let errors = {};

  data.body = !isEmpty(data.body) ? data.body : '';
  data.anon = !isEmpty(data.anon) ? data.anon : '';

  if (Validator.isEmpty(data.body)) {
    errors.body = 'Cannot send an empty message';
  }

  if (Validator.isEmpty(data.anon)) {
    errors.anon = 'Must select if this message is anonymous';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};