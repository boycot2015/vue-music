import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        songUrl:''
    },
    getters:{
        getSongUrl(state){
            return state.songUrl;
        }
    },
    mutations:{
        setSongUrl(state,url){
            state.songUrl= url;
        }
    }
})
export default store;