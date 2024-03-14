import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})


  export default {
    name: 'employeeCreation',
    data () {
      return {
        employees: [],
        newEmployee: '',
        errorPerson: '',
        errorSchedule:'',
        response: [],
        edit: null
      }
    },
    created: function () {
      // initializing employees from backend
      AXIOS.get('/employee/getAll')
      .then(response => {
        // JSON responses are automatically parsed.
        this.employees = response.data
      })
      .catch(e => {
        this.errorPerson = e
      })


      },

      methods: {
        createEmployee: function (employeeName, employeeEmail, employeePassword) {
          // Create a new employee and add it to the list of employees

            AXIOS.post('/employee/create/'.concat(employeeName).concat('/').concat(employeeEmail).concat('/').concat(employeePassword).concat('/'), {}, {})
            .then(response => {
            // JSON responses are automatically parsed.
              this.employees.push(response.data)
              this.errorPerson = ''
              this.newEmployee = ''
            })
            .catch(e => {
              var errorMsg = e.response.data.message
              console.log(errorMsg)
              this.errorPerson = e.response.data.message
            })
        },

        fireEmployee: function(employeeId){
          AXIOS.delete('/employee/delete/'.concat(employeeId).concat('/'), {}, {})
            .then(response => {
            // JSON responses are automatically parsed.
              this.errorPerson = ''
              location.reload()
            })
            .catch(e => {
              var errorMsg = e.response.data.message
              console.log(errorMsg)
              this.errorPerson = errorMsg
            })
        },

        createSchedule: function(employeeId,startTime,endTime,workDays){
          AXIOS.post('/employeeSchedule/create/'.concat(employeeId).concat('/').concat(startTime).concat('/').concat(endTime).concat('/').concat(workDays).concat('/'), {}, {})
            .then(response => {
            // JSON responses are automatically parsed.
              this.errorPerson = ''
              location.reload()
            })
            .catch(e => {
              var errorMsg = e.response.data.message
              console.log(errorMsg)
              this.errorSchedule = errorMsg
            })
        },

        editSchedule: function(employeeId, newStartTime,newEndTime,newWorkdays){
          AXIOS.put('/employeeSchedule/updateByEmployeeId/'.concat(employeeId).concat('/').concat(newStartTime).concat('/').concat(newEndTime).concat('/').concat(newWorkdays).concat('/'), {})
            .then(response => {
            // JSON responses are automatically parsed.
              this.errorPerson = ''
              location.reload()
            })
            .catch(e => {
              var errorMsg = e.response.data.message
              console.log(errorMsg)
              this.errorSchedule = errorMsg
            })
        },

        displayEditBox: function(id) {
            this.edit = id
        },

        hideEditBox: function() {
          this.edit = null
      }
      }
  }