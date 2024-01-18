<script>

export default {

};
</script>
<template>
    <div class="contact">
        <div id="contactTitleArea">
            <div id="contactTitle">
                <span>連絡我們</span>
                <div id="contactLine">
                    <div id="Line"></div>
                    <div id="squre"></div>
                </div>

            </div>
            <div id="contactText">
                <p>收到訊息後客服部會依照順序逐一回覆唷！</p>
            </div>
        </div>
        <div id="inputArea">
            <div class="inputFrame">
                <div class="inputTitle">
                    <span>姓名</span>
                </div>
                <div class="input">
                    <input type=" text">
                </div>
            </div>
            <div class="inputFrame">
                <div class="inputTitle">
                    <span>信箱</span>
                </div>
                <div class="input">
                    <input type=" text">
                </div>
            </div>
            <div class="inputFrame">
                <div class="inputTitle">
                    <span>問題</span>
                </div>
                <div class="input select">
                    <select>
                        <option>平台建議</option>
                        <option>認養相關資訊</option>
                        <option>問題回報</option>
                        <option>其他</option>
                    </select>
                </div>
            </div>
            <div class="inputFrame">
                <div class="inputTitle">
                    <span>信箱</span>
                </div>
                <div class="input detail">
                    <input type=" text">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.contact {
    width: 100vw;
    max-width: 100%;
    height: 82.4375rem;
    background-color: lightblue;
}

#contactTitle span {
    color: var(--primary-color);
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 12px;
}
#contactLine{
    display: flex;
    
}
#Line {
    width: 70rem;
    height: 2px;
    background-color: var(--primary-color);
    stroke: var(--primary-color);
}
</style>