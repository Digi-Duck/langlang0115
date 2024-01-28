<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';

export default {
    components: {
        NavPage,
        FooterPage,
    },
    data() {
        return {
            formData: {
                account: '', // 帳號
                password: '', // 密碼
            },
        }
    },
    methods: {
        logIn() {
            // 讀取localStorage.user
            const tmp = localStorage.user;
            // 如果有資料
            let usertable = '';
            if (tmp) {
                usertable = JSON.parse(tmp);
            }
            // console.log(usertable)
            if (usertable.email == this.formData.account || usertable.phone == this.formData.account) {
                if (usertable.password == this.formData.password) {
                    sessionStorage.token = this.formData.account;
                    this.goToPage();
                } else {
                    this.formData.account = '';
                    this.formData.password = '';
                    alert('登入失敗');
                }
            } else {
                this.formData.account = '';
                this.formData.password = '';
                alert('登入失敗');
            }
        },
        autoLogIn() {
            if (sessionStorage.token) {
                this.goToPage();
            }
        },
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
    mounted() {
        this.autoLogIn();
    },
}
</script>
<template>
    <NavPage />
    <main>
        <div class="container">
            <form action="" @submit.prevent="logIn">
                <div class="title">會員登入</div>
                <div class="accountbox">
                    <div class="inputArea">
                        <div class="account">
                            <label>帳號</label>
                            <input type="text" placeholder="手機號碼 / 帳號 / 信箱" v-model="formData.account">
                        </div>
                        <div class="account">
                            <label>密碼</label>
                            <input type="password" v-model="formData.password">
                        </div>
                    </div>
                    <button type="submit" class="login">
                        登入
                    </button>
                </div>
            </form>
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
    </main>
    <FooterPage />
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    padding: 102px 0 180px;
    display: flex;
    justify-content: center;
    align-items: center
}

.container {
    width: 818px;
    height: 600px;
    background-image: url(../assets/Image/MemberImage/loginBg.svg);
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
    font-family: 'ABeeZee';
    padding: 60px 103px;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    letter-spacing: 10px;
    color: var(--primary-color);
    padding-bottom: 36px;
}

.accountbox {
    display: flex;
    align-items: center;
}

.inputArea {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-right: 32px;
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
    color: var(--gray-color);
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
    box-shadow: none;
    transition:0.1s linear;
}

.other {
    display: flex;
    gap: 60px;
    color: var(--gray-color);
    margin-right: 35px;
    margin-bottom: 35px;
}

.other span {
    text-decoration: underline;
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    font-size: 1rem;
}

.social {
    width: 630px;
    display: flex;
    justify-content: space-between;
    gap: 25px;
    font-size: 20px;
    letter-spacing: 5px;
    padding-bottom: 40px;
}

.social img {
    width: 200px;
}

.icon {
    width: 452px;
    display: flex;
    justify-content: space-between;
}

.icon img {
    width: 80px;
    height: 80px;
    cursor: pointer;
}
</style>