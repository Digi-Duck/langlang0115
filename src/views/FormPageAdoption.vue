<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
import AdoptionForm from '@/components/AdoptionForm.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        NavPage,
        FooterPage,
        AdoptionForm
    }
}
</script>
<template>
    <NavPage />
    <main>
        <AdoptionForm title="填寫送養資料" inputTitleColor="var(--primary-color)" inputTextBorder="2px solid var(--primary-color)"
            svgColor="var(--primary-color)" uploadPicColor=" var(--primary-color)" submitBgColor="var(--primary-color)" />
    </main>
    <FooterPage />
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    padding: 4.3rem 9rem 2.25rem 10rem;
}

/* 標題 */
.adoptionCenteTitle {
    display: flex;
    flex-direction: row;
    padding: 0 0 6.25rem 1.5rem;
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
    padding-left: 2.5rem;
}
</style>