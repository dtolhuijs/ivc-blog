require('./bootstrap');

Vue.component('app', require('./App.vue'));

const app = new Vue({
    el: '#app'
});
