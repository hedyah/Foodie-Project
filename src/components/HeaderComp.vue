<template>
    <v-toolbar
    color="black"
    dark
  >
    <v-toolbar-title @click="$router.push('/')"  > <img src="https://media.istockphoto.com/vectors/food-platter-serving-sign-icon-table-setting-vector-id528967216?k=20&m=528967216&s=170667a&w=0&h=NmuDR2J5fHalBPMk5Iln4pvhEeL2KVJXPkejRGN0gFs=" alt="logo"></v-toolbar-title>

    <v-divider
      class="mx-4"
      vertical
    ></v-divider>

   

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sx-and-down">
      <v-btn class="hidden-sm-and-down" @click="$router.push('/login')" text>
        Restaurants
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn @click="$router.push('/sign')" text>
        Sign UP
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn @click="$router.push('/login')" text>
        Log IN

      </v-btn>
      <v-divider vertical></v-divider>

      <v-btn class="hidden-sm-and-down" @click="$router.push('/customer/order')" text>
        <img src="https://i.pinimg.com/736x/b6/4e/88/b64e883557a7ca8cc251aa7ab04fb565.jpg" alt="">

      </v-btn>

      <v-divider vertical></v-divider>
    </v-toolbar-items>


  </v-toolbar>
</template>

<script>
import {useMainStore} from '@/store/main'
import{mapState} from 'pinia'
    export default {
        name: "HeaderComp",
        computed:{
            ... mapState(useMainStore,['createLogin', 'restaurantLogin','getLogin'])
        },
    }
    
</script>

<style lang="scss" scoped>
img{
  width: 60px;
  border-radius: 50px;
  //background-color: #FEFAE0;
}

</style>