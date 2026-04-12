<script setup lang="ts">
useSeoMeta({
  title: '扣握貝果 - CodeWorldBagel',
  description: '我們專門協助你將想法設計、開發並落地成為系統，讓你的想法跑得比世界更快。',
  ogTitle: '扣握貝果 - CodeWorldBagel',
  ogDescription: '我們專門協助你將想法設計、開發並落地成為系統，讓你的想法跑得比世界更快。',
  ogImage: '/apple-touch-icon.png',
  ogType: 'website',
  twitterCard: 'summary',
})
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-logo">
            <img src="/apple-touch-icon.png" alt="扣握貝果" />
          </div>
          <h1 class="hero-title">扣握貝果</h1>
          <p class="hero-subtitle">CodeWorldBagel</p>
          <p class="hero-description">我們專門協助你將想法設計、開發並落地成為系統，<br>讓你的想法跑得比世界更快。</p>
        </div>
      </div>
      <div class="hero-background"></div>
    </section>

    <!-- Products Section -->
    <section class="products">
      <div class="container">
        <h2 class="products-title">產品列表</h2>
        <p class="products-subtitle">當然，我們也會自己打造產品</p>
        <div class="products-grid">
          <NuxtLink to="/travel-budget" class="product-card">
            <img src="/images/travel-budget/icon.png" alt="熊好算 TravelBudget" class="product-icon-img" />
            <h3 class="product-name">熊好算</h3>
            <p class="product-desc">海外旅遊輕量化記帳，外幣換算、預算控管、多人協作一手掌握</p>
          </NuxtLink>
          <NuxtLink to="/travel-language" class="product-card">
            <img src="/images/travel-language/icon.png" alt="熊好講 TravelLanguage" class="product-icon-img" />
            <h3 class="product-name">熊好講</h3>
            <p class="product-desc">旅遊日韓語情境對話學習，把旅遊對話變成好玩的破關練習</p>
          </NuxtLink>
          <NuxtLink to="/travel-diary" class="product-card">
            <img src="/images/travel-diary/icon.png" alt="旅行日記 TravelDiary" class="product-icon-img" />
            <h3 class="product-name">旅行日記</h3>
            <p class="product-desc">策劃記錄每一次旅行，珍藏每段旅途的美好時刻</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <ContactSection />
  </div>
</template>

<style scoped>
.home {
  min-height: calc(100vh - var(--header-height));
}

/* Hero Section */
.hero {
  position: relative;
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 80px 0;
}

.hero-logo {
  margin-bottom: 24px;
}

.hero-logo img {
  width: 120px;
  height: 120px;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(166, 139, 75, 0.3);
}

.hero-title {
  font-size: 56px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 24px;
  font-weight: 500;
  color: var(--color-primary-dark);
  margin-bottom: 24px;
}

.hero-description {
  font-size: 20px;
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.hero-actions .btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(166, 139, 75, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

/* Products Section */
.products {
  padding: 80px 0;
  background-color: var(--color-background-alt);
}

.products-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 8px;
}

.products-subtitle {
  font-size: 16px;
  color: var(--color-text-light);
  text-align: center;
  margin-bottom: 48px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.product-card {
  background-color: var(--color-background);
  padding: 32px;
  border-radius: 16px;
  text-align: center;
  border: 1px solid var(--color-border);
  transition: var(--transition);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  border-color: var(--color-primary-light);
}

.product-icon-img {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  margin-bottom: 20px;
  object-fit: contain;
}

.product-name {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 12px;
}

.product-desc {
  font-size: 15px;
  color: var(--color-text-light);
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .hero-description {
    font-size: 16px;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
