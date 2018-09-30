import Vue from 'vue'
import Vuex from 'vuex'
import Feed from './modules/feed.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { Feed },
    strict: false
})