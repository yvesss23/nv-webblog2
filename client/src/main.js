import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import {sync} from 'vuex-router-sync'
import store from './store'
import BackHeader from '@/components/Header.vue'
import VueCkeditor from 'vue-ckeditor2'


Vue.component('back-header', BackHeader)

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.use(VueCkeditor)

sync(store, router)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})