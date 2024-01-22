<script>
import FooterPage from '@/components/FooterPage.vue';
import GreenButton from '@/components/GreenButton.vue';
import NavPage from '@/components/NavPage.vue';

export default {
    data() {
        return {

        }
    },methods:{
        clickGoToForm(){
            this.$router.push('/foundanimalsform'); //導到[撿到遺失動物]
        }
    },
    components: {
    NavPage,
    FooterPage,
    GreenButton
},
}
</script>
<template>
    <NavPage />
    <main>

        <!-- 失散協尋>撿到遺失動物（暫放） -->
        <GreenButton :showSvg="false" @click="clickGoToForm">確認前往：<br>撿到遺失動物</GreenButton>
    </main>
    <FooterPage />
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
}
</style>