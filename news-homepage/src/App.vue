<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import ArticleList from "./components/ArticleList.vue";
</script>

<template>
  <div class="layout">
    <Navbar />
    <Hero />
    <ArticleList />
  </div>
</template>

<style scoped>
.layout {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-inline: 1rem;
}

@media screen and (min-width: 1000px) {
  .layout {
    padding-inline: 0;
  }
}
</style>
