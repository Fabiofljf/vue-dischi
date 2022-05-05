<template>
  <div class="card shadow">
      <img :src="img" alt="title">
      <h5>{{title}}</h5>
      <h6>{{author}}</h6>
      <h6>{{year}}</h6>
  </div>
</template>

<script>

export default {
  name: "DiskCard",
  props:{
      img: String,
      title: String,
      author: String,
      year: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card{
    text-align: center;
    background-color: $Bg-Primary !important;
    h5{
        color: $C-ligth;
    }
}
@import '@/assets/scss/style.scss'
</style>