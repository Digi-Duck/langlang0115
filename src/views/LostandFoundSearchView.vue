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
        goToFoundAnimalForm() {
            this.$router.push('/foundanimalsform'); //導到[撿到遺失動物]
        },
        goToMyLostForm() {
            this.$router.push('/myanimallostform'); //導到[我的動物走失了]
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
            <IconLostFrame />
            <IconLostAnimalsList />
        </section>

        <!-- 失散協尋>撿到遺失動物（暫放） -->
        <GreenButton :showSvg="false" @click="goToFoundAnimalForm">確認前往：<br>撿到遺失動物</GreenButton>
        <!-- 失散協尋>我遺失了動物（暫放） -->
        <GreenButton :showSvg="false" @click="goToMyLostForm">確認前往：<br>我遺失了動物</GreenButton>
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