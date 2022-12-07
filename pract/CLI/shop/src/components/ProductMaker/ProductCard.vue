<template>
    
    <div :class = "classList['product-card']" id= "card">
        
        <BlueButton 
            class = "open-product-page"
            textButton = "page">
        </BlueButton>

       

        <RedCross
            v-if = "!isCategoryList" 
            :deleteModal= "hideModal">
        </RedCross>

        <TotalPropertyView
            :isCategoryList = "isCategoryList" 
            :totalProperty = "usersProduct.totalProperty"
            :aspectRatioImage = "aspectRatioImage"
            @userClickImg="userClickImg">    
        </TotalPropertyView>

        <SpecificPropertyView
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
        isCategoryList: Boolean,
    },
    data() {
        return {
                isHideCard: false,
                typeCard: this.$route.params.id,
                userClick: {
                    img: false
                }
        }
    },
    methods: {
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
        classList() {
                   return { "product-card": `card product-card-${this.typeCard}`           
                }
        },
        onVideo() {
            if ( this.userClick.img && (this.typeCard === "video") ) {
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

    z-index: 2;
    position: absolute;
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
    
    aspect-ratio: 8 / 5;
    width: 80%;
    margin: 17.5% 10%;

    
}

/* с product-card-clothes неявно связанны back-clothes (InfoView) и image-clothes(ImageView)*/
.product-card-longCard {

    aspect-ratio: 4 / 6;
    width: 40%;
    margin: 10% 30%;

    backface-visibility: hidden;

  

}


.open-product-page {
    font-size: 90%;
    width: 12%;
    height: 8%;
    padding: 1% 3%;
    position:absolute;
    top: 0;
    right: 16%;
}


@media (max-width: 700px){
    
    .product-card-video {

        width: 60%;
        margin: 2% 20%;

    }

    .product-card-music_instrument {

        width: 90%;
        margin: 4% 5%;

    }

    .product-card-clothes {

        width: 40%;
        margin: 4% 30%;

    }


}

</style>
