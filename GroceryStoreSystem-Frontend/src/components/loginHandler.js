import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})


  export default {
    name: 'loginHandling',
    
    data () {
      return {
        loginError:null,
        store:null,
        user: null,
        openedLgBx: null
      }
    },
    
    created: function () {
    },

    onload: function(){
      AXIOS.get('/login/getRecentLoggedIn/')
            .then(response => {
              this.user = response.data

            })
            .catch(e => {
              var errorMsg = e.response.data.message
              console.log(errorMsg)
              this.loginError = e.response.data
              this.user = null
            })
    },

      methods: {
        loginUser: function (userEmail, userPassword) {

            AXIOS.get('/login/'.concat(userEmail).concat('/').concat(userPassword).concat('/'))
            .then(response => {
            // JSON responses are automatically parsed.
              this.openedLgBx = null
              this.user = response.data
              this.loginError = ''
            })
            .catch(e => {
              var errorMsg = e.response.data.message
              console.log(errorMsg)
              this.loginError = e.response.data
            })
        },

        logoutUser: function(){
          
          AXIOS.get('/login/logoutEveryone'.concat('/'))
            .then(response => {
            // JSON responses are automatically parsed.
              this.openedLgBx = null
              this.user = null
              this.loginError = ''
              location.href = "#/home"
            })
            .catch(e => {
              var errorMsg = e.response.data.message
              console.log(errorMsg)
              this.loginError = e.response.data
            })
        },
        openLgBx: function(){
          this.openedLgBx = "data"
        },
        closeLgBx: function(){
          this.openedLgBx = null
        },

        getUser: function(){
          AXIOS.get('/login/getRecentLoggedIn/')
                .then(response => {
                  this.user = response.data
                })
                .catch(e => {
                  var errorMsg = e.response.data.message
                  console.log(errorMsg)
                  this.loginError = e.response.data
                  this.user = null
                })
                
          AXIOS.get('/store/getById/1')
                .then(response => {
                  this.store = response.data
                })
                .catch(e => {
                  var errorMsg = e.response.data.message
                  console.log(errorMsg)
                  this.store = null
                })

        },

        getStore: function(){
          AXIOS.get('/store/getById/1')
                .then(response => {
                  this.store = response.data
                })
                .catch(e => {
                  var errorMsg = e.response.data.message
                  console.log(errorMsg)
                  this.store = null
                })
        }
      }
  }