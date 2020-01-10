import Vue from 'vue'
import VueRouter from 'vue-router'

import BeforEach from '../components/beforeEach.vue'

Vue.use(VueRouter)

const routes =[
    {
        path:'/',
        component:BeforEach,
        children:[
            {
                path:'foo2',
                component:() => import('../components/foo2.vue'),
                meta:{requiresAuth:true}
            },
            {
                path:'foo3',
                component:() => import('../components/foo3.vue'),
                meta:{requiresAuth:true}
            },
            {
                path:'foo4',
                component:() => import('../components/foo4.vue')
            },
        ]    
    },
    {
        path:'/login',
        component:() => import('../components/login.vue')
    },
    {
        path:'*',
        component:() => import('../views/404.vue')
    }
]
const router = new VueRouter({
    routes
})

let topath = '';
router.beforeEach((to,from,next)=>{
    //需要进行登验证
    if(to.matched.some(item=>item.meta.requiresAuth)){
        fetch('http://localhost:80/islogin').then(e=>e.json()).then(data=>{
            if(data.code === 0){
                next();
            }else{
                next({
                    path:'./login',
                    replace:true
                })
            }
        })
    }else{
        //不需要登录验证
        next()
    }
})

export default router