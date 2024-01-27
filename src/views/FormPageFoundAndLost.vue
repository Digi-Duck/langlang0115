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
            <AnimalForm pagename="失散協尋"  
            title="撿到遺失動物" 
            inputTitleColor="#7EA138"
            uploadPicBorder="#7EA138" 
            svgColor="#7EA138" 
            uploadPicColor=" #7EA138" 
            inputTextBorder="2px solid #7EA138" 
                submitBgColor="#7EA138"
                popStyle="#7EA138" 
                confirmpopStyle="#7EA138" 
                successSvgColor="#7EA138"
                successtextcolor="#7EA138" 
                successBtnbgColor="#7EA138" 
                ></AnimalForm>
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