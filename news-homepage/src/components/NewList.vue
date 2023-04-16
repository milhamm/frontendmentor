<script setup lang="ts">
const items = [
  {
    title: "Hydrogen vs Electric Cars",
    content: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry ",
    content:
      "What are the possible adverse effects of on-demand AI image generation? ",
  },
  {
    title: "Is VC Funding Drying Up? ",
    content:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means. ",
  },
];
</script>

<template>
  <div class="new">
    <h2>New</h2>
    <ul class="new-list">
      <li v-for="item in items">
        <strong>{{ item.title }}</strong>
        <p>{{ item.content }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.new {
  grid-area: new;
  background-color: var(--very-dark-blue);
  width: 100%;
  padding-inline: 1.5em;
  padding-top: 2.25em;
  color: var(--off-white);
}

.new h2 {
  color: var(--primary-orange);
  font-size: 2rem;
}

.new-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.new-list li {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-block: 2.25em;
}

.new-list li:not(:last-of-type) {
  border-bottom: solid 1px var(--dark-grayish-blue);
}

.new-list li strong {
  line-height: 19px;
  letter-spacing: 0.03em;
  cursor: pointer;
}

.new-list li strong:hover {
  color: var(--primary-orange);
}

.new-list li p {
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.015em;
  color: var(--grayish-blue);
}

@media screen and (min-width: 1000px) {
  .new {
    width: 350px;
  }
}
</style>
