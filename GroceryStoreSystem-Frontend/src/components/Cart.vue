<template>
    <div class = "main" id='cartCreation' @mouseover="getUser()">
        <!-- Inspiration from w3schools's navigation bar: https://www.w3schools.com/css/css_navbar.asp-->
    <h1>Your Cart</h1>

        
        <body @mouseover="getCart(user.email)">
            <h1>Cart!</h1>
            
            <div class="CartBox">
                <!-- Inspiration from w3school's form input: https://www.w3schools.com/js/js_input_examples.asp -->
                <br>
                <br>
                <h2 style="text-align:center"> <b>My Cart</b> </h2>
                <br>
                <div>
                <div class="table-responsive">
                <table>
                   

                    <div v-if="cart === null" class="table-responsive">
                     <tr>
                        <td><b>Item</b> </td>
                        <td> <br> </td>
                        <td> <br> </td>
                        <td><b>Price per unit</b></td>
                        <td> <br> </td>
                        <td> <br> </td>
                        <td><b>Quantity</b> </td>
                        <td> <br> </td>
                        <td><b> Price </b></td>             
                        <td><br> </td>
                    </tr>
                        <tr>    
                            <td>item name</td>
                            <td> <br> </td>
                            <td> <br> </td>
                            <td>0.00$</td>
                            <td> <br> </td>
                            <td> <br> </td>
                            <td><input type="number" id="quantity" name="quantity"  min="0" max="99"> </td>
                            <td> <br> </td>                           
                            <td> 0.00$ </td>     
                            <td><input type="submit" value="Update Changes" size="5"></td>
                        </tr>
                    </div>
                        
                    <div v-else>
                        <tr v-for="item in items" :key="item.name">
                            <td> {{item.name}}</td>
                            <td> <br> </td>
                            <td> <br> </td>
                            <td> {{item.price}}$ </td>
                            <td> <br> </td>
                            <td> <br> </td>
                            <td> <input type="number" id="quantity" name="quantity"  min="0" max="99"> </td>
                            <td> <br> </td>
                            <td> total price of this item</td>
                            <td> <input type="submit" value="Update Changes" size="5"> </td>
                        </tr>
                        
                    </div>
                        
                        <tr> 
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>  </td>
                       
                        </tr>

                        <tr>
                            <td> <br></td>
                            <td> <br></td>
                            <td> <br></td>
                            <td> <br></td>
                        </tr>
                         <tr>
                            <td> <br></td>
                            <td> <br></td>
                            <td> <br></td>
                            <td> <br></td>
                        </tr>
                         <tr>
                            <td> <br></td>
                            <td> <br></td>
                            <td> <br></td>
                            <td> <br></td>
                        </tr>
                        <tr>
                            
                            <td><a href="#/Checkout"><button1>Go To Checkout </button1></a> </td>
                            <td> </td>
                            <td>  </td>
                            <td>  </td>
                        </tr>
                </table>
                </div>
            </div>   
                
            </div>
           
        </body>
    </div>
    

</template>

<script src="./myCart.js">
</script>

<style>

    .h1 {
        color: #000;
        text-align: center;
        z-index: 5;
        position:relative;
    }
    .CartBox {
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
    
     .CartBox button1 {
        position: relative;
        
        top:0; 
        right:10%;
        width:50%;
        height:50%;
        display: inline-block;
        
        background-color: #FF0000;
     
        color: #000000;
        text-align: center;
        font-size: 20px;
        
        padding: 2%;
     
        
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
    .CartBox button1:hover{
        background-color: #4CAF50;
        color:white;
    }



    .CartBox h2 {
        color: #000;
        text-align: center;
        font-size: extra-large;
        padding-top: 10px;
        padding-bottom: 5px;
        text-decoration-line: underline;
    }

    .CartBox h3 {
        color: #000;
        text-align: center;
        padding-bottom: 5px;
    }
     .CartBox h4 {
        color: #000;
        font-size:medium;
        text-align: center;
        padding-bottom: 5px;
    }
    .CartBox td {
        color: #000;
        text-align: left;
        font-size: x-large;
        padding-left: 70px;
    }

    .CartBox td1 {
        color: #000;
        text-align: center;
        font-size: x-large;
        
    }

    .CartBox table {
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
       
    .CartBox p {
        position:relative;
        top: 5%;
        left: 5%;
    }
    
</style>
