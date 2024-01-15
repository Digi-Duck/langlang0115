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
    position: fixed;
    width: 0.8rem;
    height: 0.8rem;
}
</style>