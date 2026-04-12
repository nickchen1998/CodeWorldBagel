<script setup lang="ts">
useSeoMeta({
  title: '旅行日記 TravelDiary - 扣握貝果',
  description: '策劃記錄每一次旅行，以圖文並茂的方式珍藏每段旅途的美好時刻，與親友分享你的旅行故事。',
  ogTitle: '旅行日記 TravelDiary - 扣握貝果',
  ogDescription: '策劃記錄每一次旅行，以圖文並茂的方式珍藏每段旅途的美好時刻，與親友分享你的旅行故事。',
  ogImage: '/images/travel-diary/hero.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

const showcases = [
  {
    src: '/images/travel-diary/hero.png',
    title: '規劃你的旅行行程',
    description: '建立旅行計畫，安排每日行程與景點，從靈感到出發一氣呵成。'
  },
  {
    src: '/images/travel-diary/hero-2.png',
    title: '圖文並茂記錄旅程',
    description: '以照片和文字記錄旅途中的每個精彩瞬間，留住珍貴回憶。'
  },
  {
    src: '/images/travel-diary/hero-3.png',
    title: '與親友分享故事',
    description: '將旅行日記分享給親友，讓美好回憶不只留在自己心中。'
  },
]

const features = [
  {
    icon: 'search',
    title: '搜尋探索',
    description: '依國家、城市、日期快速篩選，輕鬆回顧過往旅程'
  },
  {
    icon: 'plan',
    title: '規劃行程',
    description: '建立未來旅行計畫，從靈感到出發一氣呵成'
  },
  {
    icon: 'journal',
    title: '紀錄旅程',
    description: '以圖文並茂的方式，記錄旅途中的每個精彩瞬間'
  },
  {
    icon: 'share',
    title: '分享回憶',
    description: '與親友分享你的旅行故事，讓美好回憶流傳'
  }
]

const destinations = [
  { city: '日本・廣島', image: '/images/travel-diary/hiroshima.jpg', href: 'https://travel-diary.io/journeys/34/itineraries/' },
  { city: '日本・大阪', image: '/images/travel-diary/osaka.jpg', href: 'https://travel-diary.io/journeys/36/itineraries/' },
  { city: '日本・東京', image: '/images/travel-diary/tokyo.jpg', href: 'https://travel-diary.io/journeys/35/itineraries/' }
]
</script>

<template>
  <div class="travel-diary-page">
    <!-- Hero -->
    <section class="td-hero">
      <div class="td-hero-bg"></div>
      <div class="container">
        <div class="td-hero-content">
          <div class="td-hero-badge">旅遊日誌</div>
          <div class="td-hero-icon">
            <img src="/images/travel-diary/icon.png" alt="旅行日記 TravelDiary" />
          </div>
          <h1 class="td-hero-title">旅行日記</h1>
          <p class="td-hero-subtitle">TravelDiary</p>
          <p class="td-hero-tagline">策劃記錄每一次旅行，<br>珍藏每段旅途的美好時刻。</p>
          <a href="https://travel-diary.io" target="_blank" rel="noopener noreferrer" class="btn btn-primary td-hero-btn">立即體驗</a>
        </div>
      </div>
    </section>

    <!-- Showcase -->
    <section class="td-showcase">
      <div class="container">
        <h2 class="td-section-title">產品預覽</h2>
        <p class="td-section-subtitle">探索旅行日記的核心體驗</p>
        <div
          v-for="(item, index) in showcases"
          :key="item.src"
          class="td-showcase-item"
          :class="{ 'td-showcase-reverse': index % 2 !== 0 }"
        >
          <div class="td-showcase-image">
            <img :src="item.src" :alt="item.title" />
          </div>
          <div class="td-showcase-text">
            <h3 class="td-showcase-title">{{ item.title }}</h3>
            <p class="td-showcase-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="td-features">
      <div class="container">
        <h2 class="td-section-title">核心功能</h2>
        <p class="td-section-subtitle">讓每一段旅程都值得被記住</p>
        <div class="td-features-grid">
          <div v-for="feature in features" :key="feature.title" class="td-feature-card">
            <div class="td-feature-icon">
              <svg v-if="feature.icon === 'journal'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M5 4h18a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/>
                <path d="M9 9h10M9 13h10M9 17h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
              <svg v-if="feature.icon === 'search'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.8"/>
                <path d="M18 18l6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
              <svg v-if="feature.icon === 'share'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="20" cy="6" r="4" stroke="currentColor" stroke-width="1.8"/>
                <circle cx="8" cy="14" r="4" stroke="currentColor" stroke-width="1.8"/>
                <circle cx="20" cy="22" r="4" stroke="currentColor" stroke-width="1.8"/>
                <path d="M11.5 12L16.5 8M11.5 16L16.5 20" stroke="currentColor" stroke-width="1.8"/>
              </svg>
              <svg v-if="feature.icon === 'plan'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" stroke-width="1.8"/>
                <path d="M4 10h20M10 4v20" stroke="currentColor" stroke-width="1.8"/>
                <path d="M14 15l2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="td-feature-title">{{ feature.title }}</h3>
            <p class="td-feature-desc">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Destinations -->
    <section class="td-preview">
      <div class="container">
        <h2 class="td-section-title">探索旅程</h2>
        <p class="td-section-subtitle">瀏覽世界各地的精彩旅行紀錄</p>
        <div class="td-destinations-grid">
          <a v-for="dest in destinations" :key="dest.city" :href="dest.href" target="_blank" rel="noopener noreferrer" class="td-destination-card">
            <div class="td-destination-image">
              <img :src="dest.image" :alt="dest.city" loading="lazy" />
            </div>
            <div class="td-destination-label">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1C4.5 1 2.5 3 2.5 5.5C2.5 9 7 13 7 13C7 13 11.5 9 11.5 5.5C11.5 3 9.5 1 7 1Z" stroke="currentColor" stroke-width="1.2"/>
                <circle cx="7" cy="5.5" r="1.5" stroke="currentColor" stroke-width="1.2"/>
              </svg>
              <span>{{ dest.city }}</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="td-cta">
      <div class="container">
        <div class="td-cta-inner">
          <h2 class="td-cta-title">開始記錄你的旅程</h2>
          <p class="td-cta-desc">每段旅途都有故事，讓旅行日記幫你珍藏。</p>
          <a href="https://travel-diary.io" target="_blank" rel="noopener noreferrer" class="btn btn-primary td-cta-btn">立即體驗</a>
        </div>
      </div>
    </section>

    <ContactSection default-product="travel-diary" />
  </div>
</template>

<style scoped>
.travel-diary-page {
  --td-accent: var(--color-primary);
  --td-accent-dark: var(--color-primary-dark);
  --td-accent-light: var(--color-primary-light);
}

/* Hero */
.td-hero {
  position: relative;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  padding: 100px 0 80px;
  overflow: hidden;
}

.td-hero .container {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
}

.td-hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(166, 139, 75, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(139, 115, 64, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

.td-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 560px;
}

.td-hero-badge {
  display: inline-block;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--td-accent-dark);
  background-color: var(--td-accent-light);
  border-radius: 20px;
  margin-bottom: 24px;
}

.td-hero-icon {
  margin-bottom: 24px;
}

.td-hero-icon img {
  width: 80px;
  height: 80px;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(166, 139, 75, 0.25);
}

.td-hero-title {
  font-size: 52px;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 8px;
}

.td-hero-subtitle {
  font-size: 20px;
  font-weight: 500;
  color: var(--td-accent-dark);
  margin-bottom: 20px;
}

.td-hero-tagline {
  font-size: 17px;
  color: var(--color-text-light);
  line-height: 1.7;
  margin-bottom: 36px;
}

.td-hero-btn {
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 10px;
}

/* Showcase */
.td-showcase {
  padding: 80px 0;
}

.td-showcase-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 40px 0;
}

.td-showcase-item + .td-showcase-item {
  border-top: 1px solid var(--color-border);
}

.td-showcase-reverse {
  direction: rtl;
}

.td-showcase-reverse > * {
  direction: ltr;
}

.td-showcase-image {
  display: flex;
  justify-content: center;
}

.td-showcase-image img {
  width: 100%;
  max-width: 480px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-border);
}

.td-showcase-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.td-showcase-title {
  font-size: 26px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
  letter-spacing: -0.01em;
}

.td-showcase-desc {
  font-size: 16px;
  color: var(--color-text-light);
  line-height: 1.7;
}

/* Section titles */
.td-section-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.td-section-subtitle {
  font-size: 16px;
  color: var(--color-text-light);
  text-align: center;
  margin-bottom: 48px;
}

/* Features */
.td-features {
  padding: 80px 0;
  background-color: var(--color-background-alt);
}

.td-features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.td-feature-card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 28px 24px;
  text-align: center;
  transition: var(--transition);
}

.td-feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  border-color: var(--td-accent-light);
}

.td-feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--td-accent-light);
  color: var(--td-accent-dark);
  margin-bottom: 16px;
}

.td-feature-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
}

.td-feature-desc {
  font-size: 14px;
  color: var(--color-text-light);
  line-height: 1.6;
}

/* Destinations */
.td-preview {
  padding: 80px 0;
}

.td-destinations-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.td-destination-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: var(--transition);
}

.td-destination-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.td-destination-image {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  background-color: var(--color-background-alt);
  overflow: hidden;
}

.td-destination-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.td-destination-label {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--td-accent-dark);
}

/* CTA */
.td-cta {
  padding: 80px 0;
  background-color: var(--color-background-alt);
}

.td-cta-inner {
  text-align: center;
  max-width: 480px;
  margin: 0 auto;
}

.td-cta-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
}

.td-cta-desc {
  font-size: 16px;
  color: var(--color-text-light);
  margin-bottom: 28px;
  line-height: 1.6;
}

.td-cta-btn {
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 10px;
}

/* Responsive */
@media (max-width: 1024px) {
  .td-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .td-showcase-item {
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .td-hero {
    min-height: auto;
    padding: 40px 0;
  }

  .td-hero-content {
    min-height: calc(100dvh - 60px - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .td-hero-title {
    font-size: 36px;
  }

  .td-showcase {
    padding: 60px 0;
  }

  .td-showcase-item {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
  }

  .td-showcase-reverse {
    direction: ltr;
  }

  .td-showcase-image img {
    max-width: 100%;
  }

  .td-showcase-title {
    font-size: 22px;
  }

  .td-features {
    padding: 60px 0;
  }

  .td-features-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .td-destinations-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .td-section-title {
    font-size: 26px;
  }

  .td-cta {
    padding: 60px 0;
  }
}
</style>
