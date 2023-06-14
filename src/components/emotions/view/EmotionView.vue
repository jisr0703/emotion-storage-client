<template>
    <div>
        Emotion View Page <br>
        <CarenderView />
        <button @click="fetchData()">버튼 클릭</button>

        <table border="1" style="border: 1px;">
            <thead>
                <th>닉네임</th>
                <th>날짜</th>
                <th>제목</th>
                <th>내용</th>
                <th>태그</th>
            </thead>
            <tbody v-for="(post, index) in data" :key="index">
                <tr>
                <td>{{ post.name }}</td>
                <td>{{ post.date }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.content }}</td>
                <td>
                    <p v-for="(tag, index) in post.tags" :key="index"> 
                        {{ tag }}
                    </p>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { emotionPostGetAll } from '@/apis/save/emotionSaveAPI';
import CarenderView from '@/components/emotions/view/carenderView.vue';

export default {
    name: 'EmotionView',
    data() {
        return{
            data: null,
        }
    },
    components: {CarenderView},
    methods:{
        async fetchData(){
            try{
                this.data = await emotionPostGetAll()
            }catch(error){
                console.log(error+'!!!')
            }
            
        }
    },
    mounted() {
        console.log(emotionPostGetAll())
    },
}
</script>

<style>
</style>