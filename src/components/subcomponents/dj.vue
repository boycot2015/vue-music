<template>
   <div>
       <div class="songlist">
            <div class="title">
                <p>个性电台推荐 ></p>
            </div>
            <div class="content">
                <router-link :to="'/Djprogramlist/'+item.id" v-for="(item,index) in djRadiosList" :key="index">
                    <img :src="item.picUrl" alt="">
                    <p>{{item.name}}</p>
                </router-link>
            </div>
        </div>
   </div>
</template>
   
<style scoped>
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
.title p{
    line-height: 36px;
    margin: 0;
}
</style>
   
<script>
export default {
  data() {
    return {
      djRadiosList: []
    };
  },
  created() {
    this.getDjData();
  },
  methods: {
    getData(api, callback) {
      const url = `${this.apihost}${api}`;
      //    console.log(url);
      this.$http.get(url).then(
        res => {
          callback(res);
        },
        err => {}
      );
    },
    getDjData() {
      this.getData("/dj/recommend", res => {
        // console.log(res.body.djRadios);
        this.djRadiosList = res.body.djRadios;
      });
    }
  }
};
</script>