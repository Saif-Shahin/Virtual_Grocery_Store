<template>
    <div class = "main">    
        <body id = "loginHandling">
            <h1>Welcome to Login!</h1>
            <div class="LoginBox">
                <!-- Inspiration from w3school's form input: https://www.w3schools.com/js/js_input_examples.asp -->
                <br>
                <br>
                <h2> Login </h2>
                <br>
                <form>
                    <p> Email: <input type="text" v-model="userEmail" placeholder="Your email..">> </p>
                    <p> Password: <input type="password" v-model="userPassword" placeholder="Your password..">> </p>
                    <a href="#/home"><button @click="loginUser(userEmail, userPassword)"> Log in </button></a>
                    <p></p> </form>
                    <a href="#/register" class="Footnote">Register Here!</a>
                    <a href="#/home" class="Footnote">Or, continue as guest.</a>
                    <p  v-if="loginError">Error: {{ loginError }}</p>

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
    }
    .LoginBox {
        background: rgba(255,255,255,0.8);
        background-color: rose;
        outline-color: coral;
        outline-style: double;
        width: 400px;
        height: 250px;
        align-content: center;
        align-self: center;
        position:relative;
        left: 35%;
        top: 20px;
    }
    .LoginBox h2 {
        color: #000;
        text-align: center;
    }

    .LoginBox form {
        position: relative;
        text-align: center;
    }

    .LoginBox form .Footnote {
        font-size: x-small;
        color:blue;
    }
</style>

