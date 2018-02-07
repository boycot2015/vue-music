import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import home from '../components/home';
import videoplayer from '../components/videoplayer';
import dailysong from '../components/dailysong';
import playlist from '../components/playlist';
import toplist from '../components/toplist';
import playlistdetail from '../components/playlistdetail';
import Djprogramlist from '../components/Djprogramlist';
import login from '../components/user/login';
import register from '../components/user/register';
import userinfo from '../components/user/userinfo';
const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/videoplayer/:videoId',component:videoplayer},
        {path:'/dailysong',component:dailysong},
        {path:'/playlist',component:playlist},
        {path:'/toplist',component:toplist},
        {path:'/playlist/detail/:listId',component:playlistdetail},
        {path:'/Djprogramlist/:listId',component:Djprogramlist},
        {path:'/login',component:login},
        {path:'/register',component:register},
        {path:'/userinfo',component:userinfo},
    ]
})
export default router;
