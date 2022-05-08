<template>
  <div>
    <HeaderComp/>
    <LoginComp/>
    
    
  </div>
</template>

<script>
import LoginComp from '@/components/LoginComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'

  export default {
  components: { LoginComp, HeaderComp },
    
  }
</script>

<style lang="scss" scoped>

</style>