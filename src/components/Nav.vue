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
                <span>失散協尋</span>
                <span>認養中心</span>
            </div>
            <div class="box">
                <span>最新消息</span>
                <span>關於我們</span>
                <span>會員登入</span>
            </div>
        </div>
        <IconNavWave id="wave"></IconNavWave>
    </div>
</template>

<style lang="scss" scoped>
.nav-container {
    position: relative;
}

.boxall {
    width: 100%;
    height: 82px;
    background: #52A038;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

#logo {
    margin-top: 70px;
    z-index: 2;
}

span {
    font-size: 16px;
    margin: 0 37px;
}

#wave {
    position: absolute;
    top: 99%;
    z-index: 1;
}
.logotext{
    display: flex;
    flex-direction: column;
    z-index: 2;
}
.titleen{
    width: 186px;
    height: 34px;
    position: absolute;
    top:95%;
    left: 16.5%;
}
.titlecn{
    width: 397px;
    height: 123px;
    position: absolute;
    top:120%;
    left: 12.5%;
}
</style>