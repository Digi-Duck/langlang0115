<script>
import NavPage from '../components/NavPage.vue'
import GreenButton from '@/components/GreenButton.vue'
import SponsorPopUp from '@/components/SponsorPopUp.vue';
import SponsorSuccess from '@/components/SponsorSuccess.vue';
import FooterPage from '@/components/FooterPage.vue';
export default {
  components: {
    SponsorPopUp,
    GreenButton,
    NavPage,
    SponsorSuccess,
    FooterPage
  },
  data() {
    return {
      // 進入畫面時 關閉
      rightnow: false,
      showSuccess: false,
    }
  },
  methods: {
    // SponsorPopUp裡 點擊到前往贊助 執行Popup關閉&Success開啟
    closeModel() {
      this.rightnow = false;
      this.showSuccess = true;
      this.hidden();
    },
    // SponsorPopUp裡 點擊到前往贊助 執行Popup關閉&Success關閉
    closePopup() {
      this.rightnow = false;
      this.showSuccess = false;
      this.showScrollbar();
    },
    // 視窗開啟時scrollBar隱藏
    hidden() {
      document.body.style.overflow = 'hidden';
    },
    showScrollbar() {
      document.body.style.overflow = 'auto';
    }
  },
};
</script>

<template>
  <NavPage />
  <section class="sponsor-container">
    <!-- 上半部區塊 -->
    <div class="sponsor-rightnow">
      <div class="sponsor-title">
        <div class="sponsor-titlecn">立即贊助</div>
        <div class="sponsor-titleen">Sponsor Us</div>
      </div>
      <div class="sponsor-banner">
        <div class="arrow"></div>
        <div class="cats"></div>
      </div>
      <div class="sponsor-text">
        <div class="notice">請同意並瞭解以下內容才能贊助</div>
        <div><input type="checkbox">
          <span class="sign">*</span>我已瞭解浪浪的事平台是製作流浪動物相關服務，讓毛小孩可以順利被認養、尋獲、協尋...的平台。
        </div>
        <div><input type="checkbox">
          <span class="sign">*</span>我已瞭解浪浪的事平台是做資訊整合，收集公立收容、私人收容或個人刊登毛小孩資訊，提供毛小孩相關資訊的平台，並非公立收容所或任何私立收容單位。
        </div>
        <div><input type="checkbox">
          <span class="sign">*</span>我已瞭解浪浪的事平台，並無收容毛小孩且看過 <span class="sponsor-aboutus">關於我們</span>
          內容瞭解平台是製作系統服務讓毛小孩資訊可以更多人看見。
        </div>
      </div>
    </div>
    <!-- 分線 -->
    <div class="interval">
      <div class="line">
        <div class="squre"></div>
        <div class="line-left"></div>
      </div>

      <div class="line-text">填寫資料</div>
      <div class="line">
        <div class="line-right"></div>
        <div class="squre"></div>
      </div>
    </div>
    <!-- 下半部區塊 -->
    <div class="information">
      <div class="box">
        <span>姓名 *</span>
        <div class="name-input">
          <input type="text">
          <input type="text">
        </div>
      </div>
      <div class="box">
        <span>Email</span>
        <div class="email-input">
          <input type="text">
        </div>
        <span class="content">建議您填寫以利未來查詢贊助資訊</span>
      </div>
      <div class="box">
        <span>手機號碼</span>
        <div class="email-input">
          <input type="text">
        </div>
        <span class="content">
          建議您填寫以利未來查詢贊助資訊，格式：0912345678，請勿加入任何符號</span>
      </div>
      <div class="box">
        <span>金額（單位：新台幣TWD） *</span>
        <div class="email-input">
          <input type="text">
        </div>
      </div>
      <div class="box pay">
        <span>支付方式 *<input class="card" type="radio"> 信用卡</span>
      </div>
      <div class="box ">
        <div class="agree-text"><input class="agree" type="checkbox">
          <span class="">
            * 同意本網站
            <span class="sponsor-aboutus">隱私權政策</span>
            ，並瞭解姓名、Email、手機號碼，「皆」有填寫未來才能查詢您的查詢贊助資訊！
          </span>
        </div>
      </div>
      <div class="box ">
        <GreenButton :showSvg="false" class="sponsornow-btn" @click="rightnow = !rightnow, hidden()">立即贊助</GreenButton>
        <!-- Popup 執行closeModel closePopup-->
        <SponsorPopUp v-if="rightnow" @close-type="closeModel" @closePopup="closePopup">
        </SponsorPopUp>
        <!-- Success -->
        <SponsorSuccess v-if="showSuccess" @closePopup="closeCurrentPopup" />
      </div>
    </div>
  </section>
  <FooterPage />
</template>

<style scoped>
.sponsor-container {
  width: 100vw;
  max-width: 100%;
  padding: 0 164px;
  color: var(--primary-color);
  font-size: 24px;
  letter-spacing: 6px;
}

.sponsor-rightnow {
  padding: 50px 0 100px 0;
}

.sponsor-title {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}

.sponsor-titlecn {
  font-size: 48px;
  letter-spacing: 12px;
  width: 240px;
}

.sponsor-titleen {
  font-size: 20px;
  letter-spacing: 5px;
  width: 150px;
  line-height: 24px;
}

.sponsor-banner {
  display: flex;
}

.arrow {
  width: 90px;
  height: 335px;
  background-image: url('../assets/Image/SponsorImage/arrow.svg');
  background-repeat: no-repeat;
  background-position: top;
  margin-right: 20px;
}

.cats {
  width: 1465px;
  height: 265px;
  background-image: url('../assets/Image/SponsorImage/banner.svg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;
}

.sponsor-text {
  display: flex;
  flex-direction: column;
  row-gap: 55px;
  text-indent: -38px;
  margin-top: -20px;
  padding-left: 125px;
  color: var(--gray-color);
}

.sign {
  margin-left: 10px;
}

.notice {
  font-weight: bold;
}

.sponsor-aboutus {
  text-decoration: underline;
}

/* 分線 */
.interval {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 32px;
  letter-spacing: 8px;
}

.line {
  display: flex;
  align-items: center;
}

.squre {
  width: 10px;
  height: 10px;
  background-color: var(--primary-color);
  transform: translate(0px, -0.5px) rotate(45deg);
}

.line-left {
  width: 633px;
  height: 2px;
  background-color: var(--primary-color);
  stroke: var(--primary-color);
}

.line-right {
  width: 633px;
  height: 2px;
  background-color: var(--primary-color);
  stroke: var(--primary-color);
}

/* 下半部區塊 */
.information {
  padding: 143px 311px 0 311px;
  display: flex;
  flex-direction: column;
  gap: 50px;

}

.information input {
  width: 100%;
  height: 85px;
  border-radius: 4px;
  border: 2px solid var(--primary-color);
}

.box {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.name-input {
  display: flex;
  justify-content: space-between;
}

.name-input input {
  width: 429px;
  height: 85px;
}

.content {
  font-size: 20px;
  letter-spacing: 5px;
  color: var(--gray-color);
}

.box .card {
  width: 18px;
  height: 18px;
  margin-left: 48px;
}

.box .agree-text {
  text-indent: -25px;
}

.box .agree {
  width: 18px;
  height: 18px;
  margin-left: 26px;
}

.sponsornow-btn {
  margin: auto;
  /* font-size: 32px; */
  /* transform: scale(1.3); */
}
</style>