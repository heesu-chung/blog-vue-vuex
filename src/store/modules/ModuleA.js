export const moduleA = {
    namespaced: true,
    state: () => ({
        counter: 8,
    }),
    mutations: {
        setCounter(state, value) {
            state.counter = value;
        },
    },

    actions: {
        test() {
            console.log(4);
        },
    },
    getters: {
        time2(state) {
            return state.counter * 2;
        },
    },
};
