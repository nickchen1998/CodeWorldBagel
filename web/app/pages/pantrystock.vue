<script setup lang="ts">
const siteUrl = 'https://code-world-bagel.com'
const pageUrl = `${siteUrl}/pantrystock`
const appUrl = 'https://pantrystock.zeabur.app'

useSeoMeta({
  title: '柴米油鹽 PantryStock - 扣握貝果',
  description: '讓 Claude AI 陪你做台股模擬操盤實驗。每日自動分析、產出買賣建議，你決定是否執行、回報後自動記帳。',
  ogTitle: '柴米油鹽 PantryStock - 扣握貝果',
  ogDescription: '讓 Claude AI 陪你做台股模擬操盤實驗。每日自動分析、產出買賣建議，你決定是否執行、回報後自動記帳。',
  ogImage: `${siteUrl}/images/pantrystock/screenshot-1.png`,
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
        name: '柴米油鹽 PantryStock',
        description: '讓 Claude AI 陪你做台股模擬操盤實驗。每日自動分析、產出買賣建議，你決定是否執行、回報後自動記帳。',
        url: pageUrl,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
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
    src: '/images/pantrystock/screenshot-1.png',
    title: '一眼看所有實驗的盈虧',
    description: '跨專案累計損益、資金配置、排序篩選全在一頁。每張卡片顯示專案狀態、P&L、現金與持股比例。'
  },
  {
    src: '/images/pantrystock/screenshot-2.png',
    title: 'Claude 每日分析與買賣建議',
    description: 'Claude 每天依你設定的時點自動上工，讀取持倉、蒐集盤勢、產出 BUY / SELL / HOLD 建議，每則都附信心度與來源連結。'
  },
  {
    src: '/images/pantrystock/screenshot-3.png',
    title: '一鍵回報執行狀況',
    description: '看到建議後自己決定要不要下單。實際成交後填股數與均價，後端自動同步交易帳與資產快照。'
  },
  {
    src: '/images/pantrystock/screenshot-4.png',
    title: '接上 Claude MCP 只要兩步',
    description: '複製設定 prompt 貼到 Cowork 一鍵配好，或手動貼 JSON 到 Claude Desktop 設定檔。連接後 MCP tool 立即可用。'
  },
  {
    src: '/images/pantrystock/screenshot-5.png',
    title: '讓 Cowork 排程自動跑',
    description: '設定 Claude Cowork scheduled task，每天定時執行分析流程。你睡覺時它工作，隔天醒來看今日建議。'
  }
]

const features = [
  {
    icon: 'ai',
    title: 'AI 自動分析',
    description: 'Claude 每日 WebSearch 抓大盤、法人、族群、個股異常，用推薦附理由 + 來源 URL'
  },
  {
    icon: 'odd',
    title: '零股級精算',
    description: '預算硬上限 NT$50,000、週期上限 31 天，1 股也能試單，加權均價精算到股'
  },
  {
    icon: 'safe',
    title: '純模擬零託管',
    description: '不接券商 API、不下單、不碰你的錢。建議由你自己決定執行，帳號被入侵也只有紀錄'
  },
  {
    icon: 'mcp',
    title: 'MCP 一鍵接 Claude',
    description: '官方 Model Context Protocol 標準接口，Cowork 模式下你自己的 Claude 訂閱就能跑'
  }
]
</script>

<template>
  <div class="pantrystock-page">
    <!-- Hero -->
    <section class="ps-hero">
      <div class="ps-hero-bg"></div>
      <div class="container">
        <div class="ps-hero-content">
          <div class="ps-hero-badge">AI × 台股實驗</div>
          <div class="ps-hero-icon">
            <img src="/images/pantrystock/icon.png" alt="柴米油鹽 PantryStock" />
          </div>
          <h1 class="ps-hero-title">柴米油鹽</h1>
          <p class="ps-hero-subtitle">PantryStock</p>
          <p class="ps-hero-tagline">讓 Claude AI 陪你做台股模擬操盤實驗，<br>純紀錄、不託管、不碰真錢。</p>
          <div class="ps-hero-actions">
            <a
              :href="appUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary ps-hero-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 3h6v6"/>
                <path d="M10 14L21 3"/>
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              </svg>
              開始實驗
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="ps-features">
      <div class="container">
        <h2 class="ps-section-title">核心功能</h2>
        <p class="ps-section-subtitle">不是投顧、也不是下單機器人,是可控、可比較、可中止的小預算實驗框架</p>
        <div class="ps-features-grid">
          <div v-for="feature in features" :key="feature.title" class="ps-feature-card">
            <div class="ps-feature-icon">
              <!-- AI -->
              <svg v-if="feature.icon === 'ai'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 3C9 3 5 7 5 12c0 3 1.5 5.5 4 7v3a2 2 0 002 2h6a2 2 0 002-2v-3c2.5-1.5 4-4 4-7 0-5-4-9-9-9z" stroke="currentColor" stroke-width="1.8"/>
                <path d="M10 12a4 4 0 018 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                <circle cx="11" cy="11" r="0.8" fill="currentColor"/>
                <circle cx="17" cy="11" r="0.8" fill="currentColor"/>
              </svg>
              <!-- Odd lot (coin with fraction) -->
              <svg v-if="feature.icon === 'odd'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="10" stroke="currentColor" stroke-width="1.8"/>
                <path d="M9 18l10-8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                <circle cx="10.5" cy="10.5" r="1.5" fill="currentColor"/>
                <circle cx="17.5" cy="17.5" r="1.5" fill="currentColor"/>
              </svg>
              <!-- Shield (no custody) -->
              <svg v-if="feature.icon === 'safe'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 3l9 4v7c0 5-4 9-9 10-5-1-9-5-9-10V7l9-4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                <path d="M10 14l3 3 5-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <!-- MCP plug/connection -->
              <svg v-if="feature.icon === 'mcp'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="3" y="11" width="10" height="6" rx="2" stroke="currentColor" stroke-width="1.8"/>
                <path d="M13 14h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                <circle cx="22" cy="14" r="3" stroke="currentColor" stroke-width="1.8"/>
                <path d="M6 8v3M10 8v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="ps-feature-title">{{ feature.title }}</h3>
            <p class="ps-feature-desc">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Showcase -->
    <section class="ps-showcase">
      <div class="container">
        <h2 class="ps-section-title">產品預覽</h2>
        <p class="ps-section-subtitle">從建立實驗到每日分析的完整流程</p>
        <div
          v-for="(item, index) in showcases"
          :key="item.src"
          class="ps-showcase-item"
          :class="{ 'ps-showcase-reverse': index % 2 !== 0 }"
        >
          <div class="ps-showcase-image">
            <img :src="item.src" :alt="item.title" />
          </div>
          <div class="ps-showcase-text">
            <h3 class="ps-showcase-title">{{ item.title }}</h3>
            <p class="ps-showcase-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="ps-cta">
      <div class="container">
        <div class="ps-cta-inner">
          <h2 class="ps-cta-title">開始你的台股實驗</h2>
          <p class="ps-cta-desc">免費開放、純 Web、自備 Claude 訂閱,<br>登入後建一個實驗專案,今天就可以讓 Claude 開始分析。</p>
          <a
            :href="appUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary ps-cta-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 3h6v6"/>
              <path d="M10 14L21 3"/>
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            </svg>
            前往 pantrystock.zeabur.app
          </a>
          <p class="ps-cta-disclaimer">⚠ 僅供模擬操盤研究,不構成投資建議;所有建議皆由使用者自行訂閱的 Claude 產出。</p>
        </div>
      </div>
    </section>

    <ContactSection default-product="pantrystock" />
  </div>
</template>

<style scoped>
.pantrystock-page {
  --ps-accent: #006b7a;
  --ps-accent-dark: #004d58;
  --ps-accent-light: #e5f2f4;
}

/* Hero */
.ps-hero {
  position: relative;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  padding: 100px 0 80px;
  overflow: hidden;
}

.ps-hero .container {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
}

.ps-hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(0, 107, 122, 0.1) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(0, 107, 122, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.ps-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 560px;
}

.ps-hero-badge {
  display: inline-block;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ps-accent-dark);
  background-color: var(--ps-accent-light);
  border-radius: 20px;
  margin-bottom: 24px;
}

.ps-hero-icon {
  margin-bottom: 24px;
}

.ps-hero-icon img {
  width: 80px;
  height: 80px;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0, 107, 122, 0.25);
}

.ps-hero-title {
  font-size: 52px;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 8px;
}

.ps-hero-subtitle {
  font-size: 20px;
  font-weight: 500;
  color: var(--ps-accent-dark);
  margin-bottom: 20px;
}

.ps-hero-tagline {
  font-size: 17px;
  color: var(--color-text-light);
  line-height: 1.7;
  margin-bottom: 36px;
}

.ps-hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.ps-hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 10px;
  background-color: var(--ps-accent);
  color: white;
  border: none;
  text-decoration: none;
  transition: var(--transition);
}

.ps-hero-btn:hover {
  background-color: var(--ps-accent-dark);
  transform: translateY(-2px);
}

/* Showcase */
.ps-showcase {
  padding: 80px 0;
}

.ps-showcase-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 40px 0;
}

.ps-showcase-item + .ps-showcase-item {
  border-top: 1px solid var(--color-border);
}

.ps-showcase-reverse {
  direction: rtl;
}

.ps-showcase-reverse > * {
  direction: ltr;
}

.ps-showcase-image {
  display: flex;
  justify-content: center;
}

.ps-showcase-image img {
  width: 100%;
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
  border: 1px solid var(--color-border);
}

.ps-showcase-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ps-showcase-title {
  font-size: 26px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
  letter-spacing: -0.01em;
}

.ps-showcase-desc {
  font-size: 16px;
  color: var(--color-text-light);
  line-height: 1.7;
}

/* Section titles */
.ps-section-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.ps-section-subtitle {
  font-size: 16px;
  color: var(--color-text-light);
  text-align: center;
  margin-bottom: 48px;
}

/* Features */
.ps-features {
  padding: 80px 0;
  background-color: var(--color-background-alt);
}

.ps-features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.ps-feature-card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 28px 24px;
  text-align: center;
  transition: var(--transition);
}

.ps-feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  border-color: var(--ps-accent-light);
}

.ps-feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--ps-accent-light);
  color: var(--ps-accent-dark);
  margin-bottom: 16px;
}

.ps-feature-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
}

.ps-feature-desc {
  font-size: 14px;
  color: var(--color-text-light);
  line-height: 1.6;
}

/* CTA */
.ps-cta {
  padding: 80px 0;
}

.ps-cta-inner {
  text-align: center;
  max-width: 520px;
  margin: 0 auto;
}

.ps-cta-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
}

.ps-cta-desc {
  font-size: 16px;
  color: var(--color-text-light);
  margin-bottom: 28px;
  line-height: 1.6;
}

.ps-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 10px;
  background-color: var(--ps-accent);
  color: white;
  border: none;
  text-decoration: none;
  transition: var(--transition);
}

.ps-cta-btn:hover {
  background-color: var(--ps-accent-dark);
  transform: translateY(-2px);
}

.ps-cta-disclaimer {
  margin-top: 24px;
  font-size: 12px;
  color: var(--color-text-light);
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 1024px) {
  .ps-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .ps-showcase-item {
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .ps-hero {
    min-height: auto;
    padding: 40px 0;
  }

  .ps-hero-content {
    min-height: calc(100dvh - 60px - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .ps-hero-title {
    font-size: 36px;
  }

  .ps-hero-tagline br {
    display: none;
  }

  .ps-showcase {
    padding: 60px 0;
  }

  .ps-showcase-item {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
  }

  .ps-showcase-reverse {
    direction: ltr;
  }

  .ps-showcase-title {
    font-size: 22px;
  }

  .ps-features {
    padding: 60px 0;
  }

  .ps-features-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .ps-section-title {
    font-size: 26px;
  }

  .ps-cta {
    padding: 60px 0;
  }

  .ps-cta-desc br {
    display: none;
  }
}
</style>
