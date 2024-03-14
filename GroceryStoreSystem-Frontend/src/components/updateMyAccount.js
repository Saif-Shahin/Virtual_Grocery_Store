import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})


export default {
    name: 'customerAccountCreation',
    data(){
        return{
            customerAccount: [],
            newCustomerAccount: '',
            errorName: '',
            errorCustomer: '',
            errorEmail: '',
            errorPassword: '',
            edit: null //maybe not using it
        }
    },

    methods: {
        editCustomerAccount: function(customerId, newName,newEmail, newPassword){
            AXIOS.put('/customers/updateEmail/{oldEmail}/{newEmail}'.concat(customerId).concat('/').concat(newName).concat('/').concat(newEmail).concat('/').concat(newPassword).concat('/'), {})
        .then(response => {
            this.errorCustomer =''
            location.reload()
        })
        .catch(e=> {
            var errorMsg = e.response.data.message
            console.log(errorMsg)
            this.errorEmail = errorMsg
        })
    
        },
        }
        
        }
    
    
