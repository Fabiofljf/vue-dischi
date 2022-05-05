<template>
  <div class="col">
      <img :src="poster" alt="title">
      <h2>{{title}}</h2>
      <h3>{{author}}</h3>
      <h4>{{year}}</h4>
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
</style>