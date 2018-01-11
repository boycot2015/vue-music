<template>
   <div>
       daliysong
   </div>
</template>
   
<style scoped>
   
</style>
   
<script>
   
   export default {
       data() {
           return {
           }
       },
       created() {
          this.getDailyData(); 
       },
       methods: {
            getData(api,callback){
                    const url = `${this.apihost}${api}`;
                    //console.log(url);
                    this.$http.get(url).then(res => {
                        callback(res);
                },err => {})
            },
            getDailyData(){
                this.getData('/recommend/resource',res=>{
                    console.log(res.body);                   
                })
            }
       }
   }
</script>