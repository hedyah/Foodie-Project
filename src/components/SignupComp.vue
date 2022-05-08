<template>
<div class="customer"> 
    <h3>Customer Sign up</h3>

    
    <input type="text" placeholder="First Name" v-model="firstName" name="firstName" id="firstName">

        
    <input type="text" placeholder="Last Name" v-model="lastName" name="lastName" id="lastName">

    
    <input type="text" placeholder="Username" v-model="username" name="username" id="username">

      
    <input type="text" placeholder="Email" v-model="email" name="email" id="email">

      
    <input type="password" placeholder="Password" v-model="password" name="password" id="password">

  <div class="button">
    <button @click="handleUserRegistration">Sign up</button> 
  </div>

  </div>
</template>

<script>
import {useMainStore} from '@/store/main'
import {mapActions} from 'pinia'

  export default {
    name: "SignupComp",
    methods:{
      ...mapActions(useMainStore, ['createLogin']),

      handleUserRegistration(){
        this.createLogin( this.username, this.firstName, this.lastName, this.email, this.password)
      },
      handleError(response){
        console.log(response);
      }
    },
    data: () =>({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    }),
    mounted(){
      useMainStore().$onAction(({name,after})=>{
        if (name == "userRegistrationAlert"){
          console.log("handeling");
          after((response)=>{
            this.handleError(response);
          })
        }
      })
    }
    
  }
</script>

<style lang="scss" scoped>
.customer{
  background-color: white;
  width: 90%;
  margin-left: 5%;
  input{
    background-color: #FEFAE0;
    border: #BC6C25 2px solid;
    width: 95%;
    margin: 15px;
  }
  h3{
    text-align: center;
    font-family: cursive;
    font-size: 22px;
  }
  p{
    text-align: center;
  }
  
}
.button{
  margin: 20px;
  text-align: center;
  border: 2px solid black;
  background-color: #606C38;
  color: #FEFAE0;
  border-radius: 5px;
}





</style>