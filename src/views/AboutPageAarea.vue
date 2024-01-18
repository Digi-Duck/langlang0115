<!-- 第二頁 關於浪浪的事 -->
<script>
import AboutUsArea from '@/components/AboutUsArea.vue';
import ContactUsArea from '@/components/ContactUsArea.vue';

export default {
    components: {
        AboutUsArea,
        ContactUsArea
    },

};
</script>

<template>
    <main>
        <AboutUsArea></AboutUsArea>
        <ContactUsArea></ContactUsArea>
    </main>
</template>

<<<<<<< Updated upstream
<style scoped></style>
=======
<style scoped>
.about-intro {
    width: 100vw;
    /*background-color: antiquewhite;*/
}

.about-intro-title {
    font-size: 48px;
    color: var(--primary-color);
    letter-spacing: 5px;
    margin-top: 154px;
    margin-left: 250px;
    display: flex;
    align-items: center;
}

.intro-description {
    position: absolute;
    top: 250px;
    right: 150px;
}

.description-text {
    background-color: var(--primary-color);
    width: 784px;
    height: 150px;
    border-radius: 30px;
    color: var(--white-color);
    font-family: 'ABeeZee', sans-serif;
    font-size: 28px;
    padding: 30px;
    position: relative;
}

.intro-dog-pic {
    position: absolute;
    top: -70px;
    right: -100px;
}

.main-content {
    width: 1406px;
    height: 484px;
    /*background-color: khaki; */
    color: #626262;
    padding: 70px;
    font-size: 28px;
    margin: 200px 201px 157px 296px;
    letter-spacing: 5px;
    border: 3px solid var(--primary-color);
    border-radius: 20px;
    position: relative;
}

.main-content img:not(.sponsor-us-btn) {
    position: absolute;
    top:-150px;
    left: -100px;
}

.main-content .sponsor-us-btn{
    position: absolute;
    bottom:-100px;
    right: 0px;
}
</style>
>>>>>>> Stashed changes
