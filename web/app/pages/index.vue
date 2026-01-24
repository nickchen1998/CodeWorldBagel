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
          <NuxtLink to="/travel-diary" class="product-card">
            <div class="product-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6 6h20a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="currentColor" stroke-width="2"/>
                <path d="M10 12h12M10 16h12M10 20h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="product-name">旅行日記</h3>
            <p class="product-desc">策劃記錄每一次旅行，珍藏每段旅途的美好時刻</p>
          </NuxtLink>
          <NuxtLink to="/hepha-carbon" class="product-card">
            <img src="/images/hepha-carbon/icon.png" alt="話燒碳盤查系統" class="product-icon-img" />
            <h3 class="product-name">話燒碳盤查系統</h3>
            <p class="product-desc">智慧碳排放盤查與管理，輕鬆掌握企業碳足跡</p>
          </NuxtLink>
          <NuxtLink to="/cotton-friend" class="product-card">
            <div class="product-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="13" r="7" stroke="currentColor" stroke-width="2"/>
                <path d="M10 22c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M16 10v6M13 13h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="product-name">棉棉好朋友</h3>
            <p class="product-desc">智慧生理期管理 Line 機器人，貼心守護你的每一天</p>
          </NuxtLink>
          <NuxtLink to="/rag-pilot" class="product-card">
            <img src="/images/rag-pilot/icon.png" alt="數據領航員 RAGPilot" class="product-icon-img" />
            <h3 class="product-name">數據領航員 RAGPilot</h3>
            <p class="product-desc">協助你在大量政府公開資料當中快速找尋想要的內容並進行深度研究</p>
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
  grid-template-columns: repeat(2, 1fr);
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

.product-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background-color: var(--color-primary-light);
  border-radius: 16px;
  color: var(--color-primary-dark);
  margin-bottom: 20px;
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
