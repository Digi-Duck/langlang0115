<!--首頁的[關於浪浪的事]、[最新消息]區塊 到時候本頁要放入HomeView.vue -->
<script>
</script>

<template>
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
                            <button type="button" class="news-announcement-btn">更多...</button>
                        </div>
                    </li>
                    <li class="news-item">
                        <div class="news-date">
                            <span class="news-date-month">2023.05</span>
                            <span class="news-date-day">31</span>
                        </div>
                        <div class="news-announcement">
                            <span>誤發登入失敗通知</span>
                            <button type="button" class="news-announcement-btn">更多...</button>
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
                            <button type="button" class="news-announcement-btn">更多...</button>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="more-news-btn">
                <img src='../assets/Image/HomeImage/'alt="更多消息">
            </div>
        </div>
    </section>
</template>

<style>
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
    background-color: rgb(118, 184, 228);
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
    top: 33px;
    right: 360px;
}

.yellow-paw-pic {
    position: absolute;
    top: -143px;
    left: -445px;
}

.yellow-paw-pic img {
    width: 1229px;
    height: 1119px;


}

/* 綠色區塊內 */

.green-icon-container {
    background-image: url("../assets/Image/HomeImage/HomeC-dot.svg");
    background-size: 95%;
    background-repeat: no-repeat;
    position: absolute;
    top: 200px;
    right: 189px;
    width: 1252px;
    height: 716px;
}

.news-area {
    position: relative;
}

.news-list {
    list-style: none;
    position: absolute;
    transform: translate(190px, 50px);
    height: 500px;
    /* background-color: blanchedalmond; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
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
    margin-right: 20px;
    font-family: 'Stick', sans-serif;
}

.news-date-month {
    font-size: 16px;
}

.news-date-day {
    font-size: 32px;
}

/* 最新消息的文字區 */
.news-announcement {
    border-bottom: 2px solid var(--white-color);
    font-size: 28px;
    letter-spacing: 7px;
    display: inline-block;
    margin-bottom: 30px;
    width: 550px;
    position: relative;
}



.news-announcement-btn {
    position: absolute;
    right: 0;
}
</style>