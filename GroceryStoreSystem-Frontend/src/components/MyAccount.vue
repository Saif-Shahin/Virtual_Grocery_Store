<template>
    <div class = "main">
        <body id = "accountHandling">
            <h1>{{  }}'s Account!</h1>
            <div class="UserInfoBox"  @mousemove="getUser()">
                <!--  Inspiration from w3school's form input: https://www.w3schools.com/js/js_input_examples.asp -->
                <br>
                <br>
                <h2 style="text-align:center"> <b>User Information</b> </h2>
                <br>
                <div class="table-responsive">
                <table>
                    <tr>
                        <div v-if="user !== null">
                            <td><br></td>
                            <td><br></td>
                            <td><b>Name:</b> {{ user.name }}</td>
                            <td><b>Email:</b> {{ user.email }}</td>
                        </div>
                        <div v-else>
                            <td><br></td>
                            <td><br></td>
                            <td><b>Name:</b> [ name ]</td>
                            <td><b>Email:</b> [ email ]</td>
                        </div>
                    </tr>
                    <tr>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                    </tr>
               
              
                    <tr>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                    </tr>
                   
                    <tr>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                    </tr>
                    <tr>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                    </tr>
                    <tr><td><br></td>
                        <td><a href="#/cart"><button > View Cart </button></a></td>
                        <td><br></td>
                        <td><a href="#/account/orders"><button>View Orders</button></a></td><br>
                    </tr>
                    
                   
                </table>
                </div>
              
                
                
                
                
                
                
            </div>
            <div class="ManageAccountBox">
                <!-- Inspiration from w3school's form input: https://www.w3schools.com/js/js_input_examples.asp -->
                <br>
                <br>
                <h2 style="text-align:center"> <b>Manage Your Account</b> </h2>
                <br>
                <div class="table-responsive">
                <table>
                    <tr>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                    </tr>
                    <tr>
                        <td><p> New Name: <input type="text" v-model="name"> </p></td>
                        <td><p> New Email: <input type="text" v-model="email"> </p></td>
                        <td><p> New Password: <input type="text" v-model="password"> </p></td>
                        
                    </tr>
                    
                   
                    <tr>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                    </tr>
                    <tr>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                    </tr>
                     <tr>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                    </tr>
                     <tr>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                    </tr>
                     <tr>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                    </tr>
                    <tr>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                    </tr>
                    <tr>
                        
                        <td><button1 @click="updateAccInfo(user.email,name, email, password)">Update User Information</button1></td>
                        <td></td>
                        <td><button1 @click="logout()">Log Out</button1></td>
                    </tr>
                  
                
                   
                </table>
                </div>
               
            
                
            </div>
        </body>
    </div>

</template>

<script src="./myAccountHandler.js">
</script>

<style>

    .h1 {
        color: #000;
        text-align: center;
        z-index: 5;
        position:relative;
    }
    .UserInfoBox {
         background: rgba(255,255,255,0.8);
        background-color: rose;
        outline-color: coral;
        outline-style: double;
        align-self: center;
        position:relative;
        max-width: 90%;
        max-height: fit-content;
        padding-bottom: 5%;
        left: 5%;
        right: 5%;
        top: 5%;
        align-content: center;
    }
    
    .UserInfoBox h2 {
        color: #000;
        text-align: center;
        font-size: extra-large;
        padding-top: 10px;
        padding-bottom: 5px;
        text-decoration-line: underline;
    }
    .UserInfoBox h3 {
        color: #000;
        text-align: center;
        padding-bottom: 5px;
    }
    .UserInfoBox td {
        color: #000;
        text-align: center;
        font-size: x-large;
    }

    .UserInfoBox table {
        color: #000;
        text-align: center;
        align-content: center;
        align-items: center;
        font-size: x-large;
        width: 100%;
    }
    .UserInfoBox p {
        position:relative;
        top: 5%;
        left: 5%;
    }
   .UserInfoBox button {
        position: relative;
        
        top:0; 
        right:90%;
        widht:100%;
        height:100%;
        display: inline-block;
        
        background-color: #FFD580;
     
        color: #000000;
        text-align: center;
        font-size: 20px;
        
        padding: 10%;
     
        
        width: auto;
        border:1px solid gray;
        border-radius:7%;
        float:right;
        font-size: 20px;
        font-size:0.875;
       
       
      
        transition: all 0.5s;
        cursor: pointer;
        margin: 5px;
       
    
    }
    .UserInfoBox button:hover{
        background-color: #4CAF50;
        color:white;
    }
    .ManageAccountBox {
        background: rgba(255,255,255,0.8);
        background-color: rose;
        outline-color: coral;
        outline-style: double;
        align-self: center;
        position:relative;
        max-width: 90%;
        max-height: 50%;
        padding-bottom: 5%;
        left: 5%;
        right: 5%;
        top: 5%;
        bottom: 10%;
        align-content: center;
    }
    .ManageAccountBox button1 {
        position: relative;
        
        top:0; 
        right:10%;
        widht:100%;
        height:100%;
        display: inline-block;
        
        background-color: #FFD580;
     
        color: #000000;
        text-align: center;
        font-size: 20px;
        
        padding: 5%;
     
        
        width: auto;
        border:1px solid gray;
        border-radius:7%;
        float:right;
        font-size: 20px;
        font-size:0.875;
       
       
      
        transition: all 0.5s;
        cursor: pointer;
        margin: 5px;
       
       
    
    }
    .ManageAccountBox button1:hover{
        background-color: #4CAF50;
        color:white;
    }
    .ManageAccountBox h3 {
        color: #000;
        text-align: center;
        padding-bottom: 5px;
    }

    .ManageAccountBox form {
        position: relative;
        text-align: center;
    }
    .ManageAccountBox table {
        color: #000;
        text-align: center;
        padding-bottom: 5px;
        font-size: large;
        text-indent: 0px;
        width: 100%;
        border-spacing: 10px;
    }

    .ManageAccountBox form .Footnote {
        font-size: x-small;
        color:blue;
    }
    .ManageAccountBox button {
        font-size: medium;
        color: white;
        padding: 6px;
        position:relative;
        align-self: center;
        left:5%;
        background-color: orange;
    }
    .ManageAccountBox h2 {
        color: #000;
        text-align: center;
        font-size: extra-large;
        padding-top: 10px;
        padding-bottom: 5px;
        text-decoration-line: underline;
    }
</style>

