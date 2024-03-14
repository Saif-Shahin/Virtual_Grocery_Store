import axios from 'axios'
import loginHandler from './loginHandler'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})


  export default {
    name: 'accountHandling',
    data () {
      return {
        user: null,
        loginError: ''
      }
    },
    
    onpageshow: function(){ 

      AXIOS.get('/login/getRecentLoggedIn/')
      .then(response => {
        this.user = response.data
        this.loginError = ''
      })
      .catch(e => {
        var errorMsg = e.response.data.message
        console.log(errorMsg)
        this.loginError = e.response.data
        this.user = null
      })
      

    },

      methods: { //sessionStorage.getItem('loggedInUserType')
          
        getUser: function(){ 

          AXIOS.get('/login/getRecentLoggedIn/')
          .then(response => {
            this.user = response.data
            this.loginError = ''
          })
          .catch(e => {
            var errorMsg = e.response.data.message
            console.log(errorMsg)
            this.loginError = e.response.data
            this.user = null
          })
          
    
        },

        logout: function(){
          
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

        updateAccInfo: function(userEmail, newName, newEmail,newPass){
          
          AXIOS.put('/updateUser/'.concat(userEmail).concat('/').concat(newName).concat('/').concat(newEmail).concat('/').concat(newPass).concat('/'), {},{})
            .then(response => {
            // JSON responses are automatically parsed.
              this.loginError = ''
              
              location.reload()
            })
            .catch(e => {
              var errorMsg = e.response.data.message
              console.log(errorMsg)
              this.loginError = e.response.data
            })
        }
      }
  }