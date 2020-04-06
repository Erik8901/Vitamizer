<template>
    <div class="banner">
       <div class="img1">
            <div class="imgText1">
            <h1>Be Inspired!</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliquas</span>
                </div>
        </div>
        <div  class="img2">
             <div class="imgText2">
                    <h1>Only high Quality!</h1> 
             </div>
       </div>
    </div>
</template>




<script>
//styles
//import bannerTwostyles from './styles/bannerTwoStyles.css';

export default {
  name: 'BannerTwo',
  props: {
     }
}
</script>

<style>
  .banner{
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    height: fit-content;
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: 90vw;
    
}

.img1 {
    background-image: url("https://cdn.pixabay.com/photo/2014/04/26/04/25/fitness-332278_960_720.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 40rem;
    width: 50%;
    color: #ffff;
}

.img2 {
    background-image: url("https://cdn.pixabay.com/photo/2015/02/13/22/10/runners-635906_960_720.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 40rem;
    width: 50%;
    color: #ffff;
}
</style>


