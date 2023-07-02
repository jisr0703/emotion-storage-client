<template>
    <div class="main-area">
        <section class="main-logo-section">
            <img src="@/assets/EmotionStorageLogo.png">
        </section>

        <section class="start-btn-area">
            <router-link to="/emt-all" class="btn btn-common">
                S t a r t
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