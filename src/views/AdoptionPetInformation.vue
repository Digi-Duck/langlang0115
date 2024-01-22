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
        FooterPage,
    }
}
</script>
<template>
    <NavPage />
    <main>
        <div class="adoptionCenteTitle">
            <span>認養中心</span>
            <p> > </p>
            <span>毛小孩詳細資訊</span>
        </div>

        <div class="furryBabiesCard">
            <!-- components petCardImage -->
            <div class="furryBabiesImage">
                <img src="" alt="">
                <!-- 愛心做Icon -->
                <img src="" alt="">
            </div>
            <!-- components petCardIFrame -->
            <div class="CardFrame">
                <table>
                    <div>
                        <span>晶片號碼 :12354889464 </span>
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
                            <td>0908564159</td>
                        </tr>
                    </tbody>
                </table>
                <div class="platformTime">
                    <div class="creationTime">
                        <span>平台建立時間<p>2024-01-10 00:00:00</p></span>
                        <span>平台更新時間<p>2024-01-10 00:00:00</p></span>
                    </div>
                    <div class="updateTime"></div>
                </div>
                <div class="shareIcon">
                    <span>分享至</span>
                    <div class="Icon"></div>
                    <div class="Icon"></div>
                </div>
            </div>
        </div>

        <div class="adoptionInstructions">
            <div class="contactTitleArea">
                <div class="contactTitle">
                    <span>送養說明</span>
                    <!-- Icon Line-->
                    <div class="contactLine">
                        <div class="line"></div>
                        <div class="squre"></div>
                    </div>
                </div>
            </div>
            <div class="instructionsText">
                二貓都是女生，都作完結育及用全能貓作體內外驅蟲了。年紀都還很輕，未滿一歲，只是都曾生育過。
                目前正漸漸養胖中。白黃貓親人花貓警戒心較重，但相信有主人耐心的愛，ㄧ定能讓她融化她的戒心的。
            </div>
        </div>
        <div class="manyFurryBabies">
            <div class="contactTitleArea">
                <div class="contactTitle">
                    <span>更多毛小孩</span>
                    <!-- Icon Line-->
                    <div class="contactLine">
                        <div class="line"></div>
                        <div class="squre"></div>
                    </div>
                </div>
            </div>
            <!-- components furryBabiesCardFrame-->
            <div class="furryBabiesCardFrame">
                <div class="BabiesCardImage">
                    <img src="" alt="">
                    <div class="viewDetail">查看詳細資料</div>
                </div>
                <div class="cardDate">
                    <span>
                        建立時間：
                        <p>2023/12/10</p>
                    </span>
                    <span>
                        上次更新：
                        <p>2024/01/05</p>
                    </span>
                </div>
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
}

table {
    width: 53.1rem;
    height: 20.8rem;
    /* border: 3px solid var(--primary-color); */
    border-collapse: collapse;
}

tr {
    /* border: 3px solid var(--primary-color); */
}

th {
    color: var(--primary-color);
    border: 3px solid var(--primary-color);
}

td {
    border: 3px solid var(--primary-color);

}
</style>