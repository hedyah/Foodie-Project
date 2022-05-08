<template>
    <div class="customer">
    
    <h3>Restaurant Sign up</h3>


    <input type="text" v-model="name" placeholder="Name" name="name" id="name">

    <input type="text" v-model="address" placeholder="Address" name="address" id="address">

    <input type="text" name="city" v-model="city" placeholder="City" id="city" >

    <input type="text" name="email" v-model="email" placeholder="Email">
    
    <input type="password" name="password" v-model="password" placeholder="Password" >

    <input type="tel" name="phone" v-model="phoneNum" placeholder="Phone Number"   id="phone">

    <input type="text" name="bio" v-model="bio" placeholder="Bio" id="bio">

    <input type="text" name="bannerurl" v-model="bannerUrl" placeholder="Banner URL">
    <div class="button">
    <button @click="hanleRestaurantRegistration">Sign Up</button>  
    </div>
    

    </div>
</template>

<script>
import {useMainStore} from '@/store/main'
import {mapActions} from 'pinia'
    export default {
        name:"SignResComp",
        methods:{
            ...mapActions(useMainStore,['restaurantCreate']),

            hanleRestaurantRegistration(){
                this.restaurantCreate(this.name, this.address, this.bio, this.city, this.email,this.password, this.phoneNum, this.bannerUrl);

            },
            handleError(response){
                console.log(response);
            }
        },
        data:()=> ({
            name:'',
            address: '',
            bio: '',
            city: '',
            email: '',
            password: '',
            phoneNum: '',
            bannerUrl:''
        }),
        mounted(){
            useMainStore().$onAction(({name,after})=>{
                if (name == "userRegistrationAlert2"){
                    console.log("handling the restaurant");
                } after((response)=>{
                    this.handleError(response);
                })
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
    margin: 10px;
    
    }
    h3{
    text-align: center;
    font-family: cursive;
    font-size: 22px;
    }
    p{
    text-align: center;
    }
    #bio{
        height: 10%;
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