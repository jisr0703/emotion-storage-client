import Axios from "axios";
// import { mockEmotionSavePost, mockEmotionGetAll } from "@/mock-apis/mock-api"
import mock from "@/apis/save/emotionSaveAPI"

const DEFAULT_ADDRESS = 'localhost'


// Mock 어댑터 사용
if (DEFAULT_ADDRESS === 'localhost') {
    Axios.interceptors.request.use(config => {
        return mock.onRequest(config);
      });
    
}

async function emotionSavePost(emotionItem){
    try{
        if (DEFAULT_ADDRESS === 'localhost'){       // mocking
            console.log("level 1!")
            console.log("level 3!")
            return await Axios.post('http://localhost:8080', emotionItem).then(response => [response.data.message, response.status])
                // const response = await axios.post('/api/endpoint', { data: 'some data' });
                // console.log(response.data); // 응답 데이터 처리
        }else{                                      // api call
            await Axios.post('http://localhost:8080', emotionItem, {
                headers: {
                    'Content-type': 'application/json',
                    "Access-Control-Allow-Origin": true,
                    crossDomain: true,
                    withCredentials: true
                }
            })
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

// async function emotionGetAll(){
//     try{
//         if (DEFAULT_ADDRESS === 'localhost'){
//             await mockEmotionGetAll()
//             return await Axios.get('/emt-all')
//                 .then(response => response.data.postData)  
//         }else{                                      // api call
//             await Axios.get('/emt-all')
//             .then(response => {
//                 console.log('api called')
//                 return response.data.postData;
//             })
//             .catch(error => {                       // Error when calling api
//                 console.error(error + '!!!');
//             })
//         }
//     }catch(error){
//         console.log(error+'!!!')
//     }
// }


export {
    emotionSavePost,
    // emotionGetAll,
}