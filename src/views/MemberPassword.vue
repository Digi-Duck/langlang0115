<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
import IconChangeButton from '@/components/icons/IconChangeButton.vue';

export default {
    components: {
        NavPage,
        FooterPage,
        IconChangeButton
    },
    data() {
        return {

        }
    },
    methods: {
        goToLogin() {
            this.$router.push('/memberlogin'); //導到[登入頁面]
        },
    }
}
</script>
<template>
    <NavPage />
    <main>
        <div class="container">
            <div class="title">忘記密碼</div>
            <div>
                <span>請輸入您的註冊 e-mail信箱，確認無誤後，系統會將密碼信寄至此信箱。</span>
            </div>
            <div class="account">
                <label>電子信箱</label>
                <input type="text" placeholder="請輸入電子信箱">
            </div>
            <IconChangeButton class="sendout" text="送出" bgColor="var(--primary-color)" textColor="var(--white-color)">
            </IconChangeButton>
            <div class="other">
                <span @click="goToLogin">返回登入頁面</span>
            </div>
        </div>

    </main>
    <FooterPage />
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    padding: 102px 530px 180px;
}

.container {
    width: 818px;
    height: 600px;
    background-image: url(../assets/Image/MemberImage/loginBg.svg);
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
    font-family: 'ABeeZee';
    color: var(--gray-color);
    gap: 40px;
}

.title {
    font-size: 40px;
    letter-spacing: 10px;
    color: var(--primary-color);
}


.account {
    font-size: 25px;
    letter-spacing: 6px;
    display: flex;
    gap: 32px;
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

.sendout {
    /* margin-left: 50px; */
}

.other {
    color: var(--gray-color);
    text-decoration: underline;
    cursor: pointer;
}
</style>