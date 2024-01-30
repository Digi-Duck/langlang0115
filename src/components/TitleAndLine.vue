<script>
import IconLineAndSqure from './icons/IconLineAndSqure.vue';

export default {
    components: {
        IconLineAndSqure
    },
    props: {
        // 文字
        text: String,
        customStyle: Object,
        // 線長
        linew: String,
        // 文字大小
        textSize: String,
    },
}
</script>
<template>
    <div class="contactTitleArea">
        <div class="contactTitle" :style="customStyle">
            <span :fontSize="textSize">{{ text }}</span>
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