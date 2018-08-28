const Validator = require('validator');
const isEmpty = require('./is-empty');

const validateGroupInput = (data) => {
  let errors = {};

  if (!Validator.isLength(data.name, { min: 3, max: 20 })) {
    errors.name = 'Group name must be between 3 and 20 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateGroupInput;