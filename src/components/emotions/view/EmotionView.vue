<template>
    <article class="post-view-list-area" v-if="dataProcessed">
    <section class="index-top"></section>
            <section class="post-area" v-for="yearPosts in this.postObj" :key="yearPosts">
                <p class="each-post-ele year-area">{{ yearPosts.year }}년</p>
                <span v-for="monthPosts in yearPosts.monthData" :key="monthPosts">
                    <p class="each-post-ele month-area">{{ monthPosts.month }}월 </p>
                    <p class="each-post-ele day-area" v-for="item in monthPosts.items" :key="item.index">
                        <span class="day-span"> {{ item.day }}일</span>
                        <span> | {{ item.title }} | </span>
                        <span>{{ item.content.substr(0,100) }}...... | </span>
                        <span v-for="tag, index in item.tags" :key="index">
                            {{ tag }}
                            <text v-if="index !== item.tags.length - 1">, </text>
                        </span>
                        <span> | {{ item.time }}</span> <br>
                    </p>
                </span>
            </section>
    </article>
    <article class="post-view-list-area" v-else>
        <p>Loading...</p>
    </article>
</template>

<script>
export default {
    name: 'EmotionView',
    data() {
        return{
            dataProcessed: false,
        }
    },
    computed:{
        postObj() {
            return this.$store.getters['postViewStore/getTemps'];
        },
    },
    methods:{
        async fetchData(){
            try{
                this.$store.dispatch('postViewStore/TEMPS_GETALL');
            }catch(error){
                console.log(error+'!!!')
            }
        },
    },
    async created() {
        try{
            await this.fetchData();
            this.dataProcessed = true;
        } catch (error) {
            console.log(error + '!!!');
        }
    },
}
</script>

<style>
@import '@/styles/styles.css';
</style>