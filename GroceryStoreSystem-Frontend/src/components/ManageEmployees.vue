<template>
    <div class = "main">
        <body>
            <h1>Welcome to Employee Management!</h1>
            <div class="EmployeeBox">
                <!-- Inspiration from w3school's form input: https://www.w3schools.com/js/js_input_examples.asp -->
                <h2 style="text-align:center;margin-bottom=2%;"> Manage Employees</h2>
                <table>
                    <div>
                    <tr>
                        <td>Employee ID</td>
                        <td>Employee Name</td>
                        <td>Email</td>
                        <td>Workdays</td>
                        <td>Start Time</td>
                        <td>End Time</td>
                    </tr>
                    </div>
                    
                    <div id="employeeCreation">
                        <tr v-for="employee in employees" :key=employee.email>
                            <td> {{ employee.employeeId }}</td>
                            <td> {{ employee.name }}</td>
                            <td> {{ employee.email }}</td>
                            <div v-if="employee.schedule !== null">
                                <td> {{ employee.schedule.workDays }} </td>
                                <td> {{ employee.schedule.startTime }} </td>
                                <td> {{ employee.schedule.endTime }}</td> 
                                <td v-if="edit === null" @click="displayEditBox(employee.employeeId)"> <button>Edit Schedule</button></td>
                                <td v-if="edit === employee.employeeId" @click="hideEditBox()"> <button>Edit Schedule</button></td>
                            
                                    <div class="createEditSchedule" v-if="edit === employee.employeeId">
                                    <td> Edit Schedule: </td>
                                    <label for="Start Time">Name</label>
                                    <input type="text" v-model="newStart" placeholder="HH:MM:SS" name ="start">
                                    <label for="End Time">Email</label>
                                    <input type="text" v-model="newEnd" placeholder="HH:MM:SS" name ="end">
                                    <label for="Work Days">Password</label>
                                    <input type="text" v-model="newWork" placeholder="Monday,Tuesday,...">
                                    <button type="button" @click="editSchedule(employee.employeeId, newStart, newEnd, newWork)">Update</button>

                                    <p class="ErrorMessage" v-if="errorSchedule">Error message:{{errorSchedule}}</p>
                                    </div>
                            
                            
                            </div>

                                

                            <div v-if="employee.schedule === null"> 
                                <td>null</td>
                                <td>null</td>
                                <td>null</td>
                                <td v-if="edit === null" @click="displayEditBox(employee.employeeId)"> <button>Create Schedule</button></td>
                                <td v-if="edit === employee.employeeId" @click="hideEditBox()"> <button>Create Schedule</button></td> 
                                   
                                    <div class="createEditSchedule" v-if="edit === employee.employeeId">
                                        <td> Create Schedule: </td>
                                        <label for="Start Time">Start Time</label>
                                        <input type="text" v-model="newStart" placeholder="HH:MM:SS" name ="start">
                                        <label for="End Time">End Time</label>
                                        <input type="text" v-model="newEnd" placeholder="HH:MM:SS" name ="end">
                                        <label for="Work Days">Work Days</label>
                                        <input type="text" v-model="newWork" placeholder="Monday,Tuesday,...">
                                        <button type="button" @click="createSchedule(employee.employeeId, newStart, newEnd,newWork)">Update</button>

                                        <p class="ErrorMessage" v-if="errorSchedule">Error message:{{errorSchedule}}</p>
                                    </div>


                                
                            </div>
                            
                            <td> <button type="button" @click="fireEmployee(employee.employeeId)">Fire Employee</button> </td>
                        </tr>
                    </div>
                    
                </table>

                <div class="NewEmployeeBox">
                <h5> Create New Employee: </h5>
                <label for="empName">Name</label>
                <input type="text" v-model="newEmpName" placeholder="Employee Name" id="empName" name ="name">
                <label for="empEmail">Email</label>
                <input type="text" v-model="newEmpEmail" placeholder="Employee Email" id="empEmail" name ="email">
                <label for="empPass">Password</label>
                <input type="text" v-model="newEmpPassword" placeholder="Employee Password" id="empPass">
                <button type="button" @click="createEmployee(newEmpName, newEmpEmail, newEmpPassword)">Add Employee</button>
                </div>

                <p class="ErrorMessage" v-if="errorPerson">Error message:{{errorPerson}}</p>
            </div>

        </body>
    </div>

</template>

<script src="./employeeHandler.js">
</script>

<style>

    .h1 {
        color: #000;
        text-align: center;
    }
    .EmployeeBox {
        background-color: rgb(231, 231, 231);
        outline-color: coral;
        outline-style: double;
        align-self: center;
        position:relative;
        max-width: 90%;
        max-height: fit-content;
        left: 5%;
        right: 5%;
        top: 5%;
        align-content: center;
        padding-block: 50px;
        
        
    }
    .EmployeeBox button {
        display: block;
        background-color: orange;
        color: white;
}
    .EmployeeBox h2 {
        color: #000;
        text-align: center;
        padding-bottom: 5%;

    }
    .EmployeeBox table {
        position: relative;
        left: 5%;
    }

    .NewEmployeeBox {
        padding: 10px;
        margin-top: 5%;
        -ms-transform: translate(10%, -50%);
        transform: translate(10%, -50%);
    }

    .createEditSchedule {
        padding: 10px;
        -ms-transform: translate(-20%, -10%);
        transform: translate(-20%, -10%);
    }

    .EmployeeBox tr {
        padding: 5%;
        width: fit-content;
    }
    .EmployeeBox td {
        /*margin-left: 5px;*/
        margin-right: 5px;
        padding: 10px;
    }

    .EmployeeBox form {
        position: relative;
        text-align: center;
    }

    .EmployeeBox form .Footnote {
        font-size: x-small;
        color:blue;
    }

    .ErrorMessage {
        font-size:medium;
        color:crimson;
        -ms-transform: translate(50%, -50%);
        transform: translate(40%, -50%);
    }
</style>

