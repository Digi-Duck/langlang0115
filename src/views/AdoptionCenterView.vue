<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
import TitleAndLine from '@/components/TitleAndLine.vue';
import IconChangeButton from '@/components/icons/IconChangeButton.vue';
import AdoptionList from '@/components/AdoptionList.vue';
import FiveStepsLineFrame from '@/components/FiveStepsLineFrame.vue';
import AdoptionSearch from '@/components/AdoptionSearch.vue';
import AdoptionInformationPopup from '@/components/AdoptionInformationPopup.vue';

export default {
    data() {
        return {
            // 下方暫放按鈕
            mysubmit: "毛小孩資訊",
            mybgcolor: 'var(--primary-color)',
            mytextcolor: 'var(--white-color)',
            myw: '12.5rem',
            myh: '4rem',
            // 尋找心目中的毛小孩標題
            mytexttwo: "尋找心目中的毛小孩",
            mylinew: '72rem',
            parenttwoStyle: {
                gap: '0.5rem',
            },
            // 搜尋區
            mybordercolor: 'var(--primary-color)',
            mynoticeborder: 'var(--primary-color)',
            mytextc: 'var(--primary-color)',
            // Icon圖
            isHovered: false,
            // 進入畫面時 視窗關閉
            show: false,
        }
    },
    methods: {
        showPopup() {
            // 執行顯示視窗
            this.show = true;
            // 視窗開啟時scrollBar隱藏
            document.body.style.overflow = 'hidden';
        },
        closePopup() {
            // 執行關閉視窗
            this.show = false;
            // 視窗開啟時scrollBar打開
            document.body.style.overflow = 'auto';
        },
        // 顯示圖
        showIcon() {
            this.isHovered = true;
        },
        // 隱藏圖
        hideIcon() {
            this.isHovered = false;
        },
        petinformationPage() {
            this.$router.push('/adoptionpetinformation');
        }
    },
    components: {
        NavPage,
        FooterPage,
        IconChangeButton, // 暫時按鈕
        TitleAndLine,
        FiveStepsLineFrame,
        AdoptionSearch,
        AdoptionList,
        AdoptionInformationPopup
    },
}
</script>
<template>
    <NavPage />
    <main>
        <div class="adoptionCenterArea">
            <!-- 認養中心 -->
            <div class="adoptionTitle">
                <span>認養中心</span>
                <p>
                    Adoption
                    <br>
                    Center
                </p>
            </div>
            <!-- 認養五步驟 -->
            <div class="fiveStepsToAdoption">
                <div class="fiveStepsTitle">
                    <span>認養五步驟</span>
                </div>
                <FiveStepsLineFrame />
                <div class="fiveStepsText">
                    <p>閱讀認養須知</p>
                    <p style="margin-left: 55px;">尋找心目中的毛孩</p>
                    <p style="margin-left: 25px;">聯絡刊登的送養人<br>了解毛小孩情況</p>
                    <p>實際與毛小孩互動並於<br>完成寵物登記的變更</p>
                    <p>帶毛小孩回家</p>
                </div>
            </div>
            <!-- 尋找心目中的毛小孩 -->
            <div class="lookingForLikepets">
                <TitleAndLine :text="mytexttwo" :customStyle="parenttwoStyle" :linew="mylinew" />
                <!-- 認養中心搜尋卡片組件 -->
                <div class="likepetsCards">
                    <div class="likepets">
                        <div class="petsTitle">
                            <span>尋找心目中的毛小孩</span>
                        </div>
                        <!-- 搜尋 -->
                        <div class="notice" :style="{ borderColor: noticeborder, color: textColor }" @mouseover="showIcon"
                            @mouseleave="hideIcon" @click="showPopup">
                            <!-- 做按鈕 -->
                            <div class="adoptionGuidelines">
                                <img src="@\assets\Image\DogPawGreen.svg" alt="Icon" v-if="isHovered" class="icon">
                                <span>請先閱讀認養須知</span>
                                <img src="@\assets\Image\DogPawGreen.svg" alt="Icon" v-if="isHovered" class="icon">
                            </div>
                        </div>
                        <AdoptionSearch :frameBorder="mybordercolor" :noticeborder="mynoticeborder" :textColor="mytextc" />
                    </div>
                    <!-- 卡片 -->
                    <div class="petsInormationForm">
                        <AdoptionList />
                    </div>
                    <!-- 顯示視窗畫面 -->
                    <AdoptionInformationPopup :is-show="show" @close="closePopup" />
                </div>
            </div>
        </div>
        <!-- 暫放 -->
        <hr>
        <IconChangeButton :text="mysubmit" @click="petinformationPage" :textColor="mytextcolor" :bgColor="mybgcolor"
            :w="myw" :h="myh"></IconChangeButton>
    </main>
    <FooterPage />
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    font-style: normal;
    line-height: normal;
}

.adoptionCenterArea {
    display: flex;
    flex-direction: column;
    padding: 4.25rem 0.5rem 3rem 11rem;
}

/* 認養中心 標題區 */

.adoptionTitle {
    display: flex;
    flex-direction: row;
    color: var(--primary-color);
    font-weight: 400;
    padding-bottom: 7rem;
    gap: 1.3rem;
}

.adoptionTitle span {
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.75rem;
    font-size: 3rem;
}

.adoptionTitle p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    line-height: 120%;
    letter-spacing: 5px;
}

/* 認養五步驟 */
.fiveStepsToAdoption {
    display: flex;
    flex-direction: column;
    padding: 0 13.5rem 0 1rem;
}

.fiveStepsTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.25rem;
    color: var(--primary-color);
    letter-spacing: 0.5rem;
    padding-bottom: 7rem;
}


/* 五步驟內文 */
.fiveStepsText {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 4.6rem 0 6.8rem 0;
}

.fiveStepsText p {
    text-align: center;
    color: var(--primary-color);
    letter-spacing: 5px;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 33px;
}


/* 尋找心目中的毛小孩 */
.lookingForLikepets {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
}

.likepetsCards {
    display: flex;
    align-items: end;
    flex-direction: row;
    gap: 1.25rem;
    padding-top: 2.8rem;
}

/* 請先閱讀認養須知 */

.notice {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    border: 2px solid var(--primary-color);
    background-color: var(--white-color);
    color: var(--primary-color);
}

.adoptionGuidelines span {
    font-size: 28px;
    text-align: center;
    margin: 0 2px 1px 8px;
    letter-spacing: 7px;
}

.notice:hover {
    cursor: pointer;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--primary-color);
}

.notice:hover .icon {
    animation: ChangeIcon 0.5s ease;
}

@keyframes ChangeIcon {
    0% {
        opacity: 0;
        gap: 10px;
    }

    100% {
        opacity: 1;
        gap: 10px;
    }
}

.icon {
    width: 1.5rem;
    height: 1.3rem;
}

/* 搜尋區 */
.likepets {
    display: flex;
    flex-direction: column;
}

.petsTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18.8rem;
    height: 4rem;
    background-color: var(--primary-color);
    border-radius: 1.8rem 1.8rem 0px 0px;
    border: 1px solid var(--primary-color);
}

.petsTitle span {
    color: var(--white-color);
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

/* 卡片組件 */
.petsInormationForm {
    display: flex;
    flex-direction: column;
}
</style>