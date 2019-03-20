import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import '@/firebase';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faMale,
  faFemale,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false;
library.add(faArrowLeft, faMale, faFemale, faUserSecret);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
