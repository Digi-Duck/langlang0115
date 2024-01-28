<script>
import DataSubmitted from '@/components/DataSubmitted.vue';
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';

export default {
    components: {
    NavPage,
    FooterPage,
    DataSubmitted
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
            show: false,
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
            this.show = true;
            // 視窗開啟時scrollBar隱藏
            document.body.style.overflow = 'hidden';
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
                        <input type="text" placeholder="王曉明" v-model="formData.name" >
                    </div>
                    <div class="group">
                        <label>電子信箱</label>
                        <input type="email" placeholder="請輸入您的電子信箱" v-model="formData.email" >
                    </div>
                    <div class="group">
                        <label>手機號碼</label>
                        <input type="tel" placeholder="0912321123" v-model="formData.phone" >
                    </div>
                    <div class="group">
                        <label>密碼</label>
                        <input type="password" placeholder="須設定至少8個字元" v-model="formData.password" >
                    </div>
                    <div class="group">
                        <label>確認密碼</label>
                        <input type="password" v-model="formData.checkpassword" >
                    </div>
                </div>
                <div class="other">
                    <input type="checkbox" v-model="formData.check" ><span>我已閱讀，並同意遵守《隱私權政策與會員服務條款》</span>
                </div>
                <button class="signup" type="submit">註冊</button>
            </form>
            <DataSubmitted :isShowSub="show"></DataSubmitted>
        </div>
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
    padding: 6.8rem 0 4.6rem 0;
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

form{
    display: flex;
    align-items: center;
    flex-direction: column;
    
}
.title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
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
    font-size: 16px;
    letter-spacing: 4px;
}

.other {
    font-size: 16px;
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
    transition:0.1s linear;
}
</style>