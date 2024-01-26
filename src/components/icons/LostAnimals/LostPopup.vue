<script>
import NoHoverButton from '@/components/NoHoverButton.vue';
export default {
    props: {
        isShow: Boolean,
    },
    data() {
        return {

        }
    },
    // emits 回傳資料給父層
    emits: ['close'],
    methods: {
        // 回到上一頁
        back() {
            this.$router.push('/');
        },
        //導到[我的動物走失了]
        next() {
            this.$router.push('/foundanimalsform');
        },
        close() {
            this.$emit('close', false);
        }
    },
    components: {
        NoHoverButton,
    }
}
</script>
<template>
    <!-- 顯示視窗 -->
    <!-- 關閉視窗@click.self="closePopup" -->
    <div class="container-bg" v-show="isShow">
        <div class="container">
            <div>
                <img src="/src/assets/Image/AboutPage2Image/message-dogpaw.svg" alt="msg">
            </div>
            <div class="text">
                <span>要前往填寫動物資訊嗎？</span>
                <span class="content">*已確認沒有被重複登入</span>
            </div>
            <div class="btns">
                <NoHoverButton class="w"  @click="close()" :showSvg="false" btnbgColor="var(--gray-color)" text="返回修改">
                </NoHoverButton>
                <NoHoverButton class="w" @click="next" :showSvg="false" btnbgColor="var(--olivegreen-color)" text="確認前往"></NoHoverButton>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--olivegreen-color);
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
    border: 2px solid var(--olivegreen-color);
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

.btns{
    display: flex;
    gap: 38px;
}
.w {
    width: 155px;
    height: 65px;
}

/* 覆寫hover效果 */
.btn :hover {
    color: rgb(255, 0, 0);
}
</style>