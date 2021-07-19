const getFormFields = require('./../lib/get-form-fields.js')
const api = require('./api.js')
const store = require('./store.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const formDataRaw = event.target
  console.log(formDataRaw)
  const formDataObj = getFormFields(formDataRaw)
  console.log(formDataObj)
  api.signUp(formDataObj)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const formDataRaw = event.target
  console.log(formDataRaw)
  const formDataObj = getFormFields(formDataRaw)
  console.log(formDataObj)
  api.signIn(formDataObj)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onChangePw = function (event) {
  event.preventDefault()
  const formDataRaw = event.target
  console.log(formDataRaw)
  const formDataObj = getFormFields(formDataRaw)
  console.log(formDataObj)
  api.changePw(formDataObj)
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFailure)
}

const onSignOut = function () {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onNewGame = function () {
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}
const onGameMove = function (event) {
  let moveValue
  if (store.p1turn === true) {
    moveValue = 'x'
  } else { moveValue = 'o' }
  const moveDataRaw = event.target
  console.log(moveDataRaw)
  const moveData = {
    index: $(moveDataRaw).attr('data-cell-index'),
    value: moveValue,
    over: false
  }
  api.gameMove(moveData)
    .then(ui.onGameMoveSuccess)
    .catch(ui.onGameMoveFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut,
  onNewGame,
  onGameMove
}
