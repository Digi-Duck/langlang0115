<!-- 贊助我們頁面 -->

<script>
import GreenButton from '@/components/GreenButton.vue';
import NavBar from '@/components/NavBar.vue';
export default {
    methods: {
        clickSponsorNowBtn() {
            console.log("導到sally 立即贊助頁面");
            this.$router.push('/sponsornow'); //導到立即贊助頁面
        }
    },
    components: {
        GreenButton,
        NavBar
    },

};
</script>

<template>
    <NavBar />
    <section class="sponsor-page">
        <div class="sponsor-title">
            <span>贊助我們</span>
            <div style="font-size: 20px">Sponsor<br>Us</div>
            <div class="accept-criedcard">目前僅支援信用卡</div>
        </div>
        <div class="sponsor-content">
            <div class="sponsor-flow-chart">
                <div class="three-step-text">簡單三步驟</div>
                <div class="flow-chart">
                    <img src="../assets/Image/SponsorImage/sponsor-us-flow.svg">
                </div>
            </div>

            <div class="sponsor-intro-text">
                浪浪的事是一個公益性質的平台，我們希望可以達到一個良善的循環，如果你不嫌棄，歡迎贊助我們。<br>
                <span>祝福您有個美好的一天。</span>
            </div>
            <GreenButton :showSvg="false" @click="clickSponsorNowBtn">立即贊助</GreenButton>
        </div>
    </section>

    <!-- 贊助名單 -->
    <section class="sponsor-page">
        <div class="sponsored-list-title">贊助名單</div>
        <table class="sponsored-list">
            <thead>
                <tr>
                    <th>贊助日期</th>
                    <th>姓名</th>
                    <th>贊助金額</th>
                </tr>
            </thead>
            <tbody>
                <!-- 第一筆贊助紀錄 -->
                <tr>
                    <td>2024-01-01</td>
                    <td>John Doe</td>
                    <td>1000</td>
                </tr>
                <!-- 第二筆贊助紀錄 -->
                <tr>
                    <td>2024-01-02</td>
                    <td>Jane Doe</td>
                    <td>1500</td>
                </tr>
            </tbody>
        </table>



    </section>
</template>

<style scoped>
.sponsor-page {
    width: 100vw;
    max-width: 100%;
    position: relative;
    margin-bottom: 209px;
    background-color: beige;
}

.sponsor-title {
    font-size: 48px;
    color: var(--primary-color);
    letter-spacing: 5px;
    margin-top: 150px;
    margin-left: 300px;
    display: flex;
    align-items: center;
    width: 44%;
}

.accept-criedcard {
    font-size: 20px;
    border: 3px dashed var(--primary-color);
    margin: 10px 0px 4px 17px;
    position: relative;
}

.accept-criedcard::after {
    content: "";
    background-image: url(../assets/Image/SponsorImage/sponsor-us-arrow.svg);
    position: absolute;
    background-repeat: no-repeat;
    width: 230px;
    height: 153px;
    top: 10px;
    left: 230px;
}

.sponsor-content {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0px;
}

.sponsor-flow-chart {
    display: flex;

    align-items: center;

}

.three-step-text {
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 10px;
    color: var(--primary-color);
    margin: 0px 35px 0px 0px;
}

.sponsor-intro-text {
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 7px;
    border: 1px solid #626262;
    border-radius: 30px;
    width: 64%;
    height: 40%;
    padding: 34px 62px;
    margin: 15px 351px 50px;
}

.sponsor-intro-text span {
    display: flex;
    justify-content: end;
}



/*贊助名單*/

.sponsored-list {}
</style>