<template>
    <div class = "main" id='customerCreation'>
        <body>
            <h1>Welcome to Create Customer Account!</h1>
            <div class="CustomerBox">
                <!-- Inspiration from w3school's form input: https://www.w3schools.com/js/js_input_examples.asp -->
                <h2> Register New Customer Account </h2>
                <form>
                    <p> Customer Name: <input type="text" v-model="name"> </p>
                    <p> Customer Email: <input type="text" v-model="email"> </p>
                    <p> Customer Password: <input type="text" v-model="password"> </p>

                    <button type="button" @click="makeCustomer(name,email,password)"> Create Customer Account </button>
                    <p></p>
                    <p v-if="errorUser"> Error: {{ errorUser }}</p>
                    <p v-if="confirmCustomer"> Customer Account Created! </p>
                </form>
            </div>

        </body>
    </div>

</template>

<script src="./customerRegistration.js">
</script>

<style>

    .h1 {
        color: #000;
        text-align: center;
    }
    .CustomerBox {
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
    .CustomerBox h2 {
        color: #000;
        text-align: center;
    }

    .CustomerBox form {
        position: relative;
        text-align: center;
    }

    .CustomerBox form .Footnote {
        font-size: x-small;
        color:blue;
    }
</style>

