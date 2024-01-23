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
        }
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
            <img src="../assets/Image/LostImage/arrow.svg">
            <div class="tabs">
                    <!--   tab group -->
                    <input type="radio" id="tab-1" name="tab" checked="checked">
                    <label for="tab-1" class="tab-left">撿到遺失動物</label>
                    <div class="info-1">                        <div class="tab-content">

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
                            <IconLostFrame frameBorder="var(--B68337)" noticeborder="var(--B68337)" textColor="var(--B68337)">
                            </IconLostFrame>
                            <AnimalsListBrown />
                        </div>
                    </div>
                </div>
                <!--   tab group end -->
        </div>
        <!-- 失散協尋>撿到遺失動物（暫放） -->
        <GreenButton :showSvg="false" @click="goToFoundAnimalForm">確認前往：<br>撿到遺失動物</GreenButton>
        <!-- 失散協尋>我遺失了動物（暫放） -->
        <GreenButton :showSvg="false" @click="goToMyLostForm">確認前往：<br>我遺失了動物</GreenButton>
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

.content img {
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
.info-1, .info-2{
    display: none;
    order: 1;
}

/* 頁籤的內容 */
.tab-content {
    display: flex;
    gap: 68px;
}
</style>