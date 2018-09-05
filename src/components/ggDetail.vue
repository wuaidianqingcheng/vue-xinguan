<template>
  <div class="box">
  	
  	<ul>
  		<li>
  			<p class="p1">{{list.notice_title}}</p>
  			<p class="p2">{{list.notice_content_text}}</p>
  		</li>
  	</ul>
  	
  			
  </div>
  
</template>

<script>

import axios from 'axios'

export default {
  name: 'ggDetail',
  data () {
    return {
      list:''
    }
  },
  methods:{
  	
  },
  mounted(){
  	var $this = this
  	var id = $this.$route.query.id
  	console.log(id)
  	axios('http://localhost:3000/api/gonggao').then(function(data){
  		var detail = data.data;
  		for(let i in detail){
  			if(id == detail[i].id){
  				$this.list = detail[i]
  				console.log($this.list)
  			}
  		}
  	})
  }
}
</script>


<style scoped>
.box {
		
		background: #f2f2f2;
	}
section{
		background: #999999;
		height: 100%;
	}
.box ul{
	padding: 5px 10px;
	margin:40px 0 -30px 0;
	background: #999999;
}
.box ul li{
	font-size: 10px;
	border: 1px solid #e6e6e6;
	margin: 10px 0;
	background: #999999;
}
.box .content{
	overflow: hidden;
}

.box ul {
	margin-bottom: 34px;
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
.p1{
	text-align: center;
	font-size: 12px;
	color: #666666;
}
.p2{
	
}
</style>
