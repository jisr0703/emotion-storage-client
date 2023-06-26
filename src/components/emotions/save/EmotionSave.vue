<template>
    <article class="post-write-area">
        <h1 :style="{width: '100%'}">글쓰기</h1>
        <form class="post-write-form">
            <div class="title">
                <input class="post-title-input" type="text" v-model="title" value placeholder="제목" maxlength="100">
            </div>
            <div class="tag">
                <div class="tag-input">
                    <input class="post-tag-input" type="text" v-model="newTag" @keydown.enter.prevent="addTag()">
                    <button class="tag-add-button" @click.prevent="addTag">+</button>
                </div>
                <ul class="tag-list">
                    <li class="tag-box" v-for="tag in this.tags" :key="tag">#{{ tag }}</li>
                </ul>
            </div>
            <div class="content">
                <textarea class="post-content-input" type="text" ref="contentTextarea" v-model="content" @input="adjustTextareaHeight" value placeholder="오늘의 감정을 작성해보세요!" maxlength="10000"></textarea>
            </div>
            <div class="post-button">
                <button>등록하기</button>
            </div>
        </form>
    </article>
</template>

<script>
import { saveGet } from '@/apis/save/emotionSaveAPI'

export default {
    name: 'EmotionSave',
    data() {
        return {
            newTag: '',
            tags: []
        };
    },
    methods: {
        async fetchData(){
            try{
                this.data = await saveGet();
            }catch(error){
                console.log(error + '!!!')
            }
        },
        adjustTextareaHeight() {
            this.$refs.contentTextarea.style.height = 'auto';
            this.$refs.contentTextarea.style.height = this.$refs.contentTextarea.scrollHeight + 'px';
        },
        addTag(){
            if (this.newTag.trim() !== '') {
                if (this.tags.length >= 5) {
                    alert("태그는 5개까지 입력가능해요😂");
                } else {
                    this.tags.push(this.newTag);
                }
                console.log(this.tags)
                this.newTag = '';
            }
        }
    },
}
</script>

<style scoped>
@import '@/styles/styles.css';
</style>