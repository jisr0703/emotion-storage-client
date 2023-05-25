import Axios from "axios";
import { mockSaveGet } from "@/mock-apis/mock-api"

const DEFAULT_ADDRESS = 'localhost'

function saveGet(){
    if (DEFAULT_ADDRESS === 'localhost'){
        mockSaveGet()
    }

    Axios.get('/save')
        .then(response => {
            console.log(response.data.message);
            
        })
        .catch(error => {
            console.error(error + '!!!');
        })
}


export {
    saveGet,
}