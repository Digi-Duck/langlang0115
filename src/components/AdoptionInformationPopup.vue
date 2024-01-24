<script>
import IconX from './icons/IconX.vue';

export default {
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
    components: {
        IconX
    }
}
</script>
<template>
    <main v-show="isShow">
        <!-- 顯示視窗v-show -->
        <div class="informationPopupFrame">
            <div class="informationTitle">
                <span>認養需知</span>
                <!-- 點擊關閉 -->
                <IconX class="x" @click.stop="closePopup" />
            </div>
            <section class="information">
                <article>
                    預計認養毛小孩的朋友們，請遵守以下規定：
                    <ol type="1">
                        <li>認養條件：
                            <ol type="a">
                                <li>須年滿20歲並取得家人同意</li>
                                <li>在外租屋者需徵求房東同意</li>
                                <li>須簽認養切結書並同意後續追蹤</li>
                            </ol>
                        </li>
                        <li>毛小孩飼養注意事項：
                            <ol type="a">
                                <li>須配合政府規定絕育及植入晶片</li>
                                <li>不得24小時綁繩或關籠</li>
                                <li>每年需施打預防針並於每月投心絲蟲藥與除蚤</li>
                            </ol>
                        </li>
                        <li>
                            若符合以上「認養條件」並同意「毛小孩飼養注意事項」，可以透過留言方式，詢問該毛小孩的詳細情況，或經由送養人留下的聯絡方式，聯絡送養人。
                        </li>
                        <li>若有意願認養，可主動告知送養人以下訊息：
                            <ol type="a">
                                <li>是否有養毛小孩的經驗</li>
                                <li>生活環境</li>
                                <li>飼養方式</li>
                            </ol>
                        </li>
                    </ol>
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
    width: 85.4rem;
    height: 47rem;
    font-style: normal;
    font-weight: 400;
    border-radius: 2.5rem;
    border: 1px solid #FFF;
    background: linear-gradient(102deg, rgba(255, 255, 255, 0.30) -5.18%, rgba(255, 255, 255, 0.12) 108.27%);
    box-shadow: 0px 4px 6px 0px rgba(82, 160, 56, 0.15);
    backdrop-filter: blur(12.5px);
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
    padding: 2rem 0;
}

.information {
    display: flex;
    justify-content: center;
    color: var(--gray-color);
    font-size: 1.5rem;
    line-height: 150%;
    letter-spacing: 6px;
    padding: 0 8rem;
}
</style>