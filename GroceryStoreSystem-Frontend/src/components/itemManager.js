import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})


  export default {
    name: 'itemManaging',
    data () {
      return {
        inventory: [],
        user: null,
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

        getUser: function(){
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
        
        addToCart: function(itemName, customerEmail) {
          if(this.user == null){
            alert("You are not logged in! Please log in to proceed.");
          } else if (this.user.userType !== 'Customer') {
            alert("You are not a customer! Please log in as a customer to proceed.");
          }
          else{
            AXIOS.post('/carts/addItem/'.concat(itemName).concat('/').concat(customerEmail),{})
            .then(response => {
              this.user = response.data
              alert("Item added to cart.");
            })
            .catch(e => {
              var errorMsg = e.response.data.message
              console.log(errorMsg)
              this.error = e.response.data
              alert(this.error);
            })
            
          }
        }

        
      }
  }