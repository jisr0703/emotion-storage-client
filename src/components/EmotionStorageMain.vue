<template>
    <div class="main-area">
        <section>
            <img src="@/assets/EmotionStorageLogo.png">
        </section>

        <section>
            <router-link to="/view">
                <button>시작하기</button>
            </router-link>
        </section>

    </div>
</template>

<script>
export default {
    name: 'EmotionStorageMain',
}
</script>

<style scoped>
@import '@/styles/styles.css';
</style>