<template>
  <div id="downWindows">
    <div class="container">
        <div class="row">
            <DiskCard />
        </div>
    </div>
  </div>
</template>

<script>
import DiskCard from '@/components/DiskCard.vue'

export default {
  name: 'SiteMain',
  components:{
      DiskCard,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#downWindows{
    height: calc(100vh - 100px);
    background-color: $Bg-Primary;
}
</style>