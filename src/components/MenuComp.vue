<template>
<div>

<div class="gridcontainer">
  <v-card v-for="restaurant in restaurantResponse" :key="restaurant.restaurantId"
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="light-green darken-4"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      
      height="250"
      
      src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ></v-img>

    <v-card-title>{{restaurant.name}} {{restaurant.restaurantId}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.2"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.2 (50)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • {{restaurant.bio}}
            
      </div>
      
      <div class="my-4 text-subtitle-1">
        {{restaurant.address}}
        {{restaurant.city}}
      </div>
      <div class="my-4 text-subtitle-1">
        {{restaurant.phoneNum}}
        
      </div>

      <div v-for="menu in menuResponse " :key="menu.menuId" >
            <h4>{{menu.name}}</h4>
            <p>{{menu.description}}</p>
            <p>{{menu.price}}</p>
        </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>



    <v-card-actions>
      <v-btn
        color="light-green darken-4"
        text
        @click="menuGet(restaurant.restaurantId)" 
      >
        Menu
      </v-btn>
    </v-card-actions>
  </v-card>



        
    </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '@/store/main'
    export default {
        name:"MenuComp",
        data: () => ({
      loading: false,
      selection: 1,
    }),

    computed:{
        ...mapState(useMainStore,['menuResponse','restaurantResponse']),
    },
    mounted () {
      this.restaurantInfo()
    },

    methods: {
        
        ...mapActions(useMainStore,['menuGet','restaurantInfo']),

      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
    
</script>

<style lang="scss" scoped>
img{
    width: 70%;
}
.gridcontainer{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    
    
}

</style>