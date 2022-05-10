<template>
    <div>
        <div class="imgs">
        <img src="https://images.pexels.com/photos/4083580/pexels-photo-4083580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <img src="https://images.pexels.com/photos/9708/food-pizza-restaurant-eating.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <img src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        </div>
    
    <h1>Click to Choose </h1>

        <button @click="restaurantLogOut">Log out</button>
        <button @click="toggleProfile"> Profile</button>
        <div v-if="isProfileShown">
            <div class="profile" v-for="restaurant in restaurantResponse" :key="restaurant.restaurantId">
                <h4>{{restaurant.name}}</h4>
                <p>{{restaurant.address}}</p>
                <p>{{restaurant.email}}</p>
                <p>{{restaurant.bio}}</p>
                <p>{{restaurant.city}}</p>
                
                </div>
            </div>

            
            <button @click="toggleMenu">Add Menu items</button>
            <div v-if="isMenuShown" class="menudiv">
            <h3  > Add Menu items</h3>
            <input type="text" v-model="name" placeholder="Name of the Dish" name="name of the dish">
            <input type="text" v-model="description" placeholder="Description" name="description">
            <input type="text" v-model="price" placeholder="Price" name="price"> 
            <input type="text" v-model="imageUrl" placeholder="Url" name="image-url" >
            <button @click="getResInfo" > submit</button>
            </div>
            
            <button @click="toggleMenuDelete">Delete Menu Items</button>
            <div v-if="isDeleteShown" class="menudiv" >
            <h3>Delete Menu items</h3>
            <input type="text" placeholder="Enter Menu Id" v-model="menuId">
            <button @click="deletemenuItem">Delete menu item</button>
            </div>

            <button @click="toggleUpdate">Update Profile</button>
            <div v-if="isUpdateShown" class="menudiv">
            <h3>Update Profile</h3>
            <input type="text" placeholder="Name" v-model="name">
            <input type="text" placeholder="Banner Url" v-model="bannerUrl">
            <input type="text" placeholder="Address" v-model="address">
            <input type="text" placeholder="Bio" v-model="bio">
            <input type="text" placeholder="Phone Number" v-model="phoneNum">
            <button @click="updateResInfo">Update Changes</button>
            </div>

                <button @click="toggleMenuList">See menu items</button>
            
            <div v-if="isMenulistShown" class="menuList">
            <div v-for="menu in menuResponse " :key="menu.menuId" >
            <h3>{{menu.name}}</h3>
            <h4>{{menu.description}}</h4>
            <p> Price : {{menu.price}}</p>
            <p> Menu Id : {{menu.menuId}}</p>
            </div>
            
    </div>
   
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '@/store/main'
    export default {
        name:"ResComp",
        computed:{
            ...mapState(useMainStore,['menuResponse','restaurantResponse'])
        },
        mounted () {
            this.restaurantInfo();

            this.menuGet()

        },
        methods:{
            //getters

            ...mapActions(useMainStore,['menuList']),

            ...mapActions(useMainStore,['menuGet','postOrder','menuDelete','restaurantInfo', 'menuItems','restaurantUpdate','restaurantLogOut' ]),
            
            getResInfo(){
                this.menuItems(this.name, this.description, this.price, this.imageUrl)
            },
            updateResInfo(){
                this.restaurantUpdate(this.name,this.bannerUrl, this.address, this.bio, this.phoneNum)
            },
            deletemenuItem(){
                this.menuDelete(this.menuId)
            },
            toggleProfile() {
        this.isProfileShown = !this.isProfileShown;
        },
        toggleMenu() {
        this.isMenuShown = !this.isMenuShown;
        },
        toggleMenuDelete() {
        this.isDeleteShown = !this.isDeleteShown;
        },
        toggleUpdate() {
        this.isUpdateShown = !this.isUpdateShown;
        },
        toggleMenuList() {
        this.isMenulistShown = !this.isMenulistShown;
        },
            
            

            
            
        },
        data: ()=>({
            name: '',
            description:'',
            price: '',
            imageUrl: undefined,
            bannerUrl:'',
            address:'',
            bio:'',
            phoneNum:'',
            menuId:'',
            isProfileShown: false,
            isMenuShown:false,
            isDeleteShown:false,
            isUpdateShown:false,
            isMenulistShown:false
        }),
        
    }
</script>

<style lang="scss" scoped>

li{
    list-style-type: none;
    border: 1px solid green;
    margin: 10px;
}
input{
    background-color: #FEFAE0;
    border: 2px solid black;
    margin: 5px;
}
.menudiv{
    background-color:#606C38;
    margin: 20px;
    color: #FEFAE0;
    text-align: center;
    border: 2px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr  ;
    button{
        border: 3px solid #283618;
    }
    h3{
        background-color: #283618;
        margin: 5px;
    }
}
.imgs{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    img{
        width: 100%;

    }
}
.profile{
    border: 2px solid rgb(255, 255, 255);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 10px;
    color:#283618;
    background-color:#DDA15E ;
}
.menuList{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    box-shadow: #283618 3px solid;
    
    h3{
        background-color: #DDA15E;
    }
    h4{
        background-color: #283618;
        color: #FEFAE0;
    }
    p{
        background-color: #606C38;
        color: #FEFAE0;
    }
}
button{
    border:#283618 2px solid;
    margin: 10px;
    background-color: #283618;
    color: #FEFAE0;
    width: 25%;
    font-size: 20px;
    padding: 3px;
    
}
h1{
    text-align: center;
    background-color: #DDA15E;
    color: #FEFAE0;
}

</style>