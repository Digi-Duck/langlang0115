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
    <main>

        <h2>{{ title }}</h2>
        <form>
            <div class="form-group">
                    <div class="custom-file-upload">
                        <span class="photo-title">照片 *</span>
                        <label for="photo">
                            <img src="../assets/Image/SponsorImage/entypo_image.svg"><span>上傳照片</span></label>
                        <!-- 將[傳送檔案]的樣式opacity -->
                        <input type="file" id="photo" accept="image/*" @change="handleFileUpload" />
                    </div>
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
                <label for="chip-id">晶片號碼</label>
                <input type="text" id="chip-id" v-model="formData.chipid" />
            </div>

            <div class="form-group">
                <label for="body-shape">體型 *</label>
                <input type="radio" id="large" value="大型" v-model="formData.bodyshape" name="bodyShape" />
                <label for="large">大型</label>

                <input type="radio" id="medium" value="中型" v-model="formData.bodyshape" name="bodyShape" />
                <label for="medium">中型</label>

                <input type="radio" id="small" value="小型" v-model="formData.bodyshape" name="bodyShape" />
                <label for="small">小型</label>
            </div>

            <div class="form-group">
                <label for="gender">性別 *</label>
                <input type="radio" id="male" value="公" v-model="formData.gender" name="gender">
                <label for="male">公</label>
                <input type="radio" id="female" value="母" v-model="formData.gender" name="gender">
                <label for="female">母</label>
                <input type="radio" id="gender-unknown" value="未知" v-model="formData.gender" name="gender">
                <label for="gender-unknown">未知</label>
            </div>

            <div class="form-group">
                <label for="colors">花色 *</label>
                <input type="radio" id="solidColor" value="純色" v-model="formData.colors" name="colorType" />
                <label for="solidColor">純色</label>

                <input type="radio" id="patternedColor" value="花色" v-model="formData.colors" name="colorType" />
                <label for="patternedColor">花色</label>

                <input type="radio" id="undefinedColor" value="未定義" v-model="formData.colors" name="colorType" />
                <label for="undefinedColor">未定義</label>
            </div>

            <div class="form-group">
                <label for="age">年齡 *</label>
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

            <div class="form-group time-place">
                <div class="time-place-title">發現浪浪之時間和地點 *</div>
                <div class="time-place-text">
                    <label for="time" hidden></label>
                    <input type="text" id="time" v-model="formData.time" placeholder="年/月/日">

                    <label for="place" hidden></label>
                    <input type="text" id="place" v-model="formData.place" placeholder="請填寫地點">

                    <label for="description"></label>
                    <input type="text" id="description" v-model="formData.description">
                    <span>更多詳細地點描述</span>
                </div>
            </div>


            <div class="form-group contact-area">
                <label for="phone">聯絡方式 *</label>
                <div class="phone-area">
                    <input type="text" id="phone" v-model="formData.phone">
                    <span>EX.手機號碼:0912345678</span>
                </div>

            </div>

            <div class="form-group">
                <label for="other">其他說明</label>
                <!-- <input type="text" id="other" v-model="formData.other"> -->
                <textarea id="other" v-model="formData.other"></textarea>
            </div>
            <div class="btn-area">
                <button @click.prevent="submitForm">重新填寫</button>
                <button @click.prevent="submitForm">提交</button>
            </div>
        </form>

    </main>
</template>

<style scoped>
/*根據顏色區分*/
form {
    background-color: rgb(251, 247, 208);
    display: flex;
    flex-direction: column;
    font-size: 24px;
    letter-spacing: 6px;
    font-weight: 400;
    width: 100%;
    padding: 50px 300px
}

.custom-file-upload {
    position: relative;
    display: inline-block;
    display: flex;
}

.custom-file-upload label {
    background-color: #ffffff;
    border: 2px solid green;
    border-radius: 4px;
    color: green;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}

.custom-file-upload input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
    display: flex;
}

.custom-file-upload::after {
    content: '預覽照片';
    position: absolute;
    top: 0;
    right: 0;
    color: var(--white-color);
    width: 529px;
    height: 477px;
    text-align: center;
    line-height: 477px;
    float: right;
    background-color: #D8D8D8;
}

label[for="photo"]{
    display: flex;
    width: 200px;
    height: 56px;
    justify-content: space-around;
    align-items: center;
}

.form-group {
    margin-bottom: 52px;
    color: var(--gray-color);
    font-size: 24px;
    font-weight: 400;
}

/*每個欄位的標題*/
.photo-title,
label[for="photo"],
label[for="species"],
label[for="chip-id"],
label[for="body-shape"],
label[for="gender"],
label[for="colors"],
label[for="age"],
label[for="neutered"],
label[for="time"],
label[for="phone"],
label[for="other"],
.time-place-title {
    color: var(--primary-color);
    margin-right: 36px;
}

.form-group input {
    margin: 0px 17px;
}

/* 所有 radio 按鈕 */
.form-group input[type="radio"] {
    transform: scale(2);
}

/* 讓選項按鈕和文字對齊 */
.form-group label {
    vertical-align: middle;
}


/* 發現浪浪之時間和地點 */
.time-place {
    display: flex;
}

.time-place-text {
    display: flex;
    flex-wrap: wrap;
    height: 112px;
    width: 60%;
    gap: 5px;
}

.time-place-text span,
.phone-area span {
    font-size: 16px;
    margin-left: 20px;
    letter-spacing: 4px;
}

/*聯絡方式*/
.contact-area {
    display: flex;
}

.phone-area {
    display: flex;
    flex-direction: column;
}


/*設定每個input樣式*/
input#chip-id {
    width: 535px;
    height: 56px;
}

input#time {
    width: 221px;
    height: 56px;
}

input#place {
    width: 351px;
    height: 56px;
}

input#description {
    width: 610px;
    height: 56px;
}

input#phone {
    width: 298px;
    height: 56px;
}

#other {
    width: 785px;
    height: 115px;
    overflow: auto;
    resize: both;
    font-size: 24px;
}

/*其他說明的輸入欄*/
.form-group textarea {
    vertical-align: top;
}


/* 設定 所有input 文字大小 */
.form-group input[type="text"] {
    font-size: 24px;
}

/*按鈕*/
.btn-area {
    display: flex;
    margin: auto;
    gap: 55px;
}
</style>