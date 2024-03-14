<template>
  <div class="main" id='itemManaging' @mouseover="getUser()">
    <!-- Inspiration from w3schools's navigation bar: https://www.w3schools.com/css/css_navbar.asp-->
    <h1>Items For Sale</h1>
    <body>
             <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <div class="Items">
        <br />
        <br />
        <h2 style="text-align: center">List of all available items</h2>
        <br />
        <br />
        <table>
          <tr>
            <th></th>
            <th>Name</th>
            <th></th>
            <th></th>
            <th>Price</th>
            <th>Can be shipped</th>
          </tr>
          <tr>
           <th></th>
            <th>Tomato</th>
             <th><img src="../assets/Tomato.png" width="25%" ></th>
              <th> <button class="w3-button w3-black" ><i class="fa fa-shopping-cart"></i></button></th>
            <th>3$</th>
            <th>Yes</th>
          </tr>
          <tr>
           <th></th>
            <th>Watermelon</th>
             <th><img src="../assets/watermelon.png" width="25%" height="10%"></th>
             <th> <button class="w3-button w3-black" ><i class="fa fa-shopping-cart"></i></button></th>
            <th>3$</th>
            <th>Yes</th>
          </tr>
          <tr>
           <th></th>
            <th>Carrots</th>
             <th><img src="../assets/carrots.png" width="25%" height="10%"></th>
             <th> <button class="w3-button w3-black"><i class="fa fa-shopping-cart"></i></button></th>
            <th>3$</th>
            <th>Yes</th>
          </tr>
           <tr>
           <th></th>
            <th>milk</th>
             <th><img src="../assets/milk.png" width="25%" height="10%"></th>
             <th> <button class="w3-button w3-black" ><i class="fa fa-shopping-cart"></i></button></th>
            <th>3$</th>
            <th>Yes</th>
          </tr>
           <tr>
           <th></th>
            <th>Cheese</th>
             <th><img src="../assets/cheese.png" width="25%" height="10%"></th>
             <th> <button class="w3-button w3-black"> <i class="fa fa-shopping-cart"></i></button></th>
            <th>3$</th>
            <th>Yes</th>
           </tr>

            <tr v-for="item in inventory" :key=item.name>
              <th></th>
              <th>{{item.name}} </th>
              <th></th>

              <th v-if="user === null"> <button @click="addToCart(item.name, null)" class="w3-button w3-black"> <i class="fa fa-shopping-cart"></i></button></th>
              <th v-else> <button @click="addToCart(item.name, user.email)" class="w3-button w3-black"> <i class="fa fa-shopping-cart"></i></button></th>
              <th> {{item.price}}</th>
              <th v-if="item.pickupOnly === true">Yes</th>
              <th v-else>No</th>
            </tr>

        </table>
      </div>
    </body>
  </div>
</template>

<script src="./itemManager.js">
</script>

<style>
.h1 {
  color: #000;
  text-align: center;
}
.Items {
  background: rgba(255, 255, 255, 0.8);
  background-color: rose;
  outline-color: coral;
  outline-style: double;
  align-self: center;
  position: relative;
  max-width: 90%;
  max-height: fit-content;
  padding-bottom: 5%;
  left: 5%;
  right: 5%;
  top: 5%;
  align-content: center;
}

.Items table {
  color: #000;
  text-align: center;
  align-content: center;
  align-items: center;
  font-size: x-large;
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}
.Items table tr {
  border-bottom: solid #000;
}
</style>
