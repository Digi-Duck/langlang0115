<!-- 沒有hover效果的純按鈕 -->

<script>
export default {
    // 設定參數
    props: {
        text: String,
        bgColor: String,
    },
}
</script>


<template>
    <button :style="{backgroundColor:bgColor}">
        <span>{{text}}</span>
    </button>
</template>
  

  
<style scoped>

button {
    width: 125px;
    height: 54px;
    color: var(--white-color);
   /* background-color:#626262;*/
    border-radius: 30px;
    border: 0px;
    font-size: 18px;
    letter-spacing: 5px;
    box-shadow: none; 
    cursor: pointer;
}


</style>
  