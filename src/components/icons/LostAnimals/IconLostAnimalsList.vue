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
                bgColor="var(--orangeyellow-color)">
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
                <IconCard />
                <IconCard />
                <IconCard />
                <IconCard />
                <IconCard />
                <IconCard />
                <IconCard />
                <IconCard />
                <IconCard />
                <IconCard />
                <IconCard />
                <IconCard />
            </div>
        </div>
    </div>
    <LostPopup />
</template>
<style scoped>
.all-container {
    display: flex;
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

.list-container {
    width: 840px;
    margin-bottom: 50px;
}

.title {
    letter-spacing: 6px;
    text-align: center;
    padding: 14px 0;
    color: var(--white-color);
    background-color: var(--olivegreen-color);
    border-radius: 40px 40px 0 0;
}

.cards {
    height: 850px;
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