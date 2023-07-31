import Axios from 'axios';
import config from '@/apis/endPoint';

async function emotionGetAll(){
    console.log(`${config.localUrl}/emt-all`)
    return await Axios.get(`${config.localUrl}/emt-all`, {
        headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": true,
            crossDomain: true,
            withCredentials: true
        }
    })
    // try{
    //     if (process.env.NODE_ENV === 'test'){
    //       console.log("request intercept")
    //         return await Axios.get('/emt-all')
    //             // .then(response => response.data.postData)  
    //             // .catch(error => console.error(error + '!!!'));
    //     } else {
    //         console.log("api server call")
    //         Axios.interceptors.request.use(conf => {
    //           console.log(conf.url);  // URL 확인
    //           return config
    //         });
    //         return await Axios.get(`${config.localUrl}/emt-all`, {
    //             headers: {
    //                 'Content-type': 'application/json',
    //                 "Access-Control-Allow-Origin": true,
    //                 crossDomain: true,
    //                 withCredentials: true
    //             }
    //         })
    //             // .then(response => {response.data.postData})
    //             // .catch(error => console.error(error + '!!!'));
    //     }
    // } catch(error){
    //     console.log(error+'!!!')
    // }
}

export {
    emotionGetAll,
}