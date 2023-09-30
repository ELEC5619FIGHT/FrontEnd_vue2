import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userToken : '',
        userName : ''
    },
    mutations: {
        changeToken (state, Token) {
            state.userToken = Token
        }
    },
    actions: {
        changeToken (context, Token) {
            context.commit('changeToken', Token)
        }
    }
})