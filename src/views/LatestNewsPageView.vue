<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        NavPage,
        FooterPage
    },
}
</script>
<template>
    <NavPage />
    <main>
        <section class="home-container home-news-section">
            <div class="home-news-text">
              <div class="about-lang-text">最新消息</div>
            </div>
      
            <div class="news-area">
              <div class="green-icon-container">
      
                <ul class="news-list">
                  <li class="news-item" @click="show1">
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
              
              </div>
            </div>
          </section>

    </main>
    <FooterPage />
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
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
    background-image: url("../assets/Image/SponsorImage/news-green.svg");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 1588px;
    height: 950px;
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
    color: var(--gray-color);
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
    border-bottom: 2px solid var(--gray-color);
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
  

</style>