import Axios from "axios";
import { mockEmotionGetAll } from "@/mock-apis/mock-api"

const DEFAULT_ADDRESS = 'localhost'

async function emotionGetAll(){
    try{
        if (DEFAULT_ADDRESS === 'localhost'){
            await mockEmotionGetAll()
            return await Axios.get('/emt-all')
                .then(response => response.data.postData)  
        }else{                                      // api call
            await Axios.get('/emt-all')
            .then(response => {
                console.log('api called')
                return response.data.postData;
            })
            .catch(error => {                       // Error when calling api
                console.error(error + '!!!');
            })
        }
    }catch(error){
        console.log(error+'!!!')
    }
}


export {
    emotionGetAll,
}