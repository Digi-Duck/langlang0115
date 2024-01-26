<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
import FollowedCard from '@/components/FollowedCard.vue'

export default {
    components: {
        NavPage,
        FooterPage,
        FollowedCard
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
        <div class="top">
            <div class="headsticker">
            </div>
            <div class="contentbox">
                <div>
                    <label>姓名</label>
                    <input type="text" placeholder="王曉明" class="name">
                </div>
                <div>
                    <label>電子信箱</label>
                    <input type="text" placeholder="iluvlang@gmail.com">
                </div>
                <div>
                    <label>手機號碼</label>
                    <input type="text" placeholder="0990099009">
                </div>
            </div>
        </div>
        <div class="followed">
            <span class="title">我追蹤的浪浪</span>
            <div class="followedbox">
                <FollowedCard />
                <FollowedCard />
                <FollowedCard />
                <FollowedCard />
                <FollowedCard />
                <FollowedCard />
                <FollowedCard />
                <FollowedCard />
            </div>
        </div>
        <div class="history">
            <div class="historytop">
                <span class="title">捐款歷史</span>
                <span class="thanks">\ 謝謝您默默的支持! /</span>
            </div>

            <div class="historybox">
                <img class="bgline" src="../assets/Image/MemberImage/member-line.svg">
                <div class="historycontent">
                    <div class="historyicon">
                        <img src="../assets/Image/MemberImage/iconHistory.svg">
                    </div>
                    <span>您在2023年11月20日贊助了100元新台幣</span>
                </div>
                <div class="historycontent">
                    <div class="historyicon">
                        <img src="../assets/Image/MemberImage/iconHistory.svg">
                    </div>
                    <span>您在2023年11月20日贊助了100元新台幣</span>
                </div>
                <div class="historycontent">
                    <div class="historyicon">
                        <img src="../assets/Image/MemberImage/iconHistory.svg">
                    </div>
                    <span>您在2023年11月20日贊助了100元新台幣</span>
                </div>
            </div>

        </div>
    </main>
    <FooterPage />
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    padding: 170px 0;
}

.top {
    width: 800px;
    height: 255px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 170px;
}

/* 頭貼 */
.headsticker {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-image: url(../assets/Image/CardImage/CardCat.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

/* 個人資料 */
.contentbox {
    height: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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
    background-color: rgba(217, 217, 217, 0.25);
    border: none;
    border-radius: 80px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 4px;
}

.name {
    font-size: 25px;
}

/* 追蹤的浪浪 */
.followed {
    background-image: url(../assets/Image/MemberImage/blueBg.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 0 258px;
    margin-bottom: 160px;
}

.title {
    font-size: 32px;
    letter-spacing: 8px;
}

.followedbox {
    width: 1350px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 25px;
}

/* 捐款歷史 */
.history {
    width: 1330px;
    margin: auto;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0;
    left: 0;
}

.historytop {
    margin-bottom: 114px;
}

.thanks {
    font-size: 20px;
    letter-spacing: 5px;
    color: var(--primary-color);
    transform: rotate(15deg);
    position: absolute;
    top: 7.5%;
    right: 2%;
}

.historybox {
    width: 962px;
    height: 448px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 32px;
    letter-spacing: 8px;
    position: relative;
    top: 0;
    left: 0;
}

.bgline {
    width: 347px;
    position: absolute;
    top: 50%;
    left: -14%;
    transform: rotate(90deg);
    opacity: 0.2;
    z-index: -1;

}

.historycontent {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.historyicon {
    width: 80px;
    height: 80px;
    background-color: var(--primary-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>