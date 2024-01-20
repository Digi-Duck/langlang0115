<script>
export default {
    methods: {
        gohomePage() {
            this.$router.push('/');
        },
        aboutusPage() {
            this.$router.push('/aboutuspage');
        },
        sponsorusPage() {
            this.$router.push('/sponsorus');
        },
        adoptioncenterPage() {
            this.$router.push('/adoptioncenter');
        },
        lostandfoundPage(){
            this.$router.push('/lostandfoundsearch');
        },
        latestnewsPage(){
            this.$router.push('/latestnewspage');
        },
        memberloginPage(){
            this.$router.push('/memberlogin');
        }
    }
}
</script>

<template>
    <div class="nav-container">
        <div class="boxall">
            <div class="logotext" @click="gohomePage">
                <img class="titlecn" src="../assets/Image/HomeImage/NavPageCn.svg">
                <img class="titleen" src="../assets/Image/HomeImage/NavPageEn.svg">
            </div>
            <div class="box">
                <span @mouseover="handleHover" @mouseout="handleMouseOut" @click="aboutusPage">關於我們</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut" @click="sponsorusPage">贊助我們</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut" @click="adoptioncenterPage">認養中心</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut" @click="lostandfoundPage">失散協尋</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut" @click="latestnewsPage">最新公告</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut" @click="memberloginPage">會員登入</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nav-container {
    position: relative;
}

.boxall {
    width: 100vw;
    max-width: 100%;
    height: 82px;
    background: var(--primary-color);
    color: var(--white-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 95px;
}

span {
    font-size: 18px;
    font-family: sans-serif;
    font-weight: 400;
    letter-spacing: 4.5px;
    padding: 25px 35px;
}

span:hover {
    background-image: url(../assets/Image/HomeImage/HomeA-hover.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 75%;
    color: var(--primary-color);
}

.logotext {
    display: flex;
    align-items: center;
}
</style>