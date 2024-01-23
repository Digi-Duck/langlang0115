<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
import TitleAndLine from '@/components/TitleAndLine.vue';
import PetsCardImage from '@/components/PetsCardImage.vue';
import PetsCardFrame from '@/components/PetsCardFrame.vue';
import IconCard from '@/components/icons/LostAnimals/IconCard.vue';
// import IconHeart from '@/components/icons/IconHeart.vue';

export default {
    data() {
        return {
            mytext: "送養說明",
            mytexttwo: "更多毛小孩",
            mylinew: '80rem',
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
        PetsCardImage,
        PetsCardFrame,
        IconCard
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
        <!-- 上方卡片區 -->
        <div class="furryBabiesCard">
            <!-- 卡片區圖 -->
            <PetsCardImage />
            <!-- 卡片區表格 -->
            <PetsCardFrame />
        </div>
        <!-- 送養中心 -->
        <div class="adoptionInstructions">
            <!-- 標題 -->
            <TitleAndLine :text="mytext" :customStyle="parentStyle" :linew="mylinew" />
            <div class="instructionsText">
                二貓都是女生，都作完結育及用全能貓作體內外驅蟲了。年紀都還很輕，未滿一歲，只是都曾生育過。
                <br>
                <br>
                目前正漸漸養胖中。白黃貓親人花貓警戒心較重，但相信有主人耐心的愛，ㄧ定能讓她融化她的戒心的。
            </div>
        </div>
        <!-- 更多毛小孩 -->
        <div class="manyFurryBabies">
            <!-- 標題 -->
            <TitleAndLine :text="mytexttwo" :customStyle="parenttwoStyle" :linew="mylinew" />
            <!-- 卡片區 -->
            <div class="furryBabiesCardFrame">
                <div class="BabiesCard">
                    <IconCard />
                    <IconCard />
                    <IconCard />
                    <IconCard />
                    <IconCard />
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

/* 上方卡片區域 */
.furryBabiesCard {
    display: flex;
    flex-direction: row;
    padding: 0 0 6.8rem 1.5rem;
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
    padding: 0 3rem 0 4.6rem;
    margin: 4.6rem 0;
}

.manyFurryBabies {
    display: flex;
    flex-direction: column;
}

.furryBabiesCardFrame {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3.25rem;
}

.BabiesCard {
    display: flex;
    flex-direction: row;
    padding: 0 3.75rem;
    gap: 3.25rem;
}
</style>