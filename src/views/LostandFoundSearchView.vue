<script>
import FooterPage from '@/components/FooterPage.vue';
import GreenButton from '@/components/GreenButton.vue';
import NavPage from '@/components/NavPage.vue';
import IconLostAnimalsList from '@/components/icons/LostAnimals/IconLostAnimalsList.vue';
import AnimalsListBrown from '@/components/icons/LostAnimals/AnimalsListBrown.vue';
import IconLostFrame from '@/components/icons/LostAnimals/IconLostFrame.vue';
export default {
    data() {
        return {

        }
    }, methods: {
        goToFoundAnimalForm() {
            this.$router.push('/foundanimalsform'); //導到[撿到遺失動物]
        },
        goToMyLostForm() {
            this.$router.push('/myanimallostform'); //導到[我的動物走失了]
        },
        goToFoundAnimalInfo() {
            this.$router.push('/foundanimalsinformation'); //導到[撿到遺失動物資訊頁]
        },
        goToMyLostInfo() {
            this.$router.push('/myanimallostinformation'); //導到[我的動物走失了資訊頁]
        },
    },
    components: {
        NavPage,
        FooterPage,
        GreenButton,
        IconLostAnimalsList,
        IconLostFrame,
        AnimalsListBrown,
    },
}
</script>
<template>
    <NavPage />
    <main>
        <div class="lost-title">
            <div class="lost-titlecn">失散協尋</div>
            <div class="lost-titleen">Lost and Found</div>
        </div>
        <div class="content">
            <!-- <img src="../assets/Image/LostImage/arrow.svg"> -->
            <div class="tabs">
                <!--   tab group -->
                <input type="radio" id="tab-1" name="tab" checked="checked">
                <label for="tab-1" class="tab-left">撿到遺失動物</label>
                <div class="info-1">
                    <div class="tab-content">
                        <!-- svg圖 -->
                        <svg width="238" height="81" viewBox="0 0 238 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_1569_9600)">
                                <path
                                    d="M6.58436 71.8828C6.57288 72.4349 6.11595 72.8732 5.56378 72.8618C5.01162 72.8503 4.57331 72.3933 4.5848 71.8412L6.58436 71.8828ZM229.144 55.1484L221.876 46.1758L233.281 44.3677L229.144 55.1484ZM137.972 38.6334L137.765 39.6117L137.637 39.5847L137.521 39.5258L137.972 38.6334ZM144.039 32.5529L145.034 32.4558L144.039 32.5529ZM137.521 39.5258C129.766 35.6056 124.934 31.497 122.608 27.3774C120.237 23.179 120.517 19.0461 122.795 15.3701C125.032 11.7614 129.153 8.64373 134.393 6.19573C139.651 3.73912 146.127 1.91355 153.198 0.944653C167.331 -0.991902 183.978 0.476549 198.215 7.32778C212.487 14.1955 224.319 26.4689 228.711 46.0381L226.759 46.476C222.515 27.5638 211.127 15.7606 197.348 9.12998C183.535 2.48285 167.299 1.03118 153.469 2.92614C146.559 3.87299 140.284 5.65109 135.239 8.00773C130.177 10.373 126.445 13.2782 124.495 16.4236C122.588 19.5017 122.35 22.8541 124.349 26.394C126.392 30.0127 130.816 33.8954 138.423 37.7409L137.521 39.5258ZM4.5848 71.8412C4.91473 55.9797 13.612 42.1996 26.3815 31.3275C39.152 20.4547 56.075 12.4143 73.0928 8.00667C90.0998 3.6018 107.312 2.79692 120.66 6.51353C134.044 10.2406 143.681 18.5811 145.034 32.4558L143.044 32.65C141.795 19.8477 132.985 12.0217 120.123 8.44022C107.224 4.84828 90.3893 5.59281 73.5942 9.94279C56.8099 14.29 40.1755 22.2099 27.6781 32.8503C15.1797 43.4915 6.89856 56.7777 6.58436 71.8828L4.5848 71.8412ZM145.034 32.4558C145.287 35.05 144.87 37.1838 143.509 38.5147C142.125 39.8688 140.072 40.1004 137.765 39.6117L138.179 37.6551C140.2 38.0832 141.422 37.7584 142.111 37.0849C142.823 36.3883 143.275 35.0234 143.044 32.65L145.034 32.4558Z"
                                    fill="#52A038" />
                            </g>
                            <defs>
                                <filter id="filter0_d_1569_9600" x="0.584961" y="0.15918" width="236.696" height="80.7031"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1569_9600" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1569_9600"
                                        result="shape" />
                                </filter>
                            </defs>
                        </svg>
                        <!-- svg圖 結束-->

                        <IconLostFrame></IconLostFrame>
                        <IconLostAnimalsList />
                    </div>
                </div>
                <!--   tab group end -->
                <!--   tab group -->
                <input type="radio" id="tab-2" name="tab">
                <label for="tab-2" class="tab-right">我遺失了動物</label>
                <div class="info-2">
                    <div class="tab-content">
                        <!-- svg圖 -->
                        <svg width="238" height="81" viewBox="0 0 238 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_1569_10728)">
                                <path
                                    d="M6.58436 71.8828C6.57288 72.4349 6.11595 72.8732 5.56378 72.8618C5.01162 72.8503 4.57331 72.3933 4.5848 71.8412L6.58436 71.8828ZM229.144 55.1484L221.876 46.1758L233.281 44.3677L229.144 55.1484ZM137.972 38.6334L137.765 39.6117L137.637 39.5847L137.521 39.5258L137.972 38.6334ZM144.039 32.5529L145.034 32.4558L144.039 32.5529ZM137.521 39.5258C129.766 35.6056 124.934 31.497 122.608 27.3774C120.237 23.179 120.517 19.0461 122.795 15.3701C125.032 11.7614 129.153 8.64373 134.393 6.19573C139.651 3.73912 146.127 1.91355 153.198 0.944653C167.331 -0.991902 183.978 0.476549 198.215 7.32778C212.487 14.1955 224.319 26.4689 228.711 46.0381L226.759 46.476C222.515 27.5638 211.127 15.7606 197.348 9.12998C183.535 2.48285 167.299 1.03118 153.469 2.92614C146.559 3.87299 140.284 5.65109 135.239 8.00773C130.177 10.373 126.445 13.2782 124.495 16.4236C122.588 19.5017 122.35 22.8541 124.349 26.394C126.392 30.0127 130.816 33.8954 138.423 37.7409L137.521 39.5258ZM4.5848 71.8412C4.91473 55.9797 13.612 42.1996 26.3815 31.3275C39.152 20.4547 56.075 12.4143 73.0928 8.00667C90.0998 3.6018 107.312 2.79692 120.66 6.51353C134.044 10.2406 143.681 18.5811 145.034 32.4558L143.044 32.65C141.795 19.8477 132.985 12.0217 120.123 8.44022C107.224 4.84828 90.3893 5.59281 73.5942 9.94279C56.8099 14.29 40.1755 22.2099 27.6781 32.8503C15.1797 43.4915 6.89856 56.7777 6.58436 71.8828L4.5848 71.8412ZM145.034 32.4558C145.287 35.05 144.87 37.1838 143.509 38.5147C142.125 39.8688 140.072 40.1004 137.765 39.6117L138.179 37.6551C140.2 38.0832 141.422 37.7584 142.111 37.0849C142.823 36.3883 143.275 35.0234 143.044 32.65L145.034 32.4558Z"
                                    fill="#B68337" />
                            </g>
                            <defs>
                                <filter id="filter0_d_1569_10728" x="0.584961" y="0.15918" width="236.696" height="80.7031"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                        result="effect1_dropShadow_1569_10728" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1569_10728"
                                        result="shape" />
                                </filter>
                            </defs>
                        </svg>
                        <!-- svg圖 結束-->
                        <IconLostFrame frameBorder="var(--B68337)" noticeborder="var(--B68337)" textColor="var(--B68337)">
                        </IconLostFrame>
                        <AnimalsListBrown />
                    </div>
                </div>
            </div>
            <!--   tab group end -->
        </div>
        <!-- 失散協尋>撿到遺失動物（暫放） -->
        <GreenButton :showSvg="false" @click="goToFoundAnimalForm" class="btnn">確認前往：<br>撿到遺失動物</GreenButton>
        <!-- 失散協尋>我遺失了動物（暫放） -->
        <GreenButton :showSvg="false" @click="goToMyLostForm" class="btnn">確認前往：<br>我遺失了動物</GreenButton>
        <!-- 失散協尋>撿到遺失動物資訊頁（暫放） -->
        <GreenButton :showSvg="false" @click="goToFoundAnimalInfo" class="btnn">確認前往：<br>撿到遺失動物資訊頁</GreenButton>
        <!-- 失散協尋>我遺失了動物資訊頁（暫放） -->
        <GreenButton :showSvg="false" @click="goToMyLostInfo" class="btnn">確認前往：<br>我遺失了動物資訊頁</GreenButton>

    </main>
    <FooterPage />
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    padding: 60px 155px;
}

.lost-title {
    display: flex;
    align-items: center;
    margin-bottom: 73px;
    color: var(--primary-color);
}

.lost-titlecn {
    font-size: 48px;
    letter-spacing: 12px;
    width: 240px;
}

.lost-titleen {
    font-size: 20px;
    letter-spacing: 5px;
    width: 150px;
    line-height: 24px;
}

.content {
    position: relative;
}

svg {
    position: absolute;
    top: -3.8%;
    left: 36%;
}


.tabs {
    display: flex;
    flex-wrap: wrap;
    font-size: 24px;
    letter-spacing: 6px;
}

/* 隱藏預設的radio */
.tabs input[type=radio] {
    display: none;
}

/* 頁籤未切換的樣式 */
.tab-left {
    height: 70px;
    padding: 20px 30px;
    border-radius: 30px 0 0 0;
    border: 2.5px solid var(--primary-color);
    border-bottom: 0;
    color: var(--primary-color);
    background-color: var(--white-color);
    cursor: pointer;
    order: 0;
}

.tab-right {
    height: 70px;
    padding: 20px 30px;
    border-radius: 0 30px 0 0;
    background-color: var(--white-color);
    color: var(--B68337);
    border: 2.5px solid var(--B68337);
    border-bottom: 0;
    cursor: pointer;
    order: 0;
}

/* 切換頁籤後的樣式 */
#tab-1:checked+label {
    color: var(--white-color);
    background-color: var(--primary-color);
}

#tab-2:checked+label {
    color: var(--white-color);
    background-color: var(--B68337);
}

/* 切換頁籤出現對應的內容 */
#tab-1:checked+label+.info-1 {
    display: block;
}

#tab-2:checked+label+.info-2 {
    display: block;
}

.info-1,
.info-2 {
    display: none;
    order: 1;
}

/* 頁籤的內容 */
.tab-content {
    display: flex;
    gap: 68px;
}

/* 暫放按鈕 */
.btnn {
    width: 250px;
    height: 100px;
    font-size: 24px;
   margin: 10px 10px;
}
</style>