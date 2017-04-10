import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Layout from './components/layout'
import Index from './pages/index'
import Detail from './pages/detail'
import DetailAnalysis from './pages/detail/analysis'
import DetailCount from './pages/detail/count'
import DetailForecast from './pages/detail/forecast'
import DetailPublish from './pages/detail/publish'


Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Index
		},
		{
			path: '/detail',
			component: Detail,
			children: [
				{
					path: 'analysis',
					component: DetailAnalysis
				},
				{
					path: 'count',
					component: DetailCount
				},
				{
					path: 'forecast',
					component: DetailForecast
				},
				{
					path: 'publish',
					component: DetailPublish
				},
			]
		}
	]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
