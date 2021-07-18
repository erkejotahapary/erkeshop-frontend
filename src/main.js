import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios';

import './plugins/helper';

Vue.config.productionTip = false

let axiosConfig = {
  baseURL: process.env.VUE_APP_API_URL + '/v1',
};

Vue.prototype.axios = axios.create(axiosConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')