<script setup>
import NavPage from '../components/NavPage.vue'

</script>

<template>
  <section class="home-nav-container">
    <NavPage/>
  </section>
</template>

<style scoped>
.home-nav-container {
  width: 100%;
  height: 1600px;
  background-color: white;
  position: relative;
}

.home-header-whitebox {
  background-color: #52A038;
  width: 100%;
  height: 600px;
  position: absolute;
  top: 0px;
  left: 0px;
}

.home-header-img {
  margin: auto;
  padding: 0 25px;
  position: relative;
}

.home-header-img img {
  width: 100%;
}

.home-header-text {
  width: 500px;
  height: 50px;
  position: absolute;
  top: 71%;
  left: 60%;
}

.home-header-text span {
  font-size: 28px;
  text-shadow: 1px 2px 8px rgba(0, 0, 0, 25);
  color: white;
  position: absolute;
  top: -80%;
  left: 0%;
  transform: rotate(12deg);
}

.home-header-btn {
  display: flex;
  gap: 26px;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
}
</style>