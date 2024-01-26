
<template>
    <div class="footer-container">
        <div class="dogcat">
            <div class="dog">
                <img src="../assets/Image/HomeImage/HomeD-dog and paw.svg">
            </div>
            <div class="cat">
                <img src="../assets/Image/HomeImage/HomeD-cat and paw.svg">
            </div>
        </div>
        <div class="footer">
            <span>隱私權政策Copyright © 2019 - 2024 浪浪的事. All Rights Reserved.</span>
        </div>
    </div>
</template>

<style scoped>
.footer-container {
    width: 100vw;
    max-width: 100%;
    z-index: 5;
}

.dogcat {
    z-index: 1;
    position: relative;
}

.dog {
    position: absolute;
    bottom: -35px;
    left: 83px;
    transform: rotate(-4deg);
}

.cat {
    position: absolute;
    bottom: -100px;
    right: 83px;
}

.footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    border-radius: 5px 5px 0 0;
    color: white;
    font-size: 18px;
    height: 116px;
}
</style>