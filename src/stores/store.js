import Vuex from 'vuex'

import { postViewStore } from './modules/postView'

export const store = new Vuex.Store({
    modules: {
        postViewStore,
    }
})