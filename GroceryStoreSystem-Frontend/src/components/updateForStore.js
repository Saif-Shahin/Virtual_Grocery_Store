import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})


  export default {
    name: 'updatingStore',
    data () {
      return {
        confirmation:'',
        error:''
      }
    },
    created: function () { },

      methods: {
        updateStoreName: function (name) {
          // Create a new employee and add it to the list of employees

            AXIOS.put('/store/updateName/'.concat(name), {}, {})
            .then(response => {
            // JSON responses are automatically parsed.
              this.confirmation = response.data
              this.error = ''
            })
            .catch(e => {
              var errorMsg = e.response.data.message
              console.log(errorMsg)
              this.error = errorMsg
              this.confirmation = ''
            })
        }
        
      }
  }