<template>
  <div class="box">
  	<div class="top-nav" id="topBar">
		<span class="share"></span><span class="back"
			onclick="javascript:history.go(-1);"></span>注册
	</div>
	<div class="placeholder-top"></div>
	<!-- top-nav end -->

	<!-- reGlist -->
	<ul class="reGlist inputeach">
		<li class="reGlist0" id="coloseBlur">
			<span class="dlog"></span>
			<span class="reset"></span> <input name="" type="tel" class="inputbox tel" autocomplete="off" id="frontPhoneNo" placeholder="请输入您的手机号码" v-model="tel">
		</li>
		
		
		<li class="reGlist2">
			<span class="dlog"></span>
			<span class="eyes"></span> 
			<input name="" Type="password" class="inputbox pwd isdel" autocomplete="off" id="UserPassword" maxlength="16" placeholder="请设置6-16位登录密码" v-model="pass">
		</li>
	</ul>
	<!-- reGlist end -->

	<!-- reGbtn -->
	
	<input name="" type="button" class="btn btnGray" value="提交注册" id="User" @click="register()">

  </div>
  
</template>

<script>
	import axios from 'axios'
export default {
  name: 'myRegister',
  data () {
    return {
      tel: '',
     	pass:''
    }
  },
  methods:{
  	
  	register(){
  		var $this = this;
  		axios.post('http://localhost:3000/api/register',{
  			tel:$this.tel,
  			pass:$this.pass,
  			flag:1
  		})
  		var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
  		if($this.tel == '' || $this.pass == ''){
  			alert('请填写手机号和密码')
  		}else if(!myreg.test($this.tel)){
  			alert('请填写正确的手机号')
  		}else if($this.pass.length<6 && $this.pass.length>16){
  			alert('密码格式不对')
  		}else{
  			$this.$router.push('/myLogin')
  		}
  		
  		//console.log($this.tel)
  	}
 	}
}
</script>


<style scoped>

.box{
	background: #F2F2F2;
	height: 568px;
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
.top-nav span.share {
    float: right;
}

.top-nav span {
    display: block;
    float: left;
    width: 4rem;
    height: 1rem;
    margin-top: 12px;
}
.top-nav span.back {
    background: url(../img/back.png) center no-repeat;
    background-size: 1.1rem 1.9rem;
}
.placeholder-top {
    width: 100%;
    height: 4.4rem;
}
.reGlist {
    margin-top:-1rem;

}
.inputeach {
    width: 100%;
    line-height: 4.3rem !important;
    font-size: 1.3rem;
    color: #323232;
    border-top: 1px solid #dfdfdf;
    overflow: hidden;
}
.inputeach li {
    position: relative;
    padding: 0 4.7%;
    width: 90.6%;
    border-bottom: 1px solid #dfdfdf;
    background: #fff;
    overflow: hidden;
}
.reGlist li span.dlog {
    left: 14%;
}

.inputeach li span.dlog {
    position: absolute;
    left: 30%;
    top: 0;
    color: #c7c7c7;
}

.reGlist li span {
    display: block;
    position: absolute;
}
.reGlist li span.reset {
    right: 0;
    top: 0;
    padding: 1.7rem 1.9rem;
    width: 1.1rem;
    height: 1.1rem;
    background: url(../img/reset.png) center no-repeat;
    background-size: 1.1rem 1.1rem;
        background-position-y: 20px;
}
.reGlist li span {
    display: block;
    position: absolute;
}
.reGlist li.reGlist0 input.inputbox {
    background: url(../img/tel.png) 0.2rem 1.1rem no-repeat;
    background-size: 1.1rem 2rem;
        background-position: 10px;
}
.reGlist li input.inputbox {
    padding: 12px 9.5%;
    width: 81%;
}

.inputeach li input.inputbox {
    
    
    width: 50%;
    font-size: 1.3rem;
    color: #323232;
    overflow: hidden;
}

input {
    font-size: 1.2rem;
    border: 0;
    border-radius: 0;
    background: none;
    -webkit-appearance: none;
    display: block;
}
.inputeach li {
    position: relative;
    padding: 0 4.7%;
    width: 90.6%;
    border-bottom: 1px solid #dfdfdf;
    background: #fff;
    overflow: hidden;
}
.reGlist li span.dlog {
    left: 14%;
}

.inputeach li span.dlog {
    position: absolute;
    left: 30%;
    top: 0;
    color: #c7c7c7;
    font-size: 14px;
    line-height: 48px;
        left: 15%;
}

.reGlist li span {
    display: block;
    position: absolute;
}
.reGlist li span.eyes {
    right: 0;
    top: 0;
    padding: 1.5rem 1.6rem;
    width: 1.7rem;
    height: 1.2rem;
    background: url(../img/eyesClose.png) center no-repeat;
    background-size: 1.7rem 1.2rem;
        background-position-y: 20px;
}

.reGlist li.reGlist2 input.inputbox {
    background: url(../img/pwd.png) 0.4rem 1.5rem no-repeat;
    background-size: 0.8rem 1.6rem;
    background-position: 10px;
}
.lgNbox {
    margin: 0 auto 1.8rem;
    width: 90.6%;
    line-height: 3.2rem !important;
    text-align: right;
    font-size: 10px;
}
.lgNbox a {
    padding: 0 0.9rem;
    color: #f24e4c;
    text-decoration: none;
}
.btnGray {
    background: #aaa;
}
.btn {
    margin: 0.6rem auto;
    width: 90.6%;
    height: 2.4rem;
    line-height: 2.4rem !important;
    text-align: center;
    font-size: 0.3rem;
    color: #fff;
    border-radius: 0.8rem;
    background-color: #666;
}
.seTfoot {
    margin: 3rem 0 2rem 0;
    width: 100%;
    line-height: 1.7rem !important;
    text-align: center;
  	font-size: 12px;
    color: #999;
    overflow: hidden;
}
.seTfoot a {
	font-size: 12px;
    padding-left: 1.3rem;
    color: #999;
    background: url(/resources/images/weixin2.0/myAccount/set/tel.png) left no-repeat;
    background-size: 0.8rem 1.1rem;
    text-decoration: none;
}
.reGlist li span.dlog {
    left: 14%;
}
basic2.0.css:241
.inputeach li span.dlog {
    position: absolute;
    left: 30%;
    top: 0;
    color: #c7c7c7;
}
.reGlist li span {
    display: block;
    position: absolute;
}
.inputeach li input.smsBtn {
    position: absolute;
    right: 0;
    top: 1rem;
    width: 29.1%;
    border-left: 1px solid #b7b7b7;
    color: #f24e4c;
    z-index: 8;
    font-size: 12px
}

.inputeach li input.yzmBtn {
}

input {
    font-size: 1.2rem;
    border: 0;
    border-radius: 0;
    background: none;
    -webkit-appearance: none;
    display: block;
}
.reGlist li.reGlist1 input.inputbox {
    background: url(../img/sms.png) 0 1.7rem no-repeat;
    background-size: 1.5rem 1rem;
    background-position: 1px;
}
registered2.0.css:7
.reGlist li input.inputbox {
    padding: 1.5rem 9.5%;
    width: 81%;
}
.inputeach .voice {
    background: #f1f1f1;
    font-size: 12px;
    color: #666;
}
.inputeach .voice .voiceBtn {
    color: #0363ae;
    text-decoration: underline;
    display: inline;
    font-size: 1.1rem;
    font-size: 12px;
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:#999999;
    font-size: 12px;
    
}
</style>
