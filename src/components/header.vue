<template>
  <div class="box">
  	
  		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in img" ><a :href="item.picLink"><img :src="item.picFilePath"/></a></mt-swipe-item>  
		</mt-swipe>
  	
		
		
		<ul>
			
  			<li v-for="item in main" @click="toDetail(item.id)">
  				<p>{{item.tit}}</p>
  				<table cellspacing="0" cellpadding="0" style="border: none;">
  					<tr>
  						<td>{{item.firstValue}}%+{{item.lastValue}}%</td>
  						<td style="width: 30px;"></td>
  						<td>{{item.time}}</td>
  						<td>
  							<div id="myStat" data-dimension="250" data-text="20%" data-info="New Clients" data-width="30" data-fontsize="38" data-percent="20" data-fgcolor="#61a9dc" data-bgcolor="#eee" data-fill="#ddd"></div>
  						</td>
  					</tr>
  					<tr>
  						<td>历史年化收益率</td>
  						<td style="width: 30px;"></td>
  						<td>投资期限</td>
  					</tr>
  				</table>
  				
  				<div class="foot">
  					
  					<p><span></span>担保方式&nbsp;{{item.style}}</p>
  				</div>
  			</li>
  		</ul>
  		<div class="ins">
  			<p>版权所有 © 国金宝 | 上海银河惠理金融信息服务有限公司</p>
  			<p>公司地址：上海市浦东新区浦东南路379号金穗大厦15楼</p>
  			<p>沪ICP备14039121号   &nbsp;TEL：021-23566186</p>
  			<p>历史年化收益率不等于实际收益率，以实际收益为准</p>
  			<p>市场有风险，投资需谨慎</p>
  		</div>
  		
  </div>
  
</template>
<script>
	
import axios from 'axios'
export default {
	
  name: 'Header',
  data () {
    return {
      img:'',
      main:''
    }
  },
  methods:{
  	
  	
  	toDetail(a){
  		this.$router.push('/detail?id='+a)
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
  }
}
</script>




<style scoped>
*{
	margin:0;
	padding: 0;
}

.box{
	height: 580px;
	display: flex;
	flex-direction: column;
}
section{
	flex: 1;
	
}
.box{
	background: #f2f2f2;
}
.box img{
	width: 370px;
	height: 140px;
}
.box ul{
	padding: 5px 10px;
}
.box ul li{
	font-size: 10px;
	border: 1px solid #e6e6e6;
	margin: 10px 0;
}
.box .content{
	overflow: hidden;
}
.box .content div{
	float: left;
}
.box ul {
	margin-bottom: 34px;
}
.box ul li table tr:first-child td:first-child:first-letter{
font-size: 20px;
color: #f24e4c;
}
.box ul li table tr:first-child td:first-child{
	
	color:#f24e4c ;
	
}
.box ul li table tr:first-child td:nth-of-type(2){
	font-size: 16px;
	margin-left: 30px;
}
.box ul li .line{
	border-top: 3px solid #000;
}
.box ul li {
	padding: 10px 12px 0 12px;
	background: #FFFFFF;
	margin-bottom: 5px;
}
.box .foot{
	line-height: 22px;
	height: 22px;
}
.box .ins{
	margin-bottom: 70px;
}
.box .ins p{
	text-align: center;
	font-size: 8px;
	line-height: 20px;
	height: 20px;
}
.tag,.tz{
	height: 30px;
	line-height: 30px;
}
.tag{
	background: hotpink;
}
.tz span{
	color: red;
}
.circleChart{
	width: 50px;
	height: 50px;
}
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