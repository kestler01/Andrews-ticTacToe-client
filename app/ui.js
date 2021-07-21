// import 'bootstrap'
const store = require('./store.js')
// const api = require('./api.js')
const Modal = require('bootstrap').Modal

const onSignUpSuccess = function () {
  $('#sign-up-form-message').text('sign up successful, log in to continue')
  $('#sign-up-flip-in-button').show()
}

const onSignUpFailure = function () {
  $('#sign-up-form-message').text('sign up failed, try again')
}

const onSignInSuccess = function (response) {
  $('#message-field').text('sign in successful')
  $('#sign-up-button').hide()
  $('#sign-in-button').hide()
  $('#sign-out-button').show()
  $('#change-pw-button').show()
  $('#new-game-button').show()
  $('#sign-in').trigger('reset')
  store.token = response.user.token
  store.scores = {
    player1: 0,
    player2: 0
  }
  // console.log(response, store)
  const myModal = new Modal($('#sign-in-form-modal'))
  myModal._hideModal()
  $('.modal-backdrop').hide() // janky but necessary modal close
}

const onSignInFailure = function () {
  $('#message-field').text('sign in failure')
  $('#sign-in').trigger('reset')
}

const onChangePwSuccess = function () {
  $('#pw-change-message-field').text('password updated')
}

const onChangePwFailure = function () {
  $('#change-password').trigger('reset')
  $('#pw-change-message-field').text('password change failed')
}

const onSignOutSuccess = function () {
  $('#message-field').text('you signed out')
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  $('#sign-out-button').hide()
  $('#change-pw-button').hide()
  $('#new-game-button').hide()
  $('#game-board').hide()
}

const onSignOutFailure = function () {
  $('#message-field').text('sign out failure')
}
const onNewGameSuccess = function (response) {
  store.game = response.game
  store.p1turn = true
  $('#game-board').show()
  $('#message-field').text('')
}

const onNewGameFailure = function () {
  $('#message-field').text('please Log In to continue')
}
const onGameMoveSuccess = function (response) {
  store.p1turn = !store.p1turn
  store.game = response.game
  $('#message-field').text('')
  // console.log(store, store.game, response)
}
const onGameMoveFailure = function (response) {
  $('#message-field').text(response)
  // console.log('invalid move ', response)
}
const onGameMoveWin = function (player) {
  jQuery.noConflict()
  const myMessageModal = new Modal($('#pop-up-message-field-modal'))
  console.log(myMessageModal)
  myMessageModal.show()

  if (player === 'x') {
    store.scores.player1 += 1
  } else {
    store.scores.player2 += 1
  }
  $('#pop-up-message-field').text(player + ' WINS')
  console.log(store.scores)
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
  onGameMoveFailure,
  onGameMoveWin
}
