<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <nav class="navigation">
    <div class="logo">
      <a href="/">
        <img src="../assets/logo.svg" alt="icons" />
      </a>
    </div>
    <div>
      <ul class="menus">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>
      <div class="hamburger">
        <button @click="toggle">
          <img
            v-if="isOpen"
            src="../assets/icon-menu-close.svg"
            alt="hamburger closed"
          />
          <img v-else src="../assets/icon-menu.svg" alt="hamburger open" />
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navigation {
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menus {
  display: none;
  list-style: none;
}

.menus > li > a {
  text-decoration: none;
  color: var(--dark-grayish-blue);
}

.menus > li > a:hover {
  color: var(--primary-red);
}

.hamburger button {
  height: 48px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

@media screen and (min-width: 1000px) {
  .navigation {
    height: 180px;
  }

  .menus {
    display: flex;
    gap: 38px;
  }

  .hamburger {
    display: none;
  }
}
</style>
