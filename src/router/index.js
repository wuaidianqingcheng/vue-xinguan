import Vue from 'vue'
import Router from 'vue-router'
import myLogin from '@/components/myLogin'
import myRegister from '@/components/myRegister'
import Main from '@/components/main'
import Goods from '@/components/goods'
import Myself from '@/components/myself'
import More from '@/components/more'
import Header from '@/components/header'
import Detail from '@/components/detail'
import PingTai from '@/components/PingTai'
import GongGao from '@/components/GongGao'
import ggDetail from '@/components/ggDetail'
import toDe from '@/components/tode'



import { Swipe, SwipeItem } from 'mint-ui';
import axios from 'axios'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: myLogin
    },
    {
    	path:'/myLogin',
      component: myLogin,
      children:[
      	{
      		path:'/back',
      		redirect:'/main'
      	}
      ]
    },
    {
    	path:'/myRegister',
    	component:myRegister
    },
    {
    	path:'/main',
    	component:Main,
    	children:[
		    {
		    	path:'/main',
		    	component:Header
		    },{
		    	path:'/detail',
		    	component:Detail
		    },{
		    	path:'/more',
		    	component:More
		    }
    	]
    },
    {
    	path:'/goods',
    	component:Main,
    	children:[
    	{
    		path:'/goods',
    		component:Goods,
    		children:[
    			{path:"/detail",
    			component:Detail}
    		]
    	},
    	{
		    path:'/detail:id',
		    component:Detail
		    }
    	]
    },
    {
    	path:'/myself',
    	component:myLogin
    },
    {
    	path:'/mycenter',
    	component:Myself,
    
    		
    },
    {
    		path:"/tode",
    		component:toDe
    }
    ,
    		{
    			path:"/a",
    			component:Header
    		},
    		{
    			path:"/b",
    			component:Goods
    		},
    		{
    			path:"/c",
    			component:Myself
    		},
    		{
    			path:"/d",
    			component:More
    		},
    		{
    			path:"/detail",
    			component:Detail
    		},
    		
    {
    	path:'/more',
    	component:Main,
    	children:[
    		{
    			path:'/more',
    			component:More
    		},
    		{
    			path:'/pingtai',
    			component:PingTai
    		},
    		{
    			path:'/gonggao',
    			component:GongGao
    		},
    		{
    				path:'/ggdetail',
    				component:ggDetail
    			}
    	]
    }
  ]
})
