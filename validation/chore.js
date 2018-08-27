const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateChoreInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.description = !isEmpty(data.description) ? data.description : '';
    data.userId = !isEmpty(data.userId) ? data.userId : '';
    data.deadline = !isEmpty(data.deadline) ? data.deadline : '';
    data.estTime = !isEmpty(data.estTime) ? data.estTime : '';
    data.completed = !isEmpty(data.completed) ? data.completed : '';

    if (!Validator.isLength(data.name, { min: 3, max: 300 })) {
        errors.name = 'Event name must be between 3 and 300 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Chore name is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};