<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';
import TitleAndLine from '@/components/TitleAndLine.vue';
import PetsCardImage from '@/components/PetsCardImage.vue';
import PetsCardFrame from '@/components/PetsCardFrame.vue';
import IconCard from '@/components/icons/LostAnimals/IconCard.vue';
import Animals from '@/json/Animals.json';

export default {
    components: {
        NavPage,
        FooterPage,
        TitleAndLine,
        PetsCardFrame,
        IconCard,
        PetsCardImage,
    },
    data() {
        return {
            mytext: "送養說明",
            mytexttwo: "更多毛小孩",
            mylinew: '81.25rem',
            parentStyle: {
                gap: '4rem',
            },
            parenttwoStyle: {
                gap: '1.25rem',
            },
            // 傳入動物資料
            Animals: Animals,
            // 隨機動物資料
            randomAnimals: [],
            // 找到動物
            foundAnimal: "",
            // 收藏動物
            likeAnimals: [],
        };
    },
    created() {
        this.randomAnimals = this.getRandomAnimals(Animals, 5);
        this.lookingAnimal();
        // console.log(this.foundAnimal);
    },
    methods: {
        getRandomAnimals(arr, n) {
            return arr.sort(() => Math.random() - 0.5).slice(0, n);
        },
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
    },
}
</script>
<template>
    <NavPage />
    <main>
        <!-- 所有可以超連結的 都要用router-link 假設V-for ani in animals  name = ani.名稱    -->
        <!-- <router-link :to="{ name: 'adoptionpetinformation', params: { name: 'VAAAG112120503' } }">
            <div>{{ $route.params.name }}</div>
        </router-link> -->

        <div class="adoptionCenteTitle">
            <span>認養中心</span>
            <p>> 毛小孩詳細資訊</p>
        </div>
        <!-- 上方卡片區 -->
        <div class="furryBabiesCard">
            <!-- 卡片區圖 -->
            <PetsCardImage @favoriteAnimal="updateLikeAnimal" :AnimalData="this.foundAnimal" />
            <!-- 卡片區表格 -->
            <PetsCardFrame :animalData="this.foundAnimal" />
        </div>
        <!-- 送養中心 -->
        <div class="adoptionInstructions">
            <!-- 標題 -->
            <TitleAndLine :text="mytext" :customStyle="parentStyle" :linew="mylinew" />
            <div class="instructionsText">
                二貓都是女生，都作完結育及用全能貓作體內外驅蟲了。年紀都還很輕，未滿一歲，只是都曾生育過。
                <br>
                <br>
                目前正漸漸養胖中。白黃貓親人花貓警戒心較重，但相信有主人耐心的愛，ㄧ定能讓她融化她的戒心的。
            </div>
        </div>
        <!-- 更多毛小孩 -->
        <div class="manyFurryBabies">
            <!-- 標題 -->
            <TitleAndLine :text="mytexttwo" :customStyle="parenttwoStyle" :linew="mylinew" />
            <!-- 卡片區 -->
            <div class="furryBabiesCardFrame">
                <div class="BabiesCard">
                    <IconCard v-for="animal in randomAnimals" :AnimalData="animal" :prefix="'../'" />
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
    padding: 4.3rem 9rem 13.3rem 10rem;
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
    flex-direction: row;
    padding: 0 0 6.8rem 1.5rem;
}

/* 送養說明 */
.adoptionInstructions {
    display: flex;
    flex-direction: column;
}

.instructionsText {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: 6px;
    padding: 0 3rem 0 4.6rem;
    margin: 4.6rem 0;
}

.manyFurryBabies {
    display: flex;
    flex-direction: column;
}

.furryBabiesCardFrame {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3.25rem;
}

.BabiesCard {
    display: flex;
    flex-direction: row;
    padding: 0 3.75rem;
    gap: 3.25rem;
}
</style>