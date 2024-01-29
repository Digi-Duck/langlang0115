<script>
import IconLogo from './icons/IconLogo.vue';
import IconNavWave from './icons/IconNavWave.vue';

export default {
    components: {
        IconLogo,
        IconNavWave,
    },
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
    },

};
</script>

<template>
    <div class="nav-container">
        <div class="boxall">
            <div id="logo" @click="gohomePage">
                <IconLogo id="logo"></IconLogo>
            </div>
            <div class="logotext" @click="gohomePage">
                <img class="titleen" src="../assets/Image/HomeImage/HomeA-title_en.svg">
                <img class="titlecn" src="../assets/Image/HomeImage/HomeA-title.svg">
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
    background: var(--primary-color);
    color: var(--white-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
}

#logo {
    margin-top: 70px;
    margin-left: 20px;
    z-index: 2;
}

span {
    font-size: 18px;
    font-family: 'ABeeZee';
    font-weight: 400;
    letter-spacing: 4.5px;
    padding: 25px 35px;
    cursor: pointer;
}

span:hover {
    background-image: url(../assets/Image/HomeImage/HomeA-hover.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 75%;
    color: var(--primary-color);
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
    cursor: pointer;
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
    left: 12%;
}

@media (max-width: 1280px) {
    #wave {
        transform: scale(0.95);
        top: 55%;
        left: -1%;
    }

    #logo {
        transform: scale(0.9);
        margin-top: 50px;
        margin-left: 0px;
    }

    .titleen {
        width: 161px;
        height: 30px;
        left: 17%;
    }

    .titlecn {
        width: 322px;
        height: 91px;
    }

    span {
        padding: 25px 10px;
        cursor: pointer;
    }

    span:hover {
        background-image: url(../assets/Image/HomeImage/HomeA-hover.svg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 75%;
        color: var(--primary-color);
    }
}
</style>