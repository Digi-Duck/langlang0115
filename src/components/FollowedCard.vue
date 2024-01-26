<script>
import CardClickLike from './CardClickLike.vue';
export default {
    components: { CardClickLike },
}
</script>
<template>
    <div class="card">
        <CardClickLike class="heart"></CardClickLike>
    </div>
</template>
<style scoped>
.card {
    width: 300px;
    height: 300px;
    border: 15px solid var(--primary-color);
    border-radius: 70px;
    background-image: url(../assets/Image/LostImage/lostdog.svg);
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: end;
    position: relative;
    top: 0;
    left: 0;
}
.card:nth-child(3)::before,.card:nth-child(8)::before{
    content: "已送養";
    color: var(--white-color);
    font-size: 32px;
    text-align: center;
    line-height: 235px;
    letter-spacing: 6px;
    width: 300px;
    height: 300px;
    background-color: rgba(37, 37, 37, 0.6);
    border: 15px solid #B7B7B7;
    border-radius: 70px;
    position: absolute;
    top: -15px;
    left: -15px;
}

.heart {
    transform: scale(0.6);
}
</style>