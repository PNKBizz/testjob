import Vue from 'vue'
import VueRouter from 'vue-router'
import Feed from './pages/feed.vue'
import Info from './pages/info.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    routes: [
        { path: '/', alias: '/info', component: Info, name: 'Информация' },
        { path: '/feed', component: Feed, name: 'Галлерея' }
    ],

})
