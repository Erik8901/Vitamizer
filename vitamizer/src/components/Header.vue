<template>
  <div class="header">
    <div class="buttonsMenu">
      <button class="buttons" @mouseover="showMenu" >Products</button>
      <button class="buttons" >About</button>
      <button class="buttons">Contact</button>
          <div class="products-menu" v-show="active" @mouseleave="showMenu"  >
              <h3>Check out or Products</h3>
                  <ul class="products-ul">
                      <li class="products-li" v-for="product in products" :key="product.name">
                        <span class="product-name">{{ product.name }}</span>
                        <span class="product-text">Info: {{ product.info }}</span>
                        <img class="img" :src="product.img" />
                        <span class="product-price">Price: {{ product.price }} €</span>
                      </li>
                  </ul>
            </div>
      </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      products: null,
      active: false
      }
    },
  mounted () {
   axios
      .get("products.json")
      .then(response => (this.products = response.data ))
  },
  methods: {
    showMenu() {
      console.log("test")
      this.active = !this.active;  
    }
  },
}
</script>
<style scoped>
.header {
  position: fixed;
  background: #ffc600;
  height: 3rem;
  width: 100vw;
  top:0%;
  left: 0%;
}

.buttonsMenu {
  position: relative;
  top: 30%;
  width: 26%;
  text-align: left;
  left: 1%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.buttons {
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  font-size: 120%;
  font-family: Arial, Helvetica, sans-serif;
  color: #000000;
  width: fit-content;
  display: flex;
}

.buttons:hover {
  color: #ffff;
}

.products-menu {
   
   background: #fff;
    width: 90vw;
    position: absolute;
    display: flex;
    height: 34rem;
    margin-top: 2.1rem;
    /* margin-left: 27rem; */
    left: 15%;
    overflow: hidden;
}

h3 {
  top: 1rem;
  left: 40%;
  position: absolute;
}

.products-ul {
  list-style: none;
  height: fit-content;
  top: 4rem;
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 1rem;
}

.products-li {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 1rem;
}



.product-name {
  font-weight: bold;
}

.img {
  height: 12rem;
  width: 16rem;
}




</style>
