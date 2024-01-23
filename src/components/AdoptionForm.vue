<script>
import NoHoverButton from './NoHoverButton.vue';
import IconChangeButton from './icons/IconChangeButton.vue';

export default {
    props: {
        title: String, //此表單的名稱
        inputTitleColor: String, //每個欄位的標題
        inputTextBorder: String, //輸入欄文字
        uploadPicBorder: String, //上傳照片的border
        svgColor: String, // 上傳照片的 SVG 顏色
        uploadPicColor: String, //上傳照片的文字
        submitBgColor: String, //送出按鈕
        popStyle: String //彈跳視窗
    },
    data() {
        return {
            formData: {
                name: '',
                species: '',
                chipid: '',
                bodyshape: '',
                gender: '',
                colors: '',
                age: '',
                neutered: '',
                time: '',
                place: '',
                description: '',
                phone: '',
                other: '',
            },
            mysubmit: "送出",
            w: "125px",
            h: '54px',
            textColor: "#fff",
            submitbgColor: "#52A038",
            confirmClear: false, // 用於確認是否清空的標誌
            myinnertext: "清除重填",
            mybtnbgColor: "#626262",
            //對話框內按鈕
            clearbtntext: "確認重填",
            clearbtnbg: '#52A038',
            cancelbtntext: "返回修改",
            cancelbtnbg: '#626262'
        };
    },
    methods: {
        submitForm() {
            //處理表單邏輯
            // console.log("表單提交");
        },
        //點擊清除重填按鈕
        showConfirmation() {
            // 顯示確認框
            this.confirmClear = true;
        }, cancelConfirmation() {
            // 關閉確認框，不清空表單
            this.confirmClear = false;
        },
        clearFormBtn() {
            // 如果 confirmClear 是 true，則清空表單
            if (this.confirmClear) {
                this.formData = {
                    name: '',
                    species: '',
                    chipid: '',
                    bodyshape: '',
                    gender: '',
                    colors: '',
                    age: '',
                    neutered: '',
                    time: '',
                    place: '',
                    description: '',
                    phone: '',
                    other: '',
                };
                // 重置 confirmClear 為 false
                this.confirmClear = false;
            }
        }
    },
    components: { NoHoverButton, IconChangeButton }
}
</script>

<template>
    <div class="adoptionCenteTitle">
        <span>認養中心</span>
        <p> > </p>
        <p>毛小孩詳細資訊</p>
    </div>

    <form>
        <div class="form-group">
            <div class="custom-file-upload">
                <span class="photo-title" :style="{ color: inputTitleColor }">照片 *</span>
                <label for="photo" :style="{ borderColor: uploadPicBorder }">
                    <!-- 上傳照片前面的svg -->
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="entypo:image" clip-path="url(#clip0_847_5412)">
                            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd"
                                d="M26.6 2.7998H1.4C1.0287 2.7998 0.672601 2.9473 0.410051 3.20986C0.1475 3.47241 0 3.8285 0 4.1998L0 23.7998C0 24.1711 0.1475 24.5272 0.410051 24.7898C0.672601 25.0523 1.0287 25.1998 1.4 25.1998H26.6C26.9713 25.1998 27.3274 25.0523 27.59 24.7898C27.8525 24.5272 28 24.1711 28 23.7998V4.1998C28 3.8285 27.8525 3.47241 27.59 3.20986C27.3274 2.9473 26.9713 2.7998 26.6 2.7998ZM25.2 22.3998H2.8V5.5998H25.2V22.3998ZM20.041 15.2276L15.5176 17.4746L10.2396 8.9332L5.6 19.5998H22.4L20.041 15.2276ZM18.55 12.5998C19.0141 12.5998 19.4592 12.4154 19.7874 12.0872C20.1156 11.7591 20.3 11.3139 20.3 10.8498C20.3 10.3857 20.1156 9.94056 19.7874 9.61237C19.4592 9.28418 19.0141 9.0998 18.55 9.0998C18.0859 9.0998 17.6408 9.28418 17.3126 9.61237C16.9844 9.94056 16.8 10.3857 16.8 10.8498C16.8 11.3139 16.9844 11.7591 17.3126 12.0872C17.6408 12.4154 18.0859 12.5998 18.55 12.5998Z"
                                :fill="svgColor" />
                        </g>
                        <defs>
                            <clipPath id="clip0_847_5412">
                                <rect width="28" height="28" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span :style="{ color: uploadPicColor }">上傳照片</span></label>
                <!-- 將[傳送檔案]的樣式opacity -->
                <input type="file" id="photo" accept="image/*" @change="handleFileUpload" />
            </div>
        </div>

        <div class="form-group">
            <label for="species" :style="{ color: inputTitleColor }">動物類別 *</label>
            <input type="radio" id="dog" value="犬" v-model="formData.species" name="animalType" />
            <label for="dog">犬</label>

            <input type="radio" id="cat" value="貓" v-model="formData.species" name="animalType" />
            <label for="cat">貓</label>

            <input type="radio" id="otherType" value="其他" v-model="formData.species" name="animalType" />
            <label for="otherType">其他</label>
        </div>


        <div class="form-group">
            <label for="chip-id" :style="{ color: inputTitleColor }">晶片號碼</label>
            <input type="text" id="chip-id" v-model="formData.chipid" :style="{ border: inputTextBorder }" />
        </div>

        <div class="form-group">
            <label for="body-shape" :style="{ color: inputTitleColor }">體型 *</label>
            <input type="radio" id="large" value="大型" v-model="formData.bodyshape" name="bodyShape" />
            <label for="large">大型</label>

            <input type="radio" id="medium" value="中型" v-model="formData.bodyshape" name="bodyShape" />
            <label for="medium">中型</label>

            <input type="radio" id="small" value="小型" v-model="formData.bodyshape" name="bodyShape" />
            <label for="small">小型</label>
        </div>

        <div class="form-group">
            <label for="gender" :style="{ color: inputTitleColor }">性別 *</label>
            <input type="radio" id="male" value="公" v-model="formData.gender" name="gender">
            <label for="male">公</label>
            <input type="radio" id="female" value="母" v-model="formData.gender" name="gender">
            <label for="female">母</label>
            <input type="radio" id="gender-unknown" value="未知" v-model="formData.gender" name="gender">
            <label for="gender-unknown">未知</label>
        </div>

        <div class="form-group">
            <label for="colors" :style="{ color: inputTitleColor }">花色 *</label>
            <input type="radio" id="solidColor" value="純色" v-model="formData.colors" name="colorType" />
            <label for="solidColor">純色</label>

            <input type="radio" id="patternedColor" value="花色" v-model="formData.colors" name="colorType" />
            <label for="patternedColor">花色</label>

            <input type="radio" id="undefinedColor" value="未定義" v-model="formData.colors" name="colorType" />
            <label for="undefinedColor">未定義</label>
        </div>

        <div class="form-group">
            <label for="age" :style="{ color: inputTitleColor }">年齡 *</label>
            <input type="radio" id="youngAge" value="幼年" v-model="formData.age" name="ageType" />
            <label for="youngAge">幼年</label>

            <input type="radio" id="adultAge" value="成年" v-model="formData.age" name="ageType" />
            <label for="adultAge">成年</label>

            <input type="radio" id="unknownAge" value="未知" v-model="formData.age" name="ageType" />
            <label for="unknownAge">未知</label>
        </div>

        <div class="form-group">
            <label for="neutered" :style="{ color: inputTitleColor }">是否已絕育 *</label>
            <input type="radio" id="neuteredYes" value="已絕育" v-model="formData.neutered" name="neuteredStatus" />
            <label for="neuteredYes">已絕育</label>

            <input type="radio" id="neuteredNo" value="未結紮" v-model="formData.neutered" name="neuteredStatus" />
            <label for="neuteredNo">未結紮</label>

            <input type="radio" id="neuteredUnknown" value="未知" v-model="formData.neutered" name="neuteredStatus" />
            <label for="neuteredUnknown">未知</label>
        </div>

        <div class="form-group contact-area">
            <label for="phone" :style="{ color: inputTitleColor }">聯絡方式 *</label>
            <div class="phone-area">
                <input type="text" id="phone" v-model="formData.phone" :style="{ border: inputTextBorder }">
                <span>請留下手機號碼或電子信箱</span>
            </div>

        </div>

        <div class="form-group">
            <label for="other" :style="{ color: inputTitleColor }">其他說明</label>
            <textarea id="other" v-model="formData.other" :style="{ border: inputTextBorder }"></textarea>
        </div>

        <div class="btn-area">
            <!-- 清除重填按鈕 -->
            <NoHoverButton @click.prevent="showConfirmation" :text="myinnertext" :btnbgColor="mybtnbgColor">
            </NoHoverButton>
            <!-- 送出按鈕 -->
            <IconChangeButton :text="mysubmit" @click.prevent="submitForm" :style="{
                color: textColor, backgroundColor: submitBgColor, width: w, height: h
            }"></IconChangeButton>


            <!-- 重填確認框 -->
            <div v-if="confirmClear" class="confirmation-modal">
                <div class="container" :style="{ borderColor: popStyle }">
                    <div>
                        <img src="/src/assets/Image/AboutPage2Image/message-dogpaw.svg" alt="msg">
                    </div>
                    <div class="text">
                        <span>是否清除重填？</span>
                    </div>
                    <div class="btns">
                        <NoHoverButton @click="cancelConfirmation" :text="cancelbtntext" :btnbgColor="cancelbtnbg">
                        </NoHoverButton>
                        <NoHoverButton @click="clearFormBtn" :text="clearbtntext" :btnbgColor="clearbtnbg">
                        </NoHoverButton>
                    </div>
                </div>
            </div>

        </div>
    </form>
</template>

<style scoped>
main {
    width: 100vw;
    max-width: 100%;
}

/* 標題 */
.adoptionCenteTitle {
    display: flex;
    flex-direction: row;
    padding-bottom: 4.8rem;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 12px;
}

.adoptionCenteTitle span {
    color: var(--primary-color);
}

.adoptionCenteTitle p {
    color: #D7D7D7;
}

/* 表單 */
form {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    letter-spacing: 6px;
    font-weight: 400;
    padding: 0 6rem 0 11.8rem;
}

.custom-file-upload {
    position: relative;
    display: inline-block;
    display: flex;
}


/*自訂上傳照片按鈕*/
.custom-file-upload label {
    background-color: #ffffff;
    border: 2px solid green;
    border-radius: 4px;
    padding: 30px 15px;
    border-radius: 5px;
    cursor: pointer;
}

/*傳送檔案預設樣式隱藏*/
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

label[for="photo"] {
    display: flex;
    width: 200px;
    height: 56px;
    justify-content: space-around;
    align-items: center;
}

.form-group {
    margin-bottom: 52px;
    color: #000;
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
    margin-right: 36px;
}

.form-group input,
select {
    margin: 0px 17px;
    /*border: 2px solid var(--primary-color);*/
    border-radius: 4px;
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

#time::placeholder {
    text-align: center;
    color: #b1b1b1;
    letter-spacing: 6px;
}



.time-place-text span,
.phone-area span {
    font-size: 16px;
    margin-left: 20px;
    letter-spacing: 4px;
    color: var(--gray-color)
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


select#place {
    width: 257px;
    height: 56px;
    letter-spacing: 6px;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    color: #b1b1b1;
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
    border: 2px solid var(--primary-color);
    border-radius: 4px;
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



/*確認是否清除*/
.confirmation-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    background: rgba(255, 255, 255, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    font-size: 24px;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 550px;
    height: 409px;
    background-color: var(--white-color);
    /*border: 2px solid var(--primary-color);*/
    border-width: 2px;
    border-style: solid;
    /*border-color: aqua;*/
    border-radius: 30px;
    gap: 42px;
}

.text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.content {
    font-size: 16px;
    color: var(--gray-color);
}

.btns {
    display: flex;
    gap: 38px;
}

.btn {
    width: 155px;
    height: 65px;
    font-size: 20px;
    letter-spacing: 5px;
}

.btn-white {
    background-color: var(--white-color);
    color: var(--gray-color);
    border: 1px solid var(--gray-color);
}
</style>

