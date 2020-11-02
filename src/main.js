import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import PouchDB from 'pouchdb'

Vue.config.productionTip = false

// PouchDB
const db = new PouchDB('madera');
Vue.prototype.$db = db;
const token = btoa('');
Vue.prototype.$token = token;
const api = ''
Vue.prototype.$api = api;

//SHORTID
const shortid = require('shortid');
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
Vue.prototype.$shortid = shortid

// Router + Vuetify
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
