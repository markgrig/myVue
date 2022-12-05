<template>

 <div>
    <NameView
        :nameUsersProduct = "totalProperty.name"
        :isNameSuccess = "totalProperty.success.name.status"
        :valueError = "totalProperty.success.name.value"    
        >
    </NameView>

    <PriceView
        :priceUsersProduct = "totalProperty.price"
        :isPriceSuccess = "totalProperty.success.price.status"
        :valueError = "totalProperty.success.price.value"    
        >
    </PriceView>

    <InfoView
        :infoUsersProduct = "totalProperty.info"
        :isInfoSuccess = "totalProperty.success.info.status"
        :valueError = "totalProperty.success.info.value">
    </InfoView>

    

    <ImageView

        :isCategoryList = "isCategoryList" 
        :srcImageUsersProduct = "totalProperty.image.src"
        :usersStyle = "totalProperty.image.style"
        :aspectRatioImage = "aspectRatioImage"
        
        :isImageSuccess = "totalProperty.success.image.status"
        :valueError = "totalProperty.success.image.value"
        @userClickImg="userClickImg">
    </ImageView>

 </div>
</template>

<script>

export default {
    name: "TotalPropertyView",
    emits: ['userClickImg'],
    props: {
        totalProperty: Object,
        aspectRatioImage: String,
        isCategoryList: Boolean,
    },
    methods: {
        userClickImg() {
            this.$emit('userClickImg');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
