<template id="loginHandling">
  <div id="app" @mouseover="getUser()">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div id="titleBar"> <a href="#/home"><input id="title" type="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/640px-Windows_Settings_app_icon.png" alt="Logo"/></a> 
    <h1 v-if="store === null" style="font-family:helvetica"><b>Grocery Store Name</b></h1>
    <h1 v-else style="font-family:helvetica"><b>{{ store.name }}</b></h1> </div>
      <!-- Inspiration from w3schools's navigation bar: https://www.w3schools.com/css/css_navbar.asp-->
      <div>
        <div id="NavigationBar">
          <div>
           
              <a href="#/home"><p style="color:black">Home</p></a>
              <a href="#/items"><p style="color:black">Items</p></a>
              <a v-if="(user !== null) && (user.userType === 'Customer')" href="#/cart"><p style="color:black">My Cart</p></a>
              <a v-if="user !== null" href="#/account"><p style="color:black">My Account</p></a>
              
              
              <!--<a> {{ user }}</a>-->
              
              <div v-if=" user === null">
                <a v-if="openedLgBx !== null" href="#" style="float:right" @click="closeLgBx()"><p style="color:black">Login</p></a>
                <a v-if="openedLgBx === null" href="#" style="float:right" @click="openLgBx()"><p style="color:black">Login</p></a>
              </div>
              
              <a v-if="user !== null" href="#/home" @click="logoutUser()" style="float:right"><p style="color:black">Logout</p></a>
              <a v-if="(user !== null) && (user.userType === 'Employee')" href="#/employeefunctions"><p style="color:black">Employee Functions</p></a>
              <a v-if="(user !== null) && (user.userType === 'Owner')" href="#/ownerfunctions"><p style="color:black">Owner Functions</p></a>
              <div class="search-bar">
              <!--form class="search" action="action_page.php"-->
              <input type="text" placeholder="Search Store Items" name="search">
              <button type="submit"><i class="fa fa-search"></i></button>
            
              </div>
          </div>
        </div>

        <body class="BelowNavigationBar"> 
          <div v-if="openedLgBx !== null" class="LoginBox">
                  <!-- Inspiration from w3school's form input: https://www.w3schools.com/js/js_input_examples.asp -->
                  <h2> Login </h2>
                  <form>
                      <p> Email: <input type="text" v-model="userEmail" name = "email" placeholder="Your email..">> </p>
                      <p> Password: <input type="password" v-model="userPassword" name = "password" placeholder="Your password..">> </p>
                      <button type="button" @click="loginUser(userEmail, userPassword)"> Log in </button>
                      <p></p> 
                  </form>
                      <a href="#/register" @click="closeLgBx()" class="Footnote">Register Here!</a>
                      <a href="#/home" @click="closeLgBx()" class="Footnote">Or, continue as guest.</a>
                      <p class="ErrorMsg" v-if="loginError !== null">Error: {{ loginError }}</p>

          </div>

        </body>
      </div>
    <router-view></router-view>
  </div>
</template>

<script src = "./components/loginHandler.js">
</script>

<style>
#NavigationBar {
        background-color: #ff8c00 ;
        overflow: hidden;
        height: 50px;
    }
#NavigationBar a {
    
    color:aliceblue;
    text-align: center;
    padding: 20px;
    text-decoration: none;
    float: left;
}
#NavigationBar a:hover{
  background-color: #90ee90 ;
}


#NavigationBar search-bar{
      
      float: right;
    }

#NavigationBar input[type=text]{
      padding: 6px;
      border: none;
      margin-top: 8px;
      margin-right: 16px;
    }
#NavigationBar search-bar button {
      float: right;
      padding: 6px 10px;
      margin-top: 8px;
      margin-right: 16px;
      background: #eee;
      font-size: 17px;
      border: none;
      cursor: pointer;
    }

.BelowNavigationBar { 
        /* Followed some tips for making the bg fullscreen here: https://css-tricks.com/perfect-full-page-background-image/*/
       
        position: absolute;
      
        min-width: 100%;
        min-height: 900px;

        height: 150%;
        background-position:bottom;
        background-repeat: no-repeat;
        background-size:cover;
        

        background-image: 
            url('./assets/wallpaper.png');
            /*
            url(https://cdn.shopify.com/s/files/1/0337/7469/products/Rolling-Hills-Cartoon-Landscape-Wall-Mural_1800x1800.jpg?v=1633180101);
            */
       background-color:lightsalmon;
    
    }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}


input#title{
  float:left;
  max-height: 50px;
  position: relative;
  left: 10px;
  bottom: 10px;
  width: 50px;
}


#app #titleBar {
  align-content: center;
  background-color: rgba(255, 255, 255, 0);
  
  margin-block: 10px;
}

.LoginBox {
        background: rgba(255,255,255,0.8);
        background-color: rose;
        outline-color: coral;
        outline-style: double;
        width: 380px;
        height: 250px;
        position: relative;
        left: 75%;
        z-index: 1;
    }
    .LoginBox h2 {
        color: #000;
        text-align: center;
    }

    .LoginBox form {
        position: relative;
        text-align: center;
    }

    .Footnote {
        font-size: x-small;
        color:blue;
        position: relative;
        left: 35%;
    }

    .ErrorMsg {
      font-size: small;
      color:red;
      position: relative;
      left: 15%;
      max-width: 300px;
    }

</style>
