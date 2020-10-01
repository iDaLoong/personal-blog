import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'    
    },
    {
        path: '/home',
        component: () => import('./components/NavList/HomePage.vue')
    },
    {
        path: '/share',
        component: () => import('./components/NavList/Share')
    },
    {
        path: '/essay',
        component: () => import('./components/NavList/Essay')
    },
    {
        path: '/vow',
        component: () => import('./components/NavList/VowWall')
    },
    {
        path: '/about',
        component: () => import('./components/NavList/AboutMe')
    },
]

export default new VueRouter({
    mode: "history",
    routes,
})
