import { emotionSavePost } from '@/apis/save/emotionSaveAPI'
import { emotionGetAll } from '@/apis/view/emotionViewAPI'

export const postViewStore = {
    namespaced: true,
    state: {
        emotions: [],
        temp: {}
    },
    mutations: {
        EMOTIONS_SET_GETALL(state,data){
            state.emotions = data
        },
        TEMP_SET_POST(state,data){
            state.temp = data
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
        },
        TEMPS_GET_POST(context,emotionData){
            emotionSavePost(emotionData)
            .then((data)=> {
                context.commit('TEMP_SET_POST',data)
                console.log(JSON.stringify(data))
            })
            .catch((error) => { 
                console.error('error>>>', error)
            })
        }
    },
    getters: {
        getEmotions(state){
            return state.emotions;
        },
        getTemps(state){
            return state.temp;
        }
    }
}