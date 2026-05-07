<script setup lang="ts">
const siteUrl = 'https://code-world-bagel.com'
const pageUrl = `${siteUrl}/drinkla`

useSeoMeta({
  title: '喝啦 DrinkLa - 扣握貝果',
  description: '為你真實使用的容器而設計的飲水紀錄 App，雙擊就完成今天的補水。安靜、不打擾，可同步「健康」App。',
  ogTitle: '喝啦 DrinkLa - 扣握貝果',
  ogDescription: '為你真實使用的容器而設計的飲水紀錄 App，雙擊就完成今天的補水。安靜、不打擾，可同步「健康」App。',
  ogImage: `${siteUrl}/images/drinkla/02-home.png`,
  ogUrl: pageUrl,
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: '喝啦 DrinkLa',
        description: '為你真實使用的容器而設計的飲水紀錄 App，雙擊就完成今天的補水。安靜、不打擾，可同步「健康」App。',
        url: pageUrl,
        applicationCategory: 'HealthApplication',
        operatingSystem: 'iOS',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'TWD',
          availability: 'https://schema.org/PreOrder'
        },
        author: {
          '@type': 'Organization',
          name: '扣握貝果 CodeWorldBagel'
        }
      })
    }
  ]
})

const showcases = [
  {
    src: '/images/drinkla/01-onboarding-welcome.png',
    title: '幾個問題，算出你今天該喝多少',
    description: '輸入暱稱、體重、活動量與所處環境，喝啦會幫你算出每日水分目標，不用翻計算機、不用查表。'
  },
  {
    src: '/images/drinkla/02-home.png',
    title: '雙擊整瓶整杯，省去手動輸入',
    description: '把你真正在用的保溫瓶、馬克杯都建檔。要紀錄時：選一次、再點一次就完成，不用打字、不用拉滑桿。'
  },
  {
    src: '/images/drinkla/03-history.png',
    title: '月曆檢視每天的補水',
    description: '一眼看出哪幾天有達標、哪幾天偷懶。每筆紀錄都帶上時間與來源容器，回看不用大腦。'
  },
  {
    src: '/images/drinkla/04-settings.png',
    title: '提醒、容器、目標一頁搞定',
    description: '可在自訂時段、頻率裡安靜提醒，通知上的快捷按鈕一按就紀錄。預設整合「健康」App，跟其他健康資料一起呈現。'
  },
]

const features = [
  {
    icon: 'bottle',
    title: '個人化容器',
    description: '保溫瓶、馬克杯、玻璃杯各自建檔。每個都能改名、改容量、改顏色 emoji'
  },
  {
    icon: 'tap',
    title: '雙擊紀錄',
    description: '選容器、再點一次就紀錄一次。鎖屏通知上也能直接點按鈕記錄'
  },
  {
    icon: 'widget',
    title: '主畫面與鎖屏小工具',
    description: '5 種尺寸，主畫面、鎖屏、Apple Watch 都看得到今日進度'
  },
  {
    icon: 'health',
    title: '同步「健康」App',
    description: '寫入「健康」App 的水分項目，趨勢跟其他指標一起檢視'
  }
]
</script>

<template>
  <div class="drinkla-page">
    <!-- Hero -->
    <section class="dl-hero">
      <div class="dl-hero-bg"></div>
      <div class="container">
        <div class="dl-hero-content">
          <div class="dl-hero-badge">健康紀錄</div>
          <div class="dl-hero-status-badge">產品準備中</div>
          <div class="dl-hero-icon">
            <img src="/images/drinkla/icon.png" alt="喝啦 DrinkLa" />
          </div>
          <h1 class="dl-hero-title">喝啦</h1>
          <p class="dl-hero-subtitle">DrinkLa</p>
          <p class="dl-hero-tagline">為你真實使用的容器而設計，<br>雙擊就完成今天的補水紀錄。</p>
          <div class="dl-hero-actions">
            <button class="btn btn-primary dl-hero-btn dl-btn-disabled" disabled>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              即將上線
            </button>
          </div>
          <div class="dl-secondary-links">
            <NuxtLink to="/drinkla/privacy-policy" class="dl-privacy-link">隱私權政策</NuxtLink>
            <span class="dl-link-divider">·</span>
            <NuxtLink to="/drinkla/water-references" class="dl-privacy-link">飲水量文獻</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="dl-features">
      <div class="container">
        <h2 class="dl-section-title">核心功能</h2>
        <p class="dl-section-subtitle">把每天 2,000 ml 的目標，變成自然的小習慣</p>
        <div class="dl-features-grid">
          <div v-for="feature in features" :key="feature.title" class="dl-feature-card">
            <div class="dl-feature-icon">
              <svg v-if="feature.icon === 'bottle'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M11 4h6v3a4 4 0 0 1 2 3.5v11a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-11A4 4 0 0 1 11 7V4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                <path d="M9.5 16.5h9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
              <svg v-if="feature.icon === 'tap'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M11 14V8a2 2 0 1 1 4 0v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                <path d="M15 13v-2a2 2 0 1 1 4 0v6c0 3.314-2.686 6-6 6h-1.5c-2 0-2.8-.7-4-2.5l-3-4.5a2 2 0 0 1 .5-2.7l1-.6 4 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-if="feature.icon === 'widget'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="4" y="4" width="9" height="9" rx="2" stroke="currentColor" stroke-width="1.8"/>
                <rect x="15" y="4" width="9" height="9" rx="2" stroke="currentColor" stroke-width="1.8"/>
                <rect x="4" y="15" width="9" height="9" rx="2" stroke="currentColor" stroke-width="1.8"/>
                <circle cx="19.5" cy="19.5" r="4.5" stroke="currentColor" stroke-width="1.8"/>
              </svg>
              <svg v-if="feature.icon === 'health'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 23.5s-8-4.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6.5-8 11-8 11z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                <path d="M10.5 13h2l1-2 2 4 1-2h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="dl-feature-title">{{ feature.title }}</h3>
            <p class="dl-feature-desc">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Showcase -->
    <section class="dl-showcase">
      <div class="container">
        <h2 class="dl-section-title">產品預覽</h2>
        <p class="dl-section-subtitle">滑動探索喝啦的核心體驗</p>
        <div
          v-for="(item, index) in showcases"
          :key="item.src"
          class="dl-showcase-item"
          :class="{ 'dl-showcase-reverse': index % 2 !== 0 }"
        >
          <div class="dl-showcase-image">
            <img :src="item.src" :alt="item.title" />
          </div>
          <div class="dl-showcase-text">
            <h3 class="dl-showcase-title">{{ item.title }}</h3>
            <p class="dl-showcase-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="dl-cta">
      <div class="container">
        <div class="dl-cta-inner">
          <h2 class="dl-cta-title">今天，喝足了嗎？</h2>
          <p class="dl-cta-desc">免費下載，把你習慣的瓶子杯子建檔，<br>一個動作就把今天的水紀錄下來。</p>
          <button class="btn btn-primary dl-cta-btn dl-btn-disabled" disabled>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            即將上線
          </button>
          <div class="dl-secondary-links">
            <NuxtLink to="/drinkla/privacy-policy" class="dl-privacy-link">隱私權政策</NuxtLink>
            <span class="dl-link-divider">·</span>
            <NuxtLink to="/drinkla/water-references" class="dl-privacy-link">飲水量文獻</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <ContactSection default-product="drinkla" />
  </div>
</template>

<style scoped>
.drinkla-page {
  --dl-accent: #3B82C4;
  --dl-accent-dark: #2967a3;
  --dl-accent-light: #e8f1f9;
}

/* Hero */
.dl-hero {
  position: relative;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  padding: 100px 0 80px;
  overflow: hidden;
}

.dl-hero .container {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
}

.dl-hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(59, 130, 196, 0.1) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(124, 201, 194, 0.08) 0%, transparent 50%);
  pointer-events: none;
}

.dl-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 560px;
}

.dl-hero-badge {
  display: inline-block;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--dl-accent-dark);
  background-color: var(--dl-accent-light);
  border-radius: 20px;
  margin-bottom: 12px;
}

.dl-hero-status-badge {
  display: inline-block;
  margin-left: 8px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #b45309;
  background-color: #fef3c7;
  border-radius: 20px;
  margin-bottom: 24px;
}

.dl-hero-icon {
  margin-bottom: 24px;
}

.dl-hero-icon img {
  width: 80px;
  height: 80px;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(59, 130, 196, 0.25);
}

.dl-hero-title {
  font-size: 52px;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 8px;
}

.dl-hero-subtitle {
  font-size: 20px;
  font-weight: 500;
  color: var(--dl-accent-dark);
  margin-bottom: 20px;
}

.dl-hero-tagline {
  font-size: 17px;
  color: var(--color-text-light);
  line-height: 1.7;
  margin-bottom: 36px;
}

.dl-hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.dl-hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 10px;
  background-color: var(--dl-accent);
  color: white;
  border: none;
  text-decoration: none;
  transition: var(--transition);
}

.dl-hero-btn:hover {
  background-color: var(--dl-accent-dark);
  transform: translateY(-2px);
}

/* Showcase */
.dl-showcase {
  padding: 80px 0;
}

.dl-showcase-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 40px 0;
}

.dl-showcase-item + .dl-showcase-item {
  border-top: 1px solid var(--color-border);
}

.dl-showcase-reverse {
  direction: rtl;
}

.dl-showcase-reverse > * {
  direction: ltr;
}

.dl-showcase-image {
  display: flex;
  justify-content: center;
}

.dl-showcase-image img {
  width: 100%;
  max-width: 260px;
  border-radius: 28px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
  border: 1px solid var(--color-border);
}

.dl-showcase-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.dl-showcase-title {
  font-size: 26px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
  letter-spacing: -0.01em;
}

.dl-showcase-desc {
  font-size: 16px;
  color: var(--color-text-light);
  line-height: 1.7;
}

/* Section titles */
.dl-section-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.dl-section-subtitle {
  font-size: 16px;
  color: var(--color-text-light);
  text-align: center;
  margin-bottom: 48px;
}

/* Features */
.dl-features {
  padding: 80px 0;
  background-color: var(--color-background-alt);
}

.dl-features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.dl-feature-card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 28px 24px;
  text-align: center;
  transition: var(--transition);
}

.dl-feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  border-color: var(--dl-accent-light);
}

.dl-feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--dl-accent-light);
  color: var(--dl-accent-dark);
  margin-bottom: 16px;
}

.dl-feature-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
}

.dl-feature-desc {
  font-size: 14px;
  color: var(--color-text-light);
  line-height: 1.6;
}

/* CTA */
.dl-cta {
  padding: 80px 0;
}

.dl-cta-inner {
  text-align: center;
  max-width: 480px;
  margin: 0 auto;
}

.dl-cta-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
}

.dl-cta-desc {
  font-size: 16px;
  color: var(--color-text-light);
  margin-bottom: 28px;
  line-height: 1.6;
}

.dl-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 10px;
  background-color: var(--dl-accent);
  color: white;
  border: none;
  text-decoration: none;
  transition: var(--transition);
}

.dl-cta-btn:hover {
  background-color: var(--dl-accent-dark);
  transform: translateY(-2px);
}

.dl-btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.dl-secondary-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
}

.dl-privacy-link {
  font-size: 13px;
  color: var(--color-text-light);
  transition: var(--transition);
}

.dl-privacy-link:hover {
  color: var(--dl-accent-dark);
}

.dl-link-divider {
  font-size: 13px;
  color: var(--color-text-light);
  opacity: 0.6;
}

/* Responsive */
@media (max-width: 1024px) {
  .dl-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .dl-showcase-item {
    gap: 40px;
  }

  .dl-showcase-image img {
    max-width: 220px;
  }
}

@media (max-width: 768px) {
  .dl-hero {
    min-height: auto;
    padding: 40px 0;
  }

  .dl-hero-content {
    min-height: calc(100dvh - 60px - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .dl-hero-title {
    font-size: 36px;
  }

  .dl-showcase {
    padding: 60px 0;
  }

  .dl-showcase-item {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
  }

  .dl-showcase-reverse {
    direction: ltr;
  }

  .dl-showcase-image img {
    max-width: 200px;
  }

  .dl-showcase-title {
    font-size: 22px;
  }

  .dl-features {
    padding: 60px 0;
  }

  .dl-features-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .dl-section-title {
    font-size: 26px;
  }

  .dl-cta {
    padding: 60px 0;
  }
}
</style>
