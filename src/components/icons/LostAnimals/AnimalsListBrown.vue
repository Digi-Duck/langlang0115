<script>
import IconCard from './IconCard.vue';
import IconChangeButton from '../IconChangeButton.vue'
import LostPopupBrown from './LostPopupBrown.vue';
import IconPaperAirplane from '../IconPaperAirplane.vue';

export default {
    components: { IconCard, IconChangeButton, LostPopupBrown, IconPaperAirplane },
    data() {
        return {
            show: false,
            // Button 上的文字
        }
    },
    methods: {
        showpopup() {
            this.show = true;
        },
        close() {
            this.show = false;
        },
    },
}
</script>

<template>
    <div class="all-container">
        <div class="btn">
            <IconChangeButton @click="showpopup" text="協尋通報" textColor="var(--gray-color)"
                bgColor="var(--orangeyellow-color)">
            </IconChangeButton>
            <a href="">
                <IconPaperAirplane />
                搜尋附近動物醫院
            </a>
            <!-- 顯示的彈跳視窗 -->
            <LostPopupBrown :is-show="show" @close="close"></LostPopupBrown>
        </div>
        <div class="list-container">
            <div class="title">遺失動物列表</div>
            <div class="cards">
                <IconCard class="card" cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)" />
                <IconCard class="card" cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)" />
                <IconCard class="card" cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)" />
                <IconCard class="card" cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)" />
                <IconCard class="card" cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)" />
                <IconCard class="card" cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)" />
                <IconCard class="card" cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)" />
                <IconCard class="card" cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)" />
                <IconCard class="card" cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)" />
                <IconCard class="card" cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)" />
                <IconCard class="card" cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)" />
                <IconCard class="card" cardBorderColor="var(--B68337)" checkBoxColor="var(--B68337)" />
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
    font-size: 1.5rem;
    font-family: 'ABeeZee';
}

.btn {
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}

a {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    color: var(--gray-color);
}

.list-container {
    width: 52.5rem;
    /* width: 840px; */
    /* height: 866px; */
    /* margin-bottom: 50px; */
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
    height: 52.5rem;
    overflow: scroll;
    border: 2px solid var(--B68337);
    border-radius: 0 0 30px 30px;
    padding: 30px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    background-color: var(--white-color);
}

.cards::-webkit-scrollbar {
    display: none;
}

.card {
    width: 15.6rem;
    height: 17.3rem;
}
</style>