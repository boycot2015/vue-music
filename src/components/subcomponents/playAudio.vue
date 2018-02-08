<template>
    <div>
        <audio  autoplay="autoplay" :src="audioUrl"></audio>
    </div>
</template>
<style scoped>
audio {
  width: 24px;
  height: 24px;
}
</style>
   
<script>
import bus from "../../bus/bus";
export default {
  props: ["isplay"],
  data() {
    return {
      audioUrl: ""
    };
  },
  created() {
       console.log(this.isplay);
    bus.$on("pushUrl", url => {
      this.audioUrl = url;
    });
    
  },
  mounted(){
      
    this.autoPlay();     
  },
  updated(){
     
        // this.autoPlay();
  },
  methods: {
    autoPlay() {
      let audio = document.querySelector("audio"); 
      if (this.isplay) {
        audio.pause();
        console.log(11);
        
      } else {
          console.log(12);
        if(audio.getAttribute('src')){
            audio.play();
        }
      }
    }
  }
};
</script>