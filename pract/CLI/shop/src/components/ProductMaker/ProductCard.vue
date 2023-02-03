<template>
    
    <div :class = "classList['product-card']" id= "card">
        
        <div
            :class = "classList['open-product-page']">
            <BlueButton 
                textButton = "Страница      "
                @click = "openProductPage">
            </BlueButton>    
        </div>
       


        

        <RedCross
            v-if = "!isCategoryList" 
            :deleteModal= "hideModal">
        </RedCross>

        <TotalPropertyView
            :typeCard = "typeCard"
            :isCategoryList = "isCategoryList" 
            :totalProperty = "usersProduct.totalProperty"
            :aspectRatioImage = "aspectRatioImage"
            @userClickImg="userClickImg">    
        </TotalPropertyView>

        <SpecificPropertyView
            :typeCard = "typeCard"
            :isCategoryList = "isCategoryList" 
            :totalProperty = "usersProduct.totalProperty"
            :specificProperty = "usersProduct.specificProperty"
            :aspectRatioImage = "aspectRatioImage"
            :onVideo = "onVideo"
            @offVideo = "offVideo">

        </SpecificPropertyView>

    </div>

  

</template>

<script>

export default {
    name: "ProductCard",
    props: {
        usersProduct: Object,
        aspectRatioImage: String,
        typeCard: String,
        isCategoryList: Boolean,
        keyProduct: Number,
    },
    data() {
        return {
                isHideCard: false,
                userClick: {
                    img: false
                },
        }
    },
    methods: {
        openProductPage(){

            if ( this.keyProduct === 0) {      
                this.$store.commit('updateProduct', { category: this.$route.params.id, newProduct: this.usersProduct } )
            } 

            const url = `/category/${this.$route.params.id}/product/${this.nameProduct}`;
            this.$router.push({ path: url });
        },
        hideModal() {
            this.isHideCard = true
            this.$emit( "hideModal", "card" , this.isHideCard )
        },
        userClickImg() {
            this.userClick.img = true;
        },
        offVideo() {
            this.userClick.img = false
        }
    },
    computed: {
        nameProduct() {
            if ( this.keyProduct ) {
                return this.keyProduct 
            }
            return "newProduct"
        },
        classList() {
                   return { 
                    "product-card": `card product-card-${this.typeCard}`,
                    "open-product-page": `open-product-page open-product-page-${this.typeCard}`

                }
        },
        onVideo() {
            if ( this.userClick.img && (this.typeCard === "videoCard") ) {
                return true
            }

            return false
        }
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

.card {

    z-index: 200;
    position: relative;
    box-sizing: border-box;

    background-color: white;
    border: solid 5px rgb(234, 194, 114);
    box-shadow: 0px 1px 5px 1px rgba(255, 255, 255, 0.343);
    border-radius: 30px 0
}

.card:hover {
    transition: 0.7s;
    box-shadow: 0px 0px 10px 2px rgb(136, 133, 133);
}

.product-card-videoCard {

    aspect-ratio: 8 / 8;
    width: 60%;
    margin: 13% 20%;


}

.product-card-audioCard {
    
    aspect-ratio: 16 / 11;
    width: 80%;
    margin: 17.5% 10%;

    
}

/* с product-card-clothes неявно связанны back-longCard (InfoView) и image-longCard(ImageView)*/
.product-card-longCard {

    aspect-ratio: 40 / 66;
    width: 40%;
    margin: 10% 30%;

    backface-visibility: hidden;

  

}


.open-product-page {
    font-size: 90%;
    position:absolute;
    top: 2%;
    right: 10%; 
}

.open-product-page-longCard{
    top: 90%;
    right: 0;
    width: 100%;
}

@media (max-width: 700px){
    
    .product-card-videoCard {

        width: 60%;
        margin: 2% 20%;

    }

    .product-card-audioCard {

        width: 90%;
        margin: 4% 5%;

    }

    .product-card-longCard {

        width: 40%;
        margin: 4% 30%;

    }



}

</style>
