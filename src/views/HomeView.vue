<script>
import NavBar from '../components/NavBar.vue'
import HomeCarousel from '@/components/HomeCarousel.vue';
import IconHeaderLine from '@/components/icons/IconHeaderLine.vue';
import GreenButton from '../components/GreenButton.vue';
import YellowButton from '../components/YellowButton.vue';



export default {
  methods: {
    handleHover() {
      // 在滑鼠懸停時的相關處理
      // 可以在這裡添加額外的邏輯或改變按鈕的樣式
    },
    handleMouseOut() {
      // 在滑鼠離開時的相關處理
      // 可以在這裡添加額外的邏輯或改變按鈕的樣式
    },
    clickSponsorUsBtn() {
      console.log("點到「贊助我們」");
      this.$router.push('/sponsorus'); //導到贊助我們頁面
    },
    clickSeeMoreBtn() {
      alert("按到瞭解更多");
    },
  },
  components: { HomeCarousel, IconHeaderLine, GreenButton, YellowButton, NavBar },
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
    <!-- 關於浪浪的事 -->

    <section class="home-container home-about">
      <div class="home-abouut-bg">
        <div class="brown-paw-pic">
          <img src="../assets/Image/HomeImage/HomeB-paw.svg">
        </div>
        <!-- 狗掌&主人與毛小孩圖片 -->
        <div class="about-us-image">
          <img src="../assets/Image/HomeImage/HomeB-AboutUsPic.svg" alt="">
        </div>
      </div>
      <!-- 關於浪浪的事文字 -->
      <div class="home-about-section">
        <div class="about-lang-text">關於浪浪的事</div>
        <!-- about us & btns -->
        <div class="home-about-and-btns">
          <div class="about-text ">About Us</div>
          <div class="home-about-btns">
            <!-- 贊助我們按鈕 -->
            <GreenButton @click="clickSponsorUsBtn">贊助我們</GreenButton>
            <!-- 瞭解更多按鈕 -->
            <YellowButton @click="clickSeeMoreBtn">瞭解更多</YellowButton>
          </div>
        </div>

        <p class="mission-statement">
          主要由喜歡毛小孩的夥伴們開發，目的是減少流浪在外的毛小孩。<br><br>
          包含毛小孩送養、協尋、收容所資訊查找的功能，希望可以達到資訊透明，從出生到當小天使，紀錄毛小孩一生。
        </p>
      </div>
    </section>
    <!-- 文字簡介 -->
    <!-- 最新消息 -->
    <section class="home-container home-news-section">
      <div class="yellow-paw-pic">
        <img src="../assets/Image/HomeImage/HomeC-paw.svg">
      </div>
      <div class="dog-cat-pic"></div>
      <div class="home-news-text">
        <div class="about-lang-text">最新消息</div>
        <div class="about-text">News</div>
      </div>

      <div class="news-area">
        <div class="green-icon-container">

          <ul class="news-list">
            <li class="news-item">
              <div class="news-date">
                <span class="news-date-month">2023.11</span>
                <span class="news-date-day">02</span>
              </div>
              <div class="news-announcement">
                <span>浪浪的事改版問券調查</span>
                <!-- 更多按鈕 -->
                <div class="news-announcement-btn" @mouseover="handleHover" @mouseout="handleMouseOut">
                  <span>更多...</span>
                  <img src="../assets/Image/HomeImage/HomeC-more-btn.svg">
                </div>

              </div>
            </li>
            <li class="news-item">
              <div class="news-date">
                <span class="news-date-month">2023.05</span>
                <span class="news-date-day">31</span>
              </div>
              <div class="news-announcement">
                <span>誤發登入失敗通知</span>
                <div class="news-announcement-btn" @mouseover="handleHover" @mouseout="handleMouseOut">
                  <span>更多...</span>
                  <img src="../assets/Image/HomeImage/HomeC-more-btn.svg">
                </div>
              </div>
            </li>
            <li class="news-item">
              <div class="news-date">
                <span class="news-date-month">2023.05</span>
                <span class="news-date-day">25</span>
              </div>
              <div class="news-announcement">
                <span>活動[轉載]高雄市動物...

                </span>
                <div class="news-announcement-btn" @mouseover="handleHover" @mouseout="handleMouseOut">
                  <span>更多...</span>
                  <img src="../assets/Image/HomeImage/HomeC-more-btn.svg">
                </div>
              </div>
            </li>
          </ul>
          <div class="more-news-btn">
            <GreenButton>更多消息</GreenButton>
          </div>
        </div>
      </div>
    </section>
    <!-- 幻燈片/更多浪浪 -->
    <section class="home-carousel-section">
      <HomeCarousel />
    </section>
  </main>
</template>

<style scoped>
.home-container {
  width: 100vw;
  max-width: 100%;
  position: relative;
  margin-bottom: 209px;
}

.home-header-greenbox {
  background-color: #52A038;
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
  color: white;
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

/*-----首頁 關於我們-----*/
/*#region*/
.home-abouut-bg {
  height: 852px;
  display: flex;
  justify-content: space-between;
  z-index: -1;
}

.brown-paw-pic {
  margin-top: -10%;
  margin-left: -27%;
  position: absolute;

}

.about-us-image {
  /* width: 100%; */
  position: absolute;
  top: 0;
  right: 0;
}

.home-about-section {
  padding-left: 180px;
  z-index: 1;
  position: absolute;
  top: 0;
}

.about-lang-text {
  color: var(--primary-color);
  font-size: 64px;
  letter-spacing: 1rem;
  margin-bottom: 40px;
}

.home-about-and-btns {
  display: flex;
  gap: 50px;
  align-items: center;
  margin-bottom: 97px;
}

.about-text {
  color: var(--primary-color);
  font-size: 46px;
  letter-spacing: 1rem;
}

.home-about-btns {
  width: 333px;
  display: flex;
  justify-content: space-between;
}

.mission-statement {
  width: 864px;
  height: 461px;
  color: #626262;
  font-size: 40px;
  letter-spacing: 6px;
}

/*#endregion*/


/*-----首頁 最新消息-----*/
.yellow-paw-pic {
  width: 1152px;
  height: 839px;
  z-index: -1;
}

.yellow-paw-pic img {
  margin-top: -24.5%;
  margin-left: -43%;
}

.dog-cat-pic {
  background-image: url("../assets/Image/HomeImage/HomeC-dog-cat.svg");
  height: 268px;
  width: 268px;
  position: absolute;
  top: 0px;
  right: 225px;
  z-index: 1;
}

.home-news-text {
  margin-top: 65px;
  margin-left: 180px;
  position: absolute;
  top: 0;
  left: 0;
}

/* 綠色區塊內 */
.green-icon-container {
  background-image: url("../assets/Image/HomeImage/HomeC-dot.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 1300px;
  height: 716px;
  position: absolute;
  top: 15%;
  right: 130px;
}

.news-list {
  list-style: none;
  padding: 0;
  transform: translate(160px, 140px);
  height: 350px;
  width: 880px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--white-color);
}

.news-item {
  display: flex;
  margin: 20px 0px;
  width: 880px;
  height: 84px;
  font-family: 'ABeeZee', sans-serif;
}

/* 最新消息的日期區 */
.news-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  font-family: 'Stick', sans-serif;
}

.news-date-month {
  font-size: 16px;
}

.news-date-day {
  font-size: 32px;
  font-weight: 900;
}

/* 最新消息的文字區 */
.news-announcement {
  border-bottom: 2px solid var(--white-color);
  font-size: 28px;
  letter-spacing: 7px;
  display: inline-block;
  width: 900px;
  position: relative;
  display: flex;
  align-items: center;
}

.news-announcement span:first-child {
  margin-left: 30px;
}


.news-announcement-btn {
  font-size: 20px;
  position: absolute;
  right: 50px;
  transition: transform 0.3s ease;
}


.news-announcement-btn:hover {
  transform: translateX(10px);
  /* 在 hover 時往右移動 10px */
}


.news-announcement-btn img {
  position: absolute;
  top: 10px
}

.more-news-btn {
  position: absolute;
  top: 660px;
  right: 150px;
}

/* 幻燈片/更多浪浪 */
</style>