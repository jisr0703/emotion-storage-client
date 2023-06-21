import { faker } from '@faker-js/faker'
import dayjs from 'dayjs';

function emotionPostFakeData(){
    const data = [];
    for (let i = 0; i < 20; i++) {
        const index = i;
        const name = faker.person.fullName();
        const date = new Date(dayjs(faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z' })).format('YYYY-MM-DD HH:mm:ss'));        
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDay();
        const hour = String(date.getHours()).padStart(2, '0');
        const minute = String(date.getMinutes()).padStart(2, '0');
        const second = String(date.getSeconds()).padStart(2, '0')
        const time = `${hour}:${minute}:${second}`;
        const title = faker.word.adjective();
        const content = faker.lorem.paragraph();
        const tags = []
        const num = Math.floor(Math.random() * 5) + 1;
        for (let j = 0; j < num; j++) {
            const tag = faker.word.sample(3)
            tags.push(tag)
        }
        data.push({ index, name, year, month, day, time, title, content, tags });
    }
    console.log(JSON.stringify(data))
    return data;
}

export {
    emotionPostFakeData
}