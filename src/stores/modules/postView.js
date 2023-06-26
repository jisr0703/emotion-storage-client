import { emotionGetAll } from '@/apis/save/emotionSaveAPI'

export const postViewStore = {
    namespaced: true,
    state: {
        emotions: [],
    },
    mutations: {
        EMOTIONS_SET_GETALL(state,data){
            state.emotions = data
        }
    },
    actions: {
        EMOTIONS_GETALL(context){
            emotionGetAll()
            .then((data)=> {
                context.commit('EMOTIONS_SET_GETALL', data)
            })
            .catch((error) => {
                console.log('error>>>', error)
            })
        }
    },
    getters: {
        getEmotions(state){
            return state.emotions;
        }
    }
}