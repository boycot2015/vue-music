<template>
    <div>
        <div class="user" v-if="isBack">
            <img class="" :src="userData.avatarUrl">
            <p>{{userData.nickname}}</p>
            <span>{{userData.signature}}</span>
            <p>等级<span>{{userData.level}}</span></p>
        </div>
        <div class="logout">
          <mt-button @click="toLogout" type="danger">退出登录</mt-button>
        </div>
    </div>
</template>
<style scoped>
    .user{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 10px 0;
    }
    .user img{
        width: 50%;
        border-radius: 50%;
    }
    .user p{
        font-size: 20px;
        color: #333;
        margin: 10px 0;
    }
    .user span{
        color: #888;
        font-size: 14px;
    }
    .user p span {
        padding-left: 40px;
    }
    .logout{
      text-align: center;
      margin: 0 auto;
    }
    .logout button{
      width: 80%;
    }
</style>
<script>
export default {
  data() {
    return {
      userData: {},
      isBack: false
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      let id = window.sessionStorage.getItem("uid");
      let url = `${this.apihost}/user/detail?uid=${id}`;
      if (id) {
        this.$http.get(url).then(
          res => {
            this.isBack = true;
            // console.log(res.body.profile);
            this.userData = res.body.profile;
            this.userData.level = 'LV8'
          },
          err => {}
        );
      }
    },
    toLogout(){
      window.sessionStorage.removeItem('uid');
      this.$router.push('/login');
    }
  }
};
</script>