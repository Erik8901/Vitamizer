import Vue from 'vue'
import App from './App.vue'
import ProductInfo from './components/ProductInfo.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/productInfo',
    component: ProductInfo
   },
 ];

 const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
