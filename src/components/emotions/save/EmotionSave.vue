<template>
    <div>
        Emotion Save Page!!!
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
    mounted() {
        saveGet();
    },
}
</script>

<style>
</style>