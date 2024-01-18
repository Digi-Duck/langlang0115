<script>
import IconLogo from './icons/IconLogo.vue';
import IconNavWave from './icons/IconNavWave.vue';

export default {
    components: {
        IconLogo,
        IconNavWave,
    },
    methods: {

    },

};
</script>

<template>
    <div class="nav-container">
        <div class="boxall">
            <div id="logo">
                <IconLogo id="logo"></IconLogo>
            </div>
            <div class="logotext">
                <img class="titleen" src="../assets/Image/HomeImage/HomeA-title_en.svg">
                <img class="titlecn" src="../assets/Image/HomeImage/HomeA-title.svg">
            </div>
            <div class="box">
                <span @mouseover="handleHover" @mouseout="handleMouseOut">關於我們</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut">贊助我們</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut">認養中心</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut">失散協尋</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut">最新消息</span>
                <span @mouseover="handleHover" @mouseout="handleMouseOut">會員登入</span>
            </div>
        </div>
        <IconNavWave id="wave"></IconNavWave>
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
    padding-right: 120px;
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

#wave {
    position: absolute;
    top: 99%;
    z-index: 1;
}

.logotext {
    display: flex;
    flex-direction: column;
    z-index: 2;
}

.titleen {
    width: 186px;
    height: 34px;
    position: absolute;
    top: 95%;
    left: 12%;
}

.titlecn {
    width: 397px;
    height: 123px;
    position: absolute;
    top: 125%;
    left: 10%;
}</style>