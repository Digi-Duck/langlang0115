<script>
import IconCard from '@/components/icons/LostAnimals/IconCard.vue';
import IconChangeButton from '@/components/icons/IconChangeButton.vue';
import IconPaperAirplane from '@/components/icons/IconPaperAirplane.vue';

export default {
    props: {
        listTitleColor: String,  //列表的上方框
        listborderColor: String, //列表下框
    },
    data() {
        return {
            mytext: "前往送養",
            mytextColor: "var(--gray-color)",
            mybgColor: "var(--orangeyellow-color) ",
            myw: "11.3rem",
            myh: "4rem",
        }
    },
    methods: {
        formadoptionPage() {
            this.$router.push('/formpageadoption');
        },
    },
    components: {
        IconCard, IconChangeButton, IconPaperAirplane
    },
}
</script>

<template>
    <div class="all-container">
        <div class="btn">
            <IconChangeButton @click="formadoptionPage" :text="mytext" :textColor="mytextColor" :bgColor="mybgColor"
                :w="myw" :h="myh" />
            <a href="">
                <IconPaperAirplane />
                搜尋附近動物醫院
            </a>
        </div>
        <div class="list-container">
            <div class="title" :style="{ backgroundColor: listTitleColor }">毛小孩列表</div>
            <div class="cards" :style="{ borderColor: listborderColor }">
                <IconCard class="card" />
                <IconCard class="card" />
                <IconCard class="card" />
                <IconCard class="card" />
                <IconCard class="card" />
                <IconCard class="card" />
                <IconCard class="card" />
                <IconCard class="card" />
                <IconCard class="card" />
                <IconCard class="card" />
                <IconCard class="card" />
                <IconCard class="card" />
            </div>
        </div>
    </div>
</template>
<style scoped>
a:hover {
    background-color: transparent;
}

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
    margin-bottom: 1.5rem;
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
    /* overflow: hidden; */
    overflow: scroll;
    border: 2px solid var(--primary-color);
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