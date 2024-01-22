
<template>
    <div class="card-container">
        <div class="card-ccontent">
            <div class="image">
                <p class="check">查看詳細資訊</p>
            </div>
            <div class="text">
                <span>建立時間 : 2023/12/10</span>
                <br>
                <span>上次更新 : 2024/01/10</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-ccontent {
    width: 250px;
    height: 277px;
    border: 1px solid var(--primary-color);
    border-radius: 30px;
    padding: 19px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.image {
    width: 200px;
    height: 200px;
    background-image: url(../src/assets/Image/LostImage/lost.svg);
    background-repeat: no-repeat;
    margin-bottom: 17px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    color: var(--white-color);
    font-size: 16px;
    font-family: 'ABeeZee';
}

.check {
    background-color: var(--primary-color);
    padding: 8px 0;
    opacity: 0.8;
}

.text {
    font-size: 12px;
    font-family: 'ABeeZee';
    letter-spacing: 2px;
    text-align: center;
    color: var(--gray-color);
}
</style>