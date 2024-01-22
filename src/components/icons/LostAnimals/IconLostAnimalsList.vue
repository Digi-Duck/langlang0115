<script>
import IconCard from './IconCard.vue';

export default {
    components: { IconCard }
}
</script>

<template>
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
        </div>
    </div>
</template>
<style scoped>
.list-container {
    width: 840px;
    height: 866px;
}

.title {
    font-size: 24px;
    letter-spacing: 6px;
    font-family: 'ABeeZee';
    text-align: center;
    padding: 14px 0;
    color: var(--white-color);
    background-color: var(--primary-color);
    border-radius: 40px 40px 0 0;
}

.cards {
    overflow: hidden;
    height: 810px;
    border: 1px solid var(--primary-color);
    border-radius: 0 0 30px 30px;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}
</style>