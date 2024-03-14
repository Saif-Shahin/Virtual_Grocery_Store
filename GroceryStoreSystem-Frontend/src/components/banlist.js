import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})


  export default {
    name: 'banHammer',
    data () {
      return {
        banlist: [],
        error:''
      }
    },
    created: function () {
            AXIOS.get('/ban/getAll/')
            .then(response => {
            // JSON responses are automatically parsed.
              this.banlist = response.data
            })
            .catch(e => {
              var errorMsg = e.response.data
              console.log(errorMsg)
              this.error = e.response.data
            })

      },

      methods: {
        banUser: function (email) {
        
  
              AXIOS.get('/ban/'.concat(email), {})
              .then(response => {
              // JSON responses are automatically parsed.
                this.banlist.push(response)
                this.error = ''
              })
              .catch(e => {
                var errorMsg = e.response.data.message
                console.log(errorMsg)
                this.error = e.response.data
              })
          },

        unbanUser: function (email) {
  

            AXIOS.get('/unban/'.concat(email), {})
            .then(response => {
            // JSON responses are automatically parsed.
            this.banlist.reload()
            this.error = ''
            })
            .catch(e => {
            var errorMsg = e.response.data.message
            console.log(errorMsg)
            this.error = e.response.data
            })
        }

        
      }
  }