import Vue from 'vue'
import VueRouter from "vue-router";
import index from './components/index.vue'
import dashboard from './components/dashboard.vue'
import tomcat from './components/tomcat.vue'
import node from './components/node.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/dashboard',
    component:index,
    children:[
      {
        path:'dashboard',
        component:dashboard, 
        name: 'dashboard',
        meta:[ 
          {name: 'dashboard',url: '/dashboard'}
        ]
      },
      {
        path:'/deploy/tomcat',
        component:tomcat,
        name:'tomcat',
        meta:[
          {name: 'deploy'},
          {name: 'tomcat',url: '/deploy/tomcat'}
        ]
      },
      {
        path:'/deploy/node',
        component:node,
        name:'node',
        meta:[
          {name: 'deploy'},
          {name: 'node', url: '/deploy/node'}
        ]
      }
    ]
  }
]

var router =  new VueRouter({
    mode: 'history',
    routes
})


export default router
