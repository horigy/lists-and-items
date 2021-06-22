import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import lists from './lists'

export default new Vuex.Store({
    modules: {
      lists
    }
})
