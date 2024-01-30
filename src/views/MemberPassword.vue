<script>
import DataSubmitted from '@/components/DataSubmitted.vue';
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
import IconChangeButton from '@/components/icons/IconChangeButton.vue';

export default {
    components: {
        NavPage,
        FooterPage,
        IconChangeButton,
        DataSubmitted
    },
    data() {
        return {
            formData: {
                email: "",// 電子信箱
            },
            showPasswordPopup: false,
        }
    },
    methods: {
        goToLogin() {
            this.$router.push('/memberlogin'); //導到[登入頁面]
        },
        password() {
            localStorage.setItem('user', JSON.stringify(this.formData));
            this.showPassword();
        },
        showPassword() {
            // 執行顯示視窗
            this.showPasswordPopup = true;
            // 視窗開啟時scrollBar隱藏
            document.body.style.overflow = 'hidden';
        }
    }
}
</script>
<template>
    <NavPage />
    <main>
        <div class="container">
            <form action="" @submit.prevent="password">
                <div class="title">忘記密碼</div>
                <div class="contect">
                    <span>請輸入您的註冊 e-mail信箱，確認無誤後，系統會將密碼信寄至此信箱。</span>
                </div>
                <div class="account">
                    <label>電子信箱</label>
                    <input type="email" placeholder="請輸入電子信箱" v-model="formData.email" required>
                </div>
                <IconChangeButton class="sendout" text="送出" bgColor="#52A038" textColor="#FEFEFB" />
                <div class="other">
                    <span @click="goToLogin">返回登入頁面</span>
                </div>
            </form>
        </div>
        <DataSubmitted :isShowSub="showPasswordPopup" myFillColor="#52A038" myTextColor="#52A038" submitText="密碼已重新寄至信箱，"
            submitTextTwo="請使用新密碼重新登入！" submitBtnText="返回登入畫面" submitBtnColor="#52A038" myurl="/memberlogin">
        </DataSubmitted>
    </main>
    <FooterPage />
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    padding: 102px 0 180px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    width: 818px;
    height: 600px;
    display: flex;
    justify-content: center;
    background-image: url(../assets/Image/MemberImage/loginBg.svg);
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
    font-family: 'ABeeZee';
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 48px 149px 48px;
    gap: 40px;
    color: var(--gray-color);
}

.title {
    text-align: center;
    font-size: 2.5rem;
    letter-spacing: 10px;
    color: var(--primary-color);
}

.contect {
    text-align: center;
    font-size: 1rem;
}

.account {
    font-size: 1.5rem;
    letter-spacing: 6.25px;
    display: flex;
    gap: 18px;
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
    font-size: 16px;
    letter-spacing: 4px;
}

.other {
    text-align: center;
    font-size: 1.12rem;
    color: var(--gray-color);
    text-decoration: underline;
    cursor: pointer;
}

@media screen and (max-width:1280px) and (min-width:769px) {
    main {
        padding: 83px 0 156px;
    }

}
</style>