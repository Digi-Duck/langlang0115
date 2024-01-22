<script>
export default {
    props: {
        title: String,
        color: String,
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
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="tabs">
            <div class="tab tab-left">撿到遺失動物</div>
            <div class="tab tab-right">我遺失了動物</div>
        </div>
        <div class="notice">
            <span>!請篩選您遺失的動物，確認是否已被重複登入</span>
        </div>
        <form>
            <div class="form-group">
                <label for="species">地區選擇 *</label>
                <div>下拉式選單(預計安裝套件)</div>
            </div>
            <div class="form-group">
                <label for="species">動物類別 *</label>
                <input type="radio" id="dog" value="犬" v-model="formData.species" name="animalType" />
                <label for="dog">犬</label>

                <input type="radio" id="cat" value="貓" v-model="formData.species" name="animalType" />
                <label for="cat">貓</label>

                <input type="radio" id="otherType" value="其他" v-model="formData.species" name="animalType" />
                <label for="otherType">其他</label>
            </div>

            <div class="form-group">
                <label for="body-shape">體型選擇 *</label>
                <input type="radio" id="large" value="大型" v-model="formData.bodyshape" name="bodyShape" />
                <label for="large">大型</label>

                <input type="radio" id="medium" value="中型" v-model="formData.bodyshape" name="bodyShape" />
                <label for="medium">中型</label>

                <input type="radio" id="small" value="小型" v-model="formData.bodyshape" name="bodyShape" />
                <label for="small">小型</label>
            </div>

            <div class="form-group">
                <label for="gender">性別選擇 *</label>
                <input type="radio" id="male" value="公" v-model="formData.gender" name="gender">
                <label for="male">公</label>
                <input type="radio" id="female" value="母" v-model="formData.gender" name="gender">
                <label for="female">母</label>
                <input type="radio" id="gender-unknown" value="未知" v-model="formData.gender" name="gender">
                <label for="gender-unknown">未知</label>
            </div>

            <div class="form-group">
                <label for="colors">花色選擇 *</label>
                <input type="radio" id="solidColor" value="純色" v-model="formData.colors" name="colorType" />
                <label for="solidColor">純色</label>

                <input type="radio" id="patternedColor" value="花色" v-model="formData.colors" name="colorType" />
                <label for="patternedColor">花色</label>

                <input type="radio" id="undefinedColor" value="未定義" v-model="formData.colors" name="colorType" />
                <label for="undefinedColor">未定義</label>
            </div>

            <div class="form-group">
                <label for="age">年齡選擇 *</label>
                <input type="radio" id="youngAge" value="幼年" v-model="formData.age" name="ageType" />
                <label for="youngAge">幼年</label>

                <input type="radio" id="adultAge" value="成年" v-model="formData.age" name="ageType" />
                <label for="adultAge">成年</label>

                <input type="radio" id="unknownAge" value="未知" v-model="formData.age" name="ageType" />
                <label for="unknownAge">未知</label>
            </div>

            <div class="form-group">
                <label for="neutered">是否已絕育 *</label>
                <input type="radio" id="neuteredYes" value="已絕育" v-model="formData.neutered" name="neuteredStatus" />
                <label for="neuteredYes">已絕育</label>

                <input type="radio" id="neuteredNo" value="未結紮" v-model="formData.neutered" name="neuteredStatus" />
                <label for="neuteredNo">未結紮</label>

                <input type="radio" id="neuteredUnknown" value="未知" v-model="formData.neutered" name="neuteredStatus" />
                <label for="neuteredUnknown">未知</label>
            </div>
            <div class="btn-area">
                <button @click.prevent="submitForm">清除重寫</button>
                <button @click.prevent="submitForm">搜尋</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.container {
    width: 700px;
    font-size: 24px;
    letter-spacing: 6px;
}

.tabs {
    display: flex;
}

.tab {
    border: 1px solid var(--primary-color);
    padding: 20px 40px;
}

.tab-left {
    background-color: var(--primary-color);
    border-radius: 30px 0 0 0;
    display: inline-block;
    color: var(--white-color);
}

.tab-right {
    border-radius: 0 30px 0 0;
    background-color: var(--white-color);
    color: var(--primary-color);
}

.notice {
    height: 80px;
    text-align: center;
    line-height: 80px;
    border: 1px solid var(--primary-color);
    background-color:var(--white-color);
    color: var(--primary-color);
}

/*根據顏色區分*/
form {
    display: flex;
    flex-direction: column;
    gap: 75px;
    background-color:var(--white-color);
    border: 1px solid var(--primary-color);
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
    color: var(--primary-color);
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