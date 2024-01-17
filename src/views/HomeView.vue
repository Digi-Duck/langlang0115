<script>
import HomeCarousel from '@/components/HomeCarousel.vue';


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
  },
  components: { HomeCarousel }
};
</script>

<template>
  <main>
    <!-- 關於浪浪的事 -->
    <section class="home-about-section">
      <div class="brown-paw-pic">
        <img src="../assets/Image/HomeImage/HomeB-paw.svg">
      </div>
      <div class="about-lang-text">關於浪浪的事</div>
      <!-- about & btns -->
      <div class="home-about-and-btns about-lang-text">
        <div>About Us</div>
        <img src="../assets/Image/HomeImage/HomeB-sponsor-us-btn.svg" alt="贊助我們" class="sponsor-us-btn">
        <img src="../assets/Image/HomeImage/HomeB-see-more-btn.svg" alt="瞭解更多">
      </div>
      <!-- 文字簡介 -->
      <p class="mission-statement">主要由喜歡毛小孩的夥伴們開發，目的是減少流浪在外的毛小孩。<br><br>
        包含毛小孩送養、協尋、收容所資訊查找的功能，希望可以達到資訊透明，從出生到當小天使，紀錄毛小孩一生。</p>
      <!-- 主人與毛小孩圖片 -->
      <div class="about-us-image"> </div>
    </section>

    <!-- 最新消息 -->
    <section class="home-news-section">
      <div class="dog-cat-pic"></div>
      <div class="home-news-text">
        <div>最新消息</div>
        <div>News</div>
      </div>

      <div class="yellow-paw-pic">
        <img src="../assets/Image/HomeImage/HomeC-paw.svg">
      </div>
      <div class="news-area">
        <!-- 綠色區塊 -->
        <div class="green-icon-container">
          <!-- 文字 -->
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
            <img src='../assets/Image/HomeImage/HomeC-more-news-btn.svg' alt="更多消息">
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
/*-----首頁 關於我們-----*/
/*#region*/
.home-about-section {
  /* background-color: beige;*/
  width: 1920px;
  height: 100vh;
  position: relative;
  top: 100vh;
}

.brown-paw-pic {
  height: 990px;
  width: 1200px;
  position: absolute;
  top: -199px;
  left: -543px;
}

.about-lang-text {
  color: var(--primary-color);
  font-size: 64px;
  letter-spacing: 1rem;
  margin-left: 80px;
  position: absolute;
  z-index: 2;
}

.home-about-and-btns {
  display: flex;
  width: 900px;
  position: absolute;
  z-index: 2;
  top: 104px;
  margin-left: 80px;
}

.sponsor-us-btn {
  margin: 0px 10px;
}

.mission-statement {
  width: 864px;
  height: 461px;
  margin-left: 80px;
  color: #626262;
  font-size: 40px;
  letter-spacing: 5px;
  position: absolute;
  top: 225px;
  z-index: 2;
}

.about-us-image {
  background-image: url("../assets/Image/HomeImage/HomeB-AboutUsPic.svg");
  width: 974px;
  height: 852px;
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  top: 78px;
  margin-left: 946px;
}


/*#endregion*/


/*-----首頁 最新消息-----*/
.home-news-section {
  /*background-color: rgb(118, 184, 228);*/
  width: 1920px;
  height: 100vh;
  position: relative;
  top: 100vh;
  /* 調整這個值以確保在下方 */
}

.home-news-text {
  color: var(--primary-color);
  font-size: 64px;
  letter-spacing: 1rem;
  margin: 80px;
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
}

.dog-cat-pic {
  background-image: url("../assets/Image/HomeImage/HomeC-dog-cat.svg");
  height: 268px;
  width: 268px;
  position: absolute;
  top: 64px;
  right: 244px;
  z-index: 2;
}

.yellow-paw-pic img {
  width: 3000px;
  height: 1200px;
  position: absolute;
  top: -200px;
  left: -1250px;
}

/* 綠色區塊內 */
.green-icon-container {
  background-image: url("../assets/Image/HomeImage/HomeC-dot.svg");
  background-size: 95%;
  background-repeat: no-repeat;
  position: absolute;
  top: 217px;
  right: 0px;
  width: 1445px;
  height: 759px;
}

.news-area {
  position: relative;
}

.news-list {
  list-style: none;
  position: absolute;
  transform: translate(160px, 100px);
  height: 500px;
  width: 1000px;
  /* background-color: blanchedalmond; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
}

.news-item {
  display: flex;
  margin: 20px 10px;
  height: 96px;
  font-family: 'ABeeZee', sans-serif;
  ;
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
  margin-bottom: 30px;
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
  top: 700px;
  left: 1000px;
}

/* 幻燈片/更多浪浪 */
.home-carousel-section {
  position: relative;
  width: 1920px;
  height: 794px;
  top: 100vh;
}
</style>