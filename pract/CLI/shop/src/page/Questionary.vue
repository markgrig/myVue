<template>

 
<div class = "main-pannel">
  
  <h3 class = "topic-mp">  Панель управления </h3>

    <div>
      <BlueButton 
        @click="clicktoBack()" 
        textButton = "Вернуться назад"> 
      </BlueButton>

      <BlueButton
        v-if ="isShow.saveButton"
          @click="saveResults()" 
          textButton = "Coхранить"> 
      </BlueButton>

    </div>
  
</div>


 
<div class="check-box"
:style = "{ 'border': style[counter]?.border }">

  <div class = "check-button">

  </div>
  
  <div class="info-quest">

   <div>
    {{ textInfo }}
   </div>

  </div>
  <div
      v-for="questEl, qestI in questionary"
          :key ="qestI">

    <div v-if ="qestI===counter">

      <h4 class="topic-quest"
        :style = "style[qestI]">
         {{ questEl.question}}
      </h4>

      <select 
          class = "select-quest"
          v-model="answers[qestI]">

            <option disabled value="">
              Выбирите из вариантов
            </option>

            <option 
              v-for="el, i in questEl.variantAnswers"
              :key = "i">
                <div v-if ="el"
                 @click="nextQuest"> {{ el.name }} </div>
            </option>
                  
      </select>
    </div>
    
   
  </div>

</div>
  

</template>

<script>

export default {
    name: "Questionary",
    data() {
        return {
  
        counter: 0,
        answers: [],
        newNameCategoryArray: [], 
        nameCategoryArray: this.$store.state.nameCategoryArray,
        nameCategoryObj: { ...this.$store.state.nameCategoryArray },
        style:
          [
            {
              'background-color': 'rgba(255, 217, 0, 0.5)',
              'border': 'solid 3px rgb(215, 183, 5)',
            },
            {
              'background-color': 'rgba(243, 236, 236, 0.5)',
              'border': 'solid 3px rgba(111, 107, 127, 0.6)',
            },
            {
              'background-color': 'rgba(189, 134, 33, 0.7)',
              'border': 'solid 3px black',
            },
            
          ]
        }
    },
    computed:{
      nameCategory() {
            return this.$route.params.id
      },
      nowAnswer(){
        return this.answers[this.counter]
      },
      questionary() {
        return [
            { 
              question: 'Какая из этих категорий кажется вам наиболее интерестнoй?',
              variantAnswers: this.nameCategoryObj,
            },
            { 
              question: 'Теперь вы можите выбрать категорию, которая была бы интереснее оставшихся',
              variantAnswers: this.nameCategoryObj,
            },
            { 
              question: 'Сейчас вы выбираете ту категорию, которая займёт бронзовое место',
              variantAnswers: this.nameCategoryObj,
              answers: ""
            },
            { 
              question: 'Выберете 4 место :)',
              variantAnswers: this.nameCategoryObj,
            }

          ]
          
      },
      textInfo(){
        return `Сейчас вы можите последовательно выбрать 4 категории, после чего появится кнопка сохранения 
                , если вы нажмёте на неё они будут располагаться на верхней панели в этом же порядке.`
      },
      isShow() {
          if( this.counter === this.nameCategoryArray.length ) {
            return { saveButton: true }
          }
          return { saveBautton: false }
      },
    },
    methods: {
      clicktoBack() {
        this.$router.go(-1)
      },
      nextQuest(value) {
        if ( this.answers[this.counter] ) {

            const indexForDelete = this.nameCategoryArray.findIndex(el => el.name === value )

            this.newNameCategoryArray.push(this.nameCategoryObj[indexForDelete])
            delete this.nameCategoryObj[indexForDelete]

            this.counter++
        }
      },
      saveResults(){
       
        this.$store.dispatch('saveObjToLocalStor', { 'nameCategoryArray': this.newNameCategoryArray } );  
        this.isShow.saveButton = false  
      }
    },
    watch: {
      nowAnswer(value){
       
        this.nextQuest(value)
        this.$store.commit('update_newNameCategoryArray', this.newNameCategoryArray )
      }
    }
  
}
</script>

<style>

.check-button{
  width: 60%;
  margin: auto;
  display: flex;
}

.check-button button{
  margin: auto;
}

.check-box{
  box-sizing: border-box;
  padding: 50px;
  width: 50%;
  margin: 20px auto;

  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  border: solid 4px   rgb(200, 172, 16);
  box-shadow: 0px 0px 10px 1px white; 

  text-align: center;
}
.info-quest{
  box-sizing: border-box;
  padding: 20px;
  width: 70%;
  margin: 30px auto;
  font-size: 120%;
  
  background-color: rgba(214, 212, 107, 0.4);
  box-shadow: 0px 1px 4px 1px black; 
  border: solid 2px   gold;
  border-radius: 1px;
}


.select-quest{
  font-size: 110%;
  text-align: center;
  border-radius: 5px;
  border: solid 2px black;
}
.topic-quest{
  width: 60%;
  margin: 2% auto;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 2px rgb(119, 119, 119); 

  padding: 1%;
}
.topic-quest {
  background-color: rgba(21, 159, 233, 0.7);
  border: solid 2px rgb(4, 153, 116, 0.9);
}


.answer {
  position: static;
  box-sizing: border-box;
  padding-top: 1%;
}

@media (max-width: 700px){

  .check-box{
    width: 90%;
    padding: 15px 0;
  }

  .info-quest{
  padding: 20px;
  width: 90%;
  font-size: 90%;
}

}

</style>
