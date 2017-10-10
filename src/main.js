// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router'
import routes from './routes'

// Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
