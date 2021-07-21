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
  // check player turn and set x or o
  let moveValue
  if (store.p1turn === true) {
    moveValue = 'x'
  } else {
    moveValue = 'o'
  }
  console.log(moveValue, moveValue === 'x' || moveValue === 'o')
  // get clicked cell data
  const moveDataRaw = event.target
  console.log(moveDataRaw)

  // format clicked cell data
  const moveData = {
    index: $(moveDataRaw).attr('data-cell-index'),
    value: moveValue,
    over: false
  }

  // get game state array
  const gameState = store.game.cells
  console.log(gameState)
  console.log(moveData)

  //  is game over ?

  if (store.game.over === true) {
    const error = 'GAME IS ALREADY OVER'
    ui.onGameMoveFailure(error)
    return
  }

  //  is space taken ?
  if (gameState[moveData.index] === 'x' || gameState[moveData.index] === 'o') {
    const error = 'Invalid Move, you cant move there'
    ui.onGameMoveFailure(error)
    return
  }
  // place piece on board in user view
  ui.onGameMovePlacePiece(moveData.index, moveValue)
  // update game state with new legal move
  gameState[moveData.index] = moveData.value
  if (
    //  check horizontals for game win with new move
    (gameState[0] === gameState[1] &&
      gameState[1] === gameState[2] &&
      (gameState[2] === 'x' || gameState[2] === 'o')) ||
    (gameState[3] === gameState[4] &&
      gameState[4] === gameState[5] &&
      (gameState[5] === 'x' || gameState[5] === 'o')) ||
    (gameState[6] === gameState[7] &&
      gameState[7] === gameState[8] &&
      (gameState[8] === 'x' || gameState[8] === 'o')) ||
    //  check verticals for game win with new move
    (gameState[0] === gameState[3] &&
      gameState[3] === gameState[6] &&
      (gameState[0] === 'x' || gameState[0] === 'o')) ||
    (gameState[1] === gameState[4] &&
      gameState[4] === gameState[7] &&
      (gameState[1] === 'x' || gameState[1] === 'o')) ||
    (gameState[2] === gameState[5] &&
      gameState[5] === gameState[8] &&
      (gameState[8] === 'x' || gameState[8] === 'o')) ||
    //  check diagonals for game win with new move
    (gameState[0] === gameState[4] &&
      gameState[4] === gameState[8] &&
      (gameState[4] === 'x' || gameState[4] === 'o')) ||
    (gameState[2] === gameState[4] &&
      gameState[4] === gameState[6] &&
      (gameState[4] === 'x' || gameState[4] === 'o'))
  ) {
    // if any true, game is over!
    store.game.over = !store.game.over
    ui.onGameMoveWin(moveValue)
  }
  //  if it's a legal move, and nobody won, and its the 8th play, it must be a tie
  if (store.game._v === 8) {
    store.game.over = !store.game.over
    ui.onGameMoveTie()
  }
  // reformat for api with proper game over check
  const game = {
    cell: {
      index: moveData.index,
      value: moveData.value
    },
    over: store.game.over
  }
  console.log(store)
  api.gameMove(game).then(ui.onGameMoveSuccess).catch(ui.onGameMoveFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut,
  onNewGame,
  onGameMove
}
