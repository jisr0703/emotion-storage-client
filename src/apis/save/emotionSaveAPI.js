import Axios from "axios";
import config from "@/apis/endPoint"

async function emotionSavePost(emotionItem){
    try{
        if (process.env.VUE_APP_API_URL === config.localUrl){       // mocking
            // return await Axios.post(config.localUrl+'/emt-all', emotionItem)
            return await Axios.post('/emt-save', emotionItem)
                .then(response => [response.data.message, response.status])
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

export {
    emotionSavePost,
}