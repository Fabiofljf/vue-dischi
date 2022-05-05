<template>
  <div>
    <div id="downWindows" v-if="!loading">
      <div class="container">
        <div class="row row-cols-5">
          <div class="col" v-for="(card, index) in cards" :key="index">
            <DiskCard
              :img="card.poster"
              :title="card.title"
              :author="card.author"
              :year="card.year"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- /downWindows -->
    <div
      class="d-flex min-vh-100 align-items-center justify-content-center"
      v-else
    >
      <h1>loading ...</h1>
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
      loading: true,
    };
  },
  methods: {
    CallApi() {
      axios
        .get(this.API_link)
        .then((response) => {
          //console.log(response);
          this.cards = response.data.response; //Array dischi
          //console.log(response.data.response);
          this.loading = false;
        })
        .catch((error) => {
          console.error();
          error;
          this.error = `Sorry There is a problem! ${error}`;
        });
    },
  },
  mounted() {
    this.CallApi();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#downWindows {
  height: calc(100vh - 100px);
  background-color: $Bg-Primary;
}
</style>