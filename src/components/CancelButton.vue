<!-- 清除重填：灰色按鈕 -->
<template>
    <button>
        <div class="whole-btn">

                <ellipse  cx="19.5" cy="21" rx="14.5" ry="14" fill="white" />
                <path id=path-green-arrow d="M28 21L18 15.2265V26.7735L28 21ZM12 22H19V20H12V22Z" fill="#626262" />
            <slot></slot>
        </div>
    </button>
</template>
  
<script>
export default {
}
</script>
  
<style scoped>
.whole-btn {
    display: flex;
    align-items: center;
    justify-content: center;
}

button {
    width: 153px;
    height: 52px;
    color: var(--white-color);
    background-color:#626262;
    border-radius: 30px;
    border: 0px;
    font-size: 18px;
    letter-spacing: 5px;
    box-shadow: none; 
    cursor: pointer;
}


</style>
  