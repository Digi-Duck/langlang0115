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
            <AnimalForm title="我遺失了動物" inputTitleColor="#B68337" uploadPicBorder="#B68337" svgColor="#B68337" uploadPicColor="#B68337"
                inputTextBorder="2px solid #B68337" submitBgColor="#B68337"  ></AnimalForm>
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