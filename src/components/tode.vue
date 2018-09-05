<template>
  <div class="box">
  	<div class="top-nav" id="topBar" v-for="item in detail"><span class="share" ></span><span class="back" onclick="javascript:history.go(-1);"><</span>投资记录</div>

<ul>
			
  			<li v-for="(item,i) in detail" >
  				<p>{{detail[i].tode.tit}}</p>
  				<table cellspacing="0" cellpadding="0" style="border: none;">
  					<tr>
  						<td>{{detail[i].tode.firstValue}}%+{{detail[i].tode.lastValue}}%</td>
  						<td style="width: 30px;"></td>
  						<td>{{detail[i].tode.time}}</td>
  						<td></td>
  					</tr>
  					<tr>
  						<td>历史年化收益率</td>
  						<td style="width: 30px;"></td>
  						<td>投资期限</td>
  					</tr>
  				</table>
  				
  				<div class="foot">
  					
  					<p><span></span>担保方式&nbsp;{{detail[i].tode.style}}</p>
  				</div>
  			</li>
  		</ul>
</ul>
</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
export default {
  name: 'toDe',
  data () {
    return {
      id:'',
      detail:''
    }
  },
  methods:{
  	
  },
  mounted(){
  	var $this = this
  	var arr = []
  	axios('http://localhost:3000/api/tode')
  	.then(function(data){
  		console.log(data.data)
  		$this.detail = data.data
  		console.log($this.detail)
  	})
  	
  	
	}
}
</script>


<style scoped>
	.box {
		position: relative;
		background: #f2f2f2;
	}
.box ul{
	padding: 5px 10px;
	margin:40px 0 -30px 0;
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
	margin-bottom: 15px;
}
.box .ins p{
	text-align: center;
	font-size: 8px;
	line-height: 20px;
	height: 20px;
}
h3{
	background: #FFFFFF;
	position: fixed;
	top: 0;
	height: 40px;
	line-height: 40px;
	text-align: center;
	width: 320px;
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
