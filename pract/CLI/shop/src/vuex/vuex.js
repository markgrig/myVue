import { createStore } from 'vuex'
import { constants } from '@/components/Novigation/constants.js'

// Create a new store instance.
export const store = createStore({
    state () {
      return {
        product: {},
        isReturnMaker: {},
        nameCategoryArray: JSON.parse(localStorage.getItem( "nameCategoryArray" )) ||
                           Object.values(constants.category),
        newNameCategoryArray: []
      }
    },
    mutations: {
        updateProduct (state , obj) {
            state.product[obj.category] = obj.newProduct
        }, 
        returnMaker (state, category ) {
            state.isReturnMaker[category] = true
        },
        notReturnMaker (state, category ) {
            state.isReturnMaker[category] = false
        },
        update_nameCategoryArray(state, array) {
          state.nameCategoryArray = array
        },
        update_newNameCategoryArray(state, array) {
          state.newNameCategoryArray = array
        }
    },
    actions: {
      saveObjToLocalStor: (context, obj) => {
        
        Object.keys(obj).forEach( key  => {
          
          const array =  Object.values(obj[key])

          context.commit(`update_${key}`, array);
          localStorage.setItem( key,  JSON.stringify(array) );
          
        });
        
      },
    }

  })
