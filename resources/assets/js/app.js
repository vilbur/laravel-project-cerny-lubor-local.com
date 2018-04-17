/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


import './bootstrap';
import router from "./router";

import Vue from "vue";
import VueRouter from 'vue-router';

window.Vue = Vue;
window.Vue.use(VueRouter);

require('./vue-extensions');
require('./components');

new Vue({
    el: '#app',
    router,
	data: { loading: false },
});

