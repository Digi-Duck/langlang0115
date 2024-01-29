<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
import TitleAndLine from '@/components/TitleAndLine.vue';
import PetsCardImage from '@/components/PetsCardImage.vue';
import FundInfoFrame from '@/components/icons/LostAnimals/FundInfoFrame.vue';
import Animals from '@/json/Animals.json';

export default {
    components: {
        NavPage,
        FooterPage,
        TitleAndLine,
        PetsCardImage,
        FundInfoFrame,
    },
    data() {
        return {
            // 分隔線設定
            mytext: "其他說明",
            mylinew: '80rem',
            parentStyle: {
                gap: '4rem',
            },
            // 傳入動物資料
            Animals: Animals,
            // 找到動物
            foundAnimal: "",
            // 收藏動物
            likeAnimals: [],
        };
    },
    created() {
        this.lookingAnimal();
        // console.log(this.foundAnimal);
    },
    methods: {
        lookingAnimal() {
            this.foundAnimal = this.Animals.find(x => x.名稱 == this.$route.params.name)
        },
        getLikeAnimals() {
            // 讀取localStorage.likeAnimals
            const tmp = localStorage.getItem("likeAnimals");
            // console.log(tmp);
            // 如果有資料
            if (tmp) {
                // parse JSON文字轉JS物件
                this.likeAnimals = JSON.parse(tmp);
            }
        },
        updateLikeAnimal() {
            this.getLikeAnimals();
            // 如果在this.likeAnimals的(indexOf)列表裡未找到ani,就要push; 如果找到就remove;
            if (this.likeAnimals.indexOf(this.foundAnimal) == -1) {
                this.likeAnimals.push(this.foundAnimal);
            } else {
                removeFromArray(this.likeAnimals, this.foundAnimal);
            }
            // 儲存更新 stringify JS物件轉JSON文字
            localStorage.likeAnimals = JSON.stringify(this.likeAnimals);
        },
        removeFromArray(arr, elem) {
            const index = arr.indexOf(elem);
            if (index !== -1) {
                // 使用splice方法從陣列中移除元素
                arr.splice(index, 1);
            }
        }
    }
}
</script>
<template>
    <NavPage />
    <main>
        <div class="adoptionCenteTitle">
            <span>失散協尋</span>
            <p>> 撿到動物資訊</p>
        </div>
        <!-- 上方卡片區 -->
        <div class="furryBabiesCard">
            <!-- 卡片區圖 -->
            <PetsCardImage @favoriteAnimal="updateLikeAnimal" :AnimalData="this.foundAnimal" />
            <!-- 卡片區表格 -->
            <FundInfoFrame :animalData="this.foundAnimal"></FundInfoFrame>
        </div>
        <!-- 其他說明 -->
        <TitleAndLine :text="mytext" :customStyle="parentStyle" :linew="mylinew" />
        <pre class="instructionsText">
4/24更新：
今天早上又去網友說的附近繞繞
還是不知道這孩子的家在哪裡
路上也沒人認識這隻狗....
這孩子根本不會閃車
當時也是因為看到這孩子一直在馬路上亂竄
才把他先帶回來
目前已經先帶去「板橋收容所」了
如果有認識這孩子的家長
請他盡快去那邊接孩子 （拜託）
實在沒辦法把他在原放，絕對會發生意外....
------
4/23 原文：
有人家的寶貝走失嗎？
在板橋環河西路四段與華江六路附近！
身上有胸背
黑色米克斯 女生
年紀看起來有點大 有白內臟
感覺一直在找人不大會閃車
花了很久時間才抓到
主人趕快出現！！
請聯繫
正小姐0911229991
20:50帶她在撿到的附近繞
不過他呈現很緊張的狀態⋯⋯
已帶去兩家動物醫院都掃不到晶片
等等會帶她回家
如果明天主人還沒有出現
可能就要先放在收容所了
https://www.facebook.com/groups/121649277854432/permalink/4368350043184313/
            </pre>
    </main>
    <FooterPage />
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    padding: 4.3rem 9rem 9rem 10rem;
}

/* 標題 */
.adoptionCenteTitle {
    display: flex;
    flex-direction: row;
    padding: 0 0 6.25rem 1.5rem;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 12px;
}

.adoptionCenteTitle span {
    color: var(--primary-color);
}

.adoptionCenteTitle p {
    color: #D7D7D7;
    padding-left: 2.5rem;
}

/* 上方卡片區域 */
.furryBabiesCard {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    padding: 0 0 6.8rem 1.5rem;
}

.instructionsText {
    width: 1431px;
    font-family: 'Inter';
    font-size: 24px;
    font-style: normal;
    white-space: pre-wrap;
    line-height: 59px;
    letter-spacing: 6px;
    margin-top: 4.6rem;
}
</style>