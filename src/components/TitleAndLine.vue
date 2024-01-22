<script>
import IconLineAndSqure from './icons/IconLineAndSqure.vue';

export default {
    props: {
        text: String,
        customStyle:Object,
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
            <IconLineAndSqure />
        </div>
    </div>
</template>
<style scoped>
.contactTitle {
    display: flex;
    align-items: center;
    flex-direction: row;

    /* gap: 4rem; */
    padding: 0 1.5rem 0 1.5rem;
}

.contactTitle span {
    color: var(--primary-color);
    font-size: 36px;
    font-weight: 400;
    letter-spacing: 9px;
}
</style>