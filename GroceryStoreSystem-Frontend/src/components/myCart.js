import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})


  export default {
    name: 'cartCreation',
    data () {
      return {
        cart: null,
        items: [],
        error: null,
        user: null,
        customerEmail: '',
        response: [],
        edit: null
      }
    },

    created: function () {},

      methods: {

        getUser: function() {
          AXIOS.get('/login/getRecentLoggedIn/')
                .then(response => {
                  this.user = response.data
                })
                .catch(e => {
                  var errorMsg = e.response.data.message
                  console.log(errorMsg)
                  this.error = e.response.data
                  this.user = null
                })
        },

        getCart: function(customerEmail) {
          AXIOS.get('/carts/get/'.concat(customerEmail))
                .then(response => {
                  this.cart = response.data
                  this.items = this.cart.groceryItems
                  this.error = null
                })
                .catch(e => {
                  var errorMsg = e.response.data.message
                  console.log(errorMsg)
                  this.error = e.response.data
                  this.user = null
                })
        }

      }
  }