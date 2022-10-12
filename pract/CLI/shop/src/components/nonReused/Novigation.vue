<template>
   <h2> {{ nameCategory }} </h2>

  <div class ="navigator">
    <div class="novigation-element ligth" 
        @:click = 'changeCategory( category.name, category.urlName)'
        v-for='category, id in categores' :key = 'id' >
          {{ category.name }} 
    </div>
  </div>
    
  <div diplay = "none">  {{ findUrl(this.$route.params.id) }}  </div>

</template>

<script>
import { constant } from '@/factory/constants.js'

export default {
  name: 'NovigationElement',
  data () {
  return {
    categores: constant.category,
    nameCategory: "",
  }
  },
  methods: {
    changeCategory( name, urlName) {
      const url = '/category/' + urlName;
      this.$router.push({ path: url })
      this.nameCategory = name
     },
    findUrl(urlInpute) {
        console.log(urlInpute);
        this.categores.forEach(element => {
            if ( urlInpute?.trim() === element.urlName?.trim() ) { this.nameCategory = element.name }
        });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navigator {
  display: flex;
  align-items: center;
  padding: 30px;
}
h2 {
  padding: 10px 0px 0px 0px;
  text-align: center;
  color: rgb(251, 246, 246);

}

.novigation-element{
  display: block;
  margin: auto;
  text-align: center;

  width: 200px;
  height: 30px;
  
  color: rgba(0, 0, 255, 0.459);
  background-color: rgba(105, 235, 240, 0.765);
  border: solid;

  padding: 10px 0px 0px 0px;
  border-radius: 10px;

}
@media (max-width: 850px){
  .navigator {
    flex-direction: column;
    margin: 30px;
  }
  .navigator div:nth-child(2) {
    height: 50px;
  }
  .novigation-element {
    display: block;
    margin: 10px;
  }
}
</style>
