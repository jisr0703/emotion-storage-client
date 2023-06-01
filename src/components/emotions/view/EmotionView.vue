<template>
    <div>
        Emotion View Page <br>
        <button @click="fetchData()">버튼 클릭</button>
        <p> {{ data }} </p>
    </div>
</template>

<script>
import { emotionPostGetAll } from '@/apis/save/emotionSaveAPI';

export default {
    name: 'EmotionView',
    data() {
        return{
            data: null,
        }
    },
    methods:{
        async fetchData(){
            try{
                this.data = await emotionPostGetAll()
            console.log('@@@@@@@@@>>>'+this.data)
            console.log('#########>>>'+Object.keys(this.data))
            console.log('#########>>>'+Object.values(this.data))
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