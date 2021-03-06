// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import InfiniteLoading from 'vue-infinite-loading';

Vue.config.productionTip = false
Vue.use(MintUI)
export default {
  components: {
    InfiniteLoading,
  },
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
