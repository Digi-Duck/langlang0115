<script>
import DataSubmitted from '@/components/DataSubmitted.vue';
import FooterPage from '@/components/FooterPage.vue';
import MemberPrivacyPopup from '@/components/MemberPrivacyPopup.vue';
import NavPage from '@/components/NavPage.vue';

export default {
    components: {
        NavPage,
        FooterPage,
        DataSubmitted,
        MemberPrivacyPopup
    },
    data() {
        return {
            formData: {
                name: '', // 姓名
                email: "",// 電子信箱
                phone: '', // 手機號碼
                password: '', // 密碼
                checkpassword: '', // 確認密碼
                check: "",// 隱私權政策
            },
            // 進入畫面時 視窗關閉
            showRegister: false,
            showPrivacy: false,
        }
    },
    methods: {
        register() {
            // console.log(this.formData.password, this.formData.checkpassword)
            if (this.formData.password != this.formData.checkpassword) {
                alert("兩次輸入密碼不一致");
            } else {
                localStorage.setItem('user', JSON.stringify(this.formData));
                this.showPopup();
            }
        },
        showPopup() {
            // 執行顯示視窗
            this.showRegister = true;
            // 視窗開啟時scrollBar隱藏
            document.body.style.overflow = 'hidden';
        },
        showPrivacyPopup() {
            this.showPrivacy = true;
            // 視窗開啟時scrollBar隱藏
            document.body.style.overflow = 'hidden';
        },
        closePopup() {
            // 執行關閉視窗
            this.showPrivacy = false;
            // 視窗開啟時scrollBar打開
            document.body.style.overflow = 'auto';
        },
    },
}
</script>
<template>
    <NavPage />
    <main>
        <div class="container">
            <form action="" @submit.prevent="register">
                <div class="title">會員註冊</div>
                <div class="contentbox">
                    <div class="group">
                        <label>姓名</label>
                        <input type="text" placeholder="王曉明" v-model="formData.name" required>
                    </div>
                    <div class="group">
                        <label>電子信箱</label>
                        <input type="email" placeholder="請輸入您的電子信箱" v-model="formData.email" required>
                    </div>
                    <div class="group">
                        <label>手機號碼</label>
                        <input type="tel" placeholder="0912321123" v-model="formData.phone" required>
                    </div>
                    <div class="group">
                        <label>密碼</label>
                        <input type="password" placeholder="須設定至少8個字元" v-model="formData.password" required minlength="8">
                    </div>
                    <div class="group">
                        <label>確認密碼</label>
                        <input type="password" v-model="formData.checkpassword" required>
                    </div>
                </div>
                <div class="other">
                    <input type="checkbox" v-model="formData.check" required>
                    <span>我已閱讀，並同意遵守《<u class="privacy" @click="showPrivacyPopup">隱私權政策與會員服務條款</u>》</span>
                </div>
                <button class="signup" type="submit">註冊</button>
            </form>
            <DataSubmitted :isShowSub="showRegister" myFillColor="#52A038" myTextColor="#52A038" textSize="2.25rem"
                submitResult="註冊成功！" submitText="系統將自動跳轉回登入頁面。" submitBtnText="返回登入畫面" submitBtnColor="#52A038"
                myurl="/memberlogin"></DataSubmitted>
        </div>
        <MemberPrivacyPopup v-show="showPrivacy" @close="closePopup"></MemberPrivacyPopup>
    </main>
    <FooterPage />
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 109px 0 74px;
}

.container {
    width: 900px;
    height: 700px;
    background-image: url(../assets/Image/MemberImage/SignUpBg.svg);
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 46px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
    font-family: 'ABeeZee';
}

form {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    letter-spacing: 10px;
    color: var(--primary-color);
    padding-bottom: 50px;
}

.contentbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    margin-bottom: 42px;
}

.group {
    width: 426px;
    font-size: 25px;
    text-align: left;
    letter-spacing: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--gray-color);
}

input {
    width: 290px;
    height: 50px;
    background-color: rgba(217, 217, 217, 0.5);
    border: none;
    border-radius: 80px;
    text-align: center;
    font-size: 1rem;
    letter-spacing: 4px;
}

.other {
    font-size: 1rem;
    letter-spacing: 3px;
    color: var(--gray-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding-bottom: 28px;
}

.other input {
    width: 15px;
    height: 15px;
    margin-right: 12px;
}


.signup {
    width: 100px;
    height: 100px;
    background-color: var(--white-color);
    border-radius: 50%;
    border: 1px solid var(--gray-color);
    color: var(--gray-color);
    font-size: 24px;
    letter-spacing: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: none;
}

.signup:hover {
    border: 4px solid var(--gray-color);
    transition: 0.1s linear;
}

.privacy {
    color: blue;
}

@media screen and (max-width:1280px) and (min-width:769px) {
    main {
        padding: 57px 0 126px;
    }

    .container {
        width: 876px;
        height: 660px;
    }
}
</style>