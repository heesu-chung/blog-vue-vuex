export const moduleB = {
    namespaced: true,
    state: () => ({
        count: 0,
    }),
    mutations: {
        increment(state) {
            state.count++;
        },
    },
    getters: {
        doubleCount(state, getters, rootState) {
            return state.count * 2;
        },
    },
    actions: {
        incrementIfOddOnRootSum(state, commit, rootState) {
            if ((state.count + rootState.count) % 2 === 1) {
                commit("increment");
            }
        },
    },
};
