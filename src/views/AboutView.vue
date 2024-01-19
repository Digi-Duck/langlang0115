<script setup>
import NavPage from '../components/NavPage.vue'

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
        <div class="arrow">
          <!-- <img src="../assets/Image/SponsorImage/arrow.svg"> -->
        </div>
        <div class="cats">
          <!-- <img src="../assets/Image/SponsorImage/banner.svg"> -->
        </div>
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
    </div>
  </section>
</template>

<style scoped>
.sponsor-container {
  width: 100vw;
  max-width: 100%;
  padding: 0 164px;
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
  color: var(--primary-color);
  font-size: 48px;
  letter-spacing: 12px;
  width: 240px;
}

.sponsor-titleen {
  color: var(--primary-color);
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
  font-size: 24px;
  text-indent: -38px;
  letter-spacing: 6px;
  margin-top: -20px;
  padding-left: 125px;
}

.sign {
  color: var(--primary-color);
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
  color: var(--primary-color);
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
  font-size: 24px;
  letter-spacing: 6px;
  color: var(--primary-color);
  background-color: blanchedalmond;
  padding: 143px 311px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-bottom: 64px;
}

.information input {
  width: 100%;
  height: 85px;
  border-radius: 4px;
  border: 2px solid var(--primary-color);
}
.name-input{
 display: flex;
 justify-content: space-between;
}
.name-input input{
  width: 429px;
  height: 85px;
}
.content{
  font-size: 20px;
  letter-spacing: 5px;
  
}
</style>