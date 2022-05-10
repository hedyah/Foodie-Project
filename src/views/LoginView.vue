<template>
  <div>

    <div class="section">
    <HeaderComp/>
    <LoginComp/>
    </div>

    <div class="footer">
    <FooterComp/>
    </div>
  </div>
</template>

<script>
import LoginComp from '@/components/LoginComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
export default{
  components: {HeaderComp, LoginComp, FooterComp},
  name: "LoginView"
}

</script>

<style lang="scss" scoped>
.section{
  margin-bottom: 50px;
}

</style>