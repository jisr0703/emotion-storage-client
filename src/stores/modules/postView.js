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
            .then((data)=> {
                const compareByDateTime = (a,b)=>{
                    if (a.date < b.date) {
                        return 1;
                    } else if (a.date > b.date) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
                let sortData = data.sort(compareByDateTime)
                context.commit('TEMPS_SET_GETALL',sortData)
            })
            .catch((error) => {
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