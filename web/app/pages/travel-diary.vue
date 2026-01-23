<script setup lang="ts">
useHead({
  title: '旅行日記 TravelDiary - 扣握貝果',
  meta: [
    { name: 'description', content: '旅行日記 TravelDiary - 記錄你的每一段旅程' }
  ]
})
</script>

<template>
  <div class="product-page">
    <section class="product-hero">
      <div class="container">
        <h1 class="product-title">旅行日記</h1>
        <p class="product-subtitle">TravelDiary</p>
        <p class="product-description">記錄你的每一段旅程</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.product-page {
  min-height: calc(100vh - var(--header-height));
}

.product-hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--header-height));
  text-align: center;
  padding: 80px 0;
}

.product-title {
  font-size: 48px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 8px;
}

.product-subtitle {
  font-size: 22px;
  font-weight: 500;
  color: var(--color-primary-dark);
  margin-bottom: 24px;
}

.product-description {
  font-size: 18px;
  color: var(--color-text-light);
  line-height: 1.6;
}
</style>
