<template>
   <div>
       <div class="title"><p>全部评论({{totalNum}})</p></div>
       <div class="container">
           <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media" v-for="(item,index) in commentList" :key="index">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" :src="item.user.avatarUrl">
                        <div class="mui-media-body">
                            <p>{{item.user.nickname}}</p>
                            <p class='mui-ellipsis'>{{item.content}}</p>
                        </div>
                    </a>
                </li>
           </ul>
       </div>
   </div>
</template>
   
<style scoped>
   .mui-ellipsis{
       white-space: wrap;
   }
</style>
   
<script>
   
   export default {
       props:['videoId'],
       data() {
           return {
               commentList:[],
               totalNum:0
           }
       },
       created() {
         this.getCommentData();  
       },
       methods: {
           getCommentData(){
               const url = `${this.apihost}/comment/mv?id=${this.videoId}`;
            //    console.log(url);
               this.$http.get(url).then(res=>{
                   this.commentList = res.body.comments;
                   this.totalNum = res.body.total;
               })
               
           }
       }
   }
</script>