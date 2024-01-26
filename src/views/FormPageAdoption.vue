<script>
import AnimalForm from '@/components/AnimalForm.vue';
// import DataSubmitted from '@/components/DataSubmitted.vue';
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';

export default {
    components: {
        NavPage,
        FooterPage,
        AnimalForm,
        // DataSubmitted
    },
    // data() {
    //     return {
    //         // 進入畫面時 視窗關閉
    //         showSub: false,
    //     }
    // },
    // methods: {
    //     showSubOpen() {
    //         // 執行顯示視窗
    //         this.showSub = true;
    //         // 視窗開啟時scrollBar隱藏
    //         document.body.style.overflow = 'hidden';
    //     },
    // },
    mounted() {
        // 刪除段落 "發現浪浪之時間和地點 *" >>.time-place
        const elremove = this.$refs.animalFrame;
        const timePlaceElement = elremove.$el.querySelector(".time-place");
        if (timePlaceElement) {
            timePlaceElement.remove();
        }
        // // 刪除彈跳視窗小字
        // const popupRemove = this.$refs.dataSubmitted;
        // const smalltext = popupRemove.$el.querySelector(".small");
        // console.log(popupRemove.$el);
        // if (smalltext) {
        //     smalltext.remove();
        // }
    },
}
</script>
<template>
    <NavPage />
    <main>
    <AnimalForm ref="animalFrame" pagename="認養中心" title="填寫送養資料" inputTitleColor="var(--primary-color)"
        inputTextBorder="2px solid var(--primary-color)" svgColor="var(--primary-color)"
        uploadPicColor=" var(--primary-color)" submitBgColor="var(--primary-color)" />
    </main>
    <FooterPage />
</template>
<style scoped>
</style>