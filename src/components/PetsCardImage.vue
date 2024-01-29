<script>
import CardClickLike from '@/components/CardClickLike.vue';

export default {
    components: {
        CardClickLike,
    },
    props: {
        AnimalData: Object, //單一動物資料
    },
    methods: {
        favoriteAnimal() {
            this.$emit("favoriteAnimal");
        }
    }
}
</script>
<template>
    <div class="furryBabiesImage">
        <div class="img" :style="{ backgroundImage: 'url(' + AnimalData.path + '),url(src/assets/Image/DogPawGreen.svg)' }">
        </div>
        <CardClickLike class="heart" @favorite="favoriteAnimal"></CardClickLike>
    </div>
</template>
<style scoped>
.furryBabiesImage {
    display: flex;
    align-items: center;
    margin-right: 4.1rem;
    position: relative;
}

.img {
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