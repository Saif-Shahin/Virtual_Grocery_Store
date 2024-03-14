<template>
    <div class = "main">
        <body id='itemCreating'>
            <h1>Welcome to Inventory Management!</h1>
            <div class="InventoryBox">
                <!-- Inspiration from w3school's form input: https://www.w3schools.com/js/js_input_examples.asp -->
                <h2 style="text-align:center;margin-bottom=2%;"> Manage Inventory</h2>
                <table>
                    <tr>
                        <td>Item Name</td>
                        <td>PickupOnly</td>
                        <td>Price</td>
                        <td></td>
                        <td></td>
                    </tr>


                    <tr v-for="item in inventory" :key = item.name>
                        <td> {{item.name}} </td>
                        <td> {{item.pickupOnly}}</td>
                        <td> {{item.price}}</td>
                        <td> <button type="button" @click="removeItem(item.name)">Remove Item</button></td>    
                        <td><button type="button">Edit Item</button></td>
                        
                    </tr>
                        
                        
                </table>

                <div class="NewInventoryBox">
                <h5> Add New Item: </h5>
                <label>Name</label>
                <input type="text" v-model="itemName" placeholder="Bananas">
                <label>For pick-up only?</label>
                <input type="text" v-model="pus" placeholder="False">
                <label>Price</label>
                <input type="text" v-model="itemPrice" placeholder="500 = $5.00">


                <button type="button" @click="addItem(itemName,itemPrice,pus)">Add Item</button>
                </div>
            </div>

        </body>
    </div>

</template>

<script src="./itemCreate.js">

</script>

<style>

    .h1 {
        color: #000;
        text-align: center;
    }
    .InventoryBox {
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
    .InventoryBox button {
        display: block;
    }
    .InventoryBox h2 {
        color: #000;
        text-align: center;
        padding-bottom: 5%;

    }
    .InventoryBox table {
        -ms-transform: translate(50%, -50%);
        transform: translate(30%, -50%);
    }

    .NewInventoryBox {
        padding: 10px;
        margin-top: 5%;
        -ms-transform: translate(10%, -50%);
        transform: translate(10%, -50%);
    }

    .InventoryBox tr {
        padding: 5%;
        width: fit-content;
    }
    .InventoryBox td {
        margin-left: 5px;
        margin-right: 5px;
        padding: 10px;
    }

    .InventoryBox form {
        position: relative;
        text-align: center;
    }

    .InventoryBox form .Footnote {
        font-size: x-small;
        color:blue;
    }
</style>

