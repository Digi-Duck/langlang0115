<script>
import AnimalForm from '@/components/AnimalForm.vue';
import DataSubmitted from '@/components/DataSubmitted.vue';
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';

export default {
    components: {
        NavPage,
        FooterPage,
        AnimalForm,
        DataSubmitted
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
    },
}
</script>
<template>
    <NavPage />
    <div>
        <AnimalForm ref="animalFrame" pagename="認養中心" title="毛小孩詳細資訊" inputTitleColor="var(--primary-color)"
            inputTextBorder="2px solid var(--primary-color)" svgColor="var(--primary-color)"
            uploadPicColor=" var(--primary-color)" submitBgColor="var(--primary-color)" />
        <DataSubmitted myFillColor="var(--primary-color)" mytextColor="var(--primary-color)" submitResult="資料成功送出！"
            submitButText="前往瀏覽頁面" myurl="/adoptionpetinformation">
        </DataSubmitted>
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