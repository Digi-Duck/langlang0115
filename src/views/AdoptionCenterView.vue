<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
import TitleAndLine from '@/components/TitleAndLine.vue';
import IconChangeButton from '@/components/icons/IconChangeButton.vue';
import IconLostAnimalsList from '@/components/icons/LostAnimals/IconLostAnimalsList.vue';
import IconLostFrame from '@/components/icons/LostAnimals/IconLostFrame.vue';

export default {
    data() {
        return {
            mysubmit: "毛小孩資訊",
            mytexttwo: "尋找心目中的毛小孩",
            mybgcolor: 'var(--primary-color)',
            mytextcolor: 'var(--white-color)',
            myw: '12.5rem',
            myh: '4rem',
            mylinew: '80rem',
            parenttwoStyle: {
                gap: '0.5rem',
            }
        }
    },
    methods: {
        petinformationPage() {
            this.$router.push('/adoptionpetinformation');
        }
    },
    components: {
        NavPage,
        FooterPage,
        IconChangeButton,
        TitleAndLine,
        IconLostFrame,
        IconLostAnimalsList
    },
}
</script>
<template>
    <NavPage />
    <main>
        <div class="adoptionCenterArea">
            <!-- 標題 -->
            <div class="adoptionTitle">
                <span>認養中心</span>
                <p>
                    Adoption
                    <br>
                    Center
                </p>
            </div>
            <!-- 五步驟組合 -->
            <!-- components FiveStepsToAdoption -->
            <div class="fiveStepsToAdoption">
                <div class="fiveStepsTitle">
                    <span>認養五步驟</span>
                </div>
                <!-- Icon圖形繪製 -->
                <!-- components/Icon IconFiveStepsLineFrame-->
                <div class="fiveStepsLineFrame">
                    <div class="group">
                        <div class="circle"></div>
                        <div class="stepsLine"></div>
                        <div class="triangle"></div>
                    </div>
                    <div class="group">
                        <div class="triangle"></div>
                        <div class="stepsLine"></div>
                        <div class="triangle"></div>
                    </div>
                    <div class="group">
                        <div class="triangle"></div>
                        <div class="stepsLine"></div>
                        <div class="triangle"></div>
                    </div>
                    <div class="group">
                        <div class="triangle"></div>
                        <div class="stepsLine"></div>
                        <div class="circle"></div>
                    </div>
                </div>
                <div class="fiveStepsText">
                    <p>閱讀認養須知</p>
                    <p>尋找心目中的毛孩</p>
                    <p>聯絡刊登的送養人，<br>了解毛小孩情況</p>
                    <p>實際與毛小孩互動並於<br>完成寵物登記的變更。</p>
                    <p>帶毛小孩回家</p>
                </div>
            </div>

            <!-- 尋找心目中的毛小孩 -->
            <div class="lookingForLikepets">
                <TitleAndLine :text="mytexttwo" :customStyle="parenttwoStyle" :linew="mylinew" />
                <!-- 認養中心搜尋卡片組件 -->
                <!-- components/adoptioncenter/LikePetsSearch -->
                <div class="likepetsCards" style="display: flex; flex-direction: row;">
                    <IconLostFrame />
                    <div class="petsInormationForm" style="display: flex; flex-direction: column;">
                        <IconChangeButton :text="mysubmit" @click="petinformationPage" :textColor="mytextcolor"
                            :bgColor="mybgcolor" :w="myw" :h="myh"></IconChangeButton>
                        <IconLostAnimalsList />
                    </div>

                </div>
            </div>
        </div>
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
}
</style>