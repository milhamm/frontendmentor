<script setup lang="ts">
import NewList from "./NewList.vue";
</script>

<template>
  <div class="grid">
    <div class="head"></div>
    <div class="title">
      <h1>The Bright Future of Web 3.0?</h1>
    </div>
    <div class="description">
      <p>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <div>
        <button class="button">READ MORE</button>
      </div>
    </div>
    <NewList />
  </div>
</template>

<style>
.grid {
  display: grid;
  grid-template-areas: "head" "title" "description" "new";
  gap: 1.5em;
}

.head {
  grid-area: head;
  height: 300px;
  background-image: url("../assets/image-web-3-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  grid-area: title;
}

.title h1 {
  font-size: 2.5rem;
  font-weight: 800;
}

.description {
  grid-area: description;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 64px;
}

.description p {
  color: var(--dark-grayish-blue);
  line-height: 25px;
  letter-spacing: -0.025em;
}

.button {
  background-color: var(--primary-red);
  color: white;
  height: 48px;
  padding: 0 30px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.39em;
}

.button:hover {
  background-color: var(--very-dark-blue);
}

@media screen and (min-width: 1000px) {
  .grid {
    grid-template-areas:
      "head head new"
      "title description new";

    gap: 30px;
  }

  .head {
    height: 250px;
  }

  .title h1 {
    font-size: 3.5rem;
  }

  .description {
    width: 350px;
    margin-bottom: 0;
  }
}
</style>
