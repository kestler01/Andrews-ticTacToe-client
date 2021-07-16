const getFormFields = require('./../lib/get-form-fields.js')
const api = require('./api.js')
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
module.exports = {
  onSignUp,
  onSignIn
}
