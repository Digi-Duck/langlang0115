<script>
import NoHoverButton from '@/components/NoHoverButton.vue';
import IconChangeButton from '../IconChangeButton.vue';
export default {
    components: { NoHoverButton, IconChangeButton, },
    props: {
        frameBorder: String, //外框色
        noticeborder: String, //notice外框線色
        textColor: String, //地區選擇文字色
        colorPlan: String,// 地區下拉外框顏色
        strokeColor: String, //地區下拉顏色
        text: String,//notice文字
    },
    data() {
        return {
            formData: {
                species: '', // 動物類型
                bodyshape: '', // 體型選擇
                gender: '', // 性別選擇
                colors: '', // 花色選擇
                age: '', // 年齡選擇
                neutered: '', // 是否已絕育
            },
        };
    },
    methods: {
        clearOptions() {
            // 重置所有選項
            this.selectedOption = "0";
            this.formData.species = "";
            this.formData.bodyshape = "";
            this.formData.gender = "";
            this.formData.colors = "";
            this.formData.age = "";
            this.formData.neutered = "";
        },
        search() {
            // 搜尋相關
            console.log("Performing search with the following data:", this.selectedOption, this.formData());
            // 這裡添加搜尋邏輯，發送API請求
        },
    }
}
</script>

<template>
    <div class="container">
        <div class="notice" :style="{ borderColor: noticeborder, color: textColor }">
            <span>{{ text }}</span>
        </div>
        <form :style="{ borderColor: frameBorder }">
            <div class="form-group">
                <div class="select">
                    <label for="species" :style="{ color: textColor }">地區選擇 *</label>
                    <svg class="iconselect" width="14" height="9" viewBox="0 0 14 9" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L7 7L2 2" :stroke="strokeColor" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <select v-model="selectedOption" class="customSelect" :style="{ borderColor: colorPlan }">
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

            <div class="form-group">
                <label for="body-shape" :style="{ color: textColor }">體型選擇 *</label>
                <input type="radio" id="large" value="大型" name="bodyShape" />
                <label for="large">大型</label>

                <input type="radio" id="medium" value="中型" v-model="formData.bodyshape" name="bodyShape" />
                <label for="medium">中型</label>

                <input type="radio" id="small" value="小型" v-model="formData.bodyshape" name="bodyShape" />
                <label for="small">小型</label>
            </div>

            <div class="form-group">
                <label for="gender" :style="{ color: textColor }">性別選擇 *</label>
                <input type="radio" id="male" value="公" v-model="formData.gender" name="gender">
                <label for="male">公</label>
                <input type="radio" id="female" value="母" v-model="formData.gender" name="gender">
                <label for="female">母</label>
                <input type="radio" id="gender-unknown" value="未知" v-model="formData.gender" name="gender">
                <label for="gender-unknown">未知</label>
            </div>

            <div class="form-group">
                <label for="colors" :style="{ color: textColor }">花色選擇 *</label>
                <input type="radio" id="solidColor" value="純色" v-model="formData.colors" name="colorType" />
                <label for="solidColor">純色</label>

                <input type="radio" id="patternedColor" value="花色" v-model="formData.colors" name="colorType" />
                <label for="patternedColor">花色</label>

                <input type="radio" id="undefinedColor" value="未定義" v-model="formData.colors" name="colorType" />
                <label for="undefinedColor">未定義</label>
            </div>

            <div class="form-group">
                <label for="age" :style="{ color: textColor }">年齡選擇 *</label>
                <input type="radio" id="youngAge" value="幼年" v-model="formData.age" name="ageType" />
                <label for="youngAge">幼年</label>

                <input type="radio" id="adultAge" value="成年" v-model="formData.age" name="ageType" />
                <label for="adultAge">成年</label>

                <input type="radio" id="unknownAge" value="未知" v-model="formData.age" name="ageType" />
                <label for="unknownAge">未知</label>
            </div>

            <div class="form-group">
                <label for="neutered" :style="{ color: textColor }">是否已絕育 *</label>
                <input type="radio" id="neuteredYes" value="已絕育" v-model="formData.neutered" name="neuteredStatus" />
                <label for="neuteredYes">已絕育</label>

                <input type="radio" id="neuteredNo" value="未結紮" v-model="formData.neutered" name="neuteredStatus" />
                <label for="neuteredNo">未結紮</label>

                <input type="radio" id="neuteredUnknown" value="未知" v-model="formData.neutered" name="neuteredStatus" />
                <label for="neuteredUnknown">未知</label>
            </div>
            <div class="btn-area">
                <NoHoverButton @click.prevent="clearOptions" btnbgColor="var(--gray-color)" text="清除重填" ></NoHoverButton>
                <IconChangeButton @click.prevent="search" bgColor="var(--olivegreen-color)" text="搜尋" textColor="var(--white-color)">
                </IconChangeButton>
            </div>
        </form>
    </div>
</template>

<style scoped>
.container {
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
    padding: 20px;
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
</style>