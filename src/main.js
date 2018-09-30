import Vue from 'vue'
import { Button, Input, Container, Header, Footer, Main, Aside, Card, Carousel, CarouselItem, Pagination } from 'element-ui'

Vue.use(Pagination);    Vue.use(Aside);
Vue.use(Button);        Vue.use(Input);         Vue.use(Container);
Vue.use(Header);        Vue.use(Footer);        Vue.use(Main);
Vue.use(Card);          Vue.use(Carousel);      Vue.use(CarouselItem);

import Store from './store/index.js'
import Router from './router/router.js'
import Layout from './layouts/app.vue'

window.App = new Vue({
    router: Router,
    store: Store,
    component: Layout,
    render (h) { return h(Layout) }
});
App.$mount('#app')