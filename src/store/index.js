import { createStore } from "vuex";

export default createStore({
    state: {
        aliveArr: []
    },
    mutations: {
        setAliveArr(state, payload) {
            switch (payload.type) {
                case 'add': !state.aliveArr.includes(payload.name) && state.aliveArr.push(payload.name)
                    break
                case 'del': state.aliveArr = state.aliveArr.filter(item => item !== payload.name)
                    break
            }
        }
    },
    actions: {
        addAliveArr({ commit }, name) {
            commit('setAliveArr', { type: 'add', name })
        },
        delAliveArr({ commit }, name) {
            commit('setAliveArr', { type: 'del', name })
        }
    },
    modules: {},
});
