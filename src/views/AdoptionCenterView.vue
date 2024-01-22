<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
import IconChangeButton from '@/components/icons/IconChangeButton.vue';

export default {
    data() {
        return {
            mysubmit: "毛小孩資訊"
        }
    },
    methods: {
        petinformationPage() {
            this.$router.push('/adoptionpetinformation');
        }
    },
    components: {
        NavPage,
        FooterPage,
        IconChangeButton
    },
}
</script>
<template>
    <NavPage />
    <main>
        <br>
        <IconChangeButton :text="mysubmit" @click="petinformationPage"></IconChangeButton>
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