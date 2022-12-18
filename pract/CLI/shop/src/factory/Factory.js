
export class FactoryProduct {
    constructor( type = "ordinary", name = " " , info = " " ,  price = "0" , file = "", contact = { email: "" , phone: "" } )
    {
        this.type = type
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
        this.specificProperty = {
            contact: contact, 
            success: {
                contact: { 
                    status: {
                        phone: false,
                        email: false
                    }, 
                    value: {
                        phone: "",
                        email: ""
                    } },
            }
        }

        this.checkQualityFun = {
            name: ()=> {

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
                    this.totalProperty.success.name.value = ""
                    return name 
                } else {
                    this.totalProperty.success.name.value = "Количество символов и пробелов должно быть больше 2, но меньше 20."
                    this.totalProperty.success.name.status = false
                    return "Неподходящее имя"
                }

            },

        price: ()=> {
            
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
                this.totalProperty.success.price.value = "Введите число меньше миллиарда. "
                this.totalProperty.success.price.status = false
                return "0"
            }
            if (  price > 1000000  ) {
                const billions = Math.round((price/100000))/10
                
                this.totalProperty.success.price.status = true
                this.totalProperty.success.price.value = ""
                return billions.toString() + " млн."
            }
           
            if (  price >= 0  ) {
                this.totalProperty.success.price.status = true
                this.totalProperty.success.price.value = ""
                return this.separateThousands(price)
            } else {
                this.totalProperty.success.price.value = "Введите положительное число!"
                return "0"
            }

        },

        info: ()=> {
            
            const info = this.totalProperty.info
        
        
            if (  info.length < 20 ) {
                this.totalProperty.success.info.value = "Введите больше 20 печатных знаков."
                this.totalProperty.success.info.status = false
                return info
            }

            if ( info.length < 1000 ) {
                this.totalProperty.success.info.status = true
                this.totalProperty.success.info.value = ""
                return info
            } else {
                this.totalProperty.success.info.value = "Количество символов и пробелов в описании не должно привышать 1000."
                this.totalProperty.success.info.status = false
                return "Неподходящее описание..."
            }

        },

        image:  ()=> {
            const file =  this.totalProperty.image.file
        
            if (!["image/jpeg", "image/png", "image/gif", "image/svg+xml", "image/webp"].includes(file.type)) {
                this.totalProperty.success.image.value = "Разрешены только изображения"
                this.totalProperty.success.image.status = false
                return ""
            }

            
            if (file.size > 2 * 1024 * 1024) {
                this.totalProperty.success.image.value = "Файл должен быть менее 2 МБ."
                this.totalProperty.success.image.status = false
                return ""
            }

            this.totalProperty.success.image.status = true
            this.totalProperty.success.image.value  = ""
            return URL.createObjectURL(file)
        },
        
        contact: ( subfield ) => {

            const contact = this.specificProperty.contact
    
            const regEMail = /^[\w-.]+@[\w-]+.[a-z]{2,4}$/i;
            const regPhone =  /^\b\d{1}[-.]?\d{3}[-.]?\d{3}[-.]?\d{2}[-.]?\d{2}\b$/;
    
            switch (subfield) {
                case "email":
                    
                    if (  regEMail.test( contact.email ) ) {
                
                        this.specificProperty.success.contact.status.email = true
                        this.specificProperty.success.contact.value.email = ""
            
                    } else {
                       
                        this.specificProperty.success.contact.status.email = false
                        this.specificProperty.success.contact.value.email = "Почта должна содержать символ @ и правильное окончание"
            
                        contact.email = ""
                    }
    
                    break;
                
            case "phone":
    
                    if (  regPhone.test( contact.phone ) ) {
    
                        this.specificProperty.success.contact.status.phone = true
                        this.specificProperty.success.contact.value.phone = ""
                        
                    } else {
                        this.specificProperty.success.contact.status.phone = false
                        this.specificProperty.success.contact.value.phone = "Введите в следующих форматах: 89127629211, 8-912-762-92-11"
                    
                        contact.phone = ""
                    
                    }
    
                    break;
            
                default:
                    break;
            }
           
            return contact
    
            
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
    
    checkQuality(field , subfield) {
        return this.checkQualityFun[field](subfield)
    }

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

export class FactoryMediaProduct extends  FactoryProduct {
    constructor(type = "media") {
        super()
        this.type = type
        this.specificProperty = {

            ...this. specificProperty,
            audio: {
                file: "",
                url: ""
            },
            video: {
                file: "",
                url: ""
            },
            success: {

                ...this. specificProperty.success,
                audio: { status: false, value: "" },
                video: { status: false, value: "" },
            }
        }
    
    this.checkQualityFun = {
        ...this.checkQualityFun,
            audio: ()=> {

                const file =  this.specificProperty.audio.file

                if (!["audio/mpeg", "audio/mp3", "audio/mp4"].includes(file.type)) {
                    this.specificProperty.success.audio.value = "Разрешены только mp3, mp4, mpeg"
                    this.specificProperty.success.audio.status = false
                    return ""
                }
        
                
                if (file.size > 50 * 1024 * 1024) {
                    this.specificProperty.success.audio.value = "Файл должен быть менее 50 МБ."
                    this.specificProperty.success.audio.status = false
                    return ""
                }
                
        
                this.specificProperty.success.audio.status = true
                this.specificProperty.success.audio.value  = ""
                return  URL.createObjectURL(file)
            },

            video: () => {

                const url = this.specificProperty.video.src; 
    
                const isValidUrl = url1=> {
                    try { 
                        return Boolean(new URL(url1)); 
                    }
                    catch(e){ 
                        return false; 
                    }
                }
        
                if ( isValidUrl(url) && url.includes("https://www.youtube.com/embed/"))  {
                    this.specificProperty.success.video.status = true
                    this.specificProperty.success.video.value = ""
                    return url  
                }  
        
                this.specificProperty.success.video.status = false
                this.specificProperty.success.video.value = "Неподходящая ссылка на видео ютуб"
                return ""
    
            }
        }

       

    }

    
}