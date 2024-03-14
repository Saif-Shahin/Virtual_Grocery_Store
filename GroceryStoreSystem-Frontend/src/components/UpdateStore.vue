<template>
    <div class = "main">
        <body>
            <h1>Welcome to Update Store!</h1>
            <div class="StoreBox" id="updatingStore">
                <!-- Inspiration from w3school's form input: https://www.w3schools.com/js/js_input_examples.asp -->
                <h2> Update Store </h2>
                <form>
                    <p> New Name: <input type="text" placeholder="name" v-model="storeName"> </p>

                    <button type="button" @click="updateStoreName(storeName)"> Update Store Name </button>
                    <p></p>
                    <p v-if="error !== null">{{ error }}</p>
                    <p class="Confirmation" v-if="confirmation !== null">Store Name Updated!</p>
                </form>
            </div>

        </body>
    </div>

</template>

<script src="./updateForStore.js">
</script>

<style>

    .h1 {
        color: #000;
        text-align: center;
    }
    .StoreBox {
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
    .StoreBox h2 {
        color: #000;
        text-align: center;
    }

    .StoreBox form {
        position: relative;
        text-align: center;
    }

    .StoreBox form .Footnote {
        font-size: x-small;
        color:blue;
    }

    .Confirmation {
        font-size: medium;
        color: green;
    }
</style>

