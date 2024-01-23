<script>
import IconCard from './IconCard.vue';
import IconChangeButton from '../IconChangeButton.vue'
import LostPopupBrown from './LostPopupBrown.vue';
export default {
    components: { IconCard, IconChangeButton, LostPopupBrown, },
    data() {
        return {
            show: false,
            // Button 上的文字
            mysubmit: "協尋通報",
            mybgcolor: 'var(--orangeyellow-color)',
            mytextcolor: 'var(--gray-color)',
            myw: '181px',
            myh: '64px',
        }
    },
    methods: {
        showpopup() {
            this.show = true;
        },
        close(){
            this.show = false;
        },
    },
}
</script>

<template>
    <div class="all-container">
        <div class="btn">
            <IconChangeButton @click="showpopup" :text="mysubmit" :textColor="mytextcolor" 
            :bgColor="mybgcolor" :w="myw" :h="myh">
           </IconChangeButton>
            <a href="">
                <img src="../src/assets/Image/LostImage/paperairplane.svg">
                搜尋附近動物醫院
            </a>
            <!-- 顯示的彈跳視窗 -->
            <LostPopupBrown :is-show="show" @close="close"></LostPopupBrown>
        </div>
        <div class="list-container">
            <div class="title">遺失動物列表</div>
            <div class="cards">
                <IconCard cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)"></IconCard>
                <IconCard cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)"></IconCard>
                <IconCard cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)"></IconCard>
                <IconCard cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)"></IconCard>
                <IconCard cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)"></IconCard>
                <IconCard cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)"></IconCard>
                <IconCard cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)"></IconCard>
                <IconCard cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)"></IconCard>
            </div>
        </div>
    </div>
    <LostPopup />
</template>
<style scoped>
.all-container {
    width: 840px;
    display: flex;
    flex-direction: column;
    gap: 0;
    font-size: 24px;
    font-family: 'ABeeZee';
}

.btn {
    width: 840px;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}

a {
    display: flex;
    align-items: center;
    gap: 2px;
    font-weight: 700;
    color: var(--gray-color);
}

.list-container {
    width: 840px;
    height: 866px;
    margin-bottom: 50px;
}

.title {
    letter-spacing: 6px;
    text-align: center;
    padding: 14px 0;
    color: var(--white-color);
    background-color: var(--B68337);
    border-radius: 40px 40px 0 0;
}

.cards {
    height: 850px;
    overflow: hidden;
    overflow: scroll;
    border: 2px solid var(--B68337);
    border-radius: 0 0 30px 30px;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    background-color: var(--white-color);
}
</style>