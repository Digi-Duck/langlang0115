<script>
import FooterPage from '@/components/FooterPage.vue';
import GreenButton from '@/components/GreenButton.vue';
import NavPage from '@/components/NavPage.vue';
import IconLostAnimalsList from '@/components/icons/LostAnimals/IconLostAnimalsList.vue';
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
        IconLostFrame
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
            <IconLostFrame class="frame" />
            <IconLostAnimalsList class="list" />
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.content img{
position: absolute;
top: -3.8%;
left: 36%;
}
</style>