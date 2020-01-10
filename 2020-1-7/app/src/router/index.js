import Vue from 'vue'
import VueRouter from 'vue-router'

import BeforEach from '../components/beforeEach'

Vue.use(VueRouter)  

const routes = [
    {
        path:'/',
        component:BeforEach,
    },
    {
        path:'/b1',
        component:() => import('../components/b1.vue'),
        //记录从哪里进来
        beforeEnter:(to,from,next) =>{
           if(from.fullPath === '/b2' && to.fullPath === '/b1'){
               next('/');
               alert('局部')
           }else{
               next();
           }
        }
    },
    {
        path:'/b2',
        component:() => import('../components/b2.vue')
    },
    {
        path:'/foo/:id',
        component:() =>import('../components/foo.vue')
    },
    {
        path:'/foo',
        component:() =>import('../components/foo.vue')
    },
    {
        path:'*',
        component:() =>import('../views/404.vue')
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

//切换路由触发

/* 
   next(); 执行之后的路由跳转
   next(false) 中断路由跳转
   next('/') 等同于path  或者使用 next({path:'/'})

   如果有全局的路由，那么全局的优先级大

   全局的beforeEach(要切换路由的时候触发)

   组件中的beforeRouteLeave 离开组件的时候触发

   复用组件使用beforeRouteUpdate 去进行监听

   路由中的beforeEnter  进入路由的时候触发

*/
router.beforeEach((to,from,next)=>{
    if(from.fullPath === '/b2' && to.fullPath === '/b1'){
        alert('全局')
    }else{
        next();
    }
    next();
})

export default router