<template>
    <div>
        
            
                
                <div class="userinfo" v-for="user in clientResponse" :key="user.userId">
                    <h1> Welcome , {{user.username}} !</h1>
                    <button @click="toggleProfile">Profile</button>
                    <div v-if="isProfileShown" >
                    <h3>{{user.firstName}}</h3>
                    <h3>{{user.lastName}}</h3>
                    <h3>{{user.email}}</h3>
                    </div>
                </div>
        <button @click="toggleUpdate"> Update Profile</button>

        <div v-if="isUpdateShown">
        <h3>Update Info</h3>
        <input type="text" v-model="username" placeholder="username">
        <input type="text" v-model="password" placeholder="password">
        <button @click="getLoginUpdate">Update Profile</button>
        </div>

        <div>
            <button @click="getLogOut">Log out</button>
        </div>
        
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '@/store/main'

    export default {
        name:"UserComp",
        methods:{
            ...mapActions(useMainStore,['getInfo','getLogOut','getLoginUpdate']),

            toggleProfile() {
        this.isProfileShown = !this.isProfileShown;
        },
            toggleUpdate() {
        this.isUpdateShown = !this.isUpdateShown;
        },
        },
        computed:{
            ...mapState(useMainStore,['clientResponse'])
        },
        mounted (){
            this.getInfo()
        },
        data() {
            
            return {
                isProfileShown: false,
                isUpdateShown:false,
                username:'',
                password:''
            }
        },
        

    }
</script>

<style lang="scss" scoped>
.userinfo{
    
    h1{
        text-align: center;
        background-color: #DDA15E;
        font-size: 22px;
        margin: 20px;
        border: #BC6C25 solid 2px;
    }
}
button{
    border: #BC6C25 2px solid;
    background-color: #DDA15E;
    color: white;
    width: 20%;
    font-size: 18px;
}
input{
    background-color: white;
    border: #BC6C25 solid 2px;
    width: 20%;
    margin: 8px;
}

</style>