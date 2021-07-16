const config = require('./config.js')

const signUp = function (dataObj) {
  console.log(dataObj)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'Post',
    data: dataObj
  })
}

const signIn = function(dataObj) {
  console.log(dataObj)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'post',
    data: dataObj
  })
}

module.exports = {
  signUp,
  signIn
}
