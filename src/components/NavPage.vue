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
        lostandfoundPage() {
            this.$router.push('/lostandfoundsearch');
        },
        latestnewsPage() {
            this.$router.push('/latestnewspage');
        },
        memberloginPage() {
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
            <!-- 漢堡條 -->
            <div class="ham">
                <input type="checkbox" id="ham-switch" hidden>
                <label for="ham-switch" class="ham-menu" tabindex="1">
                    <IconHamOpen class="switch-open"></IconHamOpen>
                    <IconHamClose class="switch-close"></IconHamClose>
                </label>
                <div class="bg-white"></div>
                <ul class="ham-menu-li">
                    <li tabindex="1" @click="aboutusPage">關於我們</li>
                    <li tabindex="1" @click="sponsorusPage">贊助我們</li>
                    <li tabindex="1" @click="adoptioncenterPage">認養中心</li>
                    <li tabindex="1" @click="lostandfoundPage">失散協尋</li>
                    <li tabindex="1" @click="latestnewsPage">最新公告</li>
                    <li tabindex="1" @click="memberloginPage">會員登入</li>
                </ul>
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
    padding: 0 20px 0 38px;
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
    cursor: pointer;
}

.logotext {
    display: flex;
    align-items: center;
    cursor: pointer;
}

@media (max-width: 1280px) {
    .boxall {
        padding: 0 38px;
    }

    span {
        padding: 25px 10px;
    }

    span:hover {
        background-size: 100%;
    }
}
/* 漢堡條 */
.ham {
    display: none;
    align-items: center;
}

.switch-close {
    display: none;
}

/* 平板 */
@media (max-width: 751px) {
    .boxall {
        background: transparent;
        height: 0;
        padding: 0;
    }

    #wave {
        transform: scale(0.65);
        left: -20%;
        margin-top: -6%;
    }

    #logo {
        transform: scale(0.77);
        margin-top: 80px;
        margin-left: -15px;
    }

    .titleen {
        width: 120px;
        height: 22px;
        left: 13%;
        margin-top: 5%;
    }

    .titlecn {
        width: 240px;
        height: 68px;
        left: 8%;
        margin-top: 8%;
    }

    .box {
        display: none;
    }

    .ham {
        width: 43px;
        height: 50px;
        display: block;
        position: absolute;
        top: 50px;
        right: 20px;
        z-index: 2;
    }
    .ham label{
        z-index: 8;
        position: absolute;
        top: 0px;
        right: 0px;
    }

    .ham-menu-li {
        display: none;
        position: absolute;
        top: 28px;
        right: -20px;
    }

    li {
        width:100% ;
        height: 98px;
        font-size: 18px;
        line-height: 98px;
        letter-spacing: 4.5px;
        text-align: center;
        list-style-type: none;
        padding: 0;
    }

    #ham-switch:checked~.ham-menu:nth-of-type(2){
        display: block;
    }

    #ham-switch:not(:checked)~.ham-menu:nth-of-type(1){
        display: block;
    }

    #ham-switch:checked~.ham-menu-li {
        width: 350px;
        height: 100vh;
        background-color: var(--primary-color);
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: var(--white-color);
        position: absolute;
        top: 0;
        z-index: 4;
    }
}

@media (max-width: 358px) {
    #wave {
        display: none;
    }
    
    #logo {
        transform: scale(0.70);
        margin-top: 60px;
        margin-left: -20px;
    }
    .titleen {
        width: 79px;
        height: 15px;
        left: 40%;
        margin-top: 10px;
    }

    .titlecn {
        width: 125px;
        height: 39px;
        left: 35%;
        margin: 0;
        top: 22px;
    }
    .ham {
        display: block;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 2;
    }
    .ham label{
        z-index: 8;
        position: absolute;
        top: 0px;
        right: 0px;
        transform: scale(0.75);
    }

    .ham-menu-li {
        display: none;
        right: -10px;
    }
    li {
        font-size: 20px;
        letter-spacing: 5px;
    }
    #ham-switch:checked~.ham-menu-li {
        width: 238px;
        height: 100vh;
    }
}
</style>