<template>
  <div >
  	<div class="top-nav" id="topBar">
		<span class="share"></span>
		<span class="back iosback" style="display: none;" onclick="javascript:history.go(-1);"></span>我的账户
	</div>
	<div class="placeholder-top"></div>

	
		
	
		
		
	
	<!-- aTtop -->
	<header class="aTtop">
		<img src="../img/account-banner.jpg"> <span
			id="vipIcon" class="vip" onclick="toVipRules();"></span>
		<div class="aTtop1">账户总额</div>
		<div class="aTtop2">￥:{{money}}.00</div>

	</header>
	<!-- aTtop end -->
	<!-- 四项数据 -->
	<ul class="Four-data">
		<li>
			<div class="left-div">可用余额<p ><span>￥</span>{{money}}.00</p></div>
			<div>冻结金额<p><span>￥</span>0.00</p></div></li>
		<li>
			<div class="left-div">待收总额<p><span>￥</span>0.00</p></div>
			<div>累计收益<p ><span>￥</span><font key="acc4"></font></p></div>
		</li>
	</ul>
	<!-- 四项数据 end -->
	<!-- aTbtn -->
	<ul class="aTbtn">
	<li @click="del()">提 现</li>
	<li @click="add()">充 值</li>
		
	</ul>
	<!-- aTbtn end -->

	<div class="clearance"></div>

	<!-- aTlist -->
	<ul class="aTlist">
		<li class="aTlist5" ><!-- 跳转链接 未添加 -->
			<p>资产明细</p>
		</li>
		<li class="aTlist0" @click="tode()" >
		
			<p>投资记录</p>
		</li>
		<li class="aTlist1">
			<p>我的红包</p>
		</li>
		<li class="aTlist2" >
			<p>我的礼券</p>
		</li>
		<li class="aTlist3" >
			<p>个人设置</p>
		</li>
		<li class="aTlist4" >
			<p>邀请好友拿现金</p>
		</li>
	</ul>
	<!-- aTlist end -->

	<div class="placeholder-foot"></div>
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	<ul class="foot-nav">
  			<router-link to='/a' tag='li' class="foot0" @click='change0()'>首页</router-link>
  			<router-link to='/b' tag='li' class="foot1" @click='change1()'>理财产品</router-link>
  			<router-link to='/c' tag='li' class="foot2" @click='change2()' >我的账户</router-link>
  			<router-link to='/d' tag='li' class="foot3" @click='change3()'>更多</router-link>
  	</ul>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
	
  name: 'Myself',
  data () {
    return {
      money:0,
     	code:0,
     	abc:0,
     	tel:0,
     	size:0,
     	sum:0
    }
  },
  methods:{
  	
  	tode(){
  		var $this = this;
  		var id = $this.$route.query.id
  		$this.$router.push('/tode')
  	}
  	,
  	
  	add(){
  		var $this = this
  		var x = prompt('请输入充值金额')
  		console.log(x)
  		$this.money += Number(x)
  		console.log(this.money)
  		$this.abc = $this.money
  		
  		axios.post('http://localhost:3000/api/register/update',{
  			money:$this.abc,
  			tel:$this.tel
  		}).then(function(a){
  			
  		})
  		
  		
  	},
  	del(){
  		var $this = this;
  		var y = prompt('请输入提取金额');
  		$this.money -= Number(y)
  		$this.code = $this.money
  		axios.post('http://localhost:3000/api/register/update',{
  			money:$this.code,
  			tel:$this.tel
  		}).then(function(a){
  			
  		})
  	}
  	
  },
  mounted(){
  	var $this = this
  	axios('http://localhost:3000/api/register')
  		.then(function(data){
  			//console.log(data.data[0].tel)
  			$this.tel = data.data[0].tel
  			$this.money = data.data[0].money
  			/*$this.size = Number($this.$route.query.size)
  			$this.sum = $this.money - $this.size
  			
  			$this.money = $this.sum*/
  		
  		})
  		
  		
  	/*$this.money = Number($this.money) - $this.size*/
  	
  	/*axios.get("http://localhost:3000/api/qian")
  			.then(function(data){
  				var arr1 = eval(data.data)
  				//console.log(arr1)
  				var code1 = arr1[arr1.length-1].code;
  				$this.money = code1
  			})*/
  	
  }
  	
  	
  
  
  
  
}
</script>


<style scoped>
	#app{
		background: #000 !important;
		width: 100%;
	}
.top-nav {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: .8rem;
    color: #323232;
    text-align: center;
    border-bottom: 1px solid #d7d7d7;
    background: #fff;
    overflow: hidden;
}
.placeholder-top {
    width: 100%;
    height: 4.4rem;
}
.ts {
    width: 100%;
    height: 11vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    padding: 0 1%;
    box-sizing: border-box;
    /* display: none; */
}
.ts .tsicon {
    width: 3vw;
    height: 3vw;
    background: url(../img/xts.png);
    background-size: 100% 100%;
    margin-left: 4%;
}
.ts .tccon a {
    text-decoration: underline;
    color: #0066ff;
    font-size: 2.8vw;
    margin-left: 1vw;
}
.aTtop {
    position: relative;
    width: 100%;
    color: #fff;
    overflow: hidden;
}
.aTtop img {
    width: 100%;
}
img {
    border: none;
    vertical-align: top;
}
.aTtop span.vip {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    padding: 1.3rem 1.6rem;
    width: 1.7rem;
    height: 1.7rem;
    background: url(../img/vip-grey.png) center no-repeat;
    background-size: 1.7rem 1.7rem;
}
.aTtop1 {
    position: absolute;
    left: 0;
    top: 1rem;
    width: 100%;
    text-align: center;
    font-size: .8rem;
}
.aTtop2 {
    position: absolute;
    left: 0;
    top: 2.5rem;
    width: 100%;
    text-align: center;
    font-size: 2rem;
}
.Four-data {
    width: 100%;
    background: #fff;
}
.Four-data li {
    overflow: hidden;
    width: 100%;
    border-bottom: 1px solid #d7d7d7;
    font-size: 0.9rem;
    color: #999999;
}
.Four-data li .left-div {
    width: 50%;
    border-left: none;
    padding-left: 0;
    text-align: left;
    text-indent: 7%;
}

.Four-data li div {
    padding: 1rem 0;
    float: left;
    padding-left: 3.5%;
    border-left: 1px solid #d7d7d7;
}
.Four-data li div p {
    color: #323232;
    font-size: .8rem;
    line-height: 2rem;
}
.aTbtn {
    padding: 1.3rem 0;
    width: 100%;
    height: 3.4rem;
    line-height: 3.4rem !important;
    text-align: center;
    font-size: 1.3rem;
    border-bottom: 1px solid #e4e4e4;
    overflow: hidden;
}
.aTbtn li {
    float: left;
    margin: 0 3.5%;
    width: 42.2%;
    color: #f24e4c;
    border: 1px solid #f24e4c;
    border-radius: 0.8rem;
    list-style-type: none;
}
.aTbtn li:last-child {
    background: #f24e4c;
    color: #fff;
}
.aTbtn li {
    float: left;
    margin: 0 3.5%;
    width: 42.2%;
    color: #f24e4c;
    border: 1px solid #f24e4c;
    border-radius: 0.8rem;
}
.clearance {
    width: 100%;
    height: 0.9rem;
    background: #f2f2f2;
}
.aTlist {
    width: 100%;
    border-top: 1px solid #e3e3e3;
    overflow: hidden;
}
.aTlist li.aTlist5 {
    background: url(../img/aTlist5.png) .3rem .4rem no-repeat;
    background-size: 1.3rem auto;
}
.aTlist li {
    text-indent: 2rem;
    line-height: 2.8rem !important;
    
    font-size: .5rem;
    color: #323232;
}
.aTlist li.aTlist0 {
    background: url(../img/aTlist0.png) .2rem .6rem no-repeat;
    background-size: 1.5rem 1.3rem;
}
.aTlist li.aTlist1 {
    background: url(../img/aTlist1.png) .2rem .4rem no-repeat;
    background-size: 1.5rem 1.7rem;
}
.aTlist li.aTlist2 {
    background: url(../img/aTlist2.png) .3rem .6rem no-repeat;
    background-size: 1.6rem 1.2rem;
}
.aTlist li.aTlist3 {
    background: url(../img/aTlist3.png) .3rem .4rem no-repeat;
    background-size: 1.5rem 1.5rem;
}
.aTlist li.aTlist4 {
    background: url(../img/aTlist4.png) .3rem .5rem no-repeat;
    background-size: 1.7rem 1.3rem;
}
.placeholder-foot {
    width: 100%;
    height: .8rem;
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

.foot-nav li.foot0, .foot-nav li.foot1, .foot-nav li.foot2, .foot-nav li.foot3 {
    background-position: center 0.6rem;
    background-repeat: no-repeat;
    background-size: 26%;
}

.foot-nav li {
    float: left;
    padding-top: 2.4rem;
    width: 25%;
    cursor: pointer;
    list-style-type: none;
}
.foot-nav li.foot1 {
    background-image: url(../img/product.png);
}
.foot-nav li.foot2.currt {
    background-image: url(../img/account-hover.png);
}

.foot-nav li.foot2 {
    background-image: url(../img/account.png);
}
.foot-nav li.foot3 {
    background-image: url(../img/ours.png);
}
</style>
