
<script>
import IconLogo from './icons/IconLogo.vue';
import IconNav from './icons/IconNav.vue';

export default {
    components: {
        IconLogo,
        IconNav,

    },
    methods: {

    },

};
</script>

<template>
    <div class="boxall">
        <div id="logo">
            <IconLogo id="logo"></IconLogo>
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
    
    <IconNav id="nav"></IconNav>
    <!-- <img src="../assets/Image/HomeImage/HomeA-wave.svg"> -->
</template>

<style lang="scss" scoped>
.boxall {
    width: 100%;
    height: 100px;
    background: #52A038;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 60px;
    
}
#logo{
    margin-top: 60px;
    z-index: 1;
}

span {
    font-size: 16px;
    margin: 0 37px;
}

#nav{
    position: absolute;
    top: 138px;
    left: 0;
}
</style>