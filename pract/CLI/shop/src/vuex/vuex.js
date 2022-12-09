import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
    state () {
      return {
        product: {},
        isReturnMaker: {},
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
        }
    }
  })
