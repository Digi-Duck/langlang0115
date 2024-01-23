<script>
import NoHoverButton from '@/components/NoHoverButton.vue';
import IconChangeButton from '@/components/icons/IconChangeButton.vue';
export default {
    props: {
        frameBorder: String, //外框色
        noticeborder: String, //notice外框線色
        textColor: String, //文字色
    },
    data() {
        return {
            // 圖
            isHovered: false,
            formData: {
                name: '',
                species: '',
            },
            mybgColor: "var(--primary-color)",
            mytext: "搜尋",
            mytextColor: "var(--white-color)",
            myw: "125px",
            myh: "54px",
        };
    },
    methods: {
        submitForm() {
            //處理表單邏輯
            // console.log("表單提交");
        },
        // 顯示圖
        showIcon() {
            this.isHovered = true;
        },
        // 隱藏圖
        hideIcon() {
            this.isHovered = false;
        },
    },
    components: {
        NoHoverButton, IconChangeButton
    },
}
</script>

<template>
    <div class="container">
        <div class="notice" :style="{ borderColor: noticeborder, color: textColor }" @mouseover="showIcon"
            @mouseleave="hideIcon">
            <!-- 做按鈕 -->
            <div class="adoptionGuidelines">
                <img src="@\assets\Image\DogPawGreen.svg" alt="Icon" v-if="isHovered" class="icon">
                <span>請先閱讀認養須知</span>
                <img src="@\assets\Image\DogPawGreen.svg" alt="Icon" v-if="isHovered" class="icon">
            </div>
        </div>
        <form :style="{ borderColor: frameBorder }">
            <div class="form-group">
                <div class="group select">
                    <label for="species" :style="{ color: textColor }">地區選擇 *</label>
                    <select v-model="selectedOption" class="input customSelect">
                        <option value="0">臺北市</option>
                        <option value="1">新北市</option>
                        <option value="2">臺中市</option>
                        <option value="3">高雄市</option>
                    </select>
                </div>

            </div>
            <!-- 動物類別 -->
            <div class="form-group">
                <label for="species" :style="{ color: textColor }">動物類別 *</label>
                <div class="group">
                    <input type="radio" id="dog" value="犬" v-model="formData.species" name="animalType" />
                    <label for="dog">犬</label>
                </div>
                <div class="group">
                    <input type="radio" id="cat" value="貓" v-model="formData.species" name="animalType" />
                    <label for="cat">貓</label>
                </div>
                <div class="group">
                    <input type="radio" id="otherType" value="其他" v-model="formData.species" name="animalType" />
                    <label for="otherType">其他</label>
                </div>
            </div>
            <!-- 體型選擇 -->
            <div class="form-group">
                <label for="body-shape" :style="{ color: textColor }">體型選擇 *</label>
                <div class="group">
                    <input type="radio" id="large" value="大型" v-model="formData.bodyshape" name="bodyShape" />
                    <label for="large">大型</label>
                </div>
                <div class="group">
                    <input type="radio" id="medium" value="中型" v-model="formData.bodyshape" name="bodyShape" />
                    <label for="medium">中型</label>
                </div>
                <div class="group">
                    <input type="radio" id="small" value="小型" v-model="formData.bodyshape" name="bodyShape" />
                    <label for="small">小型</label>
                </div>
            </div>
            <!-- 性別選擇 -->
            <div class="form-group">
                <label for="gender" :style="{ color: textColor }">性別選擇 *</label>
                <div class="group">
                    <input type="radio" id="male" value="公" v-model="formData.gender" name="gender">
                    <label for="male">公</label>
                </div>
                <div class="group">
                    <input type="radio" id="female" value="母" v-model="formData.gender" name="gender">
                    <label for="female">母</label>
                </div>
                <div class="group">
                    <input type="radio" id="gender-unknown" value="未知" v-model="formData.gender" name="gender">
                    <label for="gender-unknown">未知</label>
                </div>
            </div>
            <!-- 花色選擇 -->
            <div class="form-group">
                <label for="colors" :style="{ color: textColor }">花色選擇 *</label>
                <div class="group">
                    <input type="radio" id="solidColor" value="純色" v-model="formData.colors" name="colorType" />
                    <label for="solidColor">純色</label>
                </div>
                <div class="group">
                    <input type="radio" id="patternedColor" value="花色" v-model="formData.colors" name="colorType" />
                    <label for="patternedColor">花色</label>
                </div>
                <div class="group">
                    <input type="radio" id="undefinedColor" value="未定義" v-model="formData.colors" name="colorType" />
                    <label for="undefinedColor">未定義</label>
                </div>

            </div>
            <!-- 年齡選擇 -->
            <div class="form-group">
                <label for="age" :style="{ color: textColor }">年齡選擇 *</label>
                <div class="group">
                    <input type="radio" id="youngAge" value="幼年" v-model="formData.age" name="ageType" />
                    <label for="youngAge">幼年</label>
                </div>
                <div class="group">
                    <input type="radio" id="adultAge" value="成年" v-model="formData.age" name="ageType" />
                    <label for="adultAge">成年</label>
                </div>
                <div class="group">
                    <input type="radio" id="unknownAge" value="未知" v-model="formData.age" name="ageType" />
                    <label for="unknownAge">未知</label>
                </div>
            </div>
            <!-- 是否已絕育 -->
            <div class="form-group">
                <label for="neutered" :style="{ color: textColor }">是否已絕育 *</label>
                <div class="group">
                    <input type="radio" id="neuteredYes" value="已絕育" v-model="formData.neutered" name="neuteredStatus" />
                    <label for="neuteredYes">已絕育</label>
                </div>
                <div class="group">
                    <input type="radio" id="neuteredNo" value="未結紮" v-model="formData.neutered" name="neuteredStatus" />
                    <label for="neuteredNo">未結紮</label>
                </div>
                <div class="group">
                    <input type="radio" id="neuteredUnknown" value="未知" v-model="formData.neutered" name="neuteredStatus" />
                    <label for="neuteredUnknown">未知</label>
                </div>
            </div>
            <!-- 按鈕 -->
            <div class="btn-area">
                <NoHoverButton @click.prevent="submitForm" btnbgColor="var(--gray-color)" text="清除重寫"></NoHoverButton>
                <IconChangeButton @click.prevent="submitForm" :text="mytext" :textColor="mytextColor" :bgColor="mybgColor"
                    :w="myw" :h="myh">
                </IconChangeButton>
            </div>
        </form>
    </div>
</template>

<style scoped>
/* 下拉式選單 */
.input {
    font-size: 1.5rem;
    width: 38.75rem;
    height: 3.5rem;
    border: 2px solid var(--primary-color);
    background: var(--white-color);
    outline: none;
    margin-top: 1.5rem;
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

.container {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    letter-spacing: 6px;
    width: 43.75rem;
    height: 61.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

/* 請先閱讀認養須知 */

.notice {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    border: 2px solid var(--primary-color);
    background-color: var(--white-color);
    color: var(--primary-color);
}

.notice span {
    text-align: center;
    margin: 0 2px 1px 8px;
}

.notice:hover {
    cursor: pointer;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--white-color);
}

.notice:hover .icon {
    animation: ChangeIcon 0.5s ease;
}

@keyframes ChangeIcon {
    0% {
        opacity: 0;
        gap: 10px;
    }

    100% {
        opacity: 1;
        gap: 10px;
    }
}

.icon {
    width: 1.5rem;
    height: 1.3rem;
}

/* 表單整區 根據顏色區分*/
form {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    background-color: var(--white-color);
    border: 2px solid var(--primary-color);
    border-top: 0;
    padding: 3rem 2.5rem;
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
    color: var(--primary-color);
    margin-right: 36px;
}

/* 表單 */
.form-group input {
    margin: 0 1.25rem;
}

.form-group {
    display: flex;
    flex-direction: row;
}

.group {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.select {
    display: flex;
    flex-direction: column;
    gap: 0;
}

/* 所有 radio 按鈕 */
.form-group input[type="radio"] {
    transform: scale(1.5);
}

/* 讓選項按鈕和文字對齊 */
.form-group label {
    vertical-align: middle;
    margin: 0;
}

/*按鈕*/
.btn-area {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 27px;
    font-size: 20px;
    letter-spacing: 5px;
}
</style>