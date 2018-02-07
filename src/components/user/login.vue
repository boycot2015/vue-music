<template>
    <div>
        <h2>用户登录</h2>
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label>手机号/邮箱</label>
                <input type="text" v-model="username" class="mui-input-clear" placeholder="请输入手机号/邮箱">
            </div>
            <div class="mui-input-row">
                <label>密       码</label>
                <input type="password" v-model="password" class="mui-input-password" placeholder="请输入密码">
            </div>
            <div class="mui-button-row">
                <button type="button" @click="comformLogin" class="mui-btn mui-btn-primary">确认</button>
                <button type="button" class="mui-btn mui-btn-danger">取消</button>
            </div>
        </form>
    </div>
</template>
<style scoped>
h2{
    text-align: center;
    font-size: 24px;
    padding: 20px 0;
    font-weight: normal;
}
    .mui-button-row button{
        margin: 0 20px;
    }
    .mui-button-row:nth-child(3){
        padding: 20px 0;
        height: 100%;
    }
</style>
<script>
import mui from '../../static/mui/js/mui.min';

export default {
  data() {
    return {
        username:'',
        password:''
    };
  },
  created() {},
  methods: {
      comformLogin(){
          let url = `${this.apihost}/login/cellphone?phone=${this.username}&password=${this.password}`;
          this.$http.get(url).then(res=>{
            //   console.log(res.body);            
             if(res.body.code==200){
                mui.toast('登陆成功',{ duration:'long', type:'div' });
                this.$router.push('/home');
                window.sessionStorage.setItem ('uid',res.body.account.id);
             }else{
                mui.toast('登陆失败',{ duration:'long', type:'div' }); 
             } 
          },err=>{})
      }
  }
};
</script>