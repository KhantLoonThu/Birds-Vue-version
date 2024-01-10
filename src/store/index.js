import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        birds: [],
    },
    mutations: {
        catchData(state, data) {
            state.birds = data;
            console.log(state.birds)
        }
    },
    actions: {
        async getData(context) {
            let response = await axios.get('Birds.json');
            let data = await response.data;
            let birds = await data.Tbl_Bird;
            console.log(birds)
            context.commit('catchData', birds);
        }
    },
    getters: {

    }
});

export default store;