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
    }
}
</script>

<template>
    <div class="nav-container">
        <div class="boxall">
            <div class="logotext" @click="gohomePage">
                <img class="titleen" src="../assets/Image/HomeImage/NavPageEn.svg">
                <img class="titlecn" src="../assets/Image/HomeImage/NavPageCn.svg">
            </div>
            <div class="box">
                <span @mouseover="handleHover" @mouseout="handleMouseOut" @click="aboutusPage">關於我們</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut" @click="sponsorusPage">贊助我們</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut">認養中心</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut">失散協尋</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut">最新消息</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut">會員登入</span>
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
    background: #52A038;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 120px;
}

#logo {
    margin-top: 70px;
    z-index: 2;
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
    color: #52A038;
}

.logotext {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
}
</style>