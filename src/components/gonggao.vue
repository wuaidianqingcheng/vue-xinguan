<template>
  <div class="box">
  	<div class="top-nav" id="topBar"><span class="share"></span><span class="back" onclick="javascript:history.go(-1);"></span>公告中心</div>
	<div class="placeholder-top"></div>
	<!-- top-nav end -->
	
		<ul>
			<li v-for="item in detail" @click="to(item.id)">
				<div class="p1"><p>{{item.notice_title}}</p><span>{{item.notice_addtime}}</span>
				</div>
				<p class="p2">{{item.notice_content_text}}</p>
			</li>	
		</ul>
	<!-- aUlist -->
	<div>hello wodl</div>
	<!--<router-view style="margin-bottom:100px ;"></router-view>-->
  </div>
  
</template>

<script>
	import axios from 'axios'
export default {
  name: 'GongGao',
  data () {
    return {
      detail:''
    }
  },
  methods:{
  	to(a){
  		
//		{query:{}}
  		this.$router.push('/ggdetail?id='+a)
  	}
  },
  mounted(){
  	var $this = this;
  	axios('http://localhost:3000/api/gonggao')
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
	height: 930px;
	
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
ul{
	padding: 5px ;
}
li{
	list-style-type: none;
	height: 80px;
	
	border-bottom: 1px solid #323232;
}
.p1{
	overflow: hidden;
	height: 35px;
	line-height: 35px;
}
.p1>p{
	width: 200px;
	font-size: 8px;
	color: #666666;
	float: left;
}
.p1 span{
	float: right;
	margin-right: 20px;
	font-size: 8px;
}
.p1>p,.p2{
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.p2{
	font-size: 8px;
	color: #999999;
	height: 35px;
	line-height: 35px;
}
</style>
