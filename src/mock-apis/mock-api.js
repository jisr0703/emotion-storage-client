import Axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(Axios)


function mockGet(){
    mock.onGet('/').reply(200, { message: 'Mocked response',});
}

function mockSaveGet(){
    mock.onGet('/save').reply(200, { message: 'Mocked response',});
}

export {
    mockGet, 
    mockSaveGet
};