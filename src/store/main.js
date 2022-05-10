import { defineStore } from "pinia";
import axios from "axios";
import cookies from "vue-cookies";
import router from "@/router";

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            clientResponse: undefined,
            restaurantResponse: undefined,
            menuResponse: [],
            orderResponse:[]
        }
    },
    actions :{
        createLogin(username, firstName, lastName, email, password){
            axios.request({
                url: process.env.VUE_APP_API_URL + "client",
                method:"POST",
                headers:{
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    'Content-Type' : 'application/json',
                    
                },
                data:{
                        email,
                        username,
                        firstName,
                        lastName,
                        password
                }

            }).then((response)=>{
                console.log(response);
                cookies.set('loginToken', response.data.token);
                console.log(cookies.get('loginToken'));
                router.push('/login');
                

            }).catch((error)=>{
                console.log(error);
                console.log(error.response.data);
                this.userRegistrationAlert(error.response)
            })
        },
        userRegistrationAlert(error){
            return(error)
        },
        updateLogin(email,username,firstName,lastName, password,pictureUrl){
            axios.request({
                url: process.env.VUE_APP_API_URL + "client",
                method:"PATCH",
                headers:{
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    'Content-Type' : 'application/json',
                    "token":cookies.get('loginToken')
                    
                },
                data:{
                        email,
                        username,
                        firstName,
                        lastName,
                        password,
                        pictureUrl
                }

            }).then((response)=>{
                console.log(response);
                console.log(cookies.get('loginToken'));
                
                

            }).catch((error)=>{
                console.log(error);
                console.log(error.response.data);
                this.userRegistrationAlert(error.response)
            })
        },
        getInfo(){
            axios.request({
                url: process.env.VUE_APP_API_URL + "client",
                method:"GET",
                headers:{
                    "token": cookies.get('loginToken'),
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    'Content-Type' : 'application/json'
                }
            }).then((response)=> {
                console.log(response);
                cookies.get('loginToken');
                console.log(cookies.get('loginToken'));
                console.log(response.data[0].username);
                this.clientResponse = response.data;
                
                
                

            }).catch((error)=> {
                console.log(error);
                console.log(error.response.data);
                console.log(error.response.status);
            })
        },
        getLogin(email, password){
            axios.request({
                url: process.env.VUE_APP_API_URL + "client-login",
                method:"POST",
                headers:{
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    'Content-Type' : 'application/json'
                },
                data:{
                    email,
                    password
                }
            }).then((response) =>{
                console.log(response);
                cookies.set('loginToken', response.data.token)
                router.push('/customer')
            }).catch((error)=>{
                console.log(error.response.data);
            })
        },
        getLoginUpdate(username, password){
            axios.request({
                url: process.env.VUE_APP_API_URL + "client",
                method:"PATCH",
                headers:{
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    'Content-Type' : 'application/json',
                    "token":cookies.get('loginToken')
                },
                data:{
                    username,
                    password
                }
            }).then((response) =>{
                console.log(response);
                cookies.get('loginToken')
                router.push('/customer')
            }).catch((error)=>{
                console.log(error.response.data);
            })
        },

        getLogOut(){
            axios.request({
                url: process.env.VUE_APP_API_URL + "client-login",
                method:"DELETE",
                headers:{
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    'Content-Type' : 'application/json',
                    "token":cookies.get('loginToken')
                },
            }).then((response) =>{
                console.log(response);
                router.push('/')
                cookies.remove('loginToken')
            }).catch((error)=>{
                console.log(error.response.data);
            })
        },

        userLoginAlert(error){
            return(error)
        },

        userRegistrationAlert2(error){
            return(error)
        },
        restaurantCreate(name, address, bio, city, email, password, phoneNum,bannerUrl){
            axios.request({
                url: process.env.VUE_APP_API_URL + "restaurant",
                method: "POST",
                headers:{
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    'Content-Type' : 'application/json'
                    
                },
                data:{
                    name,
                    address,
                    bio, 
                    city,
                    email,
                    password, 
                    phoneNum,
                    bannerUrl
                }
            }).then((response)=>{
                console.log(response);
                cookies.set('restaurantToken',response.data.token)
                console.log(cookies.get('restaurantToken'));
                router.push('/owner')

            }).catch((error)=>{
                console.log(error.response);
                this.userRegistrationAlert2(error.response)
            })
        },
        restaurantUpdate(name,bannerUrl, address, bio, phoneNum){
            axios.request({
                url: process.env.VUE_APP_API_URL + "restaurant",
                method: "POST",
                headers:{
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    'Content-Type' : 'application/json',
                    "token": cookies.get('restaurantToken')
                },
                data:{
                    name,
                    bannerUrl,
                    address,
                    bio,  
                    phoneNum,
                }
            }).then((response)=>{
                console.log(response);
                console.log(cookies.get('restaurantToken'));
                

            }).catch((error)=>{
                console.log(error.response);
                this.userRegistrationAlert2(error.response)
            })
        },
        
        restaurantInfo(restaurantId){
            axios.request({
                url: process.env.VUE_APP_API_URL + "restaurant",
                method:"GET",
                headers:{
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    'Content-Type' : 'application/json'
                },
                params:{
                    restaurantId
                }
            }).then((response)=>{
                console.log(response);
                console.log(response.data);
                this.restaurantResponse = response.data;
                console.log(cookies.get('restaurantToken'));
                cookies.get('restaurantToken');
                
                
            }).catch((error)=>{
                console.log(error);
            })
        },
            restaurantLogin(email, password){
            axios.request({
                url: process.env.VUE_APP_API_URL + "restaurant-login",
                method:"POST",
                headers:{
                    "x-api-key": process.env.VUE_APP_API_KEY
                },
                data:{
                    email,
                    password
                }
            }).then((response) =>{
                console.log(response);
                cookies.set('restaurantToken', response.data.token)
                router.push('/owner')
                
            }).catch((error)=>{
                console.log(error);
                console.log(error.response.data);
            })
        },
        restaurantLogOut(){
            axios.request({
                url: process.env.VUE_APP_API_URL + "restaurant-login",
                method:"DELETE",
                headers:{
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    "token":cookies.get('restaurantToken')
                },
                
            }).then((response) =>{
                console.log(response);
                router.push('/')
                cookies.remove('restaurantToken')
                
            }).catch((error)=>{
                console.log(error);
                console.log(error.response.data);
            })
        },
        

        menuItems(name, description, price, imageUrl){
            axios.request({
                url: process.env.VUE_APP_API_URL + "menu",
                method:"POST",
                headers:{
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    "token":cookies.get('restaurantToken'),
                    'Content-Type' : 'application/json'
                },
                data:{
                    name,
                    description,
                    price,
                    imageUrl
                }
            }).then((response)=>{
                console.log(response);
                cookies.get('restaurantToken')
            }).catch((error)=>{
                console.log(error);
                console.log(error.response);
            })
        },
        menuGet(restaurantId,menuId){
            axios.request({
                url: process.env.VUE_APP_API_URL + "menu",
                method:"GET",
                headers:{
                    "x-api-key": process.env.VUE_APP_API_KEY,
                },
                params:{
                restaurantId,
                menuId
                }
                
            }).then((response)=>{
                console.log(response);
                // console.log(response.data[1]);
                // console.log(response.data);
                this.menuResponse = response.data;
                cookies.get('restaurantToken')
            }).catch((error)=>{
                console.log(error);
                console.log(error.response);
            })
        },
        postOrder(restaurantId, items){
            axios.request({
                url: process.env.VUE_APP_API_URL + "order",
                method:"POST",
                headers:{
                    "token": cookies.get('loginToken'),
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    'Content-Type' : 'application/json'
                },
                data:{
                    restaurantId,
                    items
                }
                
            }).then((response)=>{
                console.log(response);
                console.log(response.data);
                console.log(cookies.get('loginToken'));
                cookies.get('loginToken')
                //cookies.get('restaurantToken')

            }).catch((error)=>{
                console.log(error);
                console.log(error.response);
            })
        },
        getOrder(){
            axios.request({
                url: process.env.VUE_APP_API_URL + "order",
                method:"GET",
                headers:{
                    "token": cookies.get('loginToken'),
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    'Content-Type' : 'application/json'
                },
                
                
            }).then((response)=>{
                console.log(response);
                console.log(response.data);
                this.orderResponse = response.data;
                console.log(cookies.get('loginToken'));
                //cookies.get('restaurantToken')

            }).catch((error)=>{
                console.log(error);
                console.log(error.response);
            })
        },
        menuDelete(menuId){
            axios.request({
                url: process.env.VUE_APP_API_URL + "menu",
                method:"DELETE",
                headers:{
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    "token": cookies.get('restaurantToken'),
                },
                data:{
                    menuId
                }
                
            }).then((response)=>{
                console.log(response);
                cookies.get('restaurantToken')
            }).catch((error)=>{
                console.log(error);
                console.log(error.response);
            })
        },

    },
    getters: {
        
        
            
        

    }
})