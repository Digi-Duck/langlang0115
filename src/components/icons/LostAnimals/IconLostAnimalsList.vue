<script>
import IconCard from './IconCard.vue';
import IconChangeButton from '../IconChangeButton.vue';
import LostPopup from './LostPopup.vue';
import IconPaperAirplane from '../IconPaperAirplane.vue';
export default {
    components: {
        IconCard, IconChangeButton, LostPopup, IconPaperAirplane
    },
    props: {
        listTitleColor: String,  //列表的上方框
        listborderColor: String, //列表下框
    },
    data() {
        return {
            show: false,
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
                bgColor="var(--orangeyellow-color)" w="11.3rem" h="4rem">
            </IconChangeButton>

            <a href="">
                <IconPaperAirplane />
                搜尋附近動物醫院
            </a>
            <!-- 顯示的彈跳視窗 -->
            <LostPopup :is-show="show" @close="close"></LostPopup>
        </div>
        <div class="list-container">
            <div class="title" :style="{ backgroundColor: listTitleColor }">遺失動物列表</div>
            <div class="cards" :style="{ borderColor: listborderColor }">
                <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                <IconCard />
                <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
            </div>
        </div>
    </div>
    <LostPopup />
</template>
<style scoped>
.all-container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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
    gap: 10px;
    font-weight: 700;
    color: var(--gray-color);
}

a:hover {
    background-color: transparent;
}

.list-container {
    display: flex;
    flex-direction: column;
    width: 52.5rem;
}

.title {
    letter-spacing: 6px;
    text-align: center;
    padding: 14px 0;
    color: var(--white-color);
    background-color: var(--olivegreen-color);
    border-radius: 40px 40px 0 0;
}

.cards::-webkit-scrollbar {
    display: none;
}

.cards {
    height: 53rem;
    overflow: hidden;
    overflow-y: scroll;
    border: 2px solid var(--olivegreen-color);
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