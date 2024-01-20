<!-- 贊助我們頁面 -->

<script>
import GreenButton from '@/components/GreenButton.vue';
import NavPage from '@/components/NavPage.vue';
import sponsorsData from '../json/SPONSORS.json';

// 1.生成100個名字 要有獨特的id json格式 date、amount不重複、name隨機生成
// 2.存data到json

export default {
    data() {
        return {
            sponsors: sponsorsData,
        };
    },
    methods: {
        clickSponsorNowBtn() {
            this.$router.push('/sponsornow'); //導到立即贊助頁面
        }
    },
    components: {
        GreenButton,
        NavPage
    },

};
</script>

<template>
    <NavPage />
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
        <!-- 分線 -->
        <div class="interval">
            <div class="line">
                <div class="squre"></div>
                <div class="line-left"></div>
            </div>
            <div class="sponsored-list-title">贊助名單</div>
            <div class="line">
                <div class="line-right"></div>
                <div class="squre"></div>
            </div>
        </div>

        <div class="table-all">
            <table class="sponsored-list">
                <thead>
                    <tr>
                        <th>贊助日期</th>
                        <th>姓名</th>
                        <th>贊助金額</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- 使用v-for動態生成表格 -->
                    <!-- 第一筆贊助紀錄 -->
                    <tr v-for="sponsor in sponsors" :key="sponsor.id">
                        <td>{{ sponsor.date }}</td>
                        <td>{{ sponsor.name }}</td>
                        <td>{{ sponsor.amount }}</td>
                    </tr>
                </tbody>
            </table>

            <!-- 此區需要修改 -->
            <table class="sponsored-list">
                <thead>
                    <tr>
                        <th>贊助日期</th>
                        <th>姓名</th>
                        <th>贊助金額</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- 使用v-for動態生成表格 -->
                    <!-- 第一筆贊助紀錄 -->
                    <tr v-for="sponsor in sponsors" :key="sponsor.id">
                        <td>{{ sponsor.date }}</td>
                        <td>{{ sponsor.name }}</td>
                        <td>{{ sponsor.amount }}</td>
                    </tr>
                </tbody>
            </table>


        </div>
    </section>

    <!-- 常見問題Q&A -->
    <section class="sponsor-page c-area">
        <img class="cat" src="../assets/Image/SponsorImage/sponsor-us-cat.svg">
        <div class="thanks"><span>真的很<br>謝謝您！</span></div>

        <div class="q-a-container">
            <div class="q-a-tittle">常見問題Q&A</div>
            <!-- 問題內容 -->
            <div class="q-a-content">
                <div class="q-a-text">
                    <div class="question">Q:贊助會在什麼時候扣款?</div>
                    <div class="answer"> <img src="../assets/Image/SponsorImage/sponsor-us-cat-paw.svg" width="50px"
                            height="50px">單筆贊助會在贊助完成當日立即扣款。</div>
                </div>
                <div class="q-a-text">
                    <div class="question">Q:我的姓名會被看到嗎?</div>
                    <div class="answer"> <img src="../assets/Image/SponsorImage/sponsor-us-cat-paw.svg" width="50px"
                            height="50px">贊助時您提供的姓名、留言皆會公開，姓名可選擇隱藏部分文字，留言可以選擇不填寫留言，第一步驟贊助人的姓名請填寫正確中文姓名。</div>
                </div>
                <div class="q-a-text">
                    <div class="question">Q:我需要其他協助</div>
                    <div class="answer">
                        <img src="../assets/Image/SponsorImage/sponsor-us-cat-paw.svg" width="50px" height="50px">
                        你可以使用 聯絡我們 功能聯絡我們。
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.sponsor-page {
    width: 100vw;
    max-width: 100%;
    position: relative;
    margin-bottom: 209px;
    /*    background-color: beige;*/
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
.sponsored-list-title {
    color: var(--primary-color);
    font-size: 32px;
    letter-spacing: 8px;
    font-weight: 400;
    text-align: center;
    margin: 0px 28px;
}

.interval {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    letter-spacing: 8px;
    margin: 60px 0px;
}

.line {
    display: flex;
    align-items: center;
}

.squre {
    width: 10px;
    height: 10px;
    background-color: var(--primary-color);
    transform: translate(0px, -0.5px) rotate(45deg);
}

.line-left {
    width: 633px;
    height: 2px;
    background-color: var(--primary-color);
    stroke: var(--primary-color);
}

.line-right {
    width: 633px;
    height: 2px;
    background-color: var(--primary-color);
    stroke: var(--primary-color);
}



.sponsored-list {
    overflow: hidden;
    border-radius: 10px 10px 0px 0px;
}

.table-all {
    /*background-color: rgb(255, 248, 185);*/
    width: 1600px;
    height: 1568px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
    overflow: scroll;
}

table {
    font-family: 'ABeeZee', sans-serif;
    border-collapse: separate;
    width: 50%;
    height: 50%;
    border-spacing: 0;
    border: 2px solid #D7D7D7;
    font-weight: 400;
    letter-spacing: 8px;
}

thead {
    background-color: var(--primary-color);
    color: #ffffff;
    width: 767px;
    height: 93px;
    font-size: 32px;
}

tbody {
    color: var(--gray-color);
    width: 767px;
    height: 98px;
    font-size: 32px;
    text-align: center;
}

td {
    height: 98px;
    border-bottom: 1px solid #D7D7D7;
}

tr td:nth-child(1),
td:nth-child(3) {
    font-size: 24px;
    letter-spacing: 6px;
}

th:nth-child(2),
td:nth-child(2) {
    border-left: 1px solid #D7D7D7;
    border-right: 1px solid #D7D7D7;
}



/* 常見問題Q&A */
.sponsor-page.c-area {
    display: flex;
    justify-content: center;
    position: relative;
    margin: 300px 0px 209px 0px;
}

.c-area .cat {
    position: absolute;
    transform: translate(-150px, -153px);
    width: 338px;
    height: 227px;
    z-index: 2;
}

.thanks {
    color: var(--primary-color);
    text-align: center;
    border: 2px solid;
    border-radius: 100px;
    width: 194px;
    height: 195px;
    position: absolute;
    transform: translate(671px, -230px);
}

.thanks span {
    width: 139px;
    height: 51px;
    text-align: justify;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 6px;
    position: absolute;
    transform: translate(-46px, 33px);
}


.q-a-container {
    /*    background-color: #c5cba7;*/
    width: 1584px;
    border: 1px solid var(--primary-color);
    opacity: 0.97;
    display: flex;
    flex-direction: column;
    padding: 50px 0px;
    font-weight: 400;

}

.q-a-tittle {
    color: var(--gray-color);
    font-size: 48px;
    margin-left: 53px;
    letter-spacing: 12px;

}

.q-a-content {
    color: var(--primary-color);
    font-size: 32px;
    letter-spacing: 8px;
    padding: 0px 77px;
}

.q-a-text {
    margin: 45px 0px;
}

.answer {
    display: flex;
    align-items: center;
    margin-top: 20px;
}

.answer img {
    margin: 0px 7px 0px 30px;
}
</style>