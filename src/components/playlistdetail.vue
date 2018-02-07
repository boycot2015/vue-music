<template>
   <div>
        <div class="topCover" v-if="isBack">
            <div class="top">
                <img :src="coverData.coverImgUrl" alt="">
                <div class="text">
                    <p>{{coverData.name}}</p>
                    <img :src="coverData.avatar" alt="">
                    <span>{{coverData.creator}} ></span>
                </div>         
            </div>
            <div class="bottom">
                <span>收藏({{coverData.subscribedCount}})</span>
                <span>评论({{coverData.commentCount}})</span>
                <span>分享({{coverData.shareCount}})</span>
                <span>下载({{coverData.playCount}})</span>
            </div>
        </div>
        <div class="listcontent" v-if="isBack">
            <mt-cell :title="`播放全部(${coverData.trackCount})`"  is-link>
                <span style="color: green">多选</span>
            </mt-cell>
            <ul class="mui-table-view">
                <li @click="getSongById(item.id)" v-for="(item,index) in songList" :key="item.id" class="mui-table-view-cell">
                    <span>{{index+1}} {{item.name}}</span> 
                    <p>{{item.ar[0].name}} - {{item.al.name}}</p>
                    <span class="mui-badge mui-badge-primary"></span>
                </li>
            </ul>        
        </div> 
   </div>
</template>
   
<style scoped>
.topCover {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
}
.top {
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.top > img {
  margin-right: 20px;
  flex: 1;
  width: 40%;
}
.top .text {
  flex: 1;
}
.top .text img {
  width: 30px;
  border-radius: 50%;
  vertical-align: bottom;
}
.top .text span {
  font-size: 12px;
}
.bottom {
  padding: 0 10px;
}
.bottom span {
  margin: 0 5px;
}
.mint-cell {
  margin: 1px 0;
}
.listcontent{
  margin-bottom:50px;
}
</style>
   
<script>
import bus from '../bus/bus';
import { Indicator } from 'mint-ui';
export default {
  data() {
    return {
      coverData: {},
      songList: [],
      audioUrl:'',
      isBack:false
    };
  },
  beforeCreate(){
    //加载动画开始
      Indicator.open({
        spinnerType: 'fading-circle'
      });
  },
  created() {
    this.getlistDetailData();  
  },
  methods: {
    getlistDetailData() {      
      const url = `${this.apihost}/playlist/detail?id=${this.$route.params
        .listId}`;
      //    console.log(url);
      this.$http.get(url).then(res => {
        //加载动画结束
        Indicator.close();
        this.isBack = true;
        this.coverData = res.body.playlist;
        // console.log(this.songList);
        this.coverData.avatar = res.body.playlist.creator.avatarUrl;
        this.coverData.creator = res.body.playlist.creator.nickname;
        this.songList = res.body.playlist.tracks;
      });
    },
    getSongById(id) { 
      const url = `${this.apihost}/music/url?id=${id}`;
      this.$http
        .get(url)
        .then(res => {        
          bus.$emit('pushUrl',res.body.data[0].url);
        })
        .catch(err => {});
    }
  }
};
</script>