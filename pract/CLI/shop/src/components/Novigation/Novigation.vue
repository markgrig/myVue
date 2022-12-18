<template>
   <h2> {{ nameCategory }} </h2>

  <div class ="navigator">
    <strong class="novigation-element ligth" 
        @:click = 'changeCategory( category.name, category.urlName)'
        v-for='category, id in categores' :key = 'id' >
         <div>  {{ category.name }}    </div> 
    </strong>
  </div>
    
  <div diplay = "none">  {{ findUrl(this.$route.params.id) }}  </div>

</template>

<script>

export default {
  name: 'NovigationElement',
  data () {
  return {
    nameCategory: "",
  }
  },
  computed: {
    categores() {
      return this.$store.state.nameCategoryArray
    } 
  },
  methods: {
    changeCategory( name, urlName) {
     
      const url = `/category/${urlName}`
      this.$router.push({ path: url })
    
     },
    findUrl(urlInpute) {
        //console.log(urlInpute);
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
  padding: 1vw;
 
  margin: auto;
}
h2 {
  padding: 1vw 0px 0px 0px;
  text-align: center;
  color: rgb(251, 246, 246);
  font-size: 2vw;
}

.novigation-element{
  display: block;
  margin: auto;
  text-align: center;
  font-size: 1.5vw;
  width: 20vw;
  height: auto;
  color: white;
  box-shadow: 0 0 8px 1px rgb(26, 173, 232);
  background-color: rgba(31, 135, 253, 0.7);
  border: solid 0.16vw;
  
  padding: 1vw 0px;
  border-radius: 1vw;

}

.novigation-element div {
  filter: drop-shadow(0px 0px 1px black);
}
@media (max-width: 700px){
  .navigator div:nth-child(2) {
    height: 11vw;
  }
}


@media (max-width: 700px){
  .navigator {
    flex-direction: column;
    padding: 10px;
  }
  .novigation-element {
    display: block;
    margin: 1vw;
    width: 50vw;
    padding: 1vh 10vw;
    height: max-content;
    font-size: 2.1vh;
    border: solid 0.65vw;
  }

  h2 {
    font-size: 4vw;  
  }
}
</style>
