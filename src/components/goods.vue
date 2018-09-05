<template>
  <div class="box">
  	<h3>产品列表</h3>
  	<ul>
			
  			<li v-for="(item,i) in list" @click="toDetail(item.id)">
  				<p>{{item.tit}}</p>
  				<table cellspacing="0" cellpadding="0" style="border: none;">
  					<tr>
  						<td>{{item.firstValue}}%+{{item.lastValue}}%</td>
  						<td style="width: 30px;"></td>
  						<td>{{item.time}}</td>
  						<td></td>
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
  </div>
  
</template>

<script>

import axios from 'axios'

export default {
  name: 'Goods',
  data () {
    return {
      list:''
    }
  },
  methods:{
  	toDetail(a){
  		console.log(11111)
  		this.$router.push('/detail?id='+a)
  	}
  },
  mounted(){
  	var $this = this
  	axios('http://localhost:3000/api/list').then(function(data){
  		$this.list = data.data
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
</style>
