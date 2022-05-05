<template>
  <div class="card">
      <img src="" alt="">
      <h2></h2>
      <h3></h3>
      <h4></h4>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DiskCard",
  components: {},
  data() {
    return {
      API_link: "https://flynn.boolean.careers/exercises/api/array/music",
      cards: null,
    };
  },
  methods: {
      CallApi(){
          axios
          .get(this.API_link)
          .then((response)=>{
              console.log(response);
              this.cards = response.data //Array dischi          
          })
      }
  },
  mounted(){
      this.CallApi()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>