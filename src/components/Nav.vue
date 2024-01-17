
<script>
import IconLogo from './icons/IconLogo.vue';
import IconNavWave from './icons/IconNavWave.vue';
import IconTitleCn from './icons/IconTitleCn.vue';
import IconTitleEn from './icons/IconTitleEn.vue';

export default {
    components: {
        IconLogo,
        IconNavWave,
        IconTitleEn,
        IconTitleCn,
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
                <IconTitleEn id="titleen"></IconTitleEn>
                <IconTitleCn id="titlecn"></IconTitleCn>
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
.nav-container{
  position: relative;  
}
.boxall {
    width: 100%;
    height: 100px;
    background: #52A038;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 55px;
}

#logo {
    margin-top: 70px;
    z-index: 1;
}

span {
    font-size: 16px;
    margin: 0 37px;
}

#wave {
    position: absolute;
    top: 97%;
}
#titleen{
    position: absolute;
    top: 95%;
    left: 14%;
}
#titlecn{
    position: absolute;
    top: 95%;
    left: 13%;
}

</style>