import Axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { emotionPostFakeData } from '@/mock-apis/fakeDatas/faker'

const mock = new MockAdapter(Axios)


function mockGet(){
    mock.onGet('/').reply(200, { message: 'Mocked response',});
}

async function mockSaveGet(){
    mock.onGet('/save').reply(200, { message: 'emotion saved',});
}

async function mockEmotionPostGetAll(){
    mock.onGet('/emtPost').reply(200, { postData: emotionPostFakeData() });
}

export {
    mockGet, 
    mockSaveGet,
    mockEmotionPostGetAll
};