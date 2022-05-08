<template>
<div>
  <HeaderComp/>
  <ClientComp/>
  <div class="topimg">
    <img src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    <img src="https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    <img src="https://images.pexels.com/photos/1277481/pexels-photo-1277481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    <img src="https://images.pexels.com/photos/1508660/pexels-photo-1508660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
  </div>

<div class="search">
  <input type="text" placeholder="Enter Location" name="location">
  <button>Search</button>
</div>

<div class="about">
  <h4>About Us</h4>
  <p> For us, it's not just about bringing you good food from your favourite restaurants. It's about making a connection, which is why we sit down with the chefs, dreaming up menus that will arrive fresh and full of flavour. Try us!</p>
</div>


<div class="restaurants">
  <div>
    <img src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    <h3>A & W</h3>
    <button @click="$router.push('/login')">see more</button>
  </div>
  <div>
    <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    <h3>Famoso</h3>
    <button @click="$router.push('/login')">see more</button>
  </div>
  <div>
    <img src="https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    <h3>Thai Express</h3>
    <button @click="$router.push('/login')">see more</button>
  </div>
  <div>
    <img src="https://images.pexels.com/photos/10296396/pexels-photo-10296396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    <h3>Kinjo</h3>
    <button @click="$router.push('/login')">see more</button>
  </div>
  <div>
    <img src="https://images.pexels.com/photos/3850843/pexels-photo-3850843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    <h3>LadyBug Cafe</h3>
    <button @click="$router.push('/login')">see more</button>
  </div>
  <div>
    <img src="https://images.pexels.com/photos/5112581/pexels-photo-5112581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    <h3>Cobs Backery</h3>
    <button @click="$router.push('/login')">see more</button>
  </div>
</div>
  <!-- <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      
      max-width="500"
      max-height="550"
      
    ></v-carousel-item>
  </v-carousel> -->
  
</div>

</template>


<script>
import ClientComp from '@/components/ClientComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'

  export default {
    name: 'HomeView',
    components: {
      ClientComp,
        HeaderComp
    },
    // data () {
    //   return {
    //     items: [
    //       {
    //         src: 'https://images.pexels.com/photos/983299/pexels-photo-983299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //       },
    //       {
    //         src: 'https://images.pexels.com/photos/688804/pexels-photo-688804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //       },
    //       {
    //         src: 'https://images.pexels.com/photos/1484511/pexels-photo-1484511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //       },
    //       {
    //         src: 'https://images.pexels.com/photos/1370939/pexels-photo-1370939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //       },
    //     ],
    //   }
    // },
  }
  

</script>

<style lang="scss" scoped>
.search{
  input{
  background-color: white;
  width: 37%;
  padding: 5px;
  border: #283618 solid 2px;
  margin-left: 30%;
  
}
button{
  background-color: #BC6C25;
  border: #283618 2px solid;
  padding: 5px;
  color: white;
  

}
}

.topimg{
  margin-bottom: 25px;
  img{
    width: 25%;
  height: 30%;
  }
  
}
h4{
  text-align: center;
}

.restaurants{
  margin: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  div{
    border: #283618 1px solid;
  }
  h3{
    text-align: center;
    padding: 3px;
    background-color: #DDA15E;
    border: #BC6C25 2px solid;
  }
  img{
    width: 100%;
  }
  button{
    margin-left: 40%;
    background-color: #606C38;
    color: #FEFAE0;
    padding: 5px;
    border: #283618 1px solid;
  }
}
.about{
  margin: 40px;
  h4{
    font-family: cursive;
    font-size: 30px;
    background-color: #283618;
    color: #FEFAE0;
  }
  p{
    text-align: center;
    font-size: 20px;
    background-color: #606C38;
    border: #283618 1px solid;
    color: #FEFAE0;
  }
}
</style>