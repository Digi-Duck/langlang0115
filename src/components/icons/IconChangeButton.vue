<script>
export default {
    // 設定參數
    props: {
        text: String,
    },
    data() {
        // 圖
        return {
            isHovered: false,
        };
    },
    methods: {
        // 顯示圖
        showIcon() {
            this.isHovered = true;
        },
        // 隱藏圖
        hideIcon() {
            this.isHovered = false;
        },
    },
};
</script>
<template>
    <!-- 滑進時顯示圖 離開時隱藏圖 -->
    <button @mouseover="showIcon" @mouseleave="hideIcon" class="custom-button">
        <span class="text">{{ text }}</span>
        <span v-if="isHovered" class="icon">
            <img src="@\assets\Image\DogPaw.svg" alt="Icon">
        </span>
    </button>
</template>
<style scoped>
.custom-button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 3.25rem;
    border-radius: 1.875rem;
    background-color: var(--primary-color);
    border: none;
    font-size: 1.2rem;
    color: var(--white-color);
}

.text {
    transition: margin-left 0.6s ease;
}

.icon {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-175%, -40%);
}

.custom-button:hover .text {
    margin-left: -20px;
}

.custom-button:hover .icon {
    animation: ChangeIcon 0.5s ease;
}

/* Icon淡出效果 */
@keyframes ChangeIcon {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>