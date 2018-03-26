import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  // = data
    products: []
  },
  getters: { // =  computed properties
    //Getters are perfect when we need to filter 
    //or calculate something on runtime.
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },
  actions: {
    fetchProducts () {
      //will be responsible for making the AJAX call
      // make the call
      // run setProducts mutation
    }
  },
  mutations: {
    //Mutations are responsible for setting and updating the state,
    //Mutations are responsible for single state changes.
    setProducts (state, products) {
      //will be responsible for updating the state and 
      //setting the products array.
      // update products
      state.products = products
    }
  }
})