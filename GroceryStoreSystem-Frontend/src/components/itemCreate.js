import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})


  export default {
    name: 'itemCreating',
    data () {
      return {
        inventory: [],
        error:''
      }
    },
    created: function () {
            AXIOS.request('/products/')
            .then(response => {
            // JSON responses are automatically parsed.
              this.inventory = response.data
            })
            .catch(e => {
              var errorMsg = e.response.data
              console.log(errorMsg)
              this.error = errorMsg
            })

      },

      methods: {
        addItem: function (name, price, pus) {
  
              AXIOS.post('/products/'.concat(name).concat('/').concat(price).concat('/').concat(pus), {})
              .then(response => {
              // JSON responses are automatically parsed.
                this.inventory.push(response.data)
                this.error = ''
              })
              .catch(e => {
                var errorMsg = e.response.data.message
                console.log(errorMsg)
                this.error = errorMsg
              })
            },

            removeItem: function (name) {
    
                AXIOS.delete('/products/delete/'.concat(name), {},{})
                .then(response => {
                this.error = ''
                location.reload()
                })
                .catch(e => {
                var errorMsg = e.response.data.message
                console.log(errorMsg)
                this.error = errorMsg
                })

        },

        
      }
  }