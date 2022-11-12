
export class FactoryProduct {
    constructor( name = " " , info = " " ,  price = "0" , file = "" )
    {
        this.totalProperty = {
            name: name,  
            info: info,
            price: price,
            image: { file: file, src: "https://www.thinkwithgoogle.com/_qs/static/img/icons/data-points/consumer_goods.svg" , style: {} },

            success: {
                name: { status: false, value: "" },
                info:  { status: false, value: "" },
                price:  { status: false, value: "" },
                image:  { status: false, value: "" },
            }
        }
        
    }
    removeSpace(str) {
        if ( str  )  {
            return str.replace(" ",'')
        }
    }
    separateThousands(price) {

        if ( price === 0 ) { return "0" }

        const thousant = Math.floor(((price/1000))).toString()
        const nothousant = Math.round( ((price/1000)%1)*1000 ) || "000" 

        if ( thousant > 0 ) {
            return thousant + " " + nothousant.toString()
        }  else {
            return nothousant.toString()
        }
       
    }
    
    checkQualityName() {

        const name =  this.totalProperty.name
        if ( !name ) {
            this.totalProperty.success.name.value = "Имя товара не может быть пустым."
            this.totalProperty.success.name.status = false
            return "Неподходящее имя"
        }

        if (  Number( this.removeSpace(name) ) ) {
            this.totalProperty.success.name.value = "Название товара не может сосотоять из одних цифор."
            this.totalProperty.success.name.status = false
            return "Неподходящее имя"
        }
        
        if ( name.length < 20 && name.length > 2 ) {
            this.totalProperty.success.name.status = true
            return name 
        } else {
            this.totalProperty.success.name.value = "Количество символов и пробелов должно быть больше 2, но меньше 20."
            this.totalProperty.success.name.status = false
            return "Неподходящее имя"
        }
    }
    
    checkQualityPrice() {
        
        const price = Number(this.totalProperty.price)
        
        
        if ( !price &&  price !== 0 ) {
            this.totalProperty.success.price.value = "Цена должна быть числом"
            this.totalProperty.success.price.status = false
            return "0"
        } 

        
        if ( !price ) {
            this.totalProperty.success.price.value = "Цена должна быть больше 0"
            this.totalProperty.success.price.status = false
            return "0"
        }

        if ( price > 1000000000 ) {
            this.totalProperty.success.price.value = "Введите число меньше миллиарда. Побойтесь Бога!"
            this.totalProperty.success.price.status = false
            return "0"
        }
        if (  price > 1000000  ) {
            const billions = Math.round((price/100000))/10
            
            this.totalProperty.success.price.status = true
            return billions.toString() + " млн."
        }
       
        if (  price >= 0  ) {
            this.totalProperty.success.price.status = true
            return this.separateThousands(price)
        } else {
            this.totalProperty.success.price.value = "Введите положительное число!"
            return "0"
        }
    }
    checkQualityInfo() {
         
        const info = this.totalProperty.info
        
        
        if (  info.length < 20 ) {
            this.totalProperty.success.info.value = "Введите больше 20 печатных знаков."
            this.totalProperty.success.info.status = false
            return info
        }

        if ( info.length < 1000 ) {
            this.totalProperty.success.info.status = true
            return info
        } else {
            this.totalProperty.success.info.value = "Количество символов и пробелов в описании не должно привышать 1000."
            this.totalProperty.success.info.status = false
            return "Неподходящее описание..."
        }
       
    
    }
    checkQualityImage() {
       
        const file =  this.totalProperty.image.file

        
        if (!["image/jpeg", "image/png", "image/gif", "image/svg+xml"].includes(file.type)) {
            this.totalProperty.success.image.value = "Разрешены только изображения"
            this.totalProperty.success.image.status = false
            return ""
        }

        
        if (file.size > 2 * 1024 * 1024) {
            this.totalProperty.success.image.value = "Файл должен быть менее 2 МБ."
            this.totalProperty.success.image.status = false
            return ""
        }

            this.totalProperty.image.src = URL.createObjectURL(file);


        this.totalProperty.success.image.status = true
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
                        this.totalProperty.success.image.value = "Картинка сохранена!"
                        this.totalProperty.success.image.status = true;
                    }
                })
                .catch(() => {

                    console.log("Картинка  не сохранена!");
                    this.totalProperty.success.image.value = "Картинка не сохранена!"
                    this.totalProperty.success.image.status = false;

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