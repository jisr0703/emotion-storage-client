<template>
    <nav class="nav-list-area">
        <ul class="nav-list">
            <li class="nav-list-item">
                <router-link to="/emt-all">
                    감정 보기
                </router-link>
            </li>
            <li class="nav-list-item">
                <router-link to="/emt-save">
                    감정 쓰기
                </router-link> 
            </li>
            <li class="nav-list-item">
                <a href="">
                    Nav3
                </a>
            </li>
            <li class="nav-list-item">
                <a href="">
                    Nav4
                </a>
            </li>
            <li class="nav-list-item">
                <a href="">
                    Nav5
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'ESNav'
}
</script>

<style scoped>
@import '@/styles/styles.css';
</style>