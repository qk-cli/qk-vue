import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:() => import('@/pages/home/index.vue')
    },
    {
        path:'/todo',
        component:() => import('@/pages/todo/index.vue')
    }
]

export default new VueRouter({
    mode:'history',
    routes
})