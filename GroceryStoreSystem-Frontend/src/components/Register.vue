<template>
    <div class = "main">
        <body>
            <h1>Welcome to Register!</h1>
            <div class="RegisterBox" id="accountCreation">
                <!-- Inspiration from w3school's form input: https://www.w3schools.com/js/js_input_examples.asp -->
                <h2> Register New Account </h2>
                <form>
                    <p> Name: <input type="text" placeholder = "name" v-model="userName"> </p>
                    <p> Email: <input type="text" placeholder = "email" v-model="userEmail"> </p>
                    <p> Password: <input type="password" placeholder = "password" v-model="userPassword"> </p>

                    <button type="button" @click="makeCustomer(userName, userEmail, userPassword)"> Create Customer Account </button>
                    <button type="button" @click="makeOwner(userName,userEmail,userPassword)"> Create Owner Account </button>
                    <p></p>
                    <p v-if="errorUser !== null">{{ errorUser }}</p>
                    <p class="Confirmation" v-if="confirmCustomer !== null">Custmer Account created!</p>
                    <p class="Confirmation" v-if="confirmOwner !== null">Owner Account created!</p>
                </form>
            </div>

        </body>
    </div>

</template>

<script src="./registration.js">
</script>

<style>

    .h1 {
        color: #000;
        text-align: center;
    }
    .RegisterBox {
        background-color: rgb(231, 231, 231);
        outline-color: coral;
        outline-style: double;
        align-self: center;
        position:relative;
        max-width: 600px;
        max-height: fit-content;
        left: 30%;
        top: 20px;
    }
    .RegisterBox h2 {
        color: #000;
        text-align: center;
    }

    .RegisterBox form {
        position: relative;
        text-align: center;
    }

    .RegisterBox form .Footnote {
        font-size: x-small;
        color:blue;
    }

    .Confirmation {
        font-size: medium;
        color: green;
    }
</style>

