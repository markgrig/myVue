<template>

 
<div class = "instr-box">
    <UserGuid
      :insrtuction = "userGuid">
    </UserGuid>

    <BlueButton
        @click="clicktoBack()" 
        textButton = "Вернуться назад"> 
    </BlueButton>

</div>
  

</template>

<script>


export default {
    name: "Instruction",
    data() {
        return {
          
          userGuid:                  
                    [
                        { 
                            words:   '1) Выберите нужную вам категорию на верхней панели',
                            img:   `${require('@/img/addProductInstruction1.jpg')}`
                        },
                        { 
                            words:   '2) Нажмите на копку "создать товар"',
                            img:   `${require('@/img/addProductInstruction2.jpg')}`
                        },
                        { 
                            words:   '3) Справа находится форма. Для того, чтобы создать товар нужно её заполнить.',
                            img:   `${require('@/img/addProductInstruction3.jpg')}`
                        },
                        { 
                            words:   '4) Центральное окно формы и нижняя панель нужны для заполнения основных свойств, которые имеют все категории товаров. Такие как нименование, цена, и т.п.',
                            img:   `${require('@/img/addProductInstruction4.jpg')}`
                        },
                        { 
                            words:   '5) Также нажав на соответвующую иконку вы можите вызвать настройщик стилей.',
                            img:   `${require('@/img/addProductInstruction5.jpg')}`
                        },
                        { 
                            words:   '6) Левая панель служит для заполнения специфических свойств присущих разным типам товаров и контактной информации',
                            img:   `${require('@/img/addProductInstruction6.jpg')}`
                        },
                        { 
                            words:   '7) Все изменения вы сможите увидеть сразу же на карточке товара слева.',
                            img:   `${require('@/img/addProductInstruction7.jpg')}`
                        },
                        { 
                            words:   '8) В случае неподходящих данных вы увидите сообщение, которое поможет добавить подходящие данные.',
                            img:   `${require('@/img/addProductInstruction8.jpg')}`
                        },
                        { 
                            words:   '9) Для того, чтобы создать товар нужно нажать на следующую кнопку. В случае незаполненных необходимых полей вы увидите сообщение в верху формы.',
                            img:   `${require('@/img/addProductInstruction9.jpg')}`
                        },

                    ]
                
        }
    },
    methods: {
      clicktoBack() {
        this.$router.go(-1)
      },
    }
}
</script>

<style>

.instr-box{
  width: 70%;
  padding: 40px 5%;
  margin: 50px 10%;
  text-align: center;


  background-color: rgba(18, 124, 217, 0.696);
  border: solid 4px rgb(235, 203, 65);
  border-radius: 15px;
  font-size: 120%;
}
</style>
