<script>
import IconCard from '@/components/icons/LostAnimals/IconCard.vue';

export default {
    components: {
        IconCard
    },
    props: {
        listTitleColor: String,  //列表的上方框
        listborderColor: String, //列表下框
        AnimalsData: Array,
    },
    data() {
        return {

        }
    },
    mounted() {
        // console.log(this.AnimalsData);
    },
}
</script>

<template>
    <div class="all-container">
        <div class="list-container">
            <div class="title" :style="{ backgroundColor: listTitleColor }">毛小孩列表</div>
            <div class="cards" :style="{ borderColor: listborderColor }">
                <IconCard class="card" v-for="animal in AnimalsData" :AnimalData="animal" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.all-container {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
}

.list-container {
    width: 840px;
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
    height: 840px;
    overflow: scroll;
    border: 2px solid var(--primary-color);
    border-radius: 0 0 30px 30px;
    padding: 30px 20px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    background-color: var(--white-color);
}

.cards::-webkit-scrollbar {
    display: none;
}

.card {
    width: 250px;
    height: 277px;
}

@media screen and (max-width:768px) and (min-width:376px) {
    .list-container {
        width: 640px;
    }

    .cards {
       justify-content: center;
        height: 851px;
        padding: 30px 26px;
        column-gap: 30px;
        row-gap: 20px;
    }
}
</style>