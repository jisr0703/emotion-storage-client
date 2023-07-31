<template>
    <article class="post-write-area">
        <h1 :style="{width: '100%'}">글쓰기</h1>
        <form class="post-write-form" v-on:submit="submitForm">
            <div class="title">
                <input class="post-title-input" type="text" v-model="title" value placeholder="제목" maxlength="100">
            </div>
            <div class="tag">
                <div class="tag-input">
                    <input class="post-tag-input" type="text" v-model="newTag" @keydown.enter.prevent="addTag()" value placeholder="태그" maxlength="10">
                    <button class="tag-add-button" @click.prevent="addTag">+</button>
                </div>
                <ul class="tag-list">
                    <li class="tag-box" v-for="tag, idx in this.tags" :key="idx" >#{{ tag }}
                        <a v-on:click="delTag(idx)"> x</a>
                    </li>
                </ul>
            </div>
            <div class="content">
                <textarea class="post-content-input" type="text" ref="contentTextarea" v-model="content" @input="adjustTextareaHeight" value placeholder="오늘의 감정을 작성해보세요!" maxlength="10000"></textarea>
            </div>
            <div class="submit-btn-area">
                <button class="btn btn-common submit-btn" type="submit">등록하기</button>
            </div>
        </form>
    </article>
</template>

<script>
// import { saveGet } from '@/apis/save/emotionSaveAPI'

export default {
    name: 'EmotionSave',
    data() {
        return {
            title: '', 
            content: '',
            tags: [],
            newTag: '',
        };
    },
    methods: {
        async submitForm(){
            try{
                this.$store.dispatch('postViewStore/TEMPS_GET_POST',{
                    title:this.title,
                    content:this.content,
                    tags:this.tags
                });
                this.$router.push('/kxoxxy/emt-all')
            }catch(error){
                console.log(error+'!!!')
            }
        },    
        adjustTextareaHeight() {
            const textarea = this.$refs.contentTextarea;
            textarea.style.height = 'auto';
            textarea.style.height = Math.max(textarea.scrollHeight, 300) + 'px';
            textarea.style.overflowY = 'hidden';
        },
        addTag(){
            if (this.newTag.trim() !== '') {
                if (this.newTag.length >= 10){
                    alert("하나의 태그는 10자 이하로 입력해주세요😀")
                }else {
                    if (this.tags.length >= 5) {
                        alert("태그는 5개까지 입력가능해요😂");
                    } else {
                        this.tags.push(this.newTag);
                    }
                    // console.log(this.tags)
                    this.newTag = '';
                }
            }
        },
        delTag(index){
            this.tags.splice(index, 1)
        }
    },
}
</script>

<style scoped>
@import '@/styles/styles.css';
</style>