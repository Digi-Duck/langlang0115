<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
import TitleAndLine from '@/components/TitleAndLine.vue';
// import IconHeart from '@/components/icons/IconHeart.vue';

export default {
    data() {
        return {
            mytext: "送養說明",
            mytexttwo: "更多毛小孩",
            parentStyle: {
                gap: '4rem',
            },
            parenttwoStyle: {
                gap: '1.25rem',
            }
        };
    },
    components: {
        NavPage,
        FooterPage,
        TitleAndLine,
    }
}
</script>
<template>
    <NavPage />
    <main>
        <div class="adoptionCenteTitle">
            <span>認養中心</span>
            <p>> 毛小孩詳細資訊</p>
        </div>

        <div class="furryBabiesCard">
            <!-- components petCardImage -->
            <!-- <div class="furryBabiesImage">
                <img src="../assets/Image/CardImage/CardCat.png" alt=""> -->
            <!-- 愛心做Icon -->
            <!-- <IconHeart /> -->
            <!-- <img class="heart" src="../assets/Image/CardImage/IconHeart.svg" alt="">
            </div> -->
            <div class="cardFrameAll">
                <!-- 卡片表格區域-->
                <div class="CardFrame">
                    <table>
                        <div class="ChipNumber">
                            <span>晶片號碼：AAAHG1130116001 </span>
                        </div>
                        <tbody>
                            <tr>
                                <th>類別</th>
                                <td>貓</td>
                                <th>體型</th>
                                <td>小型</td>
                            </tr>
                            <tr>
                                <th>年齡</th>
                                <td>幼年</td>
                                <th>性別</th>
                                <td>母</td>
                            </tr>
                            <tr>
                                <th>是否已結紮</th>
                                <td>未知</td>
                                <th>顏色</th>
                                <td>花色</td>
                            </tr>
                            <tr>
                                <th>聯絡方式</th>
                                <td colspan="3">0908564159</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="timeShare">
                    <div class="platformTime">
                        <div class="time">
                            <span>平台建立時間</span>
                            <p class="creationTime">2024-01-10 00:00:00</p>
                        </div>
                        <div class="time">
                            <span>平台更新時間</span>
                            <p class="updateTime">2024-01-10 00:00:00</p>
                        </div>
                    </div>
                    <div class="shareIcon">
                        <span>分享至</span>
                        <div class="Icon"><img src="../assets/Image/CardImage/IconFb.svg" alt=""></div>
                        <div class="Icon"><img src="../assets/Image/CardImage/IconLine.svg" alt=""></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="adoptionInstructions">
            <!-- 送養中心 -->
            <TitleAndLine :text="mytext" :customStyle="parentStyle" />
            <div class="instructionsText">
                二貓都是女生，都作完結育及用全能貓作體內外驅蟲了。年紀都還很輕，未滿一歲，只是都曾生育過。
                <br>
                <br>
                目前正漸漸養胖中。白黃貓親人花貓警戒心較重，但相信有主人耐心的愛，ㄧ定能讓她融化她的戒心的。
            </div>
        </div>
        <!-- 更多毛小孩 -->
        <div class="manyFurryBabies">
            <TitleAndLine :text="mytexttwo" :customStyle="parenttwoStyle" />
            <!-- 更多毛小孩卡片區 -->
            <!-- components furryBabiesCardFrame-->
        </div>
    </main>
    <FooterPage />
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    padding: 4.3rem 9rem 2.25rem 10rem;
}

/* 標題 */
.adoptionCenteTitle {
    display: flex;
    flex-direction: row;
    padding: 0 0 6.25rem 1.5rem;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 12px;
}

.adoptionCenteTitle span {
    color: var(--primary-color);
}

.adoptionCenteTitle p {
    color: #D7D7D7;
    padding-left: 2.5rem;
}

/* 卡片區域 */
.furryBabiesCard {
    display: flex;
    flex-direction: row;
    padding: 0 0 6.8rem 1.5rem;
}

/* 卡片圖 */
/* .furryBabiesImage {
    display: flex;
    align-items: center;
    margin-right: 4.1rem;
    position: relative;
}

.furryBabiesImage img {
    width: 40.3rem;
    height: 33.3rem;
} */

/* 卡片愛心 */
/* .furryBabiesImage .heart {
    width: 4.8rem;
    height: 4.25rem;
    position: absolute;
    bottom: 1.8rem;
    left: 2.2rem;
} */

/*卡片表格區域*/

.cardFrameAll {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.CardFrame {
    display: flex;
    flex-direction: column;
    width: 53rem;
    /* height: 24.8rem; */
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

/* 晶片號碼 */
.ChipNumber {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28.7rem;
    /* height: 4rem; */
    background-color: var(--primary-color);
    border-radius: 0.6rem 0.6rem 0 0;
}

.ChipNumber span {
    color: var(--white-color);
    font-size: 1.5rem;
    letter-spacing: 1.68px;
    padding: 0.6rem 0.9rem;
}

/* 表格 */
table {
    text-align: left;
    width: 53.1rem;
    height: 20.8rem;
    border-collapse: collapse;
    font-style: normal;
    line-height: normal;
    font-size: 1.5rem;
}

th {
    padding-left: 2.5rem;
    width: 200px;
    height: 85px;
    color: var(--primary-color);
    border: 3px solid var(--primary-color);
    font-weight: 900;
}

td {
    padding-left: 2.5rem;
    font-weight: 400;
    border: 3px solid var(--primary-color);
}

/* 卡片時間區 */
.timeShare {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
    padding-bottom: 0.6rem;
    margin-right: 0.9rem;
}

.platformTime {
    display: flex;
    flex-direction: column;
    font-size: 1.25rem;
}

.time {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4.5px 0 4.5px 0;
    gap: 1rem;
}

.time span {
    font-weight: 700;
}

/* 分享區 */
.shareIcon {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 48px;
    color: var(--primary-color);
    letter-spacing: 6px;
    font-size: 1.5rem;
}

.Icon {
    width: 3.25rem;
    height: 3.25rem;
}

/* 送養說明 */
.adoptionInstructions {
    display: flex;
    flex-direction: column;
}

.instructionsText {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: 6px;
    padding: 0 3rem 0 1.5rem;
    margin: 4.6rem 0;
}

.contactTitle {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 4rem;
    padding: 0 1.5rem 0 1.5rem;
}

.contactTitle span {
    color: var(--primary-color);
    font-size: 36px;
    font-weight: 400;
    letter-spacing: 9px;
}

/* Line */
.contactLine {
    display: flex;
}

.line {
    width: 80rem;
    height: 2px;
    background-color: var(--primary-color);
}

.squre {
    width: 10px;
    height: 10px;
    background-color: var(--primary-color);
    transform: translate(0px, -3.5px) rotate(45deg);
}
</style>