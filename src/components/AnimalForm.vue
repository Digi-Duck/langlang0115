<script>
export default {
    props: {
        title: String,
        color: String,
    },
    data() {
        return {
            FormData: {
                name: '',
                species: '',
            },
        };
    },
    methods: {
        submitForm() {
            //處理表單邏輯
            // console.log("表單提交");
        }
    }
}
</script>

<template>
    <main>
        <h2>{{ title }}</h2>
        <div class="form-group">
            <label for="name">姓名：</label>
            <input type="text" id="name" v-model="formData.name" />
        </div>
        <div class="form-group">
            <label for="species">品種：</label>
            <input type="text" id="species" v-model="formData.species">
        </div>

        <button @click.prevent="submitForm">提交</button>
    </main>
</template>

<style scoped>
/*根據顏色區分*/
.form-group {
    margin-bottom: 15px;
    background-color: bisque;
    width: 100px;
    height: 100px;
}
</style>