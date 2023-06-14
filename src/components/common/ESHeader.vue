<template>
    <div class="header-area">
        <ESLogo />
        <ESNav />
        <ESUserInfo />
    </div>
    <br>
</template>

<script>
import ESLogo from '@/components/common/header/ESLogo.vue'
import ESNav from '@/components/common/header/ESNav.vue'
import ESUserInfo from '@/components/common/header/ESUserInfo.vue'

export default {
    name: 'ESHeader',
    components: {ESLogo, ESNav, ESUserInfo}
}
</script>

<style scoped>
@import '@/styles/styles.css';
</style>