import Axios from 'axios';
import config from '@/apis/endPoint';

async function emotionGetAll(){
    try{
        if (process.env.VUE_APP_API_URL === config.localUrl){
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