import faker from '@faker-js/faker'

function emotionPostFakeData(){
    const data = [];
    for (let i = 0; i < 10; i++) {
        const name = faker.name.firstname();
        const date = faker.date.recent();
        const content = faker.lorem.paragraph();
        data.push({ name, date, content });
    }
    // data.push({name:'jisr', age:10, email:'jisr0703@nate.com'},{name:'jisr', age:10, email:'jisr0703@nate.com'}, )
    return data;
}


export default {
    emotionPostFakeData
}