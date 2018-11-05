var validator =  require('validator');
var isEmpty =  require('lodash/isEmpty');

function commonValidations(course) {
  let errors = {};

  if (course.title.length < 5) {
    errors.title = `${5} 文字以上の入力が必須です。`;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

module.exports = commonValidations;
