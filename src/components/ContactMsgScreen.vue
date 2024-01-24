<script>
import GreenButton from './GreenButton.vue';

export default {
    props: {
        isShow: Boolean,
    },
    data() {
        return {

        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                // behavior行動= 平滑
                behavior: 'smooth',
            });
        },
        // 回到首頁按鈕
        gohomePage() {
            this.$router.push('/');
            // 視窗離開時scrollBar打開
            document.body.style.overflow = 'auto';
             // 讓scrollBar在router後平滑的回至頂部
            this.scrollToTop();
        },
    },
    components: {
        GreenButton
    }
}
</script>
<template>
    <!-- 顯示視窗 -->
    <div class="msgScreenFrame" v-show="isShow">
        <div class="msgSuccess">
            <div class="msgSendText">
                <img src="../assets/Image/AboutPage2Image/message-dogpaw.svg" alt="msg">
                <span>留言成功送出</span>
            </div>
            <div class="msgText">
                <p>客服人員將依序回覆，請耐心等候</p>
            </div>
            <button class="greenbutton" @click="gohomePage">回到首頁</button>
        </div>
    </div>
</template>
<style scoped>
.msgScreenFrame {
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--primary-color);
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    background: rgba(255, 255, 255, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
}

.msgSuccess {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30.625rem;
    height: 23.8125rem;
    background-color: var(--white-color);
    border: 2px solid var(--primary-color);
    border-radius: 30px;
    gap: 9px;
}

.msgSendText {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.msgSendText img {
    display: flex;
    padding-top: 2rem;
}

.msgSendText span {
    font-size: 2.25rem;
    padding-top: 1.5rem;
    text-align: center;
    letter-spacing: 9px;
    font-weight: bold;
}

.msgText {
    display: flex;
    padding: 0.2rem 0 3rem 0;
}

.msgText p {
    text-align: center;
    font-size: 0.8rem;
    letter-spacing: 3px;
}

.greenbutton {
    width: 9.5rem;
    height: 3.25rem;
    color: var(--white-color);
    background-color: var(--primary-color);
    border-radius: 1.875rem;
    font-size: 1.25rem;
    letter-spacing: 2px;
    box-shadow: none;
}
</style>