<template>
  <div id="downWindows">
    <div class="container">
      <div class="row row-cols-5">
        <div class="col" v-for="(card, index) in cards" :key="index">
          <DiskCard :img="card.poster" :title="card.title" :author="card.author" :year="card.year" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DiskCard from "@/components/DiskCard.vue";
import axios from "axios";

export default {
  name: "SiteMain",
  components: {
    DiskCard,
  },
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
              //console.log(response);
              this.cards = response.data.response //Array dischi  
              //console.log(response.data.response);        
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
#downWindows {
  height: calc(100vh - 100px);
  background-color: $Bg-Primary;
}
</style>