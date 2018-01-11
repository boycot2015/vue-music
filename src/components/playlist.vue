<template>
   <div>
       <div class="content">
            <router-link :to="'/playlist/detail/'+item.id" v-for="(item,index) in playListData" :key="index">
                <img :src="item.coverImgUrl" alt="">
                <p>{{item.name}}</p>
            </router-link>
        </div>
   </div>
</template>
   
<style scoped>
.content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.content a img {
  width: 100%;
}
.content a {
  display: block;
  width: 48%;
}
.content a:nth-of-type(2n) {
  margin:0 0 0 8px;
}
</style>
   
<script>
export default {
  data() {
    return {
      playListData: {}
    };
  },
  created() {
    this.getplayListData();
  },
  methods: {
    getData(api, callback) {
      const url = `${this.apihost}${api}`;
      //console.log(url);
      this.$http.get(url).then(
        res => {
          callback(res);
        },
        err => {}
      );
    },
    getplayListData() {
      this.getData("/top/playlist", res => {
        // console.log(res.body);
        this.playListData = res.body.playlists;
      });
    }
  }
};
</script>