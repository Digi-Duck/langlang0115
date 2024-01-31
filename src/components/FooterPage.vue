
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
    height: 116px;
    z-index: 5;
    border-radius: 5px 5px 0 0;
    background-color: var(--primary-color);
}

.dogcat {
    z-index: 1;
    position: relative;
}

.dog {
    position: absolute;
    top: -138px;
    left: 83px;
}

.cat {
    position: absolute;
    top: -130px;
    right: 83px;
}

.footer {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
}

@media (max-width: 1280px) {
    .footer {
        height: 100px;
    }
}

@media (max-width: 768px) {
    .dog {
        position: absolute;
        top: -128px;
        left: 0px;
        transform: scale(0.8);
    }

    .cat {
        position: absolute;
        top: -127px;
        right: 0px;
        transform: scale(0.8);
    }

    .footer-container {
        height: 89px;
    }
    .footer{
        padding: 24px 140px;
    }

    .footer span {
        font-size: 16px;
        letter-spacing: 4px;
    }
}

@media (max-width: 375px) {
    .footer-container {
        height: 87px;
    }

    .dog {
        position: absolute;
        top: -108px;
        left: -60px;
        transform: scale(0.4);
    }

    .cat {
        position: absolute;
        top: -120px;
        right: -40px;
        transform: scale(0.4);
    }

    .footer-container {
        height: 89px;
    }
    .footer{
        padding: 24px 34px;
        border-radius: 20px 20px 0 0;
    }

    .footer span {
        font-size: 12px;
        letter-spacing: 3px;
    }
}
</style>