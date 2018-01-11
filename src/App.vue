<template>
   <div class="root">
    <!-- 侧滑导航根容器 -->
     <div  :class="isShow?'userSide show':'userSide'">
       <div @click="hideSide" class="mask">           
       </div>
       <div class="container"></div> 
     </div>
    <!-- 主页面标题 -->
    <header class="mui-bar mui-bar-nav">
      <a @click="showUser" class="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
      <router-link to="/home">
        <h1 class="mui-title">netease</h1>
      </router-link>
    </header>
    <div class="body">
      <router-view></router-view>
    </div>
    
    <div class="footer">
      <mt-tabbar fixed>
        <mt-tab-item id="tab1">
            <img width="30" src="./static/images/menu10.png" alt="">
            <div class="right">
              <p>红颜</p>
              <span>左右滑动可以切换歌曲</span>
            </div>
            </mt-tab-item>
            <mt-tab-item id="tab2">
                <i class="mui-icon mui-icon-refresh"></i>
                <audio :src="audioUrl" :autoplay="autoplay"></audio>
            </mt-tab-item>
            <mt-tab-item id="tab2" >
              <i class="mui-icon mui-icon-bars" @click="popList"></i>
                <mt-actionsheet :cancelText="''" :actions="actions" v-model="sheetVisible">    
                </mt-actionsheet>
            </mt-tab-item>
          </mt-tabbar>
    </div>
   </div>
</template>
   
<style >
  body{
    margin: 0;
    padding: 0;
  }
  .userSide{
    width: 100%;
    height: 110%;
    margin-top: -90px;
    position: fixed;
    z-index: 999;
    transform: translateX(-100%);
    transition: all 0.5s;
  }
  .mask{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);    
  }
  .userSide.show{
    transform: translateX(0%);
  }
  .userSide .container{
    width: 70%;
    height: 100%;
    position: absolute;
    background: #fff;
  }
  .mui-bar.mui-bar-nav{
    top: -1px;
    -webkit-box-shadow: none;
  }
  .mui-off-canvas-wrap{
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
  }
  .mui-off-canvas-left{
    width: 300px;
    transform: translateX(300px);
  }
  .mui-content.mui-scroll-wrapper{
    height: 100%;
    
  }
  .mint-header.is-fixed{
    background-color: red;
  }
  .mint-navbar .mint-tab-item.is-selected{
    color: red;
    border-bottom: 2px solid red;
    margin-bottom: -1px;
  }
   .mint-header-title{
     font-size: 18px;
   }
   .body{
     margin: 40px 0;
   }
   .mint-tabbar.is-fixed{
     height: 50px;
     display: flex;
   }
   a .mint-tab-item-label{
     line-height: 30px;
     font-size: 16px;
   }
   .footer{
     height: 50px;
     position: fixed;
   }
   .footer .mint-tab-item{
     text-align: center;
      flex: 4;
   }
   .footer img{
     width: 32px;
    margin-top: -8px;
    
   }
   .footer .right{
    height: 46px;
   }
   .footer .right span{
     display: block;
   }
   .mint-tab-item-label{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
   }
   .mint-tab-item-label p{
     margin-bottom: 0;
     margin-top: 5px;
     line-height: 12px;
   }
   .mint-tab-item-label span{
     font-size: 10px;
   }
   .footer .mint-tab-item-label:nth-of-type(1){
     display: flex;
     align-items: center;
     justify-content: space-around;
   }
   .footer .mint-tab-item:nth-of-type(2),
   .footer .mint-tab-item:nth-of-type(3){
     flex: 1;
     padding-top: 10px;
   }
</style>
   
<script>
   export default {
       data() {
           return {
             sheetVisible:false,
             actions:[
               {name:'红颜',method:''},
               {name:'红颜',method:''},
               {name:'红颜',method:''},
               {name:'红颜',method:''},
               {name:'红颜',method:''},
               {name:'红颜',method:''},
               {name:'红颜',method:''},
               {name:'红颜',method:''}
               ],
             cancelText:'',
             isShow:false,
             audioUrl:'',
             autoplay:false
           }
       },
       updated(){
         this.play();
       },
       
       created() {
          
       },
       methods: {
           popList(){
             
               this.sheetVisible = true;
           },
           showUser(){
            //  console.log(this.isShow); 
             document.body.style.overflow = 'hidden';
             this.isShow = !this.isShow;
           },
           hideSide(){
            //  alert(1)
            document.body.style.overflow = 'visible';
             this.isShow = !this.isShow;
           },
           play(){
             this.audioUrl = this.$store.getters.getSongUrl;
             console.log(this.audioUrl);
             this.autoplay = true;
           }
       },
       watch:{
         audioUrl:function(){
          //  this.play();
         }
       }
   }
</script>