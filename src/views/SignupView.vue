<template>

    <div>
        <HeaderComp/>
        <div id="header">
        <h1>Welcome to Foodie</h1>
        
        <img src="https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
        <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
        <img src="https://images.pexels.com/photos/2796841/pexels-photo-2796841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
        <h4>Choose which applies to you</h4>
        </div>
        
        <div class="gridcontainer">
        <button @click="toggleLeft">Customer</button>
        <button @click="toggleRight">Restaurant Owner</button>
        <SignupComp v-if="isLeftShown"/>
        <div v-else></div>
        <SignResComp v-if="isRightShown"/>
        <div v-else></div>
        </div>
        
      <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import SignupComp from '@/components/SignupComp.vue'
import SignResComp from '@/components/SignResComp.vue'
import FooterComp from '@/components/FooterComp.vue'
    export default {
        components: { HeaderComp, SignupComp, SignResComp, FooterComp },
        name: "SignupView",
        data(){
      return{
        isLeftShown : false,
        isRightShown : false,
      }
      
    },
    methods:{
      toggleLeft() {
        this.isLeftShown = !this.isLeftShown;
      },
      toggleRight(){
        this.isRightShown = !this.isRightShown;
      }
    }
    }
</script>

<style lang="scss" scoped>
.gridcontainer{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 30px;
}
button{
  border: 2px solid #283618;
  background-color: #DDA15E;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
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
        margin: 10px;
    }
    h4{
        font-size: 22px;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        margin: 10px;
    }
    img{
        width: 30%;
        border-radius: 10px;
        margin: 10px;
        background-color: #283618;
    }
    
}


</style>