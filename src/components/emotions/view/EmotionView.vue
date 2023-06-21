<template>
    <div class="main-view-area" v-if="dataProcessed">
        <article>
            <section v-for="yearGroup in this.postObj" :key="yearGroup[0]">
                <p>{{ yearGroup[0] }}</p>
                <div>
                    <p></p>
                    <!-- <router-link></router-link>
                    <router-link></router-link>
                    <router-link></router-link>
                    <router-link></router-link> -->
                </div>
            </section>
        </article>
        <!-- <table class="tbl tbl-main-view">
            <tbody class="tbl">
                <template v-for="group in this.postObj" :key="group[0]">
                    <tr>
                        <td colspan="5">
                            <p class="post-view-ymd year-area">
                                <text>{{ checkYear(group[0]) }}년</text>
                            </p>
                            <p class="post-view-ymd month-area">
                                <text>{{ checkMonth(group[0][0]) }}월</text>
                            </p>
                        </td>
                    </tr>
                    <tr class="tbl" v-for="item, index in group[0][1]" :key="index"> -->
                        <!-- <td class="tbl">{{ checkDate(item.date) }}일</td>
                        <td class="tbl">{{ item.title }}</td>
                        <td class="tbl">{{ item.content.substr(0,100) }}...</td>
                        <td class="tbl">
                            <p v-for="tag, index in item.tags" :key="index"> 
                                {{ tag }}
                            </p>
                        </td>
                        <td class="tbl">{{ checkTime(item.date) }}</td> -->
                    <!-- </tr>
                </template>
            </tbody>
        </table> -->
    </div>
    <div class="main-view-area" v-else>
        <p>Loading...</p>
    </div>
</template>

<script>
import{ checkYear, checkMonth, checkDate, checkYMD, reorganizeObj, checkTime} from "@/scripts/view/EmotionView"

export default {
    name: 'EmotionView',
    data() {
        return{
            dataProcessed: false,
        }
    },
    computed:{
        postObj() {
            return reorganizeObj(this.$store.getters['postViewStore/getTemps']);
        },
    },
    methods:{
        checkYear, 
        checkMonth, 
        checkDate, 
        checkYMD, 
        checkTime,
        reorganizeObj,
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