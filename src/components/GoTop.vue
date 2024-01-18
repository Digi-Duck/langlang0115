<script>
import IconGotop from './icons/IconGotop.vue';

export default {
    data() {
        return {
            showGoTop: false,
        };
    },
    methods: {
        scrollToTop() {
            const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentPosition > 0) {
                // Smooth scroll animation
                window.requestAnimationFrame(this.scrollToTop);
                window.scrollTo(0, currentPosition - currentPosition / 10);
            }
        },
        handleScroll() {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            console.log(scrollPosition);
            if (scrollPosition > 500) {
                this.showGoTop = true;
            } else {
                this.showGoTop = false;
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    components: {
        IconGotop,
    },
};
</script>
<template>
    <div id="goTop" @click="scrollToTop" v-if="showGoTop">
        <IconGotop></IconGotop>
    </div>
</template>

<style scoped>
#goTop {
    display: flex;
    width: 81.257px;
    height: 80.035px;
    z-index: 5;
    position: fixed;
    right: 5rem;
    bottom: 16rem;
    cursor: pointer;
    opacity: 0.9;
    transform: opacity 0.3s ease;
}

#goTop:hover {
    opacity: 1;
}
</style>