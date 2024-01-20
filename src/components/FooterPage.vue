
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

<style>

.footer-container{
    width: 100vw;
    max-width :100%;
    height: 310px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.dogcat {
    z-index: 1;
    position: relative;
}
.dog{
    position: absolute;
    top: 27px;
    left: 83px;
}
.cat{
    position: absolute;
    top: 35px;
    right: 83px;
}
.footer {
    background-color:var(--primary-color);
    width: 100%;
    border-radius: 20px 20px 0 0;
    color: white;
    font-size: 18px;
    padding: 58px 0px;
    text-align: center;
}
</style>