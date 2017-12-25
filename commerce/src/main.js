import Vue from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    error:'http://www.72g.com/templates/72g/images/loading800.gif',
    loading:'http://img.zcool.cn/community/012b3c599276cc0000002129ebff53.gif',
    preLoad:1.3
})

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
//轮播
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)



//路由页面
import home_page from './components/home_page/home_page.vue';
import family_skip from './components/home_page/lists_div_three/family_skip/family_skip.vue';
import recommend from './components/home_page/lists_div_two/recommend/recommend.vue';
import details from './components/home_page/lists_div_two/details/details.vue';

import Woche from './components/home_page/lists_div_one/Woche/Woche.vue';
import NeUe from './components/home_page/lists/NeUe/NeUe.vue';
import abnehmen from './components/home_page/lists/abnehmen/abnehmen.vue';
import personal_center from './components/personal_center/App.vue';
import shopping_cart from './components/shopping_cart/shopping_car.vue';
import shop from './components/shop/shop_indent/shop_indent.vue';
import address from './components/shopping_cart/address.vue';
import compile from './components/shopping_cart/compile.vue';
import order_form from './components/shopping_cart/order_form.vue';

import pay from './components/shopping_cart/pay.vue';

import Ready from './components/Ready/Ready.vue';
import denglu from './components/denglu/denglu.vue';
import forget_the_password from './components/forget_the_password/forget_the_password.vue';
import code from './components/forget_the_password/code.vue';
import find from './components/forget_the_password/find.vue';
import dfk from './components/shop/shop_indent/dfk.vue';
import dfh from './components/shop/shop_indent/dfh.vue';
import yfh from './components/shop/shop_indent/yfh.vue';
import ywc from './components/shop/shop_indent/ywc.vue';
import zhangdan from './components/personal_center/list/zhangdan.vue';
import daijin from './components/personal_center/list/daijin.vue';
import guanyu from './components/personal_center/list/guanyu.vue';
let router = new VueRouter({
	mode: 'history',
	routes:[
		{path:'/',component:home_page},
		{path:'/tab1',component:home_page},
		{path:'/family_skip',component:family_skip},
		{path:'/recommend',component:recommend},
		{path:'/Woche',component:Woche},
		{path:'/NeUe',component:NeUe},
		{path:'/abnehmen',component:abnehmen},
		{path:'/tab2',component:shopping_cart},
		{
			path:'/tab3',
			component:shop,
			children:[
				{	
					path:'/',component:dfk
				},
				{
					name:'num1',
					path:'/dfk',component:dfk
				},
				{
					name:'num2',
					path:'/dfh',component:dfh
				},
				{
					name:'num3',
					path:'/yfh',component:yfh
				},
				{
					name:'num4',
					path:'/ywc',component:ywc
				}
			]

		},
		{path:'/tab4',component:personal_center},
		{path:'/details',component:details},
	
		{path:'/back1',component:shop},
		
		{path:'/address',component:address},
		{path:'/compile',component:compile},
		{path:'/order_form',component:order_form},
		{path:'/pay',component:pay},
		{path:'/ready',component:Ready},
		{path:'/forget_the_password',component:forget_the_password},
		{path:'/code',component:code},
		{path:'/find',component:find},
		{
			name:'registers',
			path:'/registers/:id',
			component: denglu
		},
		{path:'/zhangdan',component:zhangdan},
		{path:'/daijin',component:daijin},
		{path:'/guanyu',component:guanyu}
	]
})
new Vue({
  el: '#app',
	router:router,
  render: h => h(App)
})
