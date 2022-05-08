<template>
    <div id="header">
        <h1>Welcome to Foodie</h1>
        
    </div>
    
</template>

<script>


import {useMainStore} from '@/store/main'
import{mapState} from 'pinia'
    export default {
        name:"ClientComp",
        computed:{
            //actions for client API
            ... mapState(useMainStore,['createLogin','getLogin']),
            //getters
            ...mapState(useMainStore, ['welcomeMessage']),
            //actions for Restaurant API
            ...mapState(useMainStore, ['restaurantLogin', 'restaurantCreate'])
        },
    }
</script>

<style lang="scss" scoped>
input{
    background-color: rgb(255, 255, 255);
    border: 2px black solid;
    display: grid;
    grid-auto-columns: 1fr;
    margin: 3px;
}
button{
    border: 2px solid black;
}
#header{
    background-color: #606C38;
    text-align: center;
    font-family: cursive;
    padding: 20px;
    color: #FEFAE0;
    h1{
        font-size: 45px;
        background-color: #283618;
        margin: 5px;
    }
    h4{
        font-size: 22px;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
}
img{
    width: 70%;
}

</style>