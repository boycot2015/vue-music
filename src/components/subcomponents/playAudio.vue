<template>
   <div>
     <audio hidden autoplay="autoplay" :src="audioUrl"></audio> 
   </div>
</template>
<style scoped>
   
</style>
   
<script>
   import bus from '../../bus/bus';
   export default {
       data() {
           return {
               audioUrl:''
           }
       },
       created(){
           bus.$on('pushUrl',url=>{
             this.audioUrl = url;
           })
       },
       methods:{
           
       }
   }
</script>