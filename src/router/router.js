import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import home from '../components/home';
import videoplayer from '../components/videoplayer';
import dailysong from '../components/dailysong';
import playlist from '../components/playlist';
import toplist from '../components/toplist';
import playlistdetail from '../components/playlistdetail';
import Djprogram from '../components/Djprogram';
const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/videoplayer/:videoId',component:videoplayer},
        {path:'/dailysong',component:dailysong},
        {path:'/playlist',component:playlist},
        {path:'/toplist',component:toplist},
        {path:'/playlist/detail/:listId',component:playlistdetail},
        {path:'/Djprogram/:radioId',component:Djprogram}
    ]
})
export default router;
