<template>
    <div>
    <div id="header">
    
        <h1>Welcome to Foodie</h1>
        <img src="https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="food">
        <img src="https://images.pexels.com/photos/3622476/pexels-photo-3622476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="food">
        <img src="https://images.pexels.com/photos/4109996/pexels-photo-4109996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
        
    </div>
    <div id="inputbox">
    
    <input type="text" placeholder="Email" v-model="email" name="email" >

    <input type="password" placeholder="Password" v-model="password" name="password" >
    </div>
    <div>
    <button @click=" $router.push('/sign')" >Sign Up</button>
    <button @click="handleUserLogin"> Customer Login</button> 
    <button @click="handleRestaurantLogin">Restaurant Login</button>
    </div>
    </div>
</template>

<script>
import {useMainStore} from '@/store/main'
import{mapActions} from 'pinia'
    export default {
    name:'LoginView',
        methods:{
            ... mapActions(useMainStore,['restaurantLogin','restaurantInfo','getLogin','getInfo']),

            handleUserLogin(){
                this.getLogin(this.email, this.password)
            },
            handleRestaurantLogin(){
                this.restaurantLogin(this.email, this.password)
            },
            handleError(response){
                console.log(response);
            }
        
        },
        data: ()=>({
            email: '',
            password:''
        }),
        mounted(){
            useMainStore().$onAction(({name,after})=>{
                if (name == "userLoginAlert"){
                    console.log("user login unsucusessful");
                    after((response)=>{
                        this.handleError(response);
                    })
                }
            })
        }
    }


</script>

<style lang="scss" scoped>
button{
  border: 2px solid #283618;
  background-color: #BC6C25;
  padding: 5px;
  
  margin-left: 15%;
  color: #FEFAE0;
  border-radius: 5px;
}
#inputbox{
    background-color: #DDA15E;
    text-align: center;
    padding: 8px;
    margin: 10px;
    
    input{
    width: 45%;
    border-radius: 5px;
    background-color: #ffffff;
    border: #283618 2px solid;
    margin: 9px;
    }   
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
    img{
    width: 20%;
    border-radius: 10px;  
    margin: 9px;
    }
}
</style>