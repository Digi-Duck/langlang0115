<script>
import CardClickLike from '@/components/CardClickLike.vue';

export default {
    components: {
        CardClickLike,
    },
}
</script>
<template>
    <div class="furryBabiesImage">
        <img src="../assets/Image/CardImage/CardCat.png" alt="">
        <CardClickLike class="heart"></CardClickLike>
    </div>
</template>
<style scoped>
.furryBabiesImage {
    display: flex;
    align-items: center;
    margin-right: 4.1rem;
    position: relative;
}

.furryBabiesImage img {
    width: 40.3rem;
    height: 33.3rem;
}

/* 卡片愛心 */
.furryBabiesImage .heart {
    position: absolute;
    bottom: 1.75rem;
    left: 2.1rem;
}
</style>