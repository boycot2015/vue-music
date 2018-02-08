<template>
  <div class="root">
    <!-- 侧滑导航根容器 -->
    <div :class="isShow?'userSide show':'userSide'">
      <div @click="hideSide" class="mask">
      </div>
      <div class="container">
        <div @click="showPage">
          <mt-cell :title="isBack?userData.nickname:'登录/注册'">
            <span>签到</span>
            <img slot="icon" :src="isBack?userData.avatarUrl:'../src/static/images/menu10.png'" width="24" height="24">
          </mt-cell>
        </div>

      </div>
    </div>
    <!-- 主页面标题 -->
    <header class="mui-bar mui-bar-nav">
      <a @click="showUser" class="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
      <router-link to="/home">
        <h1 class="mui-title">netease</h1>
      </router-link>
    </header>
    <div class="body">
      <div class="container">
        <transition name="component-fade" mode="in-out">
          <router-view class="child-view"></router-view>
        </transition>
      </div>
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
          <i class="mui-icon mui-icon-refresh" @click="changeState">
            <audios :isplay="isPlay"></audios>
          </i>
        </mt-tab-item>
        <mt-tab-item id="tab2">
          <i class="mui-icon mui-icon-bars" @click="popList"></i>
          <mt-actionsheet :cancelText="''" :actions="actions" v-model="sheetVisible">
          </mt-actionsheet>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
   
<style >
body {
  margin: 0;
  padding: 0;
}
.root {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.userSide {
  width: 100%;
  height: 110%;
  transform: translateY(-90px);
  /* margin-top: -90px; */
  position: fixed;
  z-index: 999;
  transform: translateX(-100%);
  transition: all 0.5s;
}
.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 8;
  background: rgba(0, 0, 0, 0.6);
}
.userSide.show {
  transform: translateX(0%);
}
.userSide .container {
  width: 70%;
  height: 100%;
  z-index: 9;
  position: absolute;
  background: #fff;
}
.mui-bar.mui-bar-nav {
  top: -1px;
  -webkit-box-shadow: none;
}
.mui-off-canvas-wrap {
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
}
.mui-off-canvas-left {
  width: 300px;
  transform: translateX(300px);
}
.mui-content.mui-scroll-wrapper {
  height: 100%;
}
.mint-header.is-fixed {
  background-color: red;
}
.mint-navbar .mint-tab-item.is-selected {
  color: red;
  border-bottom: 2px solid red;
  margin-bottom: -1px;
}
.mint-header-title {
  font-size: 18px;
}
.body {
  margin: 40px 0;
  width: 100%;
  height: 100%;
}
.mint-tabbar.is-fixed {
  height: 50px;
  display: flex;
}
a .mint-tab-item-label {
  line-height: 30px;
  font-size: 16px;
}
.footer {
  position: fixed;
  width: 100%;
  height: 100%;
}
.footer .mint-tab-item {
  text-align: center;
  flex: 4;
}
.footer img {
  width: 32px;
  margin-top: -8px;
}
.footer .right {
  height: 46px;
}
.footer .right span {
  display: block;
}
.mint-tab-item-label {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
}
.mint-tab-item-label p {
  margin-bottom: 0;
  margin-top: 5px;
  line-height: 12px;
}
.mint-tab-item-label span {
  font-size: 10px;
}
.footer .mint-tab-item-label:nth-of-type(1) {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.footer .mint-tab-item:nth-of-type(2),
.footer .mint-tab-item:nth-of-type(3) {
  flex: 1;
  padding-top: 10px;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
  /* transform: translateX(100%); */
}

.container {
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}
/* 上面是为了保证滑动的时候不出现抖动情况 */
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  margin: 40px 0;
  height: 100%;
  width: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  background-color: #f2f2f2;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
/* 当child-view的内容过多时会撑开child-view使得内部能够滚动 */
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(750px, 0);
  transform: translate(750px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-750px, 0);
  transform: translate(-750px, 0);
}
.slide-enter-active {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.slide-leave-active {
  -webkit-transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
/* 然后写上切换时候的类名的CSS变化(这里最好看一下VUE的transition文档) */
</style>
   
<script>
import audios from "./components/subcomponents/playAudio";
export default {
  components: {
    audios
  },
  data() {
    return {
      transitionName: "",
      sheetVisible: false,
      actions: [
        { name: "红颜", method: "" },
        { name: "红颜", method: "" },
        { name: "红颜", method: "" },
        { name: "红颜", method: "" },
        { name: "红颜", method: "" },
        { name: "红颜", method: "" },
        { name: "红颜", method: "" },
        { name: "红颜", method: "" }
      ],
      cancelText: "",
      isShow: false,
      isBack: false,
      userData: {},
      isPlay:true,
      id: ""
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      this.id = window.sessionStorage.getItem("uid");
      this.getUserInfo(this.id);
    }
  },
  created() {
    this.id = window.sessionStorage.getItem("uid");
    this.getUserInfo(this.id);
  },
  updated() {
    if (this.$route == `/videoplayer/${this.$route.params.videoId}`) {
      document.querySelector("video").pause;
    }
    
    // this.id = window.sessionStorage.getItem("uid");
    // this.getUserInfo(this.id);
  },
  methods: {
    popList() {
      this.sheetVisible = true;
    },
    showUser() {
      //  console.log(this.isShow);
      document.body.style.overflow = "hidden";
      this.isShow = !this.isShow;
    },
    hideSide() {
      //  alert(1)
      document.body.style.overflow = "visible";
      this.isShow = !this.isShow;
    },
    showPage() {
      this.hideSide();
      if (this.isBack) {
        this.$router.push("/userinfo");
      } else {
        this.$router.push("/login");
      }
    },
    getUserInfo(id) {
      // console.log(window.sessionStorage.getItem('uid'));
      if (id) {
        let url = `${this.apihost}/user/detail?uid=${id}`;
        this.$http.get(url).then(
          res => {
            this.isBack = true;
            // console.log(res.body);
            this.userData = res.body.profile;
          },
          err => {}
        );
      } else {
        this.isBack = false;
      }
    },
    changeState() {
      this.isPlay = !this.isPlay;     
    }
  }
};
</script>