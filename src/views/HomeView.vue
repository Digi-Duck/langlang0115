<script>
import NavBar from '../components/NavBar.vue';
import IconHeaderLine from '@/components/icons/IconHeaderLine.vue';
import HomePage from '@/components/HomePage.vue';
import GreenButton from '../components/GreenButton.vue';
import YellowButton from '../components/YellowButton.vue';
import HomeCarousel from '@/components/HomeCarousel.vue';
import FooterPage from '@/components/FooterPage.vue';

export default {
  components: {
    NavBar,
    HomePage,
    GreenButton,
    YellowButton,
    HomeCarousel,
    FooterPage
  },
};
</script>
 
<template>
  <NavBar />
  <header class="home-container header">
    <section>
      <div class="home-header-greenbox"></div>
      <div class="home-header-img">
        <img src="../assets/Image/HomeImage/HomeA-banner.svg" alt="">
        <div class="home-header-text">
          <IconHeaderLine class="line3"></IconHeaderLine>
          <span>動物走失了</span>
        </div>
        <div class="home-header-btn">
          <YellowButton id="go-adopt-btn">去認養</YellowButton>
          <GreenButton>協尋主人</GreenButton>
        </div>
      </div>
    </section>
  </header>
  <main>
    <!-- 關於浪浪的事 最新消息 -->
    <HomePage />
    <!-- 幻燈片/更多浪浪 -->
    <HomeCarousel />
  </main>
  <FooterPage />
</template>

<style scoped>
.home-container {
  width: 100vw;
  max-width: 100%;
  position: relative;
  margin-bottom: 209px;
}

.home-header-greenbox {
  background-color: var(--primary-color);
  width: 100%;
  height: 556px;
  position: absolute;
  top: 0px;
  left: 0px;
}

.home-header-img {
  display: flex;
  justify-content: center;
  position: relative;
}

.home-header-text {
  width: 500px;
  height: 50px;
  position: absolute;
  top: 71%;
  left: 60%;
}

.home-header-text span {
  font-size: 28px;
  text-shadow: 1px 2px 8px rgba(0, 0, 0, 25);
  color: var(--white-color);
  position: absolute;
  top: -80%;
  left: 0%;
  transform: rotate(12deg);
}

.home-header-btn {
  display: flex;
  gap: 26px;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
}

#go-adopt-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>