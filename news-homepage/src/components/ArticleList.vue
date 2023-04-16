<script setup lang="ts">
const articles = [
  {
    title: "Reviving Retro PCs",
    image: "image-retro-pcs.jpg",
    description: "What happens when old PCs are given modern upgrades?",
  },
  {
    title: "Top 10 Laptops of 2022",
    image: "image-top-laptops.jpg",
    description: "Our best picks for various needs and budgets.",
  },
  {
    title: "The Growth of Gaming",
    image: "image-gaming-growth.jpg",
    description: "How the pandemic has sparked fresh opportunities.",
  },
];
</script>

<template>
  <section class="articles">
    <article v-for="(article, idx) in articles" class="article-item">
      <div class="image-cover">
        <img :src="`src/assets/${article.image}`" alt="" />
      </div>
      <div class="content">
        <span class="number">{{ idx < 9 ? `0${idx + 1}` : idx + 1 }}</span>
        <h3 class="title">{{ article.title }}</h3>
        <p>{{ article.description }}</p>
      </div>
    </article>
  </section>
</template>

<style scoped>
.articles {
  margin-block: 64px;
}

.article-item {
  display: flex;
  gap: 16px;
  margin-bottom: 36px;
}

.article-item .image-cover {
  width: 100%;
  max-width: 100px;
  height: 130px;
  position: relative;
  overflow: hidden;
}

.article-item .image-cover img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.article-item .content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.article-item .content .number {
  font-weight: bold;
  font-size: 32px;
  color: var(--grayish-blue);
}

.article-item .content .title {
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.005em;
  color: var(--very-dark-blue);
  cursor: pointer;
}

.article-item .content .title:hover {
  color: var(--primary-red);
}

.article-item .content p {
  font-size: 14px;
  color: var(--dark-grayish-blue);
  letter-spacing: 0.035em;
}

@media screen and (min-width: 1000px) {
  .articles {
    display: flex;
    gap: 40px;
  }

  .article-item {
    flex: 1;
    margin-bottom: 0;
  }
}
</style>
