import Axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { emotionPostFakeData } from '@/mock-apis/fakeDatas/faker'

const mock = new MockAdapter(Axios)


function mockGet(){
    mock.onGet('/').reply(200, { message: 'Mocked response',});
}

async function mockEmotionGetAll(){
    mock.onGet('/emt-all').reply(200, { postData: emotionPostFakeData() });
}


async function mockEmotionSavePost(){
    mock.onPost('/emt-save').reply(201, { message: 'emotion saved',});
}

export {
    mockGet, 
    mockEmotionSavePost,
    mockEmotionGetAll
};