<template>
    
    <div class = "product-card" id= "card">

        <RedCross
            v-if = "!isCategoryList" 
            :deleteModal= "hideModal">
        </RedCross>

        <TotalPropertyView 
            :isMobile = "isMobile"
            :totalProperty = "usersProduct.totalProperty">    
        </TotalPropertyView>

        <SpecificPropertyView>
        </SpecificPropertyView>

    </div>


</template>

<script>

export default {
    name: "ProductCard",
    props: {
        usersProduct: Object,
        isCategoryList: Boolean 

    },
    data() {
        return {
                isHideCard: false
        }
    },
    methods: {
        hideModal() {
            this.isHideCard = true
            this.$emit( "hideModal", "card" , this.isHideCard )
        }
   
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

.product-card {
    z-index: 2;
    position: absolute;
    box-sizing: border-box;

    width: 80%;
    aspect-ratio: 8 / 5;
    margin: 17.5% 10%;

    background-color: white;
    border: solid 5px rgb(234, 194, 114);
    box-shadow: 0px 1px 5px 1px rgba(255, 255, 255, 0.343);
    border-radius: 30px 0;
}

.product-card:hover {
    transition: 0.7s;
    box-shadow: 0px 0px 10px 2px rgb(136, 133, 133);
}

@media (max-width: 700px){
  
    
    .product-card {
        z-index: 2;
        position: absolute;
        box-sizing: border-box;

        width: 90%;
        /*height: 100%; */
        margin: 3% 5%;

        height: 52vw;

    }

}

</style>
