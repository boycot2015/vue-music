<template>
   <div>
       <video :src="videoUrl" controls :autoplay="autoplay"></video>
       <div class="about"></div>
       <div class="comments">
           <subcomment :videoId="$route.params.videoId"></subcomment>
       </div>
   </div>
</template>
   
<style scoped>
   video{
       width: 100%;
       /* background-color: #000; */
   }
</style>
   
<script>
   import subcomment from './subcomponents/subcomment';
   import bus from '../bus/bus';
   export default {
       components:{
           subcomment
       },
       data() {
           return {
               videoUrl:'',
               autoplay:''
           }
       },
       created() {
           this.getPlayData();
       },
       methods: {
           getPlayData(){
               console.log(this.$route.params.mvId);
               const url = `${this.apihost}/mv?mvid=${this.$route.params.videoId}`;
               this.$http.get(url).then(res=>{
                   const videoUrl = `${this.apihost}/mv/?url=${res.body.data.brs[480]}`;
                    // console.log(videoUrl);
                   let that = this;
                   this.$http.get(videoUrl).then(res=>{
                    //    console.log(res.url.split('?')[0]+'url?'+res.url.split('?')[1]);
                    that.videoUrl = res.url.split('?')[0]+'url?'+res.url.split('?')[1];
                    that.autoplay="autoplay";
                   }).catch(err=>{

                   })
                //    console.log(this.videoData);
               }).catch(err=>{}) 
           }
       }
   }
</script>