<template>
  <div>
    <div v-if="isBack" class="topCover">
      <div class="top">
        <img :src="coverData.dj.backgroundUrl" alt="">
        <div class="text">
          <p>{{coverData.dj.description}}</p>
          <img :src="coverData.dj.avatarUrl" alt="">
          <span>{{coverData.dj.nickname}} ></span>
        </div>
      </div>
      <div class="bottom">
        <span>收藏({{coverData.radio.subCount}})</span>
        <span>评论({{coverData.radio.subscribedCount}})</span>
        <span>分享({{coverData.radio.shareCount}})</span>
        <span>下载({{coverData.radio.trackCount}})</span>
      </div>
    </div>
    <div class="listcontent">
      <mt-cell :title="`播放全部(${totalCount})`" is-link>
        <span style="color: green">多选</span>
      </mt-cell>
      <ul class="mui-table-view">
        <li @click="getSongById(item.id)" v-for="(item,index) in DJlist" :key="item.id" class="mui-table-view-cell">
          <span>{{index+1}} {{item.name}}</span>
          <p>{{item.channels[0]}} - {{item.description}}</p>
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
.listcontent {
  margin-bottom: 50px;
}
</style>
   
<script>
import { Indicator } from "mint-ui";
export default {
  data() {
    return {
      DJlist: [],
      totalCount: 0,
      coverData: {},
      isBack: false
    };
  },
  beforeCreate() {
    //加载动画开始
    Indicator.open({
      spinnerType: "fading-circle"
    });
  },
  created() {
    this.getData();
  },
  updated() {
    //    this.getData();
  },
  methods: {
    getData() {
      let url = `${this.apihost}/dj/program?rid=${this.$route.params.listId}`;
      this.$http.get(url).then(
        res => {
          //加载动画结束
          Indicator.close();
          this.isBack = true;
          // console.log(res.body);
          this.coverData = res.body.programs[0];
          this.totalCount = res.body.count;
          this.DJlist = res.body.programs;
        },
        err => {}
      );
    }
  }
};
</script>