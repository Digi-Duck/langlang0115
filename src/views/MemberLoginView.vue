<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
import GreenButton from '@/components/GreenButton.vue';
export default {
    components: {
        NavPage,
        FooterPage,
        GreenButton
    },
    data() {
        return {

        }
    },
    methods: {
        goToSignUp() {
            this.$router.push('/memberregistration'); //導到[會員註冊]
        },
        goToForget() {
            this.$router.push('/memberpassword'); //導到[忘記密碼]
        },
        goToPage() {
            this.$router.push('/members'); //導到[會員頁面]
        },
    },
}
</script>
<template>
    <NavPage />
    <main>
        <div class="container">
            <div class="title">會員登入</div>
            <div class="accountbox">
                <div class="left">
                    <div class="account">
                        <label>帳號</label>
                        <input type="text" placeholder="手機號碼 / 帳號 / 信箱">
                    </div>
                    <div class="account">
                        <label>密碼</label>
                        <input type="text">
                    </div>

                </div>
                <div class="login">
                    登入
                </div>
            </div>
            <div class="other">
                <span @click="goToForget">忘記密碼<img src="../assets/Image/MemberImage/Icon-forget.svg"></span>
                <span @click="goToSignUp">註冊帳號 <img src="../assets/Image/MemberImage/Icon-signup.svg"></span>
            </div>

            <span class="social"><img src="../assets/Image/MemberImage/member-line.svg">以社群帳號繼續<img
                    src="../assets/Image/MemberImage/member-line.svg"></span>
            <div class="icon">
                <img src="../assets/Image/MemberImage/member-lineapp.svg" alt="">
                <img src="../assets/Image/MemberImage/member-email.svg" alt="">
                <img src="../assets/Image/MemberImage/member-fb.svg" alt="">
            </div>
        </div>
        <!-- 分頁 -->
        <GreenButton class="btn" @click="goToPage">導到[會員頁面]</GreenButton>
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
}

.title {
    font-size: 40px;
    letter-spacing: 10px;
    color: var(--primary-color);
}

.accountbox {
    display: flex;
    align-items: center;
    gap: 32px;
}

.account {
    font-size: 25px;
    letter-spacing: 6px;
    display: flex;
    gap: 32px;
    align-items: center;
    color: var(--gray-color);
    margin: 20px 0;
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

.login {
    width: 100px;
    height: 100px;
    background-color: var(--white-color);
    border-radius: 50%;
    border: 1px solid var(--gray-color);
    font-size: 24px;
    letter-spacing: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.login:hover {
    border: 4px solid var(--gray-color);
}

.other {
    display: flex;
    gap: 59px;
    color: var(--gray-color);
    margin-right: 35px;
    margin-bottom: 40px;
}

.other span {
    text-decoration: underline;
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
}

.social {
    width: 630px;
    display: flex;
    justify-content: space-between;
    gap: 25px;
    font-size: 20px;
    letter-spacing: 5px;
    margin-bottom: 44px;
}

.icon {
    width: 452px;
    display: flex;
    justify-content: space-between;
}

.icon img {
    cursor: pointer;
}

/* 按鈕暫放 */
.btn {
    width: 250px;
    height: 80px;
    margin: 10px;
}
</style>