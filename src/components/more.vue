<template>
  <div class="box">
  	<div class="top-nav" id="topBar"><span class="share"></span><span class="back" onclick="javascript:history.go(-1);"></span>更多</div>
	<div class="placeholder-top"></div>
	<!-- top-nav end -->

	<!-- aUlist -->
	<ul class="aUlist">
		<li class="au0" @click="about()"><p>关于国金宝</p></li>
		<li class="au1"  @click="help()"><p>帮助中心</p></li>
		<li class="au2" @click="pingtai()"><p>平台报告</p></li>
		<li class="au3" @click="gonggao()"><p>公告中心</p></li>
		<li class="au5"@click="weixin()">微信公众号：<span class="selectxt">国金宝理财平台</span></li>
		<li class="au4"@click="xinlang()">新浪微博：@<span class="selectxt">银河惠理</span></li>
		
		
		
	</ul>
	
	<footer class="seTfoot aUfoot"><a href="tel:4006223030">400 622 3030</a><br>
	  服务时间：工作日9:00-21:00</footer>
	
	<div class="placeholder-foot"></div>

  </div>
  
</template>

<script>
export default {
  name: 'More',
  data () {
    return {
      
    }
  },
  methods:{
  	about(){
  		this.$router.push('/pingtai')
  	},
  	help(){
  		this.$router.push('/pingtai')
  	},
  	pingtai(){
  		this.$router.push('/pingtai')
  	},
  	gonggao(){
  		this.$router.push('/gonggao')
  	},
  	weixin(){
  		this.$router.push('/pingtai')
  	},
  	xinlang(){
  		this.$router.push('/pingtai')
  	}
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
.aUlist {
    margin-top: 2rem;
    width: 100%;
    line-height: 3rem !important;
    font-size: 0.2rem;
    border-top: 1px solid #d7d7d7;
    overflow: hidden;
}
.aUlist li.au0 {
    background-image: url(../img/more-icon1.png);
    background-position-x: 0.8rem;
    background-position-y: center;
    background-size: 15px;
}
.aUlist li.au1 {
    background-image: url(../img/more-icon2.png);
    background-position-x: 0.8rem;
    background-position-y: center;
    background-size: 15px;
}
.aUlist li.au2 {
    background-image: url(../img/more-icon3.png);
    background-position-x: 0.8rem;
    background-position-y: center;
    background-size: 15px;
}
.aUlist li.au3 {
    background-image: url(../img/more-icon4.png);
    background-position-x: 0.8rem;
    background-position-y: center;
    background-size: 15px;
}
.aUlist li.au4 {
    background-image: url(../img/au2.png);
    background-position-x: 0.8rem;
    background-position-y: center;
    background-size: 15px;
}
.aUlist li.au5 {
    background-image: url(../img/more-icon5.png);
    margin-top: 1rem;
    border-top: 1px solid #d7d7d7;
    background-position-x: 0.8rem;
    background-position-y: center;
    background-size: 15px;
}
.aUlist li {
    padding: 0 4.7% 0 12%;
    border-bottom: 1px solid #d7d7d7;
    background-repeat: no-repeat;
    background-position: 1.5rem 1.5rem;
    background-size: 1.4rem 1.4rem;
    background-color: #fff;
}
.aUfoot {
    bottom: 6.8rem;
}

.seTfoot {
    margin: 3rem 0 2rem 0;
    width: 100%;
    line-height: 1.7rem !important;
    text-align: center;
   font-size: 0.4rem;
    color: #999;
    overflow: hidden;
}
.seTfoot a {
    padding-left: 1.3rem;
    color: #999;
    background: url(/resources/images/weixin2.0/myAccount/set/tel.png) left no-repeat;
    background-size: 0.8rem 1.1rem;
    
}

a {
    text-decoration: none;
    blr: expression(this.onFocus = this.blur ());
}
</style>
