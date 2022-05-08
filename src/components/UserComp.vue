<template>
    <div>
        <nav>
            <ul>
                <li>Profile</li>
                <li>Order</li>
                <li>Update Info</li>
                <li @click="getLogOut"> Log out</li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useMainStore } from '@/store/main'
    export default {
        name:"UserComp",
        methods:[
            ...mapActions(useMainStore,['getLogOut'])
        ]
    }
</script>

<style lang="scss" scoped>

</style>