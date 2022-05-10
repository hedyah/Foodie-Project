<template>
    <div>
        <HeaderComp/>
        <ClientComp/>
        <ResComp/>
        <!-- <div class="grid">
        <MenuComp/>
        </div>
         -->
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import ClientComp from '@/components/ClientComp.vue'
//import MenuComp from '@/components/MenuComp.vue'
import ResComp from '@/components/ResComp.vue'
import FooterComp from '@/components/FooterComp.vue'
    export default {
  components: { HeaderComp, ClientComp, ResComp, FooterComp },
        
    }
</script>

<style lang="scss" scoped>


</style>