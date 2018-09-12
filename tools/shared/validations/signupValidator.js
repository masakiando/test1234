var validator =  require('validator');
var isEmpty =  require('lodash/isEmpty');

function commonValidations(data) {
  var errors = {};
  const minUserNameLength = 5;
  const minPasswordLength = 5;

  if (data.username.length < minUserNameLength) {
    errors.username = `${minUserNameLength} 文字以上の入力が必須です。`;
  }

  if (!validator.isEmail(data.email)) {
    errors.email = 'Emailとして正しくありません。';
  }
  if (!data.email) {
    errors.email = '入力が必須です。';
  }

  if (data.password == data.username) {
    errors.password = 'UserNameと同じにすることはできません。';
  } if (data.password.length < minPasswordLength) {
      errors.password = `${minPasswordLength} 文字以上の入力が必須です。`;
  }

  if (data.password !== data.passwordConfirmation) {
    errors.passwordConfirmation = 'Passwordsが一致していません。';
  }

  if (!data.passwordConfirmation) {
    errors.passwordConfirmation = '入力が必須です。';
  }

  return {
    errors,
    isValid: isEmpty(errors) //errors null true
  };
}

module.exports = commonValidations;
