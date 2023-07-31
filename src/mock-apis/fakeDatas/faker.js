import { faker } from '@faker-js/faker'
import dayjs from 'dayjs';

function emotionPostFakeData() {
    const data = [];
    for (let i = 0; i < 20; i++) {
        const index = i;
        const name = faker.person.fullName();
        const date = new Date(dayjs(faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z' })).format('YYYY-MM-DD HH:mm:ss'));
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDay() + 1;
        const hour = String(date.getHours()).padStart(2, '0');
        const minute = String(date.getMinutes()).padStart(2, '0');
        const second = String(date.getSeconds()).padStart(2, '0');
        const time = `${hour}:${minute}:${second}`;
        const title = faker.word.adjective();
        const content = faker.lorem.paragraph();
        const tags = []
        const num = Math.floor(Math.random() * 5) + 1;
        for (let j = 0; j < num; j++) {
            const tag = faker.word.sample(3);
            tags.push(tag)
        }
        data.push({ index, name, year, month, day, time, title, content, tags });
    }
    data.sort(function(a,b){
        return new Date(`${b.year}-${b.month}-${b.day} ${b.time}`) - new Date(`${a.year}-${a.month}-${a.day} ${a.time}`)
    })

    const postData = data.reduce((acc, item) => {
        const { index, name, year, month, day, time, title, content, tags } = item
        const otherItem = {index, name, day, time, title, content, tags}
        const yearIndex = acc.findIndex(entry => entry.year === year);
        if (yearIndex !== -1) {
            const monthIndex = acc[yearIndex].monthData.findIndex(entry => entry.month === month);
            if (monthIndex !== -1) {
                acc[yearIndex].monthData[monthIndex].items.push(otherItem);
            } else {
                acc[yearIndex].monthData.push({
                    month: month,
                    items: [otherItem]
                });
            }
        } else {
            acc.push({
                year: year,
                monthData: [{
                    month: month,
                    items: [otherItem]
                }]
            });
        }
        return acc;
    }, []);
    console.log(JSON.stringify(postData))
    return postData;
}

export {
    emotionPostFakeData
}