// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'
// const bootstrap = require('bootstrap')
// window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js') // did not work
// allows usage of new JS features
require('babel-polyfill')

// load manifests
// javascript entry point
require('./app/app.js')

// styles
require('./app/styles/index.scss')
