<template>
  <div class="box">
  	<div class="top-nav" id="topBar"><span class="share"></span><span class="back" onclick="javascript:history.go(-1);"></span>平台中心</div>
	<div class="placeholder-top"></div>
	<!-- top-nav end -->
	
		<a  v-for="item in detail" :href="item.appExternalLink"><li>{{item.contentTitle}}</li><span>></span></a>
	<!-- aUlist -->
	
  </div>
  
</template>

<script>
	import axios from 'axios'
export default {
  name: 'PingTai',
  data () {
    return {
      detail:''
    }
  },
  methods:{
  	
  },
  mounted(){
  	var $this = this;
  	axios('http://localhost:3000/api/pingtai')
  		.then(function(data){
  			$this.detail = data.data
  			console.log($this.detail)
  		})
  }
}
</script>


<style scoped>
.box{
	background-color: #f2f2f2;
	height: 540px;
	
}
.top-nav {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
    width: 100%;
    height: 2.4rem;
    line-height: 2.4rem !important;
    font-size: 0.8rem;
    color: #323232;
    text-align: center;
    border-bottom: 1px solid #d7d7d7;
    background: #fff;
    overflow: hidden;
}
.top-nav span {
    display: block;
    float: left;
    width: 1rem;
    height: 1rem;
    margin-top: 10px;
}
.top-nav span.back {
    background: url(../img/back.png) center no-repeat;
    background-size: 1.1rem 1.9rem;
}
a {
    text-decoration: none;
  
}
.placeholder-top{
	height: 50px;
}
li{
	list-style-type: none;
}
a{
	display: block;
	height: 40px;
	line-height: 40px;
	border: 1px solid #999999;
	border-bottom: 0;
	border-left: 0;
	border-right: 0;
	text-indent: 30px;
	color: #666666;
	background: #FFFFFF;
	overflow: hidden;
}
a li{
	float: left;
}
a span{
	float: right;
	margin-right: 40px;
}
</style>
