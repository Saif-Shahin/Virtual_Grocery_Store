<template>
    
    <div class = "main">
        <body>
        <h1>Order Confirmation</h1>
        
            <div class="ThankYouBox">
                <!-- Inspiration from w3school's form input: https://www.w3schools.com/js/js_input_examples.asp -->
                <br>
                <br>
                <h2 style="text-align:center"> Order Confirmation </h2>
                <table>
                
                         <tr>    
                            <td></td>
                            <td></td>
                            <td><b> Thank you for your purchase!</b></td>
                            <td></td>
                                      
                            <td></td>
                        </tr>
                        <tr>    
                            <td></td>
                            <td></td>
                            <td>Your order number have been sent to your email address.</td>
                            <td></td>
                                      
                            <td></td>
                        </tr>
                        
                </table>
             
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
    .ThankYouBox {
        background-color: rgb(240, 239, 239);
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

    .ThankYouBox h2 {
        color: #000;
        text-align: center;
        font-size: extra-large;
        padding-top: 10px;
        padding-bottom: 5px;
        text-decoration-line: underline;
    }
    
    .ThankYouBox td {
        color: #000;
        text-align: left;
        font-size: x-large;
        padding-left: 70px;
    }

    .ThankYouBox table {
        color: #000;
        text-align: center;
        align-content: center;
        align-items: center;
        font-size: x-large;
        width: 100%;
    }
       

    
</style>

