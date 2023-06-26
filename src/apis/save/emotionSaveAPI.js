import Axios from "axios";
import { mockEmotionSavePost, mockEmotionGetAll } from "@/mock-apis/mock-api"

const DEFAULT_ADDRESS = 'localhost'

async function emotionSavePost(){
    try{
        if (DEFAULT_ADDRESS === 'localhost'){       // mocking
            await mockEmotionSavePost();
            return await Axios.post('/emt-save', {})
                .then(response => response.data.message)
                // const response = await axios.post('/api/endpoint', { data: 'some data' });
                // console.log(response.data); // 응답 데이터 처리
        }else{                                      // api call
            await Axios.get('/emt-save')
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
    emotionSavePost,
    emotionGetAll,
}