// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'


Vue.config.productionTip = false
Vue.use(vueRouter);
Vue.use(vueResource)                                                  

const routes = [
  {
    path:'/goods',
    component:goods
  },{
    path:'/ratings',
    component:ratings
  },{
    path:'/seller',
    component:seller
  },
  {
    path:'/',
    redirect:'/goods'
  },
]

const router = new vueRouter({
  linkActiveClass: 'active',
  routes
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  render:h =>h(App),
  template: '<App/>'
})
