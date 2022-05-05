<template>
  <div id="upBar">
    <div class="container">
      <div class="row">
        <div class="col">
          <img src="@/assets/img/spotify-brands.svg" alt="logo spotify" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#upBar {
  height: 100px;
  background-color: $Bg-Secondary;
  .container {
    margin-left: 100px;
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
