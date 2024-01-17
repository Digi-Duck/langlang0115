<script>
import IconCarouselFrame from '../components/icons/IconCarouselFrame.vue';


export default {
    data() {
        return {
            frame: new URL('@/assets/Image/CarouselImage/carouselframe.svg', import.meta.url).href,
            slides: [
                new URL('@/assets/Image/CarouselImage/beagledog.svg', import.meta.url).href,
                new URL('@/assets/Image/CarouselImage/orangecat.svg', import.meta.url).href,
                new URL('@/assets/Image/CarouselImage/goldendog.svg', import.meta.url).href,
                new URL('@/assets/Image/CarouselImage/tabbycat.svg', import.meta.url).href,
                new URL('@/assets/Image/CarouselImage/taiwandog.svg', import.meta.url).href,
            ],
            currentIndex: 0,
            intervalId: null,
            timer: 0,
        };
    },
    mounted() {
        this.starAutoplay();
        // 計時器
        setInterval(() => {
            this.timer += 0.5
        }, 16)
    },
    beforeDestroy() {
        this.stopAutoplay();
    },
    methods: {
        prev() {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        },
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
            if(this.currentIndex === 0){
                // 重置
                this.$refs.carouselFrame.style.transition = 'none';
            }
        },
        // 自動/停止播放
        starAutoplay() {
            this.intervalId = setInterval(() => {
                this.next();
            }, 1500);
        },
        stopAutoplay() {
            clearInterval(this.intervalId);
        },
    },
    // 重複播放
    // directives: {
    //     repeat: {
    //         mounted(el, binding) {
    //             const repeatCount = parseInt(binding.value) || 1;
    //             el.addEventListener('animationiteration', () => {
    //                 if (--repeatCount > 0) {
    //                     el.style.animation = 'none';
    //                     void el.offsetWidth;
    //                     el.animation = null;
    //                 }
    //             })
    //         }
    //     }
    // },
    components: {
        IconCarouselFrame
    }
};
</script>
<template>
    <div class="carouselshow">
        <div class="slideshow">
            <div class="carousel" v-for="img in slides" :style="{ transform: 'translateX(' + timer * -1 + '%)' }">
                <IconCarouselFrame :framePath="frame" :imgPath="img"></IconCarouselFrame>
            </div>
        </div>
    </div>
</template>
<style scoped>
.carouselshow {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 3.125rem 6.875rem;
}

.slideshow {
    display: flex;
    align-items: center;
    background-color: transparent;
    gap: 5rem;
    width: 105rem;
}
</style>