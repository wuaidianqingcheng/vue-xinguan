<template>
<footer>
    <ul class="foot-nav">
  			<router-link to='/main' tag='li' class="foot0" @click='change0()'>首页</router-link>
  			<router-link to='/goods' tag='li' class="foot1" @click='change1()'>理财产品</router-link>
  			<router-link  >我的账户</router-link>
  			<router-link to='/more' tag='li' class="foot3" @click='change3()'>更多</router-link>
  	</ul>
</footer>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style>

</style>
