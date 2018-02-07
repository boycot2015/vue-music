<template>
    <div class="homeRoot">
        <mt-navbar :class="ishome?'page-part is-fixed':'page-part'" v-model="selected">
            <mt-tab-item :id="1">
                <span :class="isActive?'active':''">音乐</span>
            </mt-tab-item>
            <mt-tab-item :id="2">
                <span>视频</span>
            </mt-tab-item>
            <mt-tab-item :id="3">
                <span>电台</span>
            </mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item :id="1">
                <div class="lunbobox">
                    <mt-swipe :auto="3000">
                        <mt-swipe-item v-for="(item,index) in imgData" :key="index">
                            <img :src="item.pic" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
                <div class="category_list">
                    <router-link to="/fm">
                        <i></i>
                        <span>私人FM</span>
                    </router-link>
                    <router-link to="/dailysong">
                        <i></i>
                        <span>每日推荐</span>
                    </router-link>
                    <router-link to="/playlist">
                        <i></i>
                        <span>歌单</span>
                    </router-link>
                    <router-link to="/toplist">
                        <i></i>
                        <span>排行榜</span>
                    </router-link>
                </div>
                <div class="songlist">
                    <div class="title">
                        <p>推荐歌单 ></p>
                    </div>
                    <div class="content">
                        <router-link :to="'/playlist/detail/'+item.id" v-for="(item,index) in recommendData" :key="index">
                            <img :src="item.coverImgUrl" alt="">
                            <p>{{item.name}}</p>
                        </router-link>
                    </div>
                </div>

                <div class="songlist">
                    <div class="title">
                        <p>最新音乐 ></p>
                    </div>
                    <div class="content">
                        <router-link :to="'/playlist/detail/'+item.id" v-for="item in newSongData" :key="item.id">
                            <img :src="item.coverImgUrl" alt="">
                            <p>{{item.name}}</p>
                        </router-link>
                    </div>
                </div>
                <div class="songlist ">
                    <div class="title">
                        <p>独家放送 ></p>
                    </div>
                    <div class="content only">
                        <router-link :to="'/videoplayer/'+item.id" v-for="(item,index) in privateContent" :key="index">
                            <img :src="item.picUrl" alt="">
                            <p>{{item.name}}</p>
                        </router-link>
                    </div>
                </div>
                <div class="songlist">
                    <div class="title">
                        <p>最新MV ></p>
                    </div>
                    <div class="content mv">
                        <router-link :to="'/videoplayer/'+item.id" v-for="(item,index) in recMVList" :key="index">
                            <img :src="item.picUrl" alt="">
                            <p>{{item.name}}</p>
                            <span>{{item.artistName}}</span>
                        </router-link>
                    </div>
                </div>
                <div class="songlist">
                    <div class="title">
                        <p>精选电台 ></p>
                    </div>
                    <div class="content">
                        <router-link :to="'/Djprogramlist/'+item.id" v-for="(item,index) in DjprogramData" :key="index">
                            <img :src="item.picUrl" alt="">
                            <p>{{item.name}}</p>
                        </router-link>
                    </div>
                </div>
                <button type="button" class=" mui-btn mui-btn-danger mui-btn-outlined">查看更多</button>
            </mt-tab-container-item>
            <mt-tab-container-item :id="2">
                <submv></submv>
            </mt-tab-container-item>
            <mt-tab-container-item :id="3">
                <subdj></subdj>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
   
<style scoped>
.homeRoot {
  /* transform: translateY(40px); */
  margin-top: 90px;
}
.mui-btn.mui-btn-danger {
  text-align: center;
  width: 90%;
  margin: 15px;
}
a {
  text-decoration: none;
  color: #000;
}
.category span {
  color: #333;
  padding: 4px 15px;
  font-size: 14px;
}
.category span.active {
  border-bottom: 2px solid red;
}
.mint-swipe {
  width: 100%;
  height: 150px;
}
.mint-navbar .mint-tab-item {
  padding: 10px 0;
}
.mint-navbar.page-part.is-fixed {
  /* transform: translateY(40px); */
  margin-top: 40px;
  /* transition: all 0.5s; */
}
.mint-swipe-indicator {
  opacity: 0.4;
}
.mint-swipe-indicator.is-active {
  background-color: red;
  opacity: 1;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}
.category_list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
.category_list span {
  font-size: 16px;
}
.title p {
  padding: 0 5px;
  margin: 5px;
  font-size: 14px;
}
.content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.content a {
  display: block;
  width: 31%;
}
.content a:nth-of-type(2),
.content a:nth-of-type(5) {
  margin: 0 8px;
}
.content a img {
  width: 100%;
}
.content.mv a:nth-of-type(2n) {
  margin: 0 0 0 8px;
}
.content.mv a {
  flex: 42%;
}
.content.mv a span {
  font-size: 12px;
  color: #ccc;
}
.content.only a {
  flex: 45%;
  margin: 0;
}
.content.only a:nth-of-type(1) {
  margin-right: 10px;
}
.content.only a:nth-of-type(3) {
  flex-basis: 100%;
}
.content a p {
  font-size: 14px;
  line-height: 16px;
  margin: 5px 0;
}

.songlist {
  border-bottom: 1px solid #ccc;
}
</style>
   
<script>
import subdj from "./subcomponents/dj";
import submv from "./subcomponents/mv";
import { Indicator } from "mint-ui";
export default {
  components: {
    subdj,
    submv
  },
  data() {
    return {
      imgData: {},
      recommendData: {},
      newSongData: {},
      recMVList: {},
      privateContent: {},
      DjprogramData: {},
      isActive: true,
      selected: 1,
      value: 1,
      ishome: true
    };
  },
  created() {
    //加载动画开始
    Indicator.open({
      spinnerType: "triple-bounce"
    });
    this.getImageData();
    this.getRecommend();
    this.getnewSong();
    this.getrecMV();
    this.getPrivatecontent();
    this.getDjprogram();
    // this.fixedBar();
  },
  beforeDestroy() {
    this.ishome = false;
  },
  methods: {
    getData(api, callback) {
      const url = `${this.apihost}${api}`;
      //    console.log(url);
      this.$http.get(url).then(
        res => {
          callback(res);
          //加载动画结束
          Indicator.close();
        },
        err => {}
      );
    },
    getImageData() {
      this.getData("/banner", res => {
        //  console.log(res.body);

        this.imgData = res.body.banners;
      });
    },
    getRecommend() {
      this.getData("/top/playlist?limit=6&order=hot", res => {
        //  console.log(res.body);
        this.recommendData = res.body.playlists;
      });
    },
    getnewSong() {
      this.getData("/top/playlist?limit=6&order=new", res => {
        //  console.log(res.body);
        this.newSongData = res.body.playlists;
      });
    },
    getrecMV() {
      this.getData("/personalized/mv", res => {
        //  console.log(res.body);
        this.recMVList = res.body.result;
      });
    },
    getPrivatecontent() {
      this.getData("/personalized/privatecontent", res => {
        //  console.log(res.body);
        this.privateContent = res.body.result;
      });
    },
    getDjprogram() {
      this.getData("/personalized/djprogram", res => {
        //  console.log(res.body);
        this.DjprogramData = res.body.result;
      });
    },
    fixedBar() {
      let that = this;
      window.onscroll = function() {
        console.log(1);

        that.ishome = true;
      };
    }
  }
};
</script>