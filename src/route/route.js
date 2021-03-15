import Vue from 'vue'
import Router from 'vue-router'

//组件模块

import PosOrNeg from "../components/PosOrNeg";
import Time from "../components/Time";
import UserLevel from "../components/UserLevel";
import WordCloud from "../components/WordCloud"
Vue.use(Router)

export default new Router({
    routes: [
        { path:"/",redirect:'/Chart/WordCloud/'},
        { path: '/Chart/PosOrNeg/', name: 'Chart', component: PosOrNeg ,props: true},
        { path: '/Chart/Time/', name: 'Main', component: Time,props: true },
        { path: '/Chart/UserLevel/',  name: 'Header', component: UserLevel,props: true},
        { path: '/Chart/WordCloud/',  name: 'Header', component: WordCloud,props: true},
    ],
})