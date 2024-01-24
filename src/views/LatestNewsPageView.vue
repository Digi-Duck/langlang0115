<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
// eslint-disable-next-line no-unused-vars
import { toHandlers } from 'vue';

export default {
  data() {
    return {
      selectedNews: null, // 存儲所選的消息的索引
      news: [
        {  content: '感謝各位會員一直以來的直支持，因為近期流量越來越大，所以網站部分功能有時候會出現500的錯誤。因為既有的系統環境無法服務到大量使用者。因此系統將執行升級改版，此次改版可能會有暫停服務時間。另外也非常歡迎各位會員提出自己的想法，可以填寫以下google 表單，選出最喜歡哪一些現在已經有的功能以及希望新增的功能。浪浪的事改版問券調查： https://forms.gle/ttEf32Dj8ABXbXZj6' },
        { title: '誤發登入失敗通知', content: '第二條消息的詳細內容...' },
        // 其他消息
      ],
    };
  },
  components: {
    NavPage,
    FooterPage
  },
  methods: {
    showDetails(index) {
      // 當消息項被點擊時觸發，更新 selectedNews 為所選消息的索引
      this.selectedNews = index;
    },
    closeDetails(){
      this.selectedNews=null;
    }
  },
}
</script>
<template>
  <NavPage />
  <main>
    <section class="news-page-container ">
      <div class="latest-news-text">最新消息</div>
      <div class="green-bg"> </div>

      <ul class="news-list">
        <li class="news-item" @click="showDetails(0)">
          <div class="news-date">
            <span class="news-date-month">2023.11</span>
            <span class="news-date-day">02</span>
          </div>
          <div class="news-announcement">
            <span>浪浪的事改版問券調查</span>
            <!-- 更多按鈕 -->
            <div class="news-announcement-btn" @mouseover="handleHover" @mouseout="handleMouseOut">
              <span>更多...</span>
              <img src="../assets/Image/HomeImage/HomeC-more-btn-gray.svg">
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
              <img src="../assets/Image/HomeImage/HomeC-more-btn-gray.svg">
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
              <img src="../assets/Image/HomeImage/HomeC-more-btn-gray.svg">
            </div>
          </div>
        </li>
      </ul>
    </section>

    <!-- 詳細內容 -->
    <div v-if="selectedNews !== null" class="news-detail-popup">
      <div class="close-btn" @click="closeDetails">x</div>
      <div class="news-detail-content">
        <p>{{ news[selectedNews].content }}</p>
        <!-- 其他詳細內容 -->
      </div>
    </div>

  </main>
  <FooterPage />
</template>
<style scoped>
main {
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  font-family: 'ABeeZee';
}

.latest-news-text {
  font-weight: 400;
  letter-spacing: 12px;
  font-size: 48px;
  color: var(--primary-color);
  margin: 68px 0px 0px 200px;
}


/* 綠色背景內 */
.green-bg {
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--gray-color);
  background-color: khaki;
  margin: 62px 0px 0px 279px;
  width: 935px;
}

.news-item {
  display: flex;
  margin: 20px 0px;
  width: 935px;
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


.news-detail-popup {
  position: fixed;
  top: 26%;
  left: 63%;
  width: 500px;
  height: 500px;
  /*   transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);*/
  padding: 20px;
  z-index: 1000;

}

.close-btn {
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  font-size: 20px;
  color: #333;
}


.news-detail-content {
  letter-spacing: 2px;
  font-size: 24px;
  line-height: 2;
}

</style>