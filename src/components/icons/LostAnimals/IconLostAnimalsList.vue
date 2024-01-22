<script>
import IconCard from './IconCard.vue';
import IconChangeButton from '../IconChangeButton.vue'
export default {
    components: { IconCard, IconChangeButton, }
}
</script>

<template>
    <div class="all-container">
        <div class="btn">
            按鈕
            <a href="">
                <img src="../src/assets/Image/LostImage/paperairplane.svg">
                搜尋附近動物醫院
            </a>
        </div>
        <div class="list-container">
            <div class="title">遺失動物列表</div>
            <div class="cards">
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
</template>
<style scoped>
.all-container {
    display: flex;
    flex-direction: column;
    gap: 0;
    font-size: 24px;
    font-family: 'ABeeZee';
}

.btn {
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    background-color: aqua;
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
    background-color: var(--primary-color);
    border-radius: 40px 40px 0 0;
}

.cards {
    height: 850px;
    overflow: hidden;
    overflow: scroll;
    border: 1px solid var(--primary-color);
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