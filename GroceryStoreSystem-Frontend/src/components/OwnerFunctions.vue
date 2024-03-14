<template>
    <div class = "main">
        <body>
            <h1>Welcome to Owner Functions!</h1>
            <div class="OwnerBox">
                <!-- Inspiration from w3school's form input: https://www.w3schools.com/js/js_input_examples.asp -->
                <br>
                <br>
                <h2 style="text-align:center"> Owner Functions Menu </h2>
                <br>
                <div class="table-responsive">
                <table>
                

                     <tr>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
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
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                    </tr>
                    <tr>
                        <td><a href="#/manageinventory"><button>Manage Inventory </button></a></td>
                        <td> <a href="#/manageEmployees"><button>Manage Employees</button></a></td>
                        <td><a href="#/updateStore"><button>Edit Store</button></a></td>
                        <td><a href="#/createcustomeracc"><button>Create Customer Account</button></a></td>
                        <td><a href="#/blacklist"><button>Blacklist</button></a></td>
                        <td><button>View Reports</button></td>
                        <td><a href="#/orders"><button>View Order Book</button></a></td>
                        <td></td>
                    </tr>
                    
                    <tr>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                        <td><br></td>
                    </tr>
                     
            </table>
            </div>
                
              
            </div>

        </body>
    </div>

</template>

<script>
</script>

<style>

    .h1 {
        color: #000;
        text-align: center;
        z-index: 5;
        position:relative;
    }
    .OwnerBox {
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
     .OwnerBox table {
        color: #000;
        text-align: center;
        align-content: center;
        align-items: center;
        font-size: x-large;
        width: 100%;
        position:relative;
        padding-bottom: 56.25%;
        height:0;
    }

     .OwnerBox button {
        position: relative;
        
        top:0; 
        left:0;
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
    
    .OwnerBox button:hover{
        background-color: #4CAF50;
        color:white;
    }



    .OwnerBox h2 {
        color: #000;
        text-align: center;
        font-size: extra-large;
        padding-top: 10px;
        padding-bottom: 5px;
        text-decoration-line: underline;
    }

    .OwnerBox h3 {
        color: #000;
        text-align: center;
        padding-bottom: 5px;
    }
     .OwnerBox h4 {
        color: #000;
        font-size:medium;
        text-align: center;
        padding-bottom: 5px;
    }
    .OwnerBox td {
        color: #000;
        text-align: left;
        font-size: x-large;
        padding-left: 70px;
    }

    .OwnerBox td1 {
        color: #000;
        text-align: center;
        font-size: x-large;
        
    }

   
       
    .OwnerBox p {
        position:relative;
        top: 5%;
        left: 5%;
    }
    
</style>

