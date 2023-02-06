
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('header-section', require('./components/HeaderSection.vue'));
Vue.component('banner-image', require('./components/BannerImage.vue'));

Vue.component('home-section', require('./components/HomePage.vue'));
Vue.component('mission-section', require('./home-page-sections/MissionSection.vue'));
Vue.component('activities-section', require('./home-page-sections/ActivitiesSection.vue'));

const app = new Vue({
    el: '#app'
});
