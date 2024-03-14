<template>
        <!-- Inspiration from w3schools's image carousel: https://www.w3schools.com/howto/howto_js_slideshow.asp-->
        <body>
            <div class="carousel-container">
                <div class="showSlide Fade">
                    <img src="../assets/supersale.png" id="image" class="active">
                
                </div>

                <div class="showSlide Fade">
                    <img src="../assets/orderbanner.png" id="image">
                </div>


                    <a class="prev" onclick="nextSlide(-1)">&#10094;</a>
                    <a class="next" onclick="nextSlide(1)">&#10095;</a>
                 

                <div style="text-align:center">
                    <span class="dots" onclick="currentSlide(1)"></span>
                    <span class="dots" onclick="currentSlide(2)"></span>
                </div>
            </div>
  

    </body>
    
</template>


<script>
</script>


<style>
    .carousel-container {
        background-color: rgb(0,0,0);
        opacity: 100%;
        margin-top: 100px;
        width: 800px;
        height:350px;
        position: relative;
        margin: 0 auto;
    }

    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
        padding: 12px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}


   .prev:hover, .next:hover {
        background: white;
    }

    .showSlide{
        position: relative;

    }
    img{
        position: relative;
        width: 800px;
        height: 350px;
        display: none;
    }

    .active{
        display: block;
    }

    .dots{
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
    }

    .numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
    }
</style>

