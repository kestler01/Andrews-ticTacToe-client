let apiUrl
const apiUrls = {
  production: 'https://tic-tac-toe-api-development.herokuapp.com',
  development: 'https://tic-tac-toe-api-development.herokuapp.com'
}
// old development url : 'http://localhost:4741'

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
