<template>
    <div>
        Emotion Save Page!!!
        <button @click="fetchData"> click!!! </button>
        <p>{{ data }}</p>
    </div>
</template>

<script>
import { saveGet } from '@/apis/save/emotionSaveAPI'

export default {
    name: 'EmotionSave',
    data() {
        return {
            data: undefined,
        }
    },
    methods: {
        async fetchData(){
            try{
                this.data = await saveGet();
            }catch(error){
                console.log(error + '!!!')
            }
        }
    },
}
</script>

<style>
</style>