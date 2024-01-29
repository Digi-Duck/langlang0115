<script>
import NoHoverButton from '@/components/NoHoverButton.vue';
import IconChangeButton from '../IconChangeButton.vue';
import IconCard from './IconCard.vue';
import IconPaperAirplane from '../IconPaperAirplane.vue';
import LostPopup from './LostPopup.vue';

export default {
    components: {
        NoHoverButton, IconChangeButton, IconCard, IconPaperAirplane, LostPopup
    },
    props: {
        frameBorder: String, //外框色
        noticeborder: String, //notice外框線色
        textColor: String, //地區選擇文字色
        colorPlan: String,// 地區下拉外框顏色
        strokeColor: String, //地區下拉顏色
        text: String,//notice文字
        bgColor: String, //搜尋按鈕的顏色
        listTitleColor: String,  //列表的上方框
        listborderColor: String, //列表下框
        AnimalsData: Array,
    },
    data() {
        return {
            show: false,  //彈跳視窗【協尋通報】
            formData: {
                species: '', // 動物類型
                location: "臺北市",// 地區選擇
                bodyshape: '', // 體型選擇
                gender: '', // 性別選擇
                colors: '', // 花色選擇
                age: '', // 年齡選擇
                neutered: '', // 是否已絕育
            },
        };
    },
    mounted() {
        // console.log(this.AnimalsData);
    },
    methods: {
        clearOptions() {
            // 重置所有選項
            this.formData.location = "臺北市";
            this.formData.species = "";
            this.formData.bodyshape = "";
            this.formData.gender = "";
            this.formData.colors = "";
            this.formData.age = "";
            this.formData.neutered = "";
        },
        search() {
            // 搜尋相關
            this.$emit('search', this.formData);
            // 這裡添加搜尋邏輯，發送API請求
        },
        // 彈跳視窗的功能
        showpopup() {
            this.show = true;
            document.body.style.overflow = 'hidden';
        },
        close() {
            this.show = false;
            // 視窗離開時scrollBar打開
            document.body.style.overflow = 'auto';
        },
    }
}
</script>

<template>
    <div class="big-container">
        <div class="frame-container">
            <div class="notice">
                <span>!請篩選您遺失的動物，確認是否已被重複登入</span>
            </div>
            <form :style="{ borderColor: frameBorder }">
                <div class="form-group">
                    <div class="select">
                        <label for="location" :style="{ color: textColor }">地區選擇 *</label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                            <path d="M12 2L7 7L12 2ZM7 7L2 2L7 7Z" fill="#7EA138" />
                            <path d="M12 2L7 7L2 2" stroke="#7EA138" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <select v-model="formData.location" class="customSelect" :style="{ borderColor: colorPlan }">
                            <option value="臺北市">臺北市</option>
                            <option value="新北市">新北市</option>
                            <option value="臺中市">臺中市</option>
                            <option value="高雄市">高雄市</option>
                        </select>
                    </div>
                </div>
                <!-- 動物類別 -->
                <div class="form-group">
                    <label for="species" :style="{ color: textColor }">動物類別 *</label>
                    <input type="radio" id="dog" value="犬" v-model="formData.species" name="animalType" />
                    <label for="dog">犬</label>

                    <input type="radio" id="cat" value="貓" v-model="formData.species" name="animalType" />
                    <label for="cat">貓</label>

                    <input type="radio" id="otherType" value="其他" v-model="formData.species" name="animalType" />
                    <label for="otherType">其他</label>
                </div>
                <!-- 體型選擇 -->
                <div class="form-group">
                    <label for="body-shape" :style="{ color: textColor }">體型選擇 *</label>
                    <input type="radio" id="large" value="大" v-model="formData.bodyshape" name="bodyShape" />
                    <label for="large">大型</label>

                    <input type="radio" id="medium" value="中" v-model="formData.bodyshape" name="bodyShape" />
                    <label for="medium">中型</label>

                    <input type="radio" id="small" value="小" v-model="formData.bodyshape" name="bodyShape" />
                    <label for="small">小型</label>
                </div>
                <!-- 性別選擇 -->
                <div class="form-group">
                    <label for="gender" :style="{ color: textColor }">性別選擇 *</label>
                    <input type="radio" id="male" value="公" v-model="formData.gender" name="gender">
                    <label for="male">公</label>
                    <input type="radio" id="female" value="母" v-model="formData.gender" name="gender">
                    <label for="female">母</label>
                    <input type="radio" class="brown-unnecessary" id="gender-unknown" value="both" v-model="formData.gender"
                        name="gender">
                    <label for="gender-unknown" class="brown-unnecessary">未知</label>
                </div>
                <!-- 花色選擇 -->
                <div class="form-group">
                    <label for="colors" :style="{ color: textColor }">花色選擇 *</label>
                    <input type="radio" id="solidColor" value="純色" v-model="formData.colors" name="colorType" />
                    <label for="solidColor">純色</label>

                    <input type="radio" id="patternedColor" value="花色" v-model="formData.colors" name="colorType" />
                    <label for="patternedColor">花色</label>

                    <input type="radio" class="brown-unnecessary" id="undefinedColor" value="both" v-model="formData.colors"
                        name="colorType" />
                    <label for="undefinedColor" class="brown-unnecessary">未定義</label>
                </div>
                <!-- 年齡選擇 -->
                <div class="form-group">
                    <label for="age" :style="{ color: textColor }">年齡選擇 *</label>
                    <input type="radio" id="youngAge" value="幼年" v-model="formData.age" name="ageType" />
                    <label for="youngAge">幼年</label>

                    <input type="radio" id="adultAge" value="成年" v-model="formData.age" name="ageType" />
                    <label for="adultAge">成年</label>

                    <input type="radio" class="brown-unnecessary" id="unknownAge" value="both" v-model="formData.age"
                        name="ageType" />
                    <label for="unknownAge" class="brown-unnecessary">未知</label>
                </div>
                <!-- 是否已絕育 -->
                <div class="form-group">
                    <label for="neutered" :style="{ color: textColor }">是否已絕育 *</label>
                    <input type="radio" id="neuteredYes" value="已絕育" v-model="formData.neutered" name="neuteredStatus" />
                    <label for="neuteredYes">已絕育</label>

                    <input type="radio" id="neuteredNo" value="未結紮" v-model="formData.neutered" name="neuteredStatus" />
                    <label for="neuteredNo">未結紮</label>

                    <input type="radio" class="brown-unnecessary" id="neuteredUnknown" value="未知"
                        v-model="formData.neutered" name="neuteredStatus" />
                    <label for="neuteredUnknown" class="brown-unnecessary">未知</label>
                </div>
                <div class="btn-area">
                    <NoHoverButton @click.prevent="clearOptions" btnbgColor="var(--gray-color)" text="清除重填"></NoHoverButton>
                    <IconChangeButton @click.prevent="search" bgColor="var(--olivegreen-color)" text="搜尋"
                        textColor="var(--white-color)">
                    </IconChangeButton>
                </div>
            </form>
        </div>
        <div class="list-container">
            <div class="btn">
                <IconChangeButton @click="showpopup" text="協尋通報" textColor="var(--gray-color)"
                    bgColor="var(--orangeyellow-color)" w="180px" h="64px">
                </IconChangeButton>
                <a href="">
                    <IconPaperAirplane />
                    搜尋附近動物醫院
                </a>
                <!-- 顯示的彈跳視窗 -->
                <LostPopup :is-show="show" @close="close"></LostPopup>
            </div>
            <div class="list-content">
                <div class="title" :style="{ backgroundColor: listTitleColor }">遺失動物列表</div>
                <div class="cards" :style="{ borderColor: listborderColor }">
                    <IconCard class="card" v-for="animal in AnimalsData" :AnimalData="animal"
                        cardBorderColor="var(--olivegreen-color)" checkBoxColor="var(--olivegreen-color)" />
                </div>
            </div>
            <LostPopup />
        </div>
    </div>
</template>

<style scoped>
.big-container {
    display: flex;
}

/* 左邊表格 */
.frame-container {
    width: 700px;
    margin-right: 48px;
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
    display: flex;
    flex-direction: column;
    background-color: var(--white-color);
    border: 2px solid var(--olivegreen-color);
    border-top: 0;
    padding: 30px 34px;
}


/*每個欄位的標題*/
label[for="species"],
label[for="location"],
label[for="body-shape"],
label[for="gender"],
label[for="colors"],
label[for="age"],
label[for="neutered"],

.time-place-title {
    color: var(--olivegreen-color);
}

.select {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 56px;
}

.form-group input {
    margin-left: 35px;
    margin-right: 20px;
}

/* 所有 radio 按鈕 */
.form-group input[type="radio"] {
    transform: scale(2);
}

/* 讓選項按鈕和文字對齊 */
.form-group label {
    vertical-align: middle;
    /* margin: 0; */
    font-size: 24px;
}


/* 下拉選單箭頭設定 */
.customSelect {
    -moz-appearance: none;
    appearance: none;
    font-size: 20px;
    width: 620px;
    border: 2px solid var(--olivegreen-color);
    border-radius: 4px;
    outline: none;
    margin-top: 1.5rem;
    padding: 20px;
    z-index: 1;
    background-color: transparent;
    cursor: pointer;
}

/* 下拉選單的小v圖 */
form svg {
    position: absolute;
    top: 25%;
    left: 39%;
}

/*按鈕*/
.btn-area {
    display: flex;
    justify-content: center;
    gap: 55px;
    font-size: 20px;
    letter-spacing: 5px;
    margin-bottom: 40px;
}

/* 右邊動物列表 */
.list-container {
    width: 840px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-size: 24px;
    font-family: 'ABeeZee';
}

.btn {
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

.list-content {
    display: flex;
    flex-direction: column;
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
    height: 851px;
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