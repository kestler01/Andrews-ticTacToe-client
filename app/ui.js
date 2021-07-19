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

const onSignOutSuccess = function () {
  $('#message-field').text('you signed out')
}

const onSignOutFailure = function () {
  $('#message-field').text('sign out failure')
}
const onNewGameSuccess = function (response) {
  $('#message-field').text('sign in successful')
  store.game = response.game
  store.p1turn = true
  console.log(response, store.game._id)
}

const onNewGameFailure = function () {
  $('#message-field').text('new game failure')
  console.log('oops, in catch')
}
const onGameMoveSuccess = function () {
  store.p1turn = !store.p1turn
}
const onGameMoveFailure = function () {
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onChangePwFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onGameMoveSuccess,
  onGameMoveFailure
}
