import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/NavList/HomePage'
import share from '../components/NavList/Share'
import essay from '../components/NavList/Essay'
import vow from '../components/NavList/VowWall'
import about from '../components/NavList/AboutMe'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
        redirect: '/home'    
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/share',
        name: 'share',
        component: share
    },
    {
        path: '/essay',
        name: 'essay',
        component: essay
    },
    {
        path: '/vow',
        name: 'vow',
        component: vow
    },
    {
        path: '/about',
        name: 'about',
        component: about
    },
]

export default new VueRouter({
    mode: "history",
    routes,
})
