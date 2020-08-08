import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { OverlayScrollbarsPlugin } from 'overlayscrollbars-vue';

Vue.config.productionTip = false

Vue.use(OverlayScrollbarsPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')