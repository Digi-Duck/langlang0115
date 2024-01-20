<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        NavPage,
        FooterPage,
    }
}
</script>
<template>
    <NavPage />
    <main>
        <img src="../assets/Image/DogPaw.svg" alt="">
    </main>
    <FooterPage />
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
}

img {
    width: 500px;
    height: 500px;
}
</style>