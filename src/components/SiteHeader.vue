<template>
  <div id="upBar">
    <div class="container">
      <div class="row">
        <div class="col">
          <img src="@/assets/img/spotify-brands.svg" alt="logo spotify" />
        </div>
        <!-- /.col -->
        <div class="col d-flex justify-content-end">
          <SearchBox v-model="searchDisk" @eventoPersonalizzato="search" />
<!-- direttiva v-model="" bindata alla proprietá searchDisk poi definita nella funzione data del SiteHeader component -->
        </div>
        <!-- /.col -->
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'
import state from '@/state.js'

export default {
  name: "SiteHeader",
  components:{
    SearchBox
  },
  data(){
    return {
      searchDisk: '',
    }
  },
  methods: {
    search(){
      console.log(this.searchDisk);
      state.searchDisk = this.searchDisk;
      //console.log(state);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#upBar {
  height: 100px;
  background-color: $Bg-Secondary;
  .container {
    .row {
      height: 100px;
      align-items: center;
      .col {
        img {
          height: 70px;
          color: $C-logo;
        }
      }
    }
  }
}
</style>
