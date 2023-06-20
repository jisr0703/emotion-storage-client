<template>
    <div>
        Emotion View Page <br>
        <!-- <CarenderView /> -->
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
                <p>{{ checkYear(post.date) }}년</p>
                <p>{{ checkMonth(post.date) }}월</p>
                <p>{{ checkDate(post.date) }}일</p>
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
// import { emotionPostGetAll } from '@/apis/save/emotionSaveAPI';
// import CarenderView from '@/components/emotions/view/carenderView.vue';

export default {
    name: 'EmotionView',
    data() {
        return{
            data: {},
        }
    },
    // components: {CarenderView},
    methods:{
        async fetchData(){
            try{
                this.$store.dispatch('postViewStore/TEMPS_GETALL')
                setTimeout(() => {
                    
                }, 3000);
                this.data = this.$store.state.postViewStore.temps
            }catch(error){
                console.log(error+'!!!')
            }
        },
        checkYear(datetime){
            return datetime.substr(0,4)
            // return datetime.getFullYear();
        },
        checkMonth(datetime){
            return datetime.substr(5,2)
        },
        checkDate(datetime){
            return datetime.substr(8,2)
        },
        temp(a,b){
            if (a===b) {
                return 1
            }
            return 0
        }
    },
    
    created() {
        console.log("created !!!")
    },
    mounted() {
        console.log("mounted !!!")
        this.fetchData()
    }
}
</script>

<style>
</style>