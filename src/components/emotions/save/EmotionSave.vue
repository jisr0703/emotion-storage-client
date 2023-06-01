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
            data: 'default',
        }
    },
    methods: {
        async fetchData(){
            try{
                this.data = await saveGet();
            }catch(error){
                console.log('error >>>', error )
            }
        }
    },
}
</script>

<style>
</style>