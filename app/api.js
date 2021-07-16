const config = require('./config.js')

const signUp = function (dataObj) {
  console.log(dataObj)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'Post',
    data: dataObj
  })
}

module.exports = {
  signUp

}
