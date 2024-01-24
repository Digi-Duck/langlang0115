<script>
import IconFb from '../IconFb.vue';
import IconLineApp from '../IconLineApp.vue';
export default {
    components:{ IconFb,IconLineApp },
    data() {
        return {
            animals: [],
            numberBg:String, //晶片號碼背景色
            borderTh:String,
            borderTd:String,  //表格外框色
            textColor:String,  //文字顏色
        }
    },
    methods: {
        // async非同步
        async fetchAnimals() {
            // try...catch 嘗試...捕捉(錯誤)...
            try {
                // await 配合 async
                const response = await fetch('http://localhost:3000/0')
                // data = 等待response抓資料
                const data = await response.json();
                this.animals = data;
                console.log(this.animals.cats[0].名稱);
            } catch (error) {
                console.error('Error fetching dogs:', error);
            }
        },
    },
    mounted() {
        this.fetchAnimals();
    },
}
</script>
<template>
    <div class="cardFrameAll">
        <!-- 卡片表格區域-->
        <div class="CardFrame">
            <div class="ChipNumber" :style="{backgroundColor:numberBg}">
                <span>晶片號碼：AAAHG1130116001</span>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th :style="{color:textColor,borderColor:borderTh}">類別</th>
                        <td >貓</td>
                        <th :style="{color:textColor,borderColor:borderTh}">體型</th>
                        <td >小型</td>
                    </tr>
                    <tr>
                        <th :style="{color:textColor,borderColor:borderTh}">年齡</th>
                        <td >幼年</td>
                        <th :style="{color:textColor,borderColor:borderTh}">性別</th>
                        <td >母</td>
                    </tr>
                    <tr>
                        <th :style="{color:textColor,borderColor:borderTh}">是否已結紮</th>
                        <td >未知</td>
                        <th :style="{color:textColor,borderColor:borderTh}">顏色</th>
                        <td >花色</td>
                    </tr>
                    <tr>
                        <th :style="{color:textColor,borderColor:borderTh}">發現地點</th>
                        <td colspan="3" >09:00 台中市 福星公園</td>
                    </tr>
                    <tr>
                        <th :style="{color:textColor,borderColor:borderTh}">聯絡方式</th>
                        <td colspan="3">09XX-XXX-XXX</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="timeShare">
            <div class="platformTime">
                <div class="time">
                    <span>平台建立時間</span>
                    <p class="creationTime">2024-01-10 00:00:00</p>
                </div>
                <div class="time">
                    <span>平台更新時間</span>
                    <p class="updateTime">2024-01-10 00:00:00</p>
                </div>
            </div>
            <div class="shareIcon" :style="{color:textColor}">
                <span>分享至</span>
                <IconFb class="fb"></IconFb>
                <IconLineApp class="lineapp"></IconLineApp>
            </div>
        </div>
    </div>
</template>
<style scoped>
/*卡片表格區域*/

.cardFrameAll {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.CardFrame {
    display: flex;
    flex-direction: column;
    width: 53rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 28px;
}

/* 晶片號碼 */
.ChipNumber {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 460px;
    height: 65px;
    background-color: var(--primary-color);
    border-radius: 0.6rem 0.6rem 0 0;
}

.ChipNumber span {
    color: var(--white-color);
    font-size: 1.5rem;
    letter-spacing: 1.68px;
    padding: 0.6rem 0.9rem;
}

/* 表格 */
table {
    text-align: left;
    width: 53.1rem;
    height: 20.8rem;
    border-collapse: collapse;
    font-style: normal;
    line-height: normal;
    font-size: 1.5rem;
}

th {
    padding-left: 2.5rem;
    width: 200px;
    height: 85px;
    color: var(--primary-color);
    border: 3px solid var(--primary-color);
    font-weight: 900;
}

td {
    padding-left: 2.5rem;
    border: 3px solid var(--primary-color);
}

/* 卡片時間區 */
.timeShare {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
    padding-bottom: 0.6rem;
    margin-right: 0.9rem;
}

.platformTime {
    display: flex;
    flex-direction: column;
    font-size: 1.25rem;
}

.time {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4.5px 0 4.5px 0;
    gap: 1rem;
}

.time span {
    font-weight: 700;
}

/* 分享區 */
.shareIcon {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 48px;
    color: var(--primary-color);
    letter-spacing: 6px;
    font-size: 1.5rem;
}

.fb,lineapp {
    width: 3.25rem;
    height: 3.25rem;
}
</style>