
export class FactoryProduct {
    constructor( name = " " , info = " " ,  price = "0" , image)
    {
        this.totalProperty = {
            name: name,  
            info: info,
            price: price,
            image: image,
        }
        this.error =  ""
        this.success = {
            name: { status: false, value: "" },
            info:  { status: false, value: "" },
            price:  { status: false, value: "" },
            image:  { status: false, value: "" },
        }
    }
    removeSpace(str) {
        if ( str  )  {
            return str.replace(" ",'')
        }
    }
    separateThousands(price) {

        if ( price === 0 ) { return "0" }

        const thousant = Math.floor(((price/1000)))
        const nothousant = Math.round( ((price/1000)%1)*1000 ) || "000" 

        if ( thousant > 0 ) {
            return thousant.toString() + " " + nothousant
        }  else {
            return nothousant
        }
       
    }
    
    checkQualityName() {

        this.error = ""
        const name =  this.totalProperty.name
        
        if (  Number( this.removeSpace(name) ) ) {
            this.success.name.value = "Название товара не может сосотоять из одних цифор."
            this.success.name.status = false
            return "Неподходящее имя"
        }
        
        if ( name.length < 20 ) {
            this.success.name.status = true
            return name 
        } else {
            this.success.name.value = "Количество символов и пробелов в названии не должно привышать 20."
            this.success.name.status = false
            return "Неподходящее имя"
        }
    }
    
    checkQualityPrice() {
        
        const price = Number(this.totalProperty.price)
        
        this.error = ""
        if ( !price &&  price !== 0 ) {
            this.success.price.value = "Цена должна быть числом"
            this.success.price.status = false
            return "0"
        }
        if ( price > 1000000000 ) {
            this.success.price.value = "Введите число меньше миллиарда. Побойтесь Бога!"
            this.success.price.status = false
            return "0"
        }
        if (  price > 1000000  ) {
            const billions = Math.round((price/100000))/10
            
            this.success.price.status = true
            return billions.toString() + " млн."
        }
       
        if (  price >= 0  ) {
            this.success.price.status = true
            return this.separateThousands(price)
        } else {
            this.success.price.value = "Введите положительное число!"
            return "0"
        }
    }
    checkQualityInfo() {
         
        const info = this.totalProperty.info
       
        if ( info.length < 1000 ) {
            this.success.info.status = true
            return info
        } else {
            this.success.info.value = "Количество символов и пробелов в описании не должно привышать 1000."
            this.success.info.status = false
            return "Неподходящее описание..."
        }
       
    
    }
    checkQualityImage() {
       
        const file =  this.totalProperty.image

        
        if (!["image/jpeg", "image/png", "image/gif", "image/svg+xml"].includes(file.type)) {
            this.success.image.value = "Разрешены только изображения"
            this.success.image.status = false
            return ""
        }

        
        if (file.size > 2 * 1024 * 1024) {
            this.success.image.value = "Файл должен быть менее 2 МБ."
            this.success.image.status = false
            return ""
        }

        this.success.image.status = true
        return file
        /*
        const createPostData = async (url, fData) => { 
            
            let fetchResponse = await fetch(url, {
                method: "POST",
                body: fData
            });
        
            return await fetchResponse.text();
        };

        const fData = new FormData();
        fData.append("file_attach", file); 

            createPostData("/", fData)
                .then( (response) => {
                    if ( !response.ok) {
                        throw new Error("Ошибка!")
                    }
                    else {
                        console.log( "Картинка сохранена!");
                        this.success.image.value = "Картинка сохранена!"
                        this.success.image.status = true;
                    }
                })
                .catch(() => {

                    console.log("Картинка  не сохранена!");
                    this.success.image.value = "Картинка не сохранена!"
                    this.success.image.status = false;

                })
                
            */    
    


      

        
    }
}

export class FactoryVideoProduct extends  FactoryProduct {
    constructor( url ) {
        super()
        this.specificPropetry = {
            nameSpecificPropetry: "video",
            url: url
        }
    }
}

export class FactoryMusicInstrumentProduct extends  FactoryProduct {
    constructor( url ) {
        super()
        this.specificPropetry = {
            nameSpecificPropetry: "music_instrument",
            url: url
        }
    }
}