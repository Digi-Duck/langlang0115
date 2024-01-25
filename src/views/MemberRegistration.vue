<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';

export default {
    components: {
        NavPage,
        FooterPage
    },
    data() {
        return {

        }
    },

}
</script>
<template>
    <NavPage />
    <main>
        <div class="container">
            <div class="title">會員註冊</div>
            <div class="contentbox">
                <div>
                    <label>姓名</label>
                    <input type="text" placeholder="王曉明">
                </div>
                <div>
                    <label>電子信箱</label>
                    <input type="text" placeholder="請輸入您的電子信箱">
                </div>
                <div>
                    <label>手機號碼</label>
                    <input type="text" placeholder="0912321123">
                </div>
                <div>
                    <label>密碼</label>
                    <input type="text" placeholder="須設定至少8個字元">
                </div>
                <div>
                    <label>確認密碼</label>
                    <input type="text">
                </div>
            </div>
            <div class="other">
                <input type="checkbox"><span>我已閱讀，並同意遵守《隱私權政策與會員服務條款》</span>
            </div>
            <div class="signup">註冊</div>

        </div>
    </main>
    <FooterPage />
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    padding: 102px 530px 0;
}

.container {
    width: 900px;
    height: 700px;
    background-image: url(../assets/Image/MemberImage/SignUpBg.svg);
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 46px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
    font-family: 'ABeeZee';
}

.title {
    font-size: 40px;
    letter-spacing: 10px;
    color: var(--primary-color);
}

.contentbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    /* margin-bottom: 42px; */
}

.contentbox div {
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
    font-size: 14px;
    letter-spacing: 3px;
    color: var(--gray-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
    font-size: 24px;
    letter-spacing: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.signup:hover {
    border: 4px solid var(--gray-color);
}
</style>