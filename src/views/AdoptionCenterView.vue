<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
import FiveStepsLineFrame from '@/components/FiveStepsLineFrame.vue';
import TitleAndLine from '@/components/TitleAndLine.vue';
import AdoptionInformationPopup from '@/components/AdoptionInformationPopup.vue';
import AdoptionSearch from '@/components/AdoptionSearch.vue';
import IconChangeButton from '@/components/icons/IconChangeButton.vue';
import AdoptionList from '@/components/AdoptionList.vue';
import IconPaperAirplane from '@/components/icons/IconPaperAirplane.vue';
import Animals from '@/json/Animals.json';

export default {
    components: {
        NavPage,
        FooterPage,
        IconChangeButton,
        TitleAndLine,
        FiveStepsLineFrame,
        AdoptionSearch,
        AdoptionList,
        AdoptionInformationPopup,
        IconPaperAirplane,
    },
    data() {
        return {
            // 尋找心目中的毛小孩標題
            parenttwoStyle: {
                gap: '8px',
                fontSize: "2rem",
                color: 'var(--primary-color)',
            },
            parenttwoStyleThree: {
                gap: '24px',
                fontSize: "1.5rem",
                color: 'var(--primary-color)',
            },
            // 搜尋區
            mybordercolor: 'var(--primary-color)',
            mynoticeborder: 'var(--primary-color)',
            mytextc: 'var(--primary-color)',
            // Icon圖
            isHovered: false,
            // 進入畫面時 視窗關閉
            show: false,
            // 傳入動物資料
            Animals: Animals,
            // 預設不過濾
            filteredAnimals: Animals,
        }
    },
    methods: {
        // 搜尋器 過濾
        search(formData) {
            this.filteredAnimals = this.Animals.filter((ani => ani.類型 == formData.species));
            if (formData.location != "所有縣市") {
                this.filteredAnimals = this.filteredAnimals.filter((ani => ani.所在區域 == formData.location));
            }
            this.filteredAnimals = this.filteredAnimals.filter((ani => ani.體型 == formData.bodyshape));
            if (formData.gender != "both") {
                this.filteredAnimals = this.filteredAnimals.filter((ani => ani.性別 == formData.gender));
            }
            // if (formData.colors != "both") {
            //     this.filteredAnimals = this.filteredAnimals.filter((ani => ani.顏色 == formData.colors));
            // }
            if (formData.age != "both") {
                this.filteredAnimals = this.filteredAnimals.filter((ani => ani.年齡 == formData.age));
            }
            if (formData.neutered != "both") {
                this.filteredAnimals = this.filteredAnimals.filter((ani => ani.是否已結紮 == formData.neutered));
            }
            // console.log(this.filteredAnimals);
            // console.log(formData.species);
        },
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
        // behavior行動= 平滑
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
        // 前往表單頁面
        formadoptionPage() {
            this.$router.push('/formpageadoption');
            this.scrollToTop();
        },
    },
}
</script>
<template>
    <NavPage />
    <main>
        <div class="adoptionCenterArea">
            <!-- 1980 & 1280認養中心 -->
            <div class="adoptionTitle">
                <span>認養中心</span>
                <p>
                    Adoption
                    <br>
                    Center
                </p>
            </div>
            <div class="adoptionTitleTwo">
                <span>認養中心</span>
                <p>AdoptionCenter</p>
            </div>
            <!-- 認養五步驟 -->
            <div class="fiveStepsToAdoption">
                <div class="fiveStepsTitle">
                    <span>認養五步驟</span>
                </div>
                <div class="fiveStepsTitleImage">
                    <img src="../assets/Image/doptionTitle.svg" alt="">
                </div>
                <!-- 1920 -->
                <div class="fiveStep">
                    <FiveStepsLineFrame />
                    <div class="fiveStepsText">
                        <p>閱讀認養須知</p>
                        <p style="margin-left: 55px;">尋找心目中的毛孩</p>
                        <p style="margin-left: 25px;">聯絡刊登的送養人<br>了解毛小孩情況</p>
                        <p>實際與毛小孩互動並於<br>完成寵物登記的變更</p>
                        <p>帶毛小孩回家</p>
                    </div>
                </div>
                <!-- 1280 -->
                <div class="fiveStepsTextTwo">
                    <div class="StepsText up">
                        <p>尋找心目中的毛孩</p>
                        <p>實際與毛小孩互動並於<br>完成寵物登記的變更</p>
                    </div>
                    <div class="med">
                        <FiveStepsLineFrame />
                    </div>
                    <div class="StepsText down">
                        <p>閱讀認養須知</p>
                        <p>聯絡刊登的送養人<br>了解毛小孩情況</p>
                        <p>帶毛小孩回家</p>
                    </div>
                </div>
            </div>
            <!-- 尋找心目中的毛小孩 -->
            <div class="lookingForLikepets">
                <!-- 1980 -->
                <div class="lookingForTitle">
                    <TitleAndLine :customStyle="parenttwoStyle" text="尋找心目中的毛小孩" linew="1100px" />
                </div>
                <!-- 1280 -->
                <div class="lookingForTitleTwo">
                    <TitleAndLine :customStyle="parenttwoStyle" text="尋找心目中的毛小孩" linew="600px" />
                </div>
                <!-- 768 -->
                <div class="lookingForTitleThree">
                    <TitleAndLine :customStyle="parenttwoStyleThree" text="尋找心目中的毛小孩" linew="359px" />
                </div>
                <!-- 認養中心搜尋卡片組件 -->
                <div class="likepetsCards">
                    <div class="likepets">
                        <div class="petsTitle">
                            <span>尋找心目中的毛小孩</span>
                        </div>
                        <!-- 搜尋 -->
                        <div class="notice" @mouseover="showIcon" @mouseleave="hideIcon" @click="showPopup">
                            <!-- 認養須知按鈕 -->
                            <div class="adoptionGuidelines">
                                <img src="@\assets\Image\DogPawGreen.svg" alt="Icon" v-if="isHovered" class="icon">
                                <span>請先閱讀認養須知</span>
                                <img src="@\assets\Image\DogPawGreen.svg" alt="Icon" v-if="isHovered" class="icon">
                            </div>
                        </div>
                        <AdoptionSearch :frameBorder="mybordercolor" :noticeborder="mynoticeborder" :textColor="mytextc"
                            @search="search" />
                    </div>
                    <!-- 1980卡片 -->
                    <div class="petsInormationForm">
                        <div class="btn">
                            <!-- 1980 & 1280 -->
                            <IconChangeButton text="前往送養" textColor="var(--gray-color)" bgColor="var(--orangeyellow-color)"
                                w="11.3rem" h="4rem" @click="formadoptionPage" />
                            <!-- 768 -->
                            <!-- <IconChangeButton text="前往送養" textColor="var(--gray-color)" bgColor="var(--orangeyellow-color)"
                                w="11.3rem" h="4rem" @click="formadoptionPage" /> -->
                            <a href="https://reurl.cc/lgNWgE">
                                <IconPaperAirplane />
                                搜尋附近動物醫院
                            </a>
                        </div>
                        <AdoptionList :AnimalsData="filteredAnimals" :prefix="''" />
                    </div>
                    <!-- 顯示視窗畫面 -->
                    <AdoptionInformationPopup :is-show="show" @close="closePopup" />
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
}

.adoptionCenterArea {
    display: flex;
    flex-direction: column;
    padding: 68px 137px 197px 187px;
}

/* 認養中心 標題區 */
.adoptionTitle {
    display: flex;
    flex-direction: row;
    color: var(--primary-color);
    font-weight: 400;
    padding-bottom: 112px;
    gap: 20px;
}

/* 768 */
.adoptionTitleTwo {
    display: none;
    visibility: hidden;
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
    align-items: center;
    flex-direction: column;
    padding: 0 13.5rem 0 1rem;
    width: 100%;
}

/* 768 */
.fiveStepsTitleImage {
    display: none;
    visibility: hidden;
}

.fiveStepsTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.25rem;
    color: var(--primary-color);
    letter-spacing: 0.5rem;
    padding-bottom: 115px;
}

/* 1280 */
.fiveStepsTextTwo {
    display: none;
    visibility: hidden;
}

/* 768 */
.fiveStepsTextThree {
    display: none;
    visibility: hidden;
}

/* 五步驟內文 */
.fiveStepsText {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 1472px;
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

/* 1280 */
.lookingForTitleTwo {
    display: none;
    visibility: hidden;
}

/* 768 */
.lookingForTitleThree {
    display: none;
    visibility: hidden;
}

.likepetsCards {
    display: flex;
    align-items: end;
    flex-direction: row;
    gap: 1.25rem;
    padding-top: 2.8rem;
    margin-left: 0.6rem;
}

/* 請先閱讀認養須知 */

.notice {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    border: 2px solid var(--primary-color);
    background-color: var(--white-color);
    color: var(--primary-color);
}

.adoptionGuidelines span {
    font-size: 1.75rem;
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
.btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 840px;
    height: 64px;
    margin-bottom: 25px;
}

a {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    color: var(--gray-color);
    font-size: 1.5rem;
}

a:hover {
    background-color: transparent;
}

.petsInormationForm {
    display: flex;
    flex-direction: column;
}


@media screen and (max-width:1280px) and (min-width:769px) {
    .adoptionTitle {
        padding-bottom: 69px;
    }

    .fiveStepsTitle {
        padding-bottom: 123px;
    }

    .adoptionCenterArea {
        padding: 68px 113px 246px 69px;
    }

    /* 認養五步驟 */
    .fiveStepsToAdoption {
        padding: 0 144px 0 165px;
    }

    .fiveStep {
        display: none;
        visibility: hidden;
    }

    .fiveStepsTextTwo {
        display: flex;
        visibility: visible;
        flex-direction: column;
        gap: 60px;
        padding: 0 114px 105px 126px;
    }

    .StepsText {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        font-size: 1.25rem;
        letter-spacing: 5px;
        color: var(--primary-color);

    }

    .up {
        gap: 216px;
        padding-left: 184px;
    }

    .med {
        width: 1023px;
    }

    .down {
        display: flex;
        justify-content: space-between;
        gap: 200px;
    }

    /* 尋找心目中的毛小孩 */
    .lookingForLikepets {
        display: flex;
        align-items: center;
    }

    .lookingForTitle {
        display: none;
        visibility: hidden;
    }

    .lookingForTitleTwo {
        display: flex;
        visibility: visible;
    }

    .petsTitle {
        display: none;
        visibility: hidden;
    }

    .likepetsCards {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 40px;
        gap: 109px;
    }

    .notice {
        border-bottom: 1px;
    }

    /* 卡片 */
    .petsInormationForm {
        display: flex;
        flex-direction: column-reverse;
    }

    .btn {
        margin-bottom: 0;
        margin-top: 25px;
    }
}

@media screen and (max-width:768px) and (min-width:376px) {
    .adoptionCenterArea {
        padding: 44px 22px 232px;
    }

    /* 認養中心 標題區 */
    .adoptionTitle {
        display: none;
        visibility: hidden;
    }

    .adoptionTitleTwo {
        display: flex;
        align-items: center;
        visibility: visible;
        flex-direction: row;
        color: var(--primary-color);
        font-weight: 400;
        padding: 0 0 82px 18px;
        gap: 12px;
    }

    .adoptionTitleTwo span {
        text-align: center;
        font-size: 1.6rem;
        letter-spacing: 6.5px;
    }

    .adoptionTitleTwo p {
        letter-spacing: 4px;
        font-size: 1rem;
    }

    /* 認養五步驟 */
    .fiveStepsToAdoption {
        padding: 0 22px;
    }

    .fiveStepsTitle {
        display: none;
        visibility: hidden;
    }

    .fiveStepsTitleImage {
        display: flex;
        visibility: visible;
        position: absolute;
        right: 25%;
        top: 15%;
        width: 4%;
        height: 4%;
    }

    .fiveStep {
        display: none;
        visibility: hidden;
    }

    .fiveStepsTextTwo {
        display: flex;
        visibility: visible;
        align-items: center;
        flex-direction: column-reverse;
        gap: 23px;
        padding: 0 22px 74px 22px;
        width: 707px;
    }

    .StepsText {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        font-size: 0.8rem;
        letter-spacing: 3.5px;
        color: var(--primary-color);

    }

    .up {
        gap: 141px;
    }

    .med {
        width: 652px;
    }

    .down {
        display: flex;
        justify-content: space-between;
        gap: 160px;
    }

    .lookingForTitle {
        display: none;
        visibility: hidden;
    }

    .lookingForTitleThree {
        display: flex;
        visibility: visible;
        padding-left: 13px;
    }

    /* 認養中心搜尋卡片組件 */
    .petsTitle {
        display: none;
        visibility: hidden;
    }

    .likepetsCards {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 49px;
    }

    .notice {
        height: 57px;
        border-bottom: 1px;
    }

    .adoptionGuidelines span {
        margin: 0;
        font-size: 1.5rem;
        letter-spacing: 6px;
    }

    /* 卡片 */
    .petsInormationForm {
        display: flex;
        flex-direction: column-reverse;
    }
    
    .btn {
        margin-bottom: 0;
        margin-top: 32px;
        width: 614px;
    }

}
</style>