import Axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { emotionPostFakeData } from '@/mock-apis/fakeDatas/faker'

const mock = new MockAdapter(Axios)

mock.onGet('/').reply(200, { message: 'Mocked response',});

mock.onGet('/emt-all').reply(200, { postData: emotionPostFakeData() });

mock.onPost('/emt-save').reply(201, { message: 'emotion saved' });

export default mock;