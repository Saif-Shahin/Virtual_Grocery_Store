<template>
    <div class = "main">
        <body id="banHammer">
            <h1>Welcome to Employee Management!</h1>
            <div class="BlacklistBox">
                <!-- Inspiration from w3school's form input: https://www.w3schools.com/js/js_input_examples.asp -->
                <h2 style="text-align:center;margin-bottom=2%;"> Blacklist</h2>
                <table>
                    <tr>
                        <td>User Email</td>
                        <td></td>
                    </tr>
                        
                    <tr v-for="email in banlist" :key=email.message>
                        <td> {{email}}</td>
                        <td><button type="button" @click="unbanUser(email)">Unban</button></td>
                    </tr>


                </table>

                <div class="BlacklistBox">
                <h5> Ban User: </h5>
                <label>Email</label>
                <input type="text" v-model="useremail" placeholder="email@mail.com">
                <button type="button" @click="banUser(useremail)">Ban</button>
                </div>

                <p v-if="error !== null">{{error}}</p>
            </div>

        </body>
    </div>

</template>

<script src="./banlist.js">
</script>

<style>

    .h1 {
        color: #000;
        text-align: center;
    }
    .BlacklistBox {
        background-color: rgb(231, 231, 231);
        outline-color: coral;
        outline-style: double;
        align-self: center;
        position:relative;
        max-width: 60%;
        max-height: fit-content;
        
        right: 5%;
        top: 5%;
        align-content: center;
        
        
    }
    .BlacklistBox button {
        display: block;
    }
    .BlacklistBox h2 {
        color: #000;
        text-align: center;
        padding-bottom: 5%;

    }
    .BlacklistBox table {
        -ms-transform: translate(50%, -50%);
        transform: translate(30%, -50%);
    }

    .BlacklistBox {
        padding: 10px;
        margin-top: 5%;
        -ms-transform: translate(50%, -30%);
        transform: translate(50%, -30%);
    }

    .BlacklistBox tr {
        padding: 5%;
        width: fit-content;
    }
    .BlacklistBox td {
        margin-left: 5px;
        margin-right: 5px;
        padding: 10px;
    }

    .BlacklistBox form {
        position: relative;
        text-align: center;
    }

    .BlacklistBox form .Footnote {
        font-size: x-small;
        color:blue;
    }
</style>

