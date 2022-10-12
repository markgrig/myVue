<template>
  
  <div class ="home-router">
    <Novigation  v-for='category, id in categores' :key = 'id' 
      :name='category.name'
      :urlName='category.urlName'
      @changeCategory = 'changeNameCategory'
      />
  </div>
  <h2> 
    {{ nameCategory }}
  </h2>
  <main>
      <router-view/>
  </main>
  
</template>

<script>

import Novigation from '@/components/nonReused/Novigation.vue'
import { constant } from '@/factory/constants.js'

export default {
  
  name: 'App',

  data () {
  return {
    categores: constant.category,
    nameCategory: "Добро пожаловть!",
  }
  },
  methods: {
    changeNameCategory(value) {
        this.nameCategory = value;
    }
  },
  components: {
    Novigation
  }
  
}

</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body{
  background-color: rgba(182, 255, 80, 0.285);
}
.home-router {
  display: flex;
  align-items: center;
  padding: 30px;
}
h2 {
  text-align: center;
}
@media (max-width: 850px){
  .home-router {
    flex-direction: column;
    margin: 30px;
  }
}
</style>
