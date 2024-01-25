<script>
import NoHoverButton from '@/components/NoHoverButton.vue';
import IconChangeButton from '../IconChangeButton.vue';
export default {
    components: { NoHoverButton, IconChangeButton },
    props: {
        frameBorder: String, //外框色
        noticeborder: String, //notice外框線色
        textColor: String, //地區選擇文字色
        bgColorplan:String,// 地區下拉顏色
    },
    data() {
        return {
            formData: {
                name: '',
                species: '',
            },
        };
    },
    methods: {
        submitForm() {
            //處理表單邏輯
            // console.log("表單提交");
        },
    }
}
</script>

<template>
    <div class="container">
        <div class="notice" :style="{ borderColor: noticeborder, color: textColor }">
            <span>!請篩選您遺失的動物，確認是否已被重複登入</span>
        </div>
        <form :style="{ borderColor: frameBorder }">
            <div class="form-group">
                <div class="group select">
                    <label for="species" :style="{ color: textColor,bgcolor:bgColorplan }">地區選擇 *</label>
                    <select v-model="selectedOption" class="input customSelect">
                        <option value="0">臺北市</option>
                        <option value="1">新北市</option>
                        <option value="2">臺中市</option>
                        <option value="3">高雄市</option>
                    </select>
                </div>
                <!-- <label for="species" :style="{ color: textColor }">地區選擇 *</label>
                <div>下拉式選單(預計安裝套件)</div> -->
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
                <input type="radio" id="large" value="大型" v-model="formData.bodyshape" name="bodyShape" />
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
                <NoHoverButton @click.prevent="submitForm" btnbgColor="var(--gray-color)" text="清除重寫"></NoHoverButton>
                <IconChangeButton @click.prevent="submitForm" bgColor="var(--olivegreen-color)" text="搜尋"
                    textColor="var(--white-color)"></IconChangeButton>
            </div>
        </form>
    </div>
</template>

<style scoped>
.container {
    font-size: 24px;
    letter-spacing: 6px;
    width: 700px;
    height: 62.5rem;
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

.input {
    font-size: 20px;
    width: 620px;
    height: 56px;
    border: 2px solid var(--olivegreen-color);
    border-radius: 4px;
    background: var(--white-color);
    outline: none;
    margin-top: 1.5rem;
    padding: 20px;
}

/* 下拉選單箭頭設定 */
.customSelect {
    -webkit-animation: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url(../src/assets/Image/LostImage/selcet.svg);
    background-position: 95% center;
    background-repeat: no-repeat;
    padding-right: 1rem;
}

/*按鈕*/
.btn-area {
    display: flex;
    margin: auto;
    gap: 55px;
    font-size: 20px;
    letter-spacing: 5px;
}</style>