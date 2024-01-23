<script>
export default {

}
</script>
<template>
    <div class="fiveStepsLineFrame">
        <div class="group">
            <div class="circle"></div>
            <div class="stepsLine"></div>
            <div class="triangle"></div>
        </div>
        <div class="group">
            <div class="triangle"></div>
            <div class="stepsLine"></div>
            <div class="triangle"></div>
        </div>
        <div class="group">
            <div class="triangle"></div>
            <div class="stepsLine"></div>
            <div class="triangle"></div>
        </div>
        <div class="group">
            <div class="triangle"></div>
            <div class="stepsLine"></div>
            <div class="circle"></div>
        </div>
    </div>
</template>
<style scoped>
.fiveStepsLineFrame {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 25px;
}

.group {
    display: flex;
    align-items: center;
    flex-direction: row;
}

.circle {
    display: flex;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: var(--primary-color);
}

.stepsLine {
    display: flex;
    background-color: var(--primary-color);
    width: 300px;
    height: 4px;
    padding-left: 50px;
    z-index: 0;
}

.triangle::before {
    content: '';
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 25px solid var(--primary-color);
    display: inline-block;
    position: absolute;
    top: -15px;
    z-index: 2;
}

.triangle {
    display: flex;
    position: relative;
}
</style>