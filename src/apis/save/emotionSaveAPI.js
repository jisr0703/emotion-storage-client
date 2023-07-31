import Axios from "axios";
import config from "@/apis/endPoint"

async function emotionSavePost(emotionItem){
    try{
        if (process.env.NODE_ENV === 'test'){
            return await Axios.post('/emt-save', emotionItem)
                .then(response => [response.data.message, response.status])
                .catch(error => console.error(error + '!!!'));
        } else {
            await Axios.post(`${config.localUrl}/emt-save`, emotionItem, {
                headers: {
                    'Content-type': 'application/json',
                    "Access-Control-Allow-Origin": true,
                    crossDomain: true,
                    withCredentials: true
                }
            })
            .then(response => [response.data.message, response.status])
            .catch(error => console.error(error + '!!!'));
        }
    }catch(error){
        console.log(error+'!!!')
    }
}

export {
    emotionSavePost,
}