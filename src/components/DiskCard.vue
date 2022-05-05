<template>
  <div class="col">
      <img :src="poster" alt="title">
      <h5>{{title}}</h5>
      <h6>{{author}}</h6>
      <h6>{{year}}</h6>
  </div>
</template>

<script>

export default {
  name: "DiskCard",
  props:{
      poster: String,
      title: String,
      author: String,
      year: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.col{
    text-align: center;
    h5{
        color: $C-ligth;
    }
}
</style>