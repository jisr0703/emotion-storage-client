import { emotionPostGetAll } from '@/apis/save/emotionSaveAPI'

export const postViewStore = {
    namespaced: true,
    state: {
        temps: [],
    },
    mutations: {
        TEMPS_SET_GETALL(state,data){
            state.temps = data
        }
    },
    actions: {
        TEMPS_GETALL(context){
            emotionPostGetAll()
            .then(({data})=> {
                context.commit("TEMPS_SET_GETALL",data)
            })
            .catch(error=> {
                console.log('error>>>', error)
            })
        }
    },
    getters: {
        getTemps(state){
            return state.temps;
        }
    }
}