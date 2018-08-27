const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateChoreInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.description = !isEmpty(data.description) ? data.description : '';
    data.userId = !isEmpty(data.userId) ? data.userId : '';
    data.deadline = !isEmpty(data.deadline) ? data.deadline : '';
    data.estTime = !isEmpty(data.estTime) ? data.estTime : '';

    if (!Validator.isLength(data.name, { min: 3, max: 300 })) {
        errors.name = 'Event name must be between 3 and 300 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Chore name is required';
    }

    if (Validator.isEmpty(data.userId)) {
      errors.userId = 'User must be assigned to chore';
    }

    if (Validator.isEmpty(data.deadline)) {
      errors.deadline = 'Deadline is required';
    }

    if (Validator.isEmpty(data.estTime)) {
      errors.estTime = 'estTime is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};