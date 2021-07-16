const config = require('./config.js')
const store = require('./store.js')

const signUp = function (dataObj) {
  console.log(dataObj)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'Post',
    data: dataObj
  })
}

const signIn = function (dataObj) {
  console.log(dataObj)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'Post',
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
module.exports = {
  signUp,
  signIn,
  changePw
}
