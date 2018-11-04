import Vue from 'vue'
import Router from 'vue-router'
import Gift from './components/Gift.vue'
import Gift2 from './components/Gift2.vue'
import Gift3 from './components/Gift3.vue'
import Records from './components/Records.vue'

Vue.use(Router)

const router = new Router({ routes: [{
    path: '/',
    name: 'gift',
    component: Gift,
    beforeEnter: (to, from, next) => {
        next()
    }
}, {
    path: '/0.1',
    name: 'gift3',
    component: Gift3
}, {
    path: '/1',
    name: 'gift2',
    component: Gift2
}, {
    path: '/records',
    name: 'records',
    component: Records
}
] })

router.beforeEach((to, from, next) => { /* 全局前置钩子 */

    next()
})
router.beforeResolve((to, from, next) => { /* 全局解析守卫 */

    next()
})

export default router