<template>
    <div>
        <HeaderComp/>
        <ClientComp/>
        <UserComp/>

        <div>
            <MenuComp/>
            
        </div>

    </div>
</template>

<script>
import ClientComp from '@/components/ClientComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import MenuComp from '@/components/MenuComp.vue'
import UserComp from '@/components/UserComp.vue'

    export default {
    components: { ClientComp, HeaderComp, MenuComp, UserComp },
        name:"CustomerView",
        
    }
</script>

<style lang="scss" scoped>

</style>