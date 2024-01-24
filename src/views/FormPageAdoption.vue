<script>
import AnimalForm from '@/components/AnimalForm.vue';
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';

export default {
    components: {
        NavPage,
        FooterPage,
        AnimalForm
    },
}
</script>
<template>
    <NavPage />
    <div>
        <AnimalForm pagename="認養中心" title="毛小孩詳細資訊" inputTitleColor="var(--primary-color)"
            inputTextBorder="2px solid var(--primary-color)" svgColor="var(--primary-color)"
            uploadPicColor=" var(--primary-color)" submitBgColor="var(--primary-color)" />
    </div>
    <FooterPage />
</template>
<style scoped>
/* 標題 */
.adoptionCenteTitle {
    display: flex;
    flex-direction: row;
    padding-bottom: 4.8rem;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 12px;
}

.adoptionCenteTitle span {
    color: var(--primary-color);
}

.adoptionCenteTitle p {
    color: #D7D7D7;
}
</style>