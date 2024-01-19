<script>
import GreenButton from './GreenButton.vue';
export default {
    props: {
        success: Boolean,
    },
    methods: {

        // 回到首頁按鈕
        gohomePage() {
            this.$router.push('/');
        },
        // 回到贊助我們頁面
        clickSponsorUsBtn() {
            console.log("點到「贊助我們」");
            this.$router.push('/sponsorus'); //導到贊助我們頁面
        },
    },
    components: {
        GreenButton,
    }
}
</script>

<template>
    <div class="popup-bg" v-show="success">
        <div class="popup-container">
            <div class="content">
                <div class="thanks">
                    <span>贊助成功!</span>
                    <span class="text">再次感謝您的支持</span>
                </div>
                <div class="dogimg"><img src="../assets/Image/SponsorImage/successdog.svg" alt=""></div>
                <div class="btns">
                    <GreenButton :showSvg="false" @click="gohomePage">返回首頁</GreenButton>
                    <GreenButton :showSvg="false" @click="clickSponsorUsBtn">查看贊助名單</GreenButton>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.popup-bg {
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.5);
    top: 0%;
    left: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
}

.popup-container {
    width: 512px;
    height: 500px;
    background-color: var(--white-color);
    border: 2px solid var(--primary-color);
    border-radius: 30px;
    padding: 50px 95px;
    color: var(--primary-color);
    z-index: 2;
}

.content {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 34px;
}

.thanks {
    font-size: 32px;
    letter-spacing: 8px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    gap: 10px;
}



.text {
    font-size: 16px;
    letter-spacing: 4px;
    color: var(--gray-color);
}

.btns {
    display: flex;
    gap: 24px;
}
</style>
