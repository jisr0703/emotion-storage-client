import Axios from "axios";
import { mockSaveGet, mockEmotionPostGetAll } from "@/mock-apis/mock-api"

const DEFAULT_ADDRESS = 'localhost'

async function saveGet(){
    try{
        if (DEFAULT_ADDRESS === 'localhost'){       // mocking
            await mockSaveGet();
            return await Axios.get('/save')
                .then(response => response.data.message)
        }else{                                      // api call
            await Axios.get('/save')
            .then(response => {
                console.log('api called')
                return response.data.message;
            })
            .catch(error => {                       // Error when calling api
                console.error(error + '!!!');
            })
        }
    }catch(error){
        console.log(error+'!!!')
    }
    
}

async function emotionPostGetAll(){
    try{
        if (DEFAULT_ADDRESS === 'localhost'){
            await mockEmotionPostGetAll()
            return await Axios.get('/emtPost')
                .then(response => response.data.postData)
        }else{                                      // api call
            await Axios.get('/emtPost')
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
    saveGet,
    emotionPostGetAll
}