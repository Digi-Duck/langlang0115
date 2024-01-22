<script>
export default {

}
</script>
<template>
    <div class="contactLine">
        <div class="line"></div>
        <div class="squre"></div>
    </div>
</template>
<style scoped>
.contactLine {
    display: flex;
}

.line {
    width: 80rem;
    height: 2px;
    background-color: var(--primary-color);
}

.squre {
    width: 10px;
    height: 10px;
    background-color: var(--primary-color);
    transform: translate(0px, -3.5px) rotate(45deg);
}
</style>