<script>
import IconCard from './IconCard.vue';
import IconChangeButton from '../IconChangeButton.vue';
import LostPopup from './LostPopup.vue';
import IconPaperAirplane from '../IconPaperAirplane.vue';
export default {
    components: {
        IconCard, IconChangeButton, LostPopup, IconPaperAirplane
    },
    props: {
        listTitleColor: String,  //列表的上方框
        listborderColor: String, //列表下框
    },
    data() {
        return {
            show: false,
        }
    },
    methods: {
        showpopup() {
            this.show = true;
            document.body.style.overflow = 'hidden';

        },
        close() {
            this.show = false;
            // 視窗離開時scrollBar打開
            document.body.style.overflow = 'auto';
        },
    },
}
</script>

<template>
    <div class="bigbox">
        <div class="lostframe">
            <div class="framecontainer">
                <div class="notice"><span>!請篩選您遺失的動物，確認是否已被重複登入</span></div>
            </div>
            <form>
                <div class="form-group">
                    <div class="select">
                        <label for="species">地區選擇 *</label>
                        <svg class="iconselect" width="14" height="9" viewBox="0 0 14 9" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L7 7L2 2" :stroke="strokeColor" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <select v-model="selectedOption" class="customSelect">
                            <option value="0">臺北市</option>
                            <option value="1">新北市</option>
                            <option value="2">臺中市</option>
                            <option value="3">高雄市</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="species" :style="{ color: textColor }">動物類別 *</label>
                    <input type="radio" id="dog" value="犬" v-model="formData.species" name="animalType" />
                    <label for="dog">犬</label>

                    <input type="radio" id="cat" value="貓" v-model="formData.species" name="animalType" />
                    <label for="cat">貓</label>

                    <input type="radio" id="otherType" value="其他" v-model="formData.species" name="animalType" />
                    <label for="otherType">其他</label>
                </div>
               

            </form>
        </div>
        <div class="animalslist">
            <div class="all-container">
                <div class="btn">
                    <IconChangeButton @click="showpopup" text="協尋通報" textColor="var(--gray-color)"
                        bgColor="var(--orangeyellow-color)" w="11.3rem" h="4rem">
                    </IconChangeButton>

                    <a href="">
                        <IconPaperAirplane />
                        搜尋附近動物醫院
                    </a>
                    <!-- 顯示的彈跳視窗 -->
                    <LostPopup :is-show="show" @close="close"></LostPopup>
                </div>
                <div class="list-container">
                    <div class="title" :style="{ backgroundColor: listTitleColor }">遺失動物列表</div>
                    <div class="cards" :style="{ borderColor: listborderColor }">
                        <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                        <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                        <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                        <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                        <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                        <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                        <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                        <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                        <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                        <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                        <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                        <IconCard cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                    </div>
                </div>
            </div>
            <LostPopup />
        </div>
    </div>
</template>
<style scoped>
.bigbox {
    display: flex;
}

/* 左半邊區塊-篩選器 */
.lostframe {
    width: 700px;
    background-color: aquamarine;
}

.lostframe-container {
    font-size: 24px;
    letter-spacing: 6px;
}

.notice {
    height: 80px;
    text-align: center;
    line-height: 80px;
    border: 2px solid var(--olivegreen-color);
    background-color: var(--white-color);
    color: var(--olivegreen-color);
}

/*根據顏色區分*/
form {
    height: 800px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    background-color: var(--white-color);
    border: 2px solid var(--olivegreen-color);
    border-top: 0;
    padding: 60px 34px 32px;
    background: var(--white-color);
}


/*每個欄位的標題*/
.photo-title,
label[for="species"],
label[for="body-shape"],
label[for="gender"],
label[for="colors"],
label[for="age"],
label[for="neutered"],

.time-place-title {
    color: var(--olivegreen-color);
    margin-right: 36px;
}

.select {
    display: flex;
    flex-direction: column;
    gap: 0;
}

.form-group input {
    margin: 0 17px;
}

/* 所有 radio 按鈕 */
.form-group input[type="radio"] {
    transform: scale(2);
}

/* 讓選項按鈕和文字對齊 */
.form-group label {
    vertical-align: middle;
    margin: 0;
    font-size: 24px;
    background-color: blue;
}


/* 下拉選單箭頭設定 */
.customSelect {
    -moz-appearance: none;

    appearance: none;
    font-size: 20px;
    width: 620px;
    height: 56px;
    border: 2px solid var(--olivegreen-color);
    border-radius: 4px;
    outline: none;
    margin-top: 1.5rem;
    padding-left: 10px;
    z-index: 1;
    background-color: transparent;
    cursor: pointer;
}

/* 下拉選單的小v圖 */
.iconselect {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 26%;
    left: 38%;
    color: #000;
}

/*按鈕*/
.btn-area {
    display: flex;
    margin: auto;
    gap: 55px;
    font-size: 20px;
    letter-spacing: 5px;
}

/* 右半邊區塊-動物列表 */
.all-container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-size: 24px;
    font-family: 'ABeeZee';
}

.btn {
    width: 840px;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

a {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    color: var(--gray-color);
}

a:hover {
    background-color: transparent;
}

.list-container {
    display: flex;
    flex-direction: column;
    width: 840px;
    height: 907px;
}

.title {
    letter-spacing: 6px;
    text-align: center;
    padding: 14px 0;
    color: var(--white-color);
    background-color: var(--olivegreen-color);
    border-radius: 40px 40px 0 0;
}

.cards::-webkit-scrollbar {
    display: none;
}

.cards {
    height: 53rem;
    overflow: hidden;
    overflow-y: scroll;
    border: 2px solid var(--olivegreen-color);
    border-radius: 0 0 30px 30px;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    background-color: var(--white-color);
}
</style>