<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
import TitleAndLine from '@/components/TitleAndLine.vue';
import PetsCardImage from '@/components/PetsCardImage.vue';
import FundInfoFrame from '@/components/icons/LostAnimals/FundInfoFrame.vue';
export default {
    data() {
        return {
            
            // 分隔線設定
            mytext: "其他說明",
            mylinew: '80rem',
            parentStyle: {
                gap: '4rem',
            },
        };
    },
    components: {
        NavPage,
        FooterPage,
        TitleAndLine,
        PetsCardImage,
        FundInfoFrame,
    }
}
</script>
<template>
    <NavPage />
    <main>
        <div class="adoptionCenteTitle">
            <span>失散協尋</span>
            <p>> 遺失動物資訊</p>
        </div>
        <!-- 上方卡片區 -->
        <div class="furryBabiesCard">
            <!-- 卡片區圖 -->
            <PetsCardImage />
            <!-- 卡片區表格 -->
            <FundInfoFrame textColor="red"></FundInfoFrame>
        </div>
        <!-- 其他說明 -->
        <TitleAndLine :text="mytext" :customStyle="parentStyle" :linew="mylinew" />
        <pre class="instructionsText">
年紀大約11-12歲
愛滋貓
尾巴是短尾
全口已無牙齒
背後有一塊比較深的橘色/
</pre>
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

.instructionsText {
    width: 1431px;
    font-family: 'Inter';
    font-size: 24px;
    font-style: normal;
    white-space: pre-wrap;
    line-height: 59px;
    letter-spacing: 6px;
    margin-top: 4.6rem;
}
</style>