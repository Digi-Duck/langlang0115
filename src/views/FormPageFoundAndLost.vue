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
         <AnimalForm title="撿到遺失動物" color="green"></AnimalForm>
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