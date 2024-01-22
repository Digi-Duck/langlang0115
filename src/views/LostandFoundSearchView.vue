<script>
import FooterPage from '@/components/FooterPage.vue';
import GreenButton from '@/components/GreenButton.vue';
import NavPage from '@/components/NavPage.vue';
import IconLostAnimalsList from '@/components/icons/LostAnimals/IconLostAnimalsList.vue';
import IconLostFrame from '@/components/icons/LostAnimals/IconLostFrame.vue';
export default {
    data() {
        return {

        }
    }, methods: {
        clickGoToForm() {
            this.$router.push('/foundanimalsform'); //導到[撿到遺失動物]
        }
    },
    components: {
        NavPage,
        FooterPage,
        GreenButton,
        IconLostAnimalsList,
        IconLostFrame
    },
}
</script>
<template>
    <NavPage />
    <main>
        <section>
            <IconLostFrame/>
            <IconLostAnimalsList />
        </section>
       
        <!-- 失散協尋>撿到遺失動物（暫放） -->
        <GreenButton :showSvg="false" @click="clickGoToForm">確認前往：<br>撿到遺失動物</GreenButton>
    </main>
    <FooterPage />
</template>
<style scoped>
section {
    padding: 50px;
    background: #fdc3c3;
    width: 1579px;
    height: 1068px;
    display: flex;
    gap: 40px;
}
</style>