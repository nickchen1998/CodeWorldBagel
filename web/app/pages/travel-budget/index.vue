<script setup lang="ts">
const siteUrl = 'https://code-world-bagel.com'
const pageUrl = `${siteUrl}/travel-budget`

useSeoMeta({
  title: '熊好算 TravelBudget - 扣握貝果',
  description: '海外旅遊輕量化記帳 App，輕鬆解決外幣輸入、匯率換算、預算控管的痛點。',
  ogTitle: '熊好算 TravelBudget - 扣握貝果',
  ogDescription: '海外旅遊輕量化記帳 App，輕鬆解決外幣輸入、匯率換算、預算控管的痛點。',
  ogImage: `${siteUrl}/images/travel-budget/screenshot-1.png`,
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
        name: '熊好算 TravelBudget',
        description: '海外旅遊輕量化記帳 App，輕鬆解決外幣輸入、匯率換算、預算控管的痛點。',
        url: pageUrl,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'iOS',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'TWD'
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
    src: '/images/travel-budget/screenshot-1.png',
    title: '管理你的每趟旅行',
    description: '一目瞭然所有旅行紀錄，花費總覽、幣別與日期一眼掌握。'
  },
  {
    src: '/images/travel-budget/screenshot-3.png',
    title: '逐筆記錄每筆花費',
    description: '依日期分組瀏覽消費明細，支援多幣別輸入，自動換算回主幣別。'
  },
  {
    src: '/images/travel-budget/screenshot-2.png',
    title: '圖表化你的旅遊開支',
    description: '以圓餅圖與長條圖分析消費分類佔比，輕鬆掌握錢都花在哪。'
  },
  {
    src: '/images/travel-budget/screenshot-4.png',
    title: '快速開啟新旅行',
    description: '設定旅行名稱、日期、幣別與預算，幾秒內完成建立。'
  },
  {
    src: '/images/travel-budget/screenshot-5.png',
    title: '旅伴分帳一目瞭然',
    description: '自動計算每位成員的應付金額，誰該付給誰、付多少，清清楚楚。'
  },
]

const features = [
  {
    icon: 'currency',
    title: '外幣記帳',
    description: '支援多種幣別，旅途中直接以當地貨幣輸入金額，自動換算為主幣別'
  },
  {
    icon: 'rate',
    title: '即時匯率',
    description: '每日自動更新匯率，歷史消費匯率永久保存，換率更新不影響舊紀錄'
  },
  {
    icon: 'budget',
    title: '預算控管',
    description: '設定旅行預算，即時掌握剩餘額度與每日可花費金額，不超支'
  },
  {
    icon: 'collab',
    title: '共同記帳',
    description: '上傳至雲端後可邀請同行夥伴協作，一起記錄旅途中的每筆花費'
  }
]
</script>

<template>
  <div class="travel-budget-page">
    <!-- Hero -->
    <section class="tb-hero">
      <div class="tb-hero-bg"></div>
      <div class="container">
        <div class="tb-hero-content">
          <div class="tb-hero-badge">旅遊記帳</div>
          <div class="tb-hero-icon">
            <img src="/images/travel-budget/icon.png" alt="熊好算 TravelBudget" />
          </div>
          <h1 class="tb-hero-title">熊好算</h1>
          <p class="tb-hero-subtitle">TravelBudget</p>
          <p class="tb-hero-tagline">海外旅遊輕量化記帳，<br>外幣、匯率、預算一手掌握。</p>
          <div class="tb-hero-actions">
            <a
              href="https://apps.apple.com/tw/app/%E7%86%8A%E5%A5%BD%E7%AE%97-travelbudget/id6761038388"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary tb-hero-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store 下載
            </a>
          </div>
          <NuxtLink to="/travel-budget/privacy-policy" class="tb-privacy-link">隱私權政策</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Showcase -->
    <section class="tb-showcase">
      <div class="container">
        <h2 class="tb-section-title">產品預覽</h2>
        <p class="tb-section-subtitle">滑動探索熊好算的核心體驗</p>
        <div
          v-for="(item, index) in showcases"
          :key="item.src"
          class="tb-showcase-item"
          :class="{ 'tb-showcase-reverse': index % 2 !== 0 }"
        >
          <div class="tb-showcase-image">
            <img :src="item.src" :alt="item.title" />
          </div>
          <div class="tb-showcase-text">
            <h3 class="tb-showcase-title">{{ item.title }}</h3>
            <p class="tb-showcase-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="tb-features">
      <div class="container">
        <h2 class="tb-section-title">核心功能</h2>
        <p class="tb-section-subtitle">旅遊記帳，就該這麼簡單</p>
        <div class="tb-features-grid">
          <div v-for="feature in features" :key="feature.title" class="tb-feature-card">
            <div class="tb-feature-icon">
              <!-- Currency -->
              <svg v-if="feature.icon === 'currency'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="10" stroke="currentColor" stroke-width="1.8"/>
                <path d="M14 8v12M10.5 10.5c0-1.38 1.57-2.5 3.5-2.5s3.5 1.12 3.5 2.5c0 1.38-1.57 2.5-3.5 2.5s-3.5 1.12-3.5 2.5 1.57 2.5 3.5 2.5 3.5-1.12 3.5-2.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
              <!-- Rate -->
              <svg v-if="feature.icon === 'rate'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M4 20l6-6 4 4 10-10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18 8h6v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <!-- Budget -->
              <svg v-if="feature.icon === 'budget'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="3" y="7" width="22" height="16" rx="3" stroke="currentColor" stroke-width="1.8"/>
                <path d="M3 12h22" stroke="currentColor" stroke-width="1.8"/>
                <circle cx="8" cy="17" r="1.5" fill="currentColor"/>
                <path d="M12 17h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                <path d="M8 5v2M14 5v2M20 5v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
              <!-- Collab -->
              <svg v-if="feature.icon === 'collab'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="10" cy="10" r="4" stroke="currentColor" stroke-width="1.8"/>
                <circle cx="20" cy="10" r="4" stroke="currentColor" stroke-width="1.8"/>
                <path d="M3 24c0-3.87 3.13-7 7-7s7 3.13 7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                <path d="M22 17c1.66 0 3 1.34 3 3v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="tb-feature-title">{{ feature.title }}</h3>
            <p class="tb-feature-desc">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="tb-cta">
      <div class="container">
        <div class="tb-cta-inner">
          <h2 class="tb-cta-title">開始你的旅遊記帳</h2>
          <p class="tb-cta-desc">免費下載，地端與雲端皆可使用，<br>一個人出遊或多人共遊都適合。</p>
          <a
            href="https://apps.apple.com/tw/app/%E7%86%8A%E5%A5%BD%E7%AE%97-travelbudget/id6761038388"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary tb-cta-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store 下載
          </a>
          <NuxtLink to="/travel-budget/privacy-policy" class="tb-privacy-link">隱私權政策</NuxtLink>
        </div>
      </div>
    </section>

    <ContactSection default-product="travel-budget" />
  </div>
</template>

<style scoped>
.travel-budget-page {
  --tb-accent: #E8763A;
  --tb-accent-dark: #c45e25;
  --tb-accent-light: #fdf0e8;
}

/* Hero */
.tb-hero {
  position: relative;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  padding: 100px 0 80px;
  overflow: hidden;
}

.tb-hero .container {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
}

.tb-hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(232, 118, 58, 0.1) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(232, 118, 58, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.tb-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 560px;
}

.tb-hero-badge {
  display: inline-block;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--tb-accent-dark);
  background-color: var(--tb-accent-light);
  border-radius: 20px;
  margin-bottom: 24px;
}

.tb-hero-icon {
  margin-bottom: 24px;
}

.tb-hero-icon img {
  width: 80px;
  height: 80px;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(232, 118, 58, 0.25);
}

.tb-hero-title {
  font-size: 52px;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 8px;
}

.tb-hero-subtitle {
  font-size: 20px;
  font-weight: 500;
  color: var(--tb-accent-dark);
  margin-bottom: 20px;
}

.tb-hero-tagline {
  font-size: 17px;
  color: var(--color-text-light);
  line-height: 1.7;
  margin-bottom: 36px;
}

.tb-hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.tb-hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 10px;
  background-color: var(--tb-accent);
  color: white;
  border: none;
  text-decoration: none;
  transition: var(--transition);
}

.tb-hero-btn:hover {
  background-color: var(--tb-accent-dark);
  transform: translateY(-2px);
}

/* Showcase */
.tb-showcase {
  padding: 80px 0;
}

.tb-showcase-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 40px 0;
}

.tb-showcase-item + .tb-showcase-item {
  border-top: 1px solid var(--color-border);
}

.tb-showcase-reverse {
  direction: rtl;
}

.tb-showcase-reverse > * {
  direction: ltr;
}

.tb-showcase-image {
  display: flex;
  justify-content: center;
}

.tb-showcase-image img {
  width: 100%;
  max-width: 260px;
  border-radius: 28px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
  border: 1px solid var(--color-border);
}

.tb-showcase-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tb-showcase-title {
  font-size: 26px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
  letter-spacing: -0.01em;
}

.tb-showcase-desc {
  font-size: 16px;
  color: var(--color-text-light);
  line-height: 1.7;
}

/* Section titles */
.tb-section-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.tb-section-subtitle {
  font-size: 16px;
  color: var(--color-text-light);
  text-align: center;
  margin-bottom: 48px;
}

/* Features */
.tb-features {
  padding: 80px 0;
  background-color: var(--color-background-alt);
}

.tb-features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.tb-feature-card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 28px 24px;
  text-align: center;
  transition: var(--transition);
}

.tb-feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  border-color: var(--tb-accent-light);
}

.tb-feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--tb-accent-light);
  color: var(--tb-accent-dark);
  margin-bottom: 16px;
}

.tb-feature-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
}

.tb-feature-desc {
  font-size: 14px;
  color: var(--color-text-light);
  line-height: 1.6;
}

/* CTA */
.tb-cta {
  padding: 80px 0;
}

.tb-cta-inner {
  text-align: center;
  max-width: 480px;
  margin: 0 auto;
}

.tb-cta-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
}

.tb-cta-desc {
  font-size: 16px;
  color: var(--color-text-light);
  margin-bottom: 28px;
  line-height: 1.6;
}

.tb-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 10px;
  background-color: var(--tb-accent);
  color: white;
  border: none;
  text-decoration: none;
  transition: var(--transition);
}

.tb-cta-btn:hover {
  background-color: var(--tb-accent-dark);
  transform: translateY(-2px);
}

.tb-privacy-link {
  display: block;
  margin-top: 12px;
  font-size: 13px;
  color: var(--color-text-light);
  transition: var(--transition);
}

.tb-privacy-link:hover {
  color: var(--tb-accent-dark);
}

/* Responsive */
@media (max-width: 1024px) {
  .tb-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tb-showcase-item {
    gap: 40px;
  }

  .tb-showcase-image img {
    max-width: 220px;
  }
}

@media (max-width: 768px) {
  .tb-hero {
    min-height: auto;
    padding: 40px 0;
  }

  .tb-hero-content {
    min-height: calc(100dvh - 60px - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .tb-hero-title {
    font-size: 36px;
  }

  .tb-showcase {
    padding: 60px 0;
  }

  .tb-showcase-item {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
  }

  .tb-showcase-reverse {
    direction: ltr;
  }

  .tb-showcase-image img {
    max-width: 200px;
  }

  .tb-showcase-title {
    font-size: 22px;
  }

  .tb-features {
    padding: 60px 0;
  }

  .tb-features-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .tb-section-title {
    font-size: 26px;
  }

  .tb-cta {
    padding: 60px 0;
  }
}
</style>
