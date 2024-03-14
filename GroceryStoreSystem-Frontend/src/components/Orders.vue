<template>
    <div class = "main">
        <body>
            <h1>Order Book for [Grocery Store Name]</h1>
            <div class="PendingOrderBox">
                <!-- Inspiration from w3school's form input: https://www.w3schools.com/js/js_input_examples.asp -->
                <h2 style="text-align:left"> <b>Pending Order - [date+time placed] - ID: [orderId]</b> </h2>
                <table>
                    <tr>
                        <td><b>User:</b> [username], <b>Email:</b> [email], <b>Pickup/Delivery:</b> [], <b>Final Balance:</b> [price]</td>
                    </tr>
                    <tr>
                        <td style = "font-size: large; text-align: center;"><i><b>Item:</b> [groceryItemName], <b>Quantity:</b> [int]</i></td>
                    </tr>
                    <tr>
                        <td style = "font-size: large; text-align: center;"><i><b>Item:</b> [groceryItemName], <b>Quantity:</b> [int]</i></td>
                    </tr>
                    <tr>
                        <td style = "font-size: large; text-align: center;"><i><b>Item:</b> [groceryItemName], <b>Quantity:</b> [int]</i></td>
                    </tr>
                    <tr>
                        <td style = "font-size: large; text-align: center;"><i><b>Item:</b> [groceryItemName], <b>Quantity:</b> [int]</i></td>
                    </tr>
                </table>
                
                <p></p>
                <p></p>
                
                <p>
                <table>
                        <tr>
                                <td><button type="button"> Cancel Order </button></td>
                                <td><button type="button">Mark as Completed</button></td>
                        </tr>
                </table>
                </p>
             </div>
            <div class="CompletedOrderBox">
                <!-- Inspiration from w3school's form input: https://www.w3schools.com/js/js_input_examples.asp -->
                <h2 style="text-align:left"> Completed Order - [date+time completed] - ID: [orderId] </h2>
                <table>
                    <tr>
                        <td><b>User:</b> [username], <b>Email:</b> [email], <b>Pickup/Delivery:</b> [], <b>Final Balance:</b> [price]</td>
                    </tr>
                    <tr>
                        <td style = "font-size: large; text-align: center;"><i><b>Item:</b> [groceryItemName], <b>Quantity:</b> [int]</i></td>
                    </tr>
                    <tr>
                        <td style = "font-size: large; text-align: center;"><i><b>Item:</b> [groceryItemName], <b>Quantity:</b> [int]</i></td>
                    </tr>
                    <tr>
                        <td style = "font-size: large; text-align: center;"><i><b>Item:</b> [groceryItemName], <b>Quantity:</b> [int]</i></td>
                    </tr>
                    <tr>
                        <td style = "font-size: large; text-align: center;"><i><b>Item:</b> [groceryItemName], <b>Quantity:</b> [int]</i></td>
                    </tr>
                </table>
             </div>
             <div class="CancelledOrderBox">
                <!-- Inspiration from w3school's form input: https://www.w3schools.com/js/js_input_examples.asp -->
                <h2 style="text-align:left"> Cancelled Order - [date+time cancelled] - ID: [orderId] </h2>
                <table>
                    <tr>
                        <td><b>User:</b> [username], <b>Email:</b> [email], <b>Pickup/Delivery:</b> [], <b>Final Balance:</b> [price]</td>
                    </tr>
                    <tr>
                        <td style = "font-size: large; text-align: center; text-decoration-line: line-through;"><i><b>Item:</b> [groceryItemName], <b>Quantity:</b> [int]</i></td>
                    </tr>
                    <tr>
                        <td style = "font-size: large; text-align: center; text-decoration-line: line-through;"><i><b>Item:</b> [groceryItemName], <b>Quantity:</b> [int]</i></td>
                    </tr>
                    <tr>
                        <td style = "font-size: large; text-align: center; text-decoration-line: line-through;"><i><b>Item:</b> [groceryItemName], <b>Quantity:</b> [int]</i></td>
                    </tr>
                    <tr>
                        <td style = "font-size: large; text-align: center; text-decoration-line: line-through;"><i><b>Item:</b> [groceryItemName], <b>Quantity:</b> [int]</i></td>
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
        position:relative;
        z-index: 1;
    }
    .PendingOrderBox {
        background-color: rgb(220, 207, 204);
        outline-color: rgb(255, 68, 0);
        outline-style: double;
        align-self: center;
        position:relative;
        max-width: 100%;
        max-height: fit-content;
        padding-bottom: 1px;
        padding-top: 10px;
        left: 0%;
        right: 0%;
        bottom: 5%;
        top: 5%;
        border-width: 100px;
        align-content: center;
    }
    .PendingOrderBox button {
        display: block;
    }
    .PendingOrderBox h2 {
        color: #000;
        text-align: center;
        font-size: larger;
        text-decoration-line: underline;
    }
    .PendingOrderBox h3 {
        color: #000;
        text-align: center;
    }
    .PendingOrderBox td {
        color: #000;
        text-align: left;
        text-indent: 10px;
        font-size: x-large;
        white-space: nowrap;
    }

    .PendingOrderBox table {
        color: #000;
        text-align: center;
        align-content: center;
        align-items: center;
        font-size: x-large;
        width: 100%;
    }
    .PendingOrderBox p {
        position:relative;
        top: 5%;
        left: 5%;
    }
    .PendingOrderBox button {
        font-size: x-large;
        color: white;
        padding: 10px;
        position:relative;
        left:30%;
        background-color: orange;
    }
    .CompletedOrderBox {
        background-color: rgb(231, 231, 231);
        outline-color: rgb(124, 124, 124);
        outline-style: double;
        align-self: center;
        position:relative;
        max-width: 100%;
        max-height: fit-content;
        padding-bottom: 10px;
        padding-top: 10px;
        left: 0%;
        right: 0%;
        bottom: 10%;
        top: 5%;
        align-content: center;
    }
    .CompletedOrderBox button {
        display: block;
    }
    .CompletedOrderBox h2 {
        color: #000;
        text-align: center;
        font-size: larger;
    }
    .CompletedOrderBox h3 {
        color: #000;
        text-align: center;
    }
    .CompletedOrderBox td {
        color: #000;
        text-align: left;
        text-indent: 10px;
        font-size: x-large;
        white-space: nowrap;
    }

    .CompletedOrderBox table {
        color: #000;
        text-align: center;
        align-content: center;
        align-items: center;
        font-size: x-large;
        width: 100%;
    }
    .CompletedOrderBox p {
        position:relative;
        top: 5%;
        left: 5%;
    }
    .CancelledOrderBox {
        background-color: rgb(214, 213, 213);
        outline-color: rgb(57, 57, 57);
        outline-style: double;
        align-self: center;
        position:relative;
        max-width: 100%;
        max-height: fit-content;
        padding-bottom: 10px;
        padding-top: 10px;
        left: 0%;
        right: 0%;
        bottom: 10%;
        top: 5%;
        align-content: center;
    }
    .CancelledOrderBox button {
        display: block;
    }
    .CancelledOrderBox h2 {
        color: #000;
        text-align: center;
        font-size: larger;
    }
    .CancelledOrderBox h3 {
        color: #000;
        text-align: center;
    }
    .CancelledOrderBox td {
        color: #000;
        text-align: left;
        text-indent: 10px;
        font-size: x-large;
        white-space: nowrap;
    }

    .CancelledOrderBox table {
        color: #000;
        text-align: center;
        align-content: center;
        align-items: center;
        font-size: x-large;
        width: 100%;
    }
    .CancelledOrderBox p {
        position:relative;
        top: 5%;
        left: 5%;
    }
</style>

