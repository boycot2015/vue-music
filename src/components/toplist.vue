<template>
   <div>
     <p class="title">官方榜</p>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in topListData" :key="item.id">
            <router-link :to="'/playlist/detail/'+item.id" >
                <img class="mui-media-object mui-pull-left" :src="item.coverImgUrl">
                <div class="mui-media-body">
                    <p class='mui-ellipsis'><span>1. </span>{{item.tracks[0].name}} - {{item.tracks[0].ar[0].name}}</p>
                    <p class='mui-ellipsis'><span>2. </span>{{item.tracks[1].name}} - {{item.tracks[1].ar[0].name}}</p>
                    <p class='mui-ellipsis'><span>3. </span>{{item.tracks[2].name}} - {{item.tracks[2].ar[0].name}}</p>
                </div>
            </router-link>
        </li>
      </ul> 
      <p class="title">全球榜</p>
      <div class="content">
        <router-link :to="'/playlist/detail/'+item.id" v-for="(item,index) in globalData" :key="index">
            <img :src="item.coverImgUrl" alt="">
            <p>{{item.name}}</p>
        </router-link>
      </div>
   </div>
</template>
   
<style scoped>
.mui-table-view-cell {
  padding: 11px 8px;
}
.mui-table-view .mui-media-object {
  max-width: 115px;
  height: 115px;
}
p.title {
  line-height: 30px;
  margin: 0;
  padding: 0 5px;
  font-size: 16px;
  border-left: 2px solid red;
  background-color: #fff;
  color: #333;
}
p.mui-ellipsis {
  line-height: 38px;
  font-size: 16px;
  color: #333;
}
.content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.content a {
  width: 32%;
}
.content a img {
  width: 100%;
}
</style>
   
<script>
import { Indicator } from 'mint-ui';
export default {
  data() {
    return {
      topListData: [],
      globalData: []
    };
  },
  beforeMount(){
    //加载动画开始
      Indicator.open({
        spinnerType: 'triple-bounce'
      });
  },
  created() {  
    for (let j = 0; j < 5; j++) {
      this.getTopListData(j);
    }
    for (let i = 5; i <= 23; i++) {
      this.getGlobalData(i);
    }
  // console.log(this.globalData);
    // this.getTopListData(0);
    // this.getTopListData(1);
    // this.getTopListData(2);
    // this.getTopListData(3);
    // this.getTopListData(4);
  },
  methods: {
    getData(api, callback) {
      const url = `${this.apihost}${api}`;
      //console.log(url);
      this.$http.get(url).then(
        res => {
           
          callback(res);
          //加载动画结束
        Indicator.close();
        },
        err => {}
      );
    },
    getTopListData(id) {
      this.getData("/top/list?idx=" + id, res => {
        this.topListData.push(res.body.playlist);
        // console.log(res.body.playlist.tracks.slice(1,4));
      });
    },
    getGlobalData(id) {
      this.getData("/top/list?idx=" + id, res => {
        this.globalData.push(res.body.playlist);
        // console.log(res.body.playlist.tracks.slice(1,4));
      });
    }
  }
};
</script>