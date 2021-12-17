import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        meta: {
            title: 'Main Page',
        },
        component: () => import('../views/Main')
    },
    {
        path: '/schemes',
        name: 'Schemes',
        meta: {
            title: 'Scheme Main Page',
        },
        component: () => import('../views/Schemes')
    },
    {
        path: '/schemes/:schemeId/members',
        name: 'Members',
        meta: {
            title: 'Member Page',
        },
        component: () => import('../views/Members')
    },
    {
        path: '/schemes/:schemeId/members/new',
        name: 'MemberForm',
        meta: {
            title: 'Member Form Page',
        },
        component: () => import('../views/MemberForm')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
