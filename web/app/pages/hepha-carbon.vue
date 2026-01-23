<script setup lang="ts">
useHead({
  title: '話燒碳盤查系統 HephaCarbon - 扣握貝果',
  meta: [
    { name: 'description', content: '話燒碳盤查系統 HephaCarbon - 智慧碳排放盤查與管理' }
  ]
})
</script>

<template>
  <div class="product-page">
    <section class="product-hero">
      <div class="container">
        <h1 class="product-title">話燒碳盤查系統</h1>
        <p class="product-subtitle">HephaCarbon</p>
        <p class="product-description">智慧碳排放盤查與管理</p>
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
