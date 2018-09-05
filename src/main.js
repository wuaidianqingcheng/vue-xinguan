
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';
import axios from 'axios'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Mint);



Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
