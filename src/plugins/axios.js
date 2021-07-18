import Vue from 'vue';
import axios from 'axios';

let config = {
    baseURL: process.env.VUE_APP_API_URL + '/v1',
};

Vue.prototype.axios = axios.create(config);