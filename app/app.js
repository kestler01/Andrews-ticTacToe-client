// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events.js') // events.onSignUp

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePw)
  $('#sign-out').on('click', events.onSignOut)
  $('#new-game').on('click', events.onNewGame)
  $('#game-board').on('click', events.onGameMove)
})
