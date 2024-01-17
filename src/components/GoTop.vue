<script>
import IconGotop from './icons/IconGotop.vue';

export default {
    methods: {
        scrollToTop() {
            const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentPosition > 0) {
                // Smooth scroll animation
                window.requestAnimationFrame(this.scrollToTop);
                window.scrollTo(0, currentPosition - currentPosition / 10);
            }
        }
    },
    components: {
        IconGotop
    }
}
</script>
<template>
    <div id="goTop" @click="scrollToTop">
        <IconGotop></IconGotop>
    </div>
</template>
<style scoped>
#goTop {
    display: flex;
    width: 81.257px;
    height: 80.035px;
    z-index: 10;
    position: fixed;
    right: 8rem;
    bottom: 6rem;
}
</style>