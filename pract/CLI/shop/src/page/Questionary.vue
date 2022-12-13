<template>

 
<div class="check-box">

  <div
      v-for="questEl, qestI in questionary"
          :key ="qestI">

    <h4 class="topic-quest"
        :style = "style[qestI]">
         {{ questEl.question}}
    </h4>      
    <select 
        class = "select-quest"
        v-model="questEl.answers">

          <option disabled value="">
            Выбирите из вариантов
          </option>

          <option 
            v-for="el, i in questEl.variantAnswers"
            :key = "i">
              {{ el }} 
          </option>
                
    </select>
   
  </div>

</div>
  

</template>

<script>
import { constants } from '@/components/Novigation/constants.js'

export default {
    name: "Questionary",
    setup() {
      const nameCategoryArray = Object.values(constants.category)
                                  .map((el)=>{
                                    return el.name
                                  })
      return { nameCategoryArray }
    },
    data() {
        return {
          
        style:
          [
            {
              'background-color': 'rgba(255, 217, 0, 0.5)',
              'border': 'solid 2px rgb(215, 183, 5)',
            },
            {
              'background-color': 'rgba(243, 236, 236, 0.5)',
              'border': 'solid 2px rgba(111, 107, 127, 0.6)',
            },
            {
              'background-color': 'rgba(189, 134, 33, 0.7)',
              'border': 'solid 2px rgba(150, 143, 121, 1)',
            },
            
          ]
        }
    },
    computed:{
      nameCategory() {
            return this.$route.params.id
      },
      questionary() {
        return [
            { 
              question: 'Какая из этих категорий кажется вам наиболее интерестнoй?',
              variantAnswers: this.nameCategoryArray,
              answers: ""
            },
            { 
              question: 'Теперь вы можите выбрать категорию, которая была бы интереснее оставшихся',
              variantAnswers: this.nameCategoryArray,
              answers: ""
            },
            { 
              question: 'Сейчас вы выбираете ту категорю, которая займёт бронзовое место',
              variantAnswers: this.nameCategoryArray,
              answers: ""
            },
            { 
              question: 'Выберете 4 место :)',
              variantAnswers: this.nameCategoryArray,
              answers: ""
            }

          ]
          
      }
    },
    methods: {
      
    }
}
</script>

<style>
.check-box{
  
  padding: 50px;
  width: 50%;
  margin: 10px auto;

  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  border: solid 3px rgb(184, 184, 184);

  text-align: center;
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
</style>
