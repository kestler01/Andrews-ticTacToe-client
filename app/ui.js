const store = require('./store.js')

const onSignUpSuccess = function () {
  $('#message-field').text('sign up successful')
}

const onSignUpFailure = function () {
  $('#message-field').text('sign up failed, try again')
}

const onSignInSuccess = function (response) {
  $('#message-field').text('sign in successful')
  store.token = response.user.token
  console.log(response, store)
}

const onSignInFailure = function () {
  $('#message-field').text('sign in failure')
}

const onChangePwSuccess = function () {
  $('#message-field').text('password changed')
}

const onChangePwFailure = function () {
  $('#message-field').text('password change failed')
  console.log('oops, in catch')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onChangePwFailure
}