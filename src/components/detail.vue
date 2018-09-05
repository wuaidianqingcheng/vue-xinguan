<template>
  <div class="box">
  	<div class="top-nav" id="topBar" v-for="item in detail"><span class="share" ></span><span class="back" onclick="javascript:history.go(-1);"><</span>产品详情</div>
<div class="placeholder-top"></div>
<!-- top-nav end --> 
<div class="pDtop-bg">
<!-- pDtop -->
<div class="pDtop1">

<strong>{{detail.tit}}</strong>{{detail.id}}


<!-- v2.1.1 -->

</div>
<div class="pDtop2">历史年化收益率</div>
<div class="pDtop3">{{detail.firstValue}}%+{{detail.lastValue}}%<span class="redicon"></span>

</div>

<div class="pDtop4">100元 起投　|　期限 {{detail.time}}</div>


<!-- v2.1.1 非黄金体验标 投资进度条&上下两部分  -->


<div class="pDtop5"><span class="rate">52.09%</span>
  <p class="process"><span style="width:52.09%;"></span></p>
</div>


<div class="pDtop6">

  <ul>
  
    <li>募集总额<span class="item" key="inh"></span></li><!-- 1000000.00 -->
    <li class="last">剩余金额<span class="item last" key="amo"></span></li><!-- 479100元 -->
  
  
  </ul>
</div>

<ul class="pDtop7">
  <li class="dan">担保方式：<font>无限责任担保</font></li>
  <li class="ji">成标后兑付募集期利息，到期后一次性还本付息</li>
  <li class="fan">按投资金额的<span>{{detail.aaa}}%从红包账户中返现</span>，即年化加息{{detail.bbb}}%</li>
  
</ul>
</div>
<div class="clearance"></div>
<ul class="pDfoot1">
<li >产品说明</li>
<li >项目概述</li>
  <li><span>已投资32笔</span>投资记录</li>
</ul>
<aside class="pDfoot2">市场有风险，投资需谨慎<br/>历史年化收益率不等于实际收益率，以实际收益为准</aside>
	<aside class="btn countdown" @click="add()">立即投资<p>距离结束: <span class="timeshow">00:00:00</span></p></aside>
	<aside class="btn btnBlue countdown" style="display: none;">即将开始<p>倒计时: <span class="timeshow">00:00:00</span></p></aside>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      id:'',
      detail:'',
      code:''
    }
  },
  methods:{
  	add(){
			var $this = this
  		var code = this.$route.query.id;
  		var size = prompt('您打算投资多少')
  		/*this.$router.push('/mycenter?id='+$this.code+'&size=100')*/
  		$this.$router.push({path:"mycenter",query:{id:code,size:size}})
  		axios.post('http://localhost:3000/api/bbb',{
  			id:code
  		}).then(function(a){
  			
  		})
  		
  		axios.post("http://localhost:3000/api/tode",{
  			tode:$this.detail
  		}).then(function(a){
  			console.log(11)
  		})
  	}
  },
  watch:{
  	add(){
  		var code = this.$route.query.id;
  		var obj = {
  			id : code
  		}
  		var arr = [];
  		arr.push(obj)
  		window.localStorage.setItem('id',JSON.stringify(arr))
  	}
  },
  mounted(){
  	var $this = this;
  	var id = this.$route.query.id;
  	axios('http://localhost:3000/api/list')
  		.then(function(data){
  			var detail = data.data
  			for(let i in detail){
  				if(id == detail[i].id){
  					$this.detail = detail[i]
  				}
  			}
  		})
  	
  }
}
</script>


<style scoped>
	.box{
		height: 800px;
	}
.top-nav {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
    width: 100%;
    height: 2.4rem;
    line-height: 2.4rem !important;
    font-size: 1.0rem;
    color: #323232;
    text-align: center;
    border-bottom: 1px solid #d7d7d7;
    background: #fff;
    overflow: hidden;;
}
.top-nav span.share {
    float: right;
}

.top-nav span {
    display: block;
    float: left;
    width: 4.0rem;
    height: 4.4rem;
}

.top-nav span.back {
    background: url(/resources/images/weixin2.0/back.png) center no-repeat;
    background-size: 1.1rem 1.9rem;
}
.top-nav span {
    display: block;
    float: left;
    width: 4.0rem;
    height: 4.4rem;
    
}
.placeholder-top {
    width: 100%;
    height: 4.4rem;
}
.pDtop-bg {
    background-color: #fff;
}
.pDtop1 {
   margin: 0 auto;
    width: 93.75%;
    line-height: 0rem !important;
    font-size: 0.1rem;
    color: #999;
    margin-bottom: 0rem;
}
.pDtop1 strong {
   padding-right: 0.5rem;
    font-size: 1rem;
    color: #646464;
}
.pDtop2 {
    width: 100%;
    line-height: 4.8rem !important;
    text-align: center;
    font-size: 0.1rem;
    color: #646464;
}
.pDtop3 {
    width: 100%;
    height: 2.8rem;
    position: relative;
    line-height: 0.8rem;
    text-align: center;
    font-size: 1.6rem;
    color: #f24e4c;
    font-weight: bold;
    margin-top: 0rem;
    margin-bottom: 0rem;
}
.pDtop3 strong {
    font-size: 4.5rem;
}
.pDtop3 span.redicon {
    width: 2.4rem;
    height: 1.6rem;
    background: url(/resources/images/weixin2.0/proDetails/rediocn.png) no-repeat;
    background-size: 100% 100%;
}
.pDtop3 span.redicon, .pDtop3 span.newicon {
    position: absolute;
    right: 8%;
    top: 90%;
    display: inline-block;
    margin: -3.6rem 0 0 0.7rem;
    vertical-align: middle;
}
.pDtop4 {
    width: 100%;
    padding-top: 0.7rem;
    line-height: 2.4rem !important;
    font-size: 1rem;
    color: #646464;
    text-align: center;
}
.pDtop5 {
    margin: 0 auto;
    width: 88.75%;
    line-height: 2rem !important;
    overflow: hidden;
}
.pDtop5 span.rate {
    float: right;
    font-size: 0.9rem;
    color: #f24e4c;
}
.pDtop5 p {
    position: relative;
    margin-top: 0.8rem;
    width: 82.4%;
    height: 0.3rem;
    border-radius: 0.4rem;
    background: #eceaea;
}
.pDtop5 p.process span {
    position: absolute;
    left: 0;
    top: -0.1rem;
    display: block;
    height: 0.5rem;
    border-radius: 0.4rem;
    background: #f24e4c;
}
.pDtop6 {
    position: relative;
    width: 100%;
}
.pDtop6 ul {
    padding: 0 5.625% 1.7rem;
    width: 88.75%;
    line-height: 1.4rem;
    font-size: 1rem;
    color: #999;
    border-bottom: 1px solid #cacaca;
    overflow: hidden;
}
.pDtop6 li {
    float: left;
    width: 50%;
}
.pDtop6 li.last {
    text-align: right;
}

.pDtop6 li {
    float: left;
    width: 50%;
    list-style: none;
}
.pDtop7 {
    padding: 1rem 5.6%;
    width: 88.8%;
    line-height: 1rem !important;
    font-size: 0.1rem;
    color: #999;
    border-bottom: 1px solid #c9c9c9;
    overflow: hidden;
}

.pDtop7 li.dan {
    background-image: url(/resources/images/weixin2.0/proDetails/dan.png);
    margin-bottom: 0.5rem;
}

.pDtop7 li {
    padding-left: 2.1rem;
    background-size: 1.4rem 1.4rem;
    background-repeat: no-repeat;
    background-position: left center;
    list-style-type: none;
}
.pDtop7 li.dan font {
    color: #323232;
}
.pDtop7 li.ji {
    background-image: url(/resources/images/weixin2.0/proDetails/ji.png);
}

.pDtop7 li {
    padding-left: 2.1rem;
    background-size: 1.4rem 1.4rem;
    background-repeat: no-repeat;
    background-position: left center;
}
.pDtop7 li.fan {
    background-image: url(/resources/images/weixin2.0/proDetails/fan.png);
}

.pDtop7 li {
    padding-left: 2.1rem;
    background-size: 1.4rem 1.4rem;
    background-repeat: no-repeat;
    background-position: left center;
}
.pDtop7 li span {
    color: #f24e4c;
}
.clearance {
    width: 100%;
    height: 0.9rem;
    background: #f2f2f2;
}
.pDfoot1 {
    margin-bottom: 0.6rem;
    padding: 0 5.625%;
    width: 88.75%;
    line-height: 2.4rem !important;
    color: #323232;
    font-size: 0.5rem;
    border-top: 1px solid #c9c9c9;
    /* border-bottom: 1px solid #c9c9c9; */
    overflow: hidden;
    background-color: #fff;
}
.pDfoot1 li {
    border-bottom: 1px solid #d1d1d1;
    background-size: 0.1rem 0rem;
        list-style: none
}
.pDfoot2 {
   width: 100%;
    height: 2rem;
    line-height: 1.0rem !important;
    text-align: center;
    font-size: 0.8rem;
    color: #999;
    overflow: hidden;
    padding: 0.5rem 0;
}
.countdown {
    padding-top: 0.4rem;
    line-height: 1.5rem !important;
    height: 3.3rem;
}

.btn {
    margin: 0.6rem auto;
    width: 70.6%;
    height: 2.7rem;
    line-height: 2.7rem !important;
    text-align: center;
    font-size: 1rem;
    color: #fff;
    border-radius: 0.8rem;
    background-color: #f24e4c;
}
.countdown p {
    font-size: 1.4rem;
}
</style>
