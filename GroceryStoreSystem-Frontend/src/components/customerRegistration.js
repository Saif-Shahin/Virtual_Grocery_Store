import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})


  export default {
    name: 'customerCreation',
    data () {
      return {
        newUser: '',
        errorUser: null,
        confirmCustomer: null,
        confirmOwner: null,
        response: []
      }
    },

    created: function () {

      this.newUser = ''
      this.errorUser = null
      this.confirmCustomer = null
      this.confirmOwner = null

    },

    methods: {
      makeCustomer: function(name, email, password) {
        AXIOS.post('/customers/'.concat(name).concat('/').concat(email).concat('/').concat(password), {}, {})
        .then(response => {
        // JSON responses are automatically parsed.
            this.confirmCustomer = response.data
            this.confirmOwner = null
            this.errorUser = ''
            this.newUser = ''
        })
        .catch(e => {
            var errorMsg = e.response.data.message
            console.log(errorMsg)
            this.errorUser = e.response.data
            this.confirmCustomer = null
            this.confirmOwner = null
        })

        
        },

        makeOwner: function(name, email, password) {
          AXIOS.post('/owner/create/'.concat(name).concat('/').concat(email).concat('/').concat(password).concat('/'), {}, {})
          .then(response => {
          // JSON responses are automatically parsed.
              this.confirmCustomer = null
              this.confirmOwner = response.data
              this.errorUser = ''
              this.newUser = ''
          })
          .catch(e => {
              var errorMsg = e.response.data.message
              console.log(errorMsg)
              this.errorUser = e.response.data
              this.confirmCustomer = null
              this.confirmOwner = null
          })
      }

    
    }
  }