import { faker } from '@faker-js/faker'
import dayjs from 'dayjs';

function emotionPostFakeData(){
    const data = [];
    for (let i = 0; i < 20; i++) {
        const name = faker.person.fullName();
        const date = dayjs(faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z' })).format('YYYY-MM-DD HH:mm:ss');
        // dayjs(dateTimeString).format('YYYY-MM-DD HH:mm:ss');
        const title = faker.word.adjective();
        const content = faker.lorem.paragraph();
        const tags = []
        const num = Math.floor(Math.random() * 5) + 1;
        for (let j = 0; j < num; j++) {
            const tag = faker.word.sample(3)
            tags.push(tag)
        }
        data.push({ name, date, title, content, tags });
    }
    return data;
}

export {
    emotionPostFakeData
}