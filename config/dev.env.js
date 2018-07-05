'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://localhost:8081/api/"',
  API_TIMEOUT: 5000,
  FIREBASE_API_KEY: "AIzaSyCXlv4rbCnR_I-1lfGdMl8jCoH4cuaYeFU",
  FIREBASE_AUTH_DOMAIN: "myroutes-ae616.firebaseapp.com",
  FIREBASE_DB_URL: "https://myroutes-ae616.firebaseio.com",
  FIREBASE_PROJECT_ID: "myroutes-ae616",
  FIREBASE_STORAGE_BUCKET: "myroutes-ae616.appspot.com",
  FIREBASE_MSG_SENDER_ID: "326089522807",

})
