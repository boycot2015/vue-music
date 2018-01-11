<template>
    <div>
      <ul class="mvlist">
            <li v-for="(item,index) in mvList" :key="index">
                <router-link :to="'/videoplayer/'+item.id">
                    <img :src="item.cover" alt="">
                    <p>{{item.briefDesc}}</p>
                </router-link>
            </li>
      </ul>
   </div>
</template>  
<style scoped>
   .mvlist{
       list-style: none;
       padding: 0;
       margin: 0;
   }
   .mvlist li{
       width: 100%;
   }
   .mvlist li img{
       width: 100%;
   }
</style>
   
<script>  
   export default {
       props:['mvId'],
       data() {
           return {
               mvList:[],
           }
       },
       created() {
           this.getMVData();
       },
       methods: {
           getMVData(){
           const url = `${this.apihost}/mv/first`;
            this.$http.get(url).then(res=>{
            //   console.log(res.body.data);
              this.mvList = res.body.data;
             
            })               
           }
        }
   }
</script>