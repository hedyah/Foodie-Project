<template>
    <div>
    <HeaderComp/>
    <ClientComp/>

    <div>
        <div class="topimg">
    <img src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    <img src="https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    <img src="https://images.pexels.com/photos/1277481/pexels-photo-1277481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    <img src="https://images.pexels.com/photos/1508660/pexels-photo-1508660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    </div>
        <div class="menudiv" v-for="menu in menuResponse" :key="menu.menuId">
            <h3>Menu Id: {{menu.menuId}}</h3>
            <h3>Restaurant Id: {{menu.restaurantId}}</h3>
            <h3>{{menu.name}}</h3>
            <h3>Price: {{menu.price}}</h3>
        
        </div>
        
        <div v-for="order in orderResponse" :key="order.orderId" >
            <h3>Menu Id: {{order.items}}</h3>
            <h3>Restaurant Id :{{order.restaurantId}}</h3>
        
        </div> 
        
        

        <input type="text" v-model="restaurantId" placeholder="Restaurant Id">
        <input type="text" v-model="items" placeholder="Menu Id">
        
        <button @click="postUserOrders">Order</button>
        <button @click="getOrder" >Show Order</button>
    </div>

    <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import ClientComp from '@/components/ClientComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '@/store/main'
    export default {
  components: { HeaderComp, ClientComp, FooterComp },
        name:"OrderView",
        data:() => ({
            restaurantId:'',
            items:'',
            
        }),
        methods:{
            ...mapActions(useMainStore,['postOrder','restaurantInfo','getOrder','menuGet']),

            postUserOrders(){
                this.postOrder(this.restaurantId, this.items)
            }
            
        },
        mounted (){
            //this.getOrder(),
            this.menuGet()
        },
        computed:{
            ...mapState(useMainStore,['orderResponse','restaurantResponse','menuResponse'])
        },
        
    }
</script>

<style lang="scss" scoped>
div{
    input{
        background-color: white;
        margin: 7px;
        border: 1px solid black;
        padding-left: 19px;
    }
    button{
        border: 2px solid black;
        margin: 5px;
        background-color: #BC6C25;
        color: #FEFAE0;
        font-size: 16px;
    }
}
.topimg{
    img{
        width: 25%;
        height: 30%;
    }
}

.menudiv{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border: 2px solid #BC6C25;
    background-color: #DDA15E;
    color: #FEFAE0;
    font-size: 20px;
    margin: 5px;
}

@media only screen and (max-width: 600px){
    .menudiv{
    display: grid;
    grid-template-columns: 1fr 1fr ;
    border: 2px solid #BC6C25;
    background-color: #DDA15E;
    color: #FEFAE0;
    font-size: 15px;
    margin: 5px;
}
div{
    input{
        width: 38%;
        height: 100%;
        background-color: white;
        margin: 15px;
        border: 1px solid black;
        padding: 8px;
        font-size: 17px;
    }
    button{
        border: 2px solid black;
        margin: 8px;
        margin-left: 50px;
        width: 19%;
        padding: 3px;
        font-size: 15px;
    }
}
}
@media only screen and (min-width: 768px) {
    .menudiv{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    border: 2px solid #BC6C25;
    background-color: #DDA15E;
    color: #FEFAE0;
    font-size: 18px;
    margin: 5px;

}
div{
    input{
        width: 30%;
        height: 100%;
        background-color: white;
        margin: 15px;
        border: 1px solid black;
        padding: 10px;
        font-size: 22px;
    }
    button{
        border: 2px solid black;
        margin: 5px;
        width: 10%;
        padding: 6px;
        font-size: 17px;
    }
}
}
@media only screen and (min-width: 1200px) {
.topimg{
    height: 30%;
}
.menudiv{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border: 2px solid #BC6C25;
    background-color: #DDA15E;
    color: #FEFAE0;
    font-size: 18px;
    margin: 5px;
}
div{
    input{
        width: 30%;
        height: 100%;
        background-color: white;
        margin: 15px;
        border: 1px solid black;
        padding: 10px;
        font-size: 18px;
    }
    button{
        border: 2px solid black;
        margin: 5px;
        width: 8%;
        padding: 6px;
        font-size: 17px;
    }
}
}
</style>