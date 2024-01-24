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
        {date:'2023.11', 'day':'02', title:'浪浪的事改版問卷調查',content: '感謝各位會員一直以來的直支持，因為近期流量越來越大，所以網站部分功能有時候會出現500的錯誤。因為既有的系統環境無法服務到大量使用者。因此系統將執行升級改版，此次改版可能會有暫停服務時間。另外也非常歡迎各位會員提出自己的想法，可以填寫以下google 表單，選出最喜歡哪一些現在已經有的功能以及希望新增的功能。浪浪的事改版問券調查： https://forms.gle/ttEf32Dj8ABXbXZj6' },
        {date:'2023.05', 'day':'31',  title:'誤發登入失敗通知',content: '真的非常不好意思，通知登入失敗的儲存位置，復原備份資料於測試環境。以至於之前若有的登入失敗過的會員，沒有發送通知信，昨天2023/5/31會被發送 登入失敗的Email真的非常抱歉請勿點選來路不明的連結，浪浪的事也不會通知任何繳費的事項。真的非常不好意思，造成您的不便敬請見諒。' }, 
        {date:'2022.01','day':'24', title:'登記公告策略改變', content: '浪浪的事是以記錄的方式將動物的所有記錄都可以記錄下來。包含看醫生的紀錄、送養轉讓紀錄、遺失快速通報功能，從出生到死亡希望都可以紀錄。但目前大部分還是以會員自主登入為主，期望未來可以越來越好！歡迎不管是不是要送養的毛小孩，都可以嘗試新增毛小孩在網站中，有任何不方便的地方，歡迎使用聯絡我們功能給我們建議喔～另外 浪浪的事主是提供平台幫助紀錄毛小孩的大小事，並無收容任何毛小孩，最近好像有會員誤會有收容動物，我們會加強網頁畫面顯示的提示。祝各位有個愉快的一天' },    {date:'2023.11', 'day':'02', title:'浪浪的事改版問卷調查',content: '感謝各位會員一直以來的直支持，因為近期流量越來越大，所以網站部分功能有時候會出現500的錯誤。因為既有的系統環境無法服務到大量使用者。因此系統將執行升級改版，此次改版可能會有暫停服務時間。另外也非常歡迎各位會員提出自己的想法，可以填寫以下google 表單，選出最喜歡哪一些現在已經有的功能以及希望新增的功能。浪浪的事改版問券調查： https://forms.gle/ttEf32Dj8ABXbXZj6' },
        {date:'2023.05', 'day':'31',  title:'誤發登入失敗通知',content: '真的非常不好意思，通知登入失敗的儲存位置，復原備份資料於測試環境。以至於之前若有的登入失敗過的會員，沒有發送通知信，昨天2023/5/31會被發送 登入失敗的Email真的非常抱歉請勿點選來路不明的連結，浪浪的事也不會通知任何繳費的事項。真的非常不好意思，造成您的不便敬請見諒。' }, 
        {date:'2022.01','day':'24', title:'登記公告策略改變', content: '浪浪的事是以記錄的方式將動物的所有記錄都可以記錄下來。包含看醫生的紀錄、送養轉讓紀錄、遺失快速通報功能，從出生到死亡希望都可以紀錄。但目前大部分還是以會員自主登入為主，期望未來可以越來越好！歡迎不管是不是要送養的毛小孩，都可以嘗試新增毛小孩在網站中，有任何不方便的地方，歡迎使用聯絡我們功能給我們建議喔～另外 浪浪的事主是提供平台幫助紀錄毛小孩的大小事，並無收容任何毛小孩，最近好像有會員誤會有收容動物，我們會加強網頁畫面顯示的提示。祝各位有個愉快的一天' },    {date:'2023.11', 'day':'02', title:'浪浪的事改版問卷調查',content: '感謝各位會員一直以來的直支持，因為近期流量越來越大，所以網站部分功能有時候會出現500的錯誤。因為既有的系統環境無法服務到大量使用者。因此系統將執行升級改版，此次改版可能會有暫停服務時間。另外也非常歡迎各位會員提出自己的想法，可以填寫以下google 表單，選出最喜歡哪一些現在已經有的功能以及希望新增的功能。浪浪的事改版問券調查： https://forms.gle/ttEf32Dj8ABXbXZj6' },
        {date:'2023.05', 'day':'31',  title:'誤發登入失敗通知',content: '真的非常不好意思，通知登入失敗的儲存位置，復原備份資料於測試環境。以至於之前若有的登入失敗過的會員，沒有發送通知信，昨天2023/5/31會被發送 登入失敗的Email真的非常抱歉請勿點選來路不明的連結，浪浪的事也不會通知任何繳費的事項。真的非常不好意思，造成您的不便敬請見諒。' }, 
        {date:'2022.01','day':'24', title:'登記公告策略改變', content: '浪浪的事是以記錄的方式將動物的所有記錄都可以記錄下來。包含看醫生的紀錄、送養轉讓紀錄、遺失快速通報功能，從出生到死亡希望都可以紀錄。但目前大部分還是以會員自主登入為主，期望未來可以越來越好！歡迎不管是不是要送養的毛小孩，都可以嘗試新增毛小孩在網站中，有任何不方便的地方，歡迎使用聯絡我們功能給我們建議喔～另外 浪浪的事主是提供平台幫助紀錄毛小孩的大小事，並無收容任何毛小孩，最近好像有會員誤會有收容動物，我們會加強網頁畫面顯示的提示。祝各位有個愉快的一天' },
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
    },
    calculatePopupPosition(){
      // 根據所選消息的位置計算窗口位置
      // 抓取每個news-item
      const selectedNewsElement = document.querySelectorAll('.news-item');
      const rect = selectedNewsElement.getBoundingClientRect();

      //返回一個包含動態計算的樣式對象
      return{
        top:`${rect.top}px`,
        left:`${rect.right}px`,
      }
    }
  },
}
</script>
<template>
  <NavPage />
  <main>
    <section class="news-page-container">
      <div class="latest-news-text">最新消息</div>
      <div class="green-bg"></div>

      <ul class="news-list">
        <li class="news-item" v-for="(item,index) in news" :key="index" @click="showDetails(index)">
          <div class="news-date">
            <span class="news-date-month">{{item.date}}</span>
            <span class="news-date-day">{{item.day}}</span>
          </div>
          <div class="news-announcement">
            <span>{{item.title}}</span>
            <!-- 更多按鈕 -->
            <div class="news-announcement-btn" >
              <span>更多...</span>
              <img src="../assets/Image/HomeImage/HomeC-more-btn-gray.svg">
            </div>
          </div>
        </li>
      </ul>
    </section>

    <!-- 詳細內容 -->
    <div v-if="selectedNews !== null" class="news-detail-popup" :style="calculatePopupPosition">
      <div class="close-btn" @click="closeDetails"></div>
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
  /*height: 100vh;*/
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
/*background-color: khaki;*/  
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
  left: 64%;
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
  height: 24px;
  width: 24px;
  background-image: url('../assets/Image/SponsorImage/icon_xbox-x.svg');
}

.news-detail-content {
  letter-spacing: 2px;
  font-size: 24px;
  line-height: 2;
}

</style>