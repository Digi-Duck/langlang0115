<script>
import NavPage from '@/components/NavPage.vue';
import AnimalForm from '@/components/AnimalForm.vue';


export default {
    components: {
        NavPage,
        AnimalForm
    },
}
</script>

<template>
    <NavPage />
    <main>
        <div>
            <AnimalForm title="撿到遺失動物" inputTitleColor="var(--primary-color)" inputTextBorder="2px solid var(--primary-color)" 
                svgColor="var(--primary-color)" uploadPicColor=" var(--primary-color)"></AnimalForm>
        </div>
    </main>
</template>


<style>
main {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
}
</style>