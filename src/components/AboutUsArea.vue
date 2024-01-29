<!-- 第二頁 關於浪浪的事 簡介 -->
<script>
import GreenButton from '../components/GreenButton.vue';

export default {
    components: {
        GreenButton
    },
    methods: {
        clickSponsorUsBtn() {
            this.$router.push('/sponsorus');
        }
    }
}
</script>

<template>
    <section class="about-intro">
        <div class="about-intro-title">
            <div>關於浪浪的事</div>
            <div style="font-size: 20px">About<br>Us</div>
        </div>
        <!-- 右上角 -->
        <div class="intro-description">
            <div class="description-text">減少流浪在外的動物<br>並且降低遭惡意領養的問題
                <div class="intro-dog-pic">
                    <img src="../assets/Image/AboutPage2Image/about-dog.svg">
                </div>
            </div>
        </div>
        <div class="main-content">
            <span>我們是由喜歡毛小孩的夥伴們開發，目的是減少流浪在外的毛小孩。<br><br>
                包含毛小孩送養、協尋、收容所資訊查找的功能。<br>希望可以達到資訊透明，紀錄毛小孩一生。
                <br><br>
                我們還有提供轉移毛小孩所有權的功能，不管是送養浪浪或其他因素。<br>
                無法照顧毛小孩需要幫牠找個家時，轉換飼主過程多一個紀錄，讓資訊更清晰（本系統並非政府寵物登記系統），我們也會不斷的更新系統，保障使用者的資訊安全。
                <img src="../assets/Image/AboutPage2Image/about-cat.svg">
            </span>
            <!-- 贊助我們按鈕 -->
            <div class="sponsor-us-btn">
                <GreenButton @click="clickSponsorUsBtn">贊助我們</GreenButton>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-intro {
    width: 100vw;
    max-width: 100%;
}

.about-intro-title {
    font-size: 48px;
    color: var(--primary-color);
    letter-spacing: 5px;
    margin-top: 150px;
    margin-left: 300px;
    display: flex;
    align-items: center;
    width: 25%;
}

@media only screen and (max-width: 1645px) {
    .about-intro-title {
        margin: 69px 0px 0px 100px;
        width: 31%;   
         font-size: 26px;
    }
}

@media only screen and (max-width: 1278px) {
    .about-intro-title {
        margin: 44px 0px 0px 40px;
        width: 415px
    }
}

.intro-description {
    position: absolute;
    top: 250px;
    right: 150px;
}

@media only screen and (max-width: 1645px) {
    .intro-description {
        top: 300px;
        right: 238px;
    }
}
@media only screen and (max-width: 1278px) {
    .intro-description {
        top: 237px;
        right: 238px;
        width: 340px;
        height: 65px;
    }
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


@media only screen and (max-width: 1278px) {
    .description-text {
        font-size: 16px;
        width: 309px;
        height: 79px;
        padding: 14px 37px 13px 6px;
        text-align: center;
    }
}

.intro-dog-pic {
    position: absolute;
    top: -70px;
    right: -100px;
}

@media only screen and (max-width: 1278px) {
    .intro-dog-pic img{
        position: absolute;
        top: 15px;
        right: -46px;
        width: 187px;
        height: 74px;
    }
}
.main-content {
    width: 73%;
    height: 50%;
    color: #626262;
    padding: 60px;
    font-size: 28px;
    margin: 200px 201px 157px 296px;
    letter-spacing: 5px;
    border: 3px solid var(--primary-color);
    border-radius: 20px;
    position: relative;
}


@media only screen and (max-width: 1645px) {
    .main-content {
        margin: 150px 82px 54px 82px;
    }
}

@media only screen and (max-width: 1278px) {
    .main-content {
        margin: 207px 58px 54px 187px;
        width: 587px;
        height: 999px;
    }
}

.main-content img:not(.sponsor-us-btn) {
    position: absolute;
    top: -150px;
    left: -100px;
}

@media only screen and (max-width: 1278px) {
    .main-content img:not(.sponsor-us-btn) {
        top: -60px;
        left: -100px;
        width: 201px;
        height: 128px;
    }
}

.main-content .sponsor-us-btn {
    position: absolute;
    bottom: -30px;
    right: 50px;
}
</style>