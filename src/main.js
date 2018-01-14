import Vue from 'vue';
import App from './App.vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './static/mui/css/mui.min.css';
import VueResource from 'vue-resource';

Vue.use(MintUI);
Vue.prototype.apihost = 'http://192.168.40.27:9008';
// Vue.prototype.url = '';
import router from './router/router';
Vue.use(VueResource);
import store from './store/store';
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
