<script>
</script>
<template>
    <div class="furryBabiesImage">
        <img src="../assets/Image/CardImage/CardCat.png" alt="">
        <!-- 愛心做Icon -->
        <!-- <IconHeart /> -->
        <img class="heart" src="../assets/Image/CardImage/IconHeart.svg" alt="">
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
    width: 4.8rem;
    height: 4.25rem;
    position: absolute;
    bottom: 1.8rem;
    left: 2.2rem;
}
</style>