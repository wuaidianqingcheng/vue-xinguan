import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)




var store = new Vuex.Store({
	state:{
		tel:''
	},
	mutations:{
		In(a,b){
			a.tel = b
			console.log(a.tel)
		}
	}
})
export default store;