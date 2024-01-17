<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GoTop from './components/GoTop.vue';
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <header>
    

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        
        <!--首頁的[關於浪浪的事、最新消息]區塊 到時候本頁要放入HomeView.vue -->
        <RouterLink to="/homeaboutsection">HomeAboutSection</RouterLink>
        <!--第二頁的關於浪浪的事區塊  -->
        <RouterLink to="/aboutpageintro">第二頁：關於浪浪的事簡介</RouterLink>
      </nav>
    </div>
  </header>

 
  <GoTop></GoTop>

  <RouterView />
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}



.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


.text {
  height: 500vh;
  color: var(--redbrown-color);
  background-color: var(--gooseyellow-color) ;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }



}
</style>
