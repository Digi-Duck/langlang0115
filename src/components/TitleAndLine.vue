<script>
import IconLineAndSqure from './icons/IconLineAndSqure.vue';

export default {
    // data() {
    //     return {
    //         mylinew: '80rem',
    //     }
    // },
    props: {
        text: String,
        customStyle: Object,
        linew:String,
    },
    components: {
        IconLineAndSqure
    }
}
</script>
<template>
    <div class="contactTitleArea">
        <div class="contactTitle" :style="customStyle">
            <span>{{ text }}</span>
            <IconLineAndSqure :linewidth="linew" />
        </div>
    </div>
</template>
<style scoped>
.contactTitle {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0 1.5rem 0 0;
}

.contactTitle span {
    color: var(--primary-color);
    font-size: 36px;
    font-weight: 400;
    letter-spacing: 9px;
}
</style>