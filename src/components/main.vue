<template>
  <div class="box">
  	
  	<section>
  		<router-view></router-view>
  	</section>
  			<ul class="foot-nav">
  			<router-link to='/main' tag='li' class="foot0" @click='change0()'>首页</router-link>
  			<router-link to='/goods' tag='li' class="foot1" @click='change1()'>理财产品</router-link>
  			<router-link to='/myself' tag='li' class="foot2" @click='change2()' >我的账户</router-link>
  			<router-link to='/more' tag='li' class="foot3" @click='change3()'>更多</router-link>
  	        </ul>
  		
  	
  	
  </div>
  
</template>

<script>
	
import axios from 'axios'
import store from '../store/store.js'

export default {
  name: 'Main',
  data () {
    return {
      img:'',
      main:'',
     
    }
  },
  computed:{
      
     
  },
  methods:{
  	change0(){
  		//console.log(this)
  	},
  	change1(){
  		
  	},
  	change2(){
  		
  	},
  	change3(){
  		
  	}
  },
  mounted(){
  	var $this = this;
  	function img(){
  		return axios.get('http://localhost:3000/api/banner');
  	}
  	function main(){
  		return axios.get('http://localhost:3000/api/main');
  	}
  	axios.all([img(),main()]).then(axios.spread(function(img,main){
  		$this.img = img.data;
  		$this.main = main.data;
  	}))
  	var flag = store.state.tel;
  	//console.log(flag)
  	
  	if(flag != ''){
  		$this.$router.push('/mycenter')
  	}
  }
}
</script>


<style scoped>
.foot-nav {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9;
    width: 100%;
    line-height: 2rem !important;
    text-align: center;
    font-size: 1rem;
    color: #666;
    box-shadow: 0 0 0.8rem 0 rgba(229, 229, 229, 1);
    background: #f2f2f2;
    overflow: hidden;
    border-top: 1px solid #e5e5e5;
}
.foot-nav li.foot0 {
    background-image: url(../img/home.png);  
}
.foot-nav li.foot1 {
    background-image: url(../img/product.png);  
}
.foot-nav li.foot2 {
    background-image: url(../img/account.png); 
}
.foot-nav li.foot3 {
    background-image: url(../img/ours.png); 
}
.foot-nav li {
    float: left;
    padding-top: 2.4rem;
    width: 25%;
    cursor: pointer;
    list-style-type: none;
}
.foot-nav li.foot0, .foot-nav li.foot1, .foot-nav li.foot2, .foot-nav li.foot3 {
    background-position: center 0.6rem;
    background-repeat: no-repeat;
    background-size: 26%;
}
</style>
