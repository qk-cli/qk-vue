import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        COUNT:0
    },
    mutations:{
        INCREMENT(state){
            state.COUNT++
        }
    },
    getters:{},
    actions:{}
})

export default store