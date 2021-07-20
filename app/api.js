// const { ConcatenationScope } = require('webpack') i have no idea what this is, what it does, or where it came from!?git stat
const config = require('./config.js')
const store = require('./store.js')
const signUp = function (dataObj) {
  console.log(dataObj)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'post',
    data: dataObj
  })
}

const signIn = function (dataObj) {
  console.log(dataObj)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'post',
    data: dataObj
  })
}

const changePw = function (dataObj) {
  console.log(dataObj, store.token)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'patch',
    headers: { Authorization: 'Bearer ' + store.token },
    data: dataObj
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'delete',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'post',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: {}
  })
}

const gameMove = function (moveData) {
  const gameState = store.game.cells
  console.log(gameState)
  console.log(moveData)
  if (store.game.over === true) { //  is game over ?
    const error = 'GAME IS ALREADY OVER'
    return error
  }
  if ((gameState[moveData.index] === 'x') || (gameState[moveData.index] === 'o')) { //  is space taken ?
    throw 'Invalid Move, you cant move there'
  }
  gameState[moveData.index] = moveData.value
  if (
    //  check horizontals for game win with new move
    (gameState[0] === gameState[1] && gameState[1] === gameState[2] && (gameState[2] === ('x' || 'o'))) ||
    (gameState[3] === gameState[4] && gameState[4] === gameState[5] && (gameState[5] === ('x' || 'o'))) ||
    (gameState[6] === gameState[7] && gameState[7] === gameState[8] && (gameState[8] === ('x' || 'o'))) ||
    //  check verticals for game win with new move
    (gameState[0] === gameState[3] && gameState[3] === gameState[6] && (gameState[0] === ('x' || 'o'))) ||
    (gameState[1] === gameState[4] && gameState[4] === gameState[7] && (gameState[1] === ('x' || 'o'))) ||
    (gameState[2] === gameState[5] && gameState[5] === gameState[8] && (gameState[8] === ('x' || 'o'))) ||
    //  check diagonals for game win with new move
    (gameState[0] === gameState[4] && gameState[4] === gameState[8] && (gameState[4] === ('x' || 'o'))) ||
    (gameState[2] === gameState[4] && gameState[4] === gameState[6] && (gameState[4] === ('x' || 'o')))
  ) {
    store.game.over = !store.game.over
  }
  const game = {
    cell: {
      index: moveData.index,
      value: moveData.value
    },
    over: store.game.over
  }
  console.log(gameState)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'patch',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: { game: game }
  })
}
module.exports = {
  signUp,
  signIn,
  changePw,
  signOut,
  newGame,
  gameMove

}
