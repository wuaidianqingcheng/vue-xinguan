<template>
  <div class="box">
  	<div class="top-nav" id="topBar"><span class="share"></span><span class="back" @click="back()"></span>用户登录</div>
<div class="placeholder-top"></div>
<ul class="reGlist inputeach">
  <li class="reGlist0"><span class="dlog"></span><span class="reset"></span>
    <input name="" type="text" class="inputbox" autocomplete="off"  id="account" placeholder="请输入账号或手机号" v-model="tel">
  </li>
<li class="reGlist2"><span class="dlog"></span><span class="eyes"></span>
    <input name="" type="password"  class="inputbox pwd isdel" autocomplete="off" id="pwd"  placeholder="请输入登录密码" v-model="pass">
  </li>

</ul>
<aside class="lgNbox"><router-link to="/myRegister"><a >注册</a></router-link><a href="#">忘记密码</a></aside>
<input name="" type="button" class="btn btnGray" value="登录" id="User" @click="login()">
<footer class="seTfoot"><a href="tel:4006223030">400 622 3030</a><br>
  服务时间：工作日9:00-21:00</footer>

  	
  </div>
  
</template>

<script>
import axios from 'axios'
import store from '../store/store.js'
export default {
  name: 'myLogin',
  data () {
    return {
     tel: '',
     pass:'',
     code:''
    }
  },
  computed:{
  	count(){
  		return store.state.tel
  	}
  },
  
  methods:{
  	back(){
  		this.$router.push('/back')
  	},
  	login(){
  		var $this = this;
  		axios('http://localhost:3000/api/register')
  			.then(function(data){
  				
  				//console.log(data.data)
  				/*if($this.tel == newtel && $this.pass == newpass){
  					$this.$router.push('/main')
  				}else{
  					alert("手机号或密码错误，请重新输入")
  				}*/
  				let code = data.data;
  				for(var i in code){
  					if(code[i].tel == $this.tel && code[i].pass == $this.pass){
  						$this.$router.push('/main')
  						store.commit('In',$this.tel)
  					}else{
  						
  					}
  				}
  			})
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
    
    
    width: 60%;
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
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:#999999;
    font-size: 12px;
    
}
</style>
