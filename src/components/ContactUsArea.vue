<script>
import ContactMsgScreen from './ContactMsgScreen.vue';
import IconChangeButton from './icons/IconChangeButton.vue';

export default {
    data() {
        return {
            selectedOption: null,
            // Button 上的文字
            mysubmit: "送 出",
            mybgcolor: 'var(--primary-color)',
            mytextcolor: 'var(--white-color)',
            myw: '7.8rem',
            myh: '3.5rem',
            // 進入畫面時 視窗關閉
            show: false,
        };
    },
    methods: {
        showPopup() {
            // 執行顯示視窗
            this.show = true;
            // 視窗開啟時scrollBar隱藏
            document.body.style.overflow = 'hidden';
        },
    },
    components: {
        IconChangeButton,
        ContactMsgScreen
    }
};
</script>
<template>
    <div class="contact">
        <div id="contactTitleArea">
            <div id="contactTitle">
                <span>聯絡我們</span>
                <div id="contactLine">
                    <div id="Line"></div>
                    <div id="squre"></div>
                </div>
            </div>
            <div id="contactText">
                <p> 收到訊息後客服部會依照順序逐一回覆唷！</p>
            </div>
        </div>
        <div id="inputArea">
            <div class="inputFrame">
                <div class="inputTitle">
                    <label>姓 名</label>
                </div>
                <input class="input" type=" text">
            </div>
            <div class="inputFrame">
                <div class="inputTitle">
                    <label>信 箱</label>
                </div>
                <input class="input" type=" text">
            </div>
            <div class="inputFrame">
                <div class="inputTitle">
                    <label>問 題</label>
                </div>
                <select v-model="selectedOption" class="input customSelect">
                    <option value="0">平台建議</option>
                    <option value="1">認養相關資訊</option>
                    <option value="2">問題回報</option>
                    <option value="3">其他</option>
                </select>
            </div>
            <div class="inputFrame">
                <div class="inputTitle">
                    <label>內 容</label>
                </div>
                <textarea class="detail" ref="input" autocomplete="off" name="text"></textarea>
            </div>
            <div class="sendArea">
                <!-- 關閉連結視窗 點擊事件顯示視窗-->
                <a href="javascript:void(0);" @click="showPopup">
                    <IconChangeButton :text="mysubmit" :textColor="mytextcolor" :bgColor="mybgcolor" :w="myw" :h="myh">
                    </IconChangeButton>
                </a>
                <!-- 顯示的視窗 -->
                <ContactMsgScreen :is-show="show" />
                <div class="remindText">
                    <p>或使用電子信箱與我們聯繫</p>
                    <div id="mymail">
                        <img src="../assets/Image/AboutPage2Image/email.svg" alt="mail">
                        <span>victor@langlangthing.com</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
a:hover {
    background-color: transparent;
}

.contact {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    max-width: 100%;
    font-style: normal;
}

/* 聯絡我們標題區 */
#contactTitleArea {
    display: flex;
    flex-direction: column;
}

/* 聯絡我們標題文字 */

#contactTitle {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 2.8rem 12.5rem 0 12.5rem;
}

#contactTitle span {
    color: var(--primary-color);
    font-size: 48px;
    font-weight: 400;
    letter-spacing: 12px;
}

/* Line */
#contactLine {
    display: flex;
    padding-left: 4rem;
}

#Line {
    width: 70rem;
    height: 2px;
    background-color: var(--primary-color);
}

#squre {
    width: 10px;
    height: 10px;
    background-color: var(--primary-color);
    transform: translate(0px, -3.5px) rotate(45deg);
}

/* 上方提醒內文 */
#contactText {
    width: 35.75rem;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 6px;
    margin: 0 12.5rem;
    color: #626262;
}

/* input區 */
#inputArea {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 7.5rem 12.6rem 0 12.6rem;
    row-gap: 3rem;
}

/* input框 */
.inputFrame {
    display: flex;
    flex-direction: row;
    width: 48rem;
    font-size: 1.5rem;
    line-height: normal;
    font-weight: 400;
}

/* input標題 */
.inputTitle {
    display: flex;
    width: 13.5rem;
    height: 3.6rem;
    padding: 0.9rem 0 1rem 0;
    justify-content: center;
    align-items: center;
    border-radius: 2.5rem 0 0 2.5rem;
    border: 1px solid var(--primary-color);
    background: var(--primary-color);
}

.inputTitle label {
    color: var(--white-color);
}

/* input輸入區 */
.input {
    font-size: 1.5rem;
    width: 35.3rem;
    border-radius: 0 2.5rem 2.5rem 0;
    border: 3px solid var(--primary-color);
    background: var(--white-color);
    outline: none;
}

/* 下拉選單箭頭設定 */
.customSelect {
    -webkit-animation: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url(../assets/Image/AboutPage2Image/select-vector.svg);
    background-position: 95% center;
    background-repeat: no-repeat;
    padding-right: 1rem;
}

/* input內容 */
.detail {
    font-size: 1.5rem;
    width: 35.3rem;
    border: 3px solid var(--primary-color);
    background: var(--white-color);
    outline: none;
    height: 14rem;
    border-radius: 0px 2.5rem 2.5rem 2.5rem;

}

.detail::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

.detail::-webkit-scrollbar-track {
    background-color: transparent;
}

.sendArea {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 11.25rem;
}

/* 下方文字區 */
.remindText {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;
    font-weight: 400;
    font-size: 1.5rem;
    color: #626262;
}

.remindText p {
    text-align: center;
    line-height: 291.6%;
    letter-spacing: 3.8px;
    text-decoration-line: underline;
}

#mymail {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}

#mymail span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24.4rem;
    height: 4.3rem;
    letter-spacing: 3.8px;
}
</style>