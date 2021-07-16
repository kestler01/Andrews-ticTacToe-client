const store = require('./store.js')

const onSignUpSuccess = function () {
  $('#message-field').text('sign up successful')
}

const onSignUpFailure = function () {
  $('#message-field').text('sign up failed, try again')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
