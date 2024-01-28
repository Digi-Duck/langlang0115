<script>
import IconX from './icons/IconX.vue';

export default {
    components: {
        IconX
    },
    props: {
        isShow: Boolean,
    },
    data() {
        return {

        }
    },
    methods: {
        //  將關閉視窗的值傳給父層
        closePopup() {
            this.$emit('close');
        }
    },
}
</script>
<template>
    <!-- v-show="isShow" -->
    <main>
        <!-- 顯示視窗v-show -->
        <div class="informationPopupFrame">
            <div class="informationTitle">
                <span>隱私權政策與會員服務條款</span>
                <!-- 點擊關閉 -->
                <IconX class="x" @click.stop="closePopup" />
            </div>
            <section class="information">
                <span>浪浪的事平台（以下稱我們），為了讓您能夠安心的使用我們的各項服務與資訊，特此向您說明我們的隱私權保護政策，以保障您的權益，請您詳閱下列內容：</span>
                <article class="text">

                </article>
            </section>
        </div>
    </main>
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(260, 255, 255, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
}

.informationPopupFrame {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 1135px;
    height: 770px;
    font-style: normal;
    font-weight: 400;
    border-radius: 2.5rem;
    border: 1px solid #FFF;
    background: linear-gradient(102deg, rgba(255, 255, 255, 0.30) -5.18%, rgba(255, 255, 255, 0.12) 108.27%);
    box-shadow: 0px 4px 6px 0px rgba(82, 160, 56, 0.15);
    backdrop-filter: blur(12.5px);
    padding: 59px 83px;
    gap: 36px;
}

.x {
    position: absolute;
    right: 3rem;
    width: 2.25rem;
    height: 2.25rem;
    cursor: pointer;
}

.informationTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-color);
    font-size: 2.25rem;
    line-height: normal;
    letter-spacing: 9px;
    padding: 15px 0;
}

.information {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 150%;
    letter-spacing: 6px;
    gap: 36px;

}

.information span {
    font-size: 24px;
}

.text {
    display: flex;
    flex-direction: column;
    width: 879px;
    height: 400px;
    overflow: scroll;
}

.text::-webkit-scrollbar {
    display: none;
}
</style>