<script setup lang="ts">
useSeoMeta({
  title: '話燒碳盤查系統 HephaCarbon - 扣握貝果',
  description: '依據 ISO 14064 標準，智慧碳排放盤查與管理系統，一鍵產出報告、數據視覺化，輕鬆掌握企業碳足跡。',
  ogTitle: '話燒碳盤查系統 HephaCarbon - 扣握貝果',
  ogDescription: '依據 ISO 14064 標準，智慧碳排放盤查與管理系統，一鍵產出報告、數據視覺化，輕鬆掌握企業碳足跡。',
  ogImage: '/images/hepha-carbon/hero.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

const heroImages = [
  '/images/hepha-carbon/hero.png'
  // 新增更多圖片: '/images/hepha-carbon/hero-2.png'
]

const currentSlide = ref(0)
let intervalId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  if (heroImages.length > 1) {
    intervalId = setInterval(() => {
      currentSlide.value = (currentSlide.value + 1) % heroImages.length
    }, 4000)
  }
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

const scopes = [
  {
    tag: '範疇一 Scope 1',
    icon: 'fire',
    title: '直接排放源追蹤',
    description: '涵蓋冷媒逸散、化糞池甲烷、汽柴油燃燒、天然氣燃燒等直接排放源，自動計算 CO2、CH4、N2O 等溫室氣體排放當量。',
    features: ['冷媒逸散 GWP 自動換算', '化糞池人時數計算', '燃料燃燒多氣體換算']
  },
  {
    tag: '範疇二 Scope 2',
    icon: 'bolt',
    title: '間接排放源管理',
    description: '依據最新電力排放係數計算範疇二間接排放，支援多建築物、多電表分別追蹤，完整掌握外購電力碳足跡。',
    features: ['最新電力排放係數', '便捷的帳單管理', '用電趨勢分析報表']
  }
]

const features = [
  {
    icon: 'clock',
    title: '快速導入',
    description: '無須複雜開發設定，註冊帳號後即可開始使用，最快 10 分鐘完成首次數據輸入。'
  },
  {
    icon: 'report',
    title: '自動產出報表',
    description: '一鍵產出符合 ISO 14064-1 格式的碳盤查報告，包含完整圖表與數據分析。'
  },
  {
    icon: 'brain',
    title: '智慧計算引擎',
    description: '內建最新排放係數與 GWP 值，自動換算各類溫室氣體為 CO2e 當量。'
  },
  {
    icon: 'cloud',
    title: '雲端隨時存取',
    description: '24/7 雲端服務，隨時隨地透過瀏覽器存取您的碳盤查資料與報表。'
  }
]

const plans = [
  {
    name: 'Free',
    subtitle: '適合剛開始碳盤查的企業',
    price: '$0',
    priceUnit: '/月',
    featured: true,
    featuredLabel: '推薦方案',
    included: ['完整碳排放儀表板', '每種分類 10 筆設備資料上限', '單人組織', '報表匯出功能（固定格式）'],
    excluded: ['批次匯入設備', '專人客服'],
    cta: '免費試用',
    ctaHref: 'https://hepha-carbon.codeworldbagel.com/register/'
  },
  {
    name: 'Plus',
    subtitle: '適合中小型企業使用',
    price: 'Coming Soon',
    priceUnit: '',
    featured: false,
    included: ['完整碳排放儀表板', '每種分類 100 筆設備資料上限', '多人組織（上限 10 人）', '報表匯出功能（固定格式）'],
    excluded: ['批次匯入設備（需透過客服）', '專人客服'],
    cta: '聯絡我們',
    ctaHref: 'mailto:hephacarbon@gmail.com?subject=Plus 方案諮詢'
  },
  {
    name: 'Pro',
    subtitle: '適合大型企業或進階需求',
    price: 'Coming Soon',
    priceUnit: '',
    featured: false,
    included: ['完整碳排放儀表板', '設備無上限', '組織人數無上限', '報表匯出功能（固定格式）', '批次匯入設備（需透過客服）', '專人客服'],
    excluded: [],
    cta: '聯絡我們',
    ctaHref: 'mailto:hephacarbon@gmail.com?subject=Pro 方案諮詢'
  }
]
</script>

<template>
  <div class="hc-page">
    <!-- Hero -->
    <section class="hc-hero">
      <div class="hc-hero-bg"></div>
      <div class="container">
        <div class="hc-hero-content">
          <div class="hc-hero-badge">中小企業碳盤查推手</div>
          <h1 class="hc-hero-title">驅動企業永續轉型</h1>
          <p class="hc-hero-subtitle">碳盤查智慧系統</p>
          <p class="hc-hero-tagline">
            從冷媒逸散到電力消耗的<strong>排放源追蹤</strong>，到活化數據與決策建議的<strong>報表產出</strong>。<br>
            我們提供最靈活的碳盤查解決方案，讓數據為您的永續目標加值。
          </p>
          <a :href="plans[0].ctaHref" class="btn btn-primary hc-hero-btn hc-hero-btn-desktop">免費試用</a>
        </div>
        <div class="hc-hero-screenshot">
          <div class="hc-carousel">
            <img
              v-for="(src, index) in heroImages"
              :key="src"
              :src="src"
              :class="{ active: index === currentSlide }"
              alt="話燒碳盤查系統產品截圖"
              class="hc-carousel-slide"
            />
          </div>
          <div v-if="heroImages.length > 1" class="hc-carousel-dots">
            <button
              v-for="(_, index) in heroImages"
              :key="index"
              :class="{ active: index === currentSlide }"
              class="hc-carousel-dot"
              @click="currentSlide = index"
            />
          </div>
          <a :href="plans[0].ctaHref" class="btn btn-primary hc-hero-btn hc-hero-btn-mobile">免費試用</a>
        </div>
      </div>
    </section>

    <!-- Scopes / Products -->
    <section class="hc-scopes">
      <div class="container">
        <h2 class="hc-section-title">最適合中小企業的碳盤查範疇解決方案</h2>
        <p class="hc-section-subtitle">涵蓋範疇一、範疇二主要排放源，從數據輸入到報告產出一站完成</p>
        <div class="hc-scopes-grid">
          <div v-for="scope in scopes" :key="scope.title" class="hc-scope-card">
            <div class="hc-scope-tag">{{ scope.tag }}</div>
            <div class="hc-scope-icon">
              <svg v-if="scope.icon === 'fire'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
              <svg v-if="scope.icon === 'bolt'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="hc-scope-title">{{ scope.title }}</h3>
            <p class="hc-scope-desc">{{ scope.description }}</p>
            <ul class="hc-scope-features">
              <li v-for="feature in scope.features" :key="feature">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="hc-features">
      <div class="container">
        <h2 class="hc-section-title">為什麼選擇話燒？</h2>
        <p class="hc-section-subtitle">專為台灣企業設計的碳盤查系統，讓複雜的碳排放計算變得簡單</p>
        <div class="hc-features-grid">
          <div v-for="feature in features" :key="feature.title" class="hc-feature-card">
            <div class="hc-feature-icon">
              <svg v-if="feature.icon === 'clock'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg v-if="feature.icon === 'report'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <svg v-if="feature.icon === 'brain'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <svg v-if="feature.icon === 'cloud'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 class="hc-feature-title">{{ feature.title }}</h3>
            <p class="hc-feature-desc">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="hc-pricing">
      <div class="container">
        <h2 class="hc-section-title">選擇適合您的方案</h2>
        <p class="hc-section-subtitle">無論企業規模大小，我們都有適合的方案協助您開始碳盤查</p>
        <div class="hc-pricing-grid">
          <div v-for="plan in plans" :key="plan.name" class="hc-pricing-card" :class="{ featured: plan.featured }">
            <div v-if="plan.featured" class="hc-pricing-badge">{{ plan.featuredLabel }}</div>
            <h3 class="hc-pricing-name">{{ plan.name }}</h3>
            <p class="hc-pricing-subtitle">{{ plan.subtitle }}</p>
            <div class="hc-pricing-price">
              <span class="hc-price-value">{{ plan.price }}</span>
              <span v-if="plan.priceUnit" class="hc-price-unit">{{ plan.priceUnit }}</span>
            </div>
            <ul class="hc-pricing-features">
              <li v-for="item in plan.included" :key="item" class="included">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {{ item }}
              </li>
              <li v-for="item in plan.excluded" :key="item" class="excluded">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                {{ item }}
              </li>
            </ul>
            <a :href="plan.ctaHref" class="btn hc-pricing-btn" :class="plan.featured ? 'btn-primary' : 'btn-outline'">{{ plan.cta }}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="hc-cta">
      <div class="container">
        <div class="hc-cta-inner">
          <h2 class="hc-cta-title">開始你的碳盤查之旅</h2>
          <p class="hc-cta-desc">讓話燒碳盤查系統協助你的企業邁向淨零目標。</p>
          <a :href="plans[0].ctaHref" class="btn btn-primary hc-cta-btn">免費試用</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hc-page {
  --hc-accent: var(--color-primary);
  --hc-accent-dark: var(--color-primary-dark);
  --hc-accent-light: var(--color-primary-light);
}

/* Hero */
.hc-hero {
  position: relative;
  padding: 100px 0 80px;
  overflow: hidden;
}

.hc-hero .container {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
}

.hc-hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(166, 139, 75, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(139, 115, 64, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

.hc-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  color: var(--hc-accent-dark);
  background-color: var(--hc-accent-light);
  border-radius: 20px;
  margin-bottom: 20px;
}

.hc-hero-badge::before {
  content: '';
  width: 8px;
  height: 8px;
  background: var(--hc-accent-dark);
  border-radius: 50%;
}

.hc-hero-title {
  font-size: 48px;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 4px;
}

.hc-hero-subtitle {
  font-size: 36px;
  font-weight: 700;
  color: var(--hc-accent-dark);
  margin-bottom: 20px;
  letter-spacing: -0.01em;
}

.hc-hero-tagline {
  font-size: 16px;
  color: var(--color-text-light);
  line-height: 1.8;
}

.hc-hero-tagline strong {
  color: var(--color-text);
}

.hc-hero-btn {
  margin-top: 28px;
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 10px;
}

.hc-hero-btn-mobile {
  display: none;
}

.hc-hero-screenshot {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hc-carousel {
  position: relative;
  width: 100%;
  max-width: 520px;
  aspect-ratio: 16 / 10;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  background-color: var(--color-background-alt);
}

.hc-carousel-slide {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.hc-carousel-slide.active {
  opacity: 1;
}

.hc-carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.hc-carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background-color: var(--color-border);
  cursor: pointer;
  transition: var(--transition);
}

.hc-carousel-dot.active {
  background-color: var(--hc-accent);
  transform: scale(1.2);
}

/* Section titles */
.hc-section-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.hc-section-subtitle {
  font-size: 16px;
  color: var(--color-text-light);
  text-align: center;
  margin-bottom: 48px;
}

/* Scopes */
.hc-scopes {
  padding: 80px 0;
  background-color: var(--color-background-alt);
}

.hc-scopes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.hc-scope-card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 36px 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: var(--transition);
}

.hc-scope-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  border-color: var(--hc-accent-light);
}

.hc-scope-tag {
  display: inline-block;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  color: var(--hc-accent-dark);
  background: var(--hc-accent-light);
  border-radius: 20px;
  margin-bottom: 20px;
}

.hc-scope-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--hc-accent-light);
  color: var(--hc-accent-dark);
  margin-bottom: 20px;
}

.hc-scope-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
}

.hc-scope-desc {
  font-size: 15px;
  color: var(--color-text-light);
  line-height: 1.7;
  margin-bottom: 24px;
}

.hc-scope-features {
  list-style: none;
  padding: 0;
  text-align: left;
}

.hc-scope-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--color-text);
  margin-bottom: 10px;
}

.hc-scope-features li svg {
  color: var(--hc-accent-dark);
  flex-shrink: 0;
}

/* Features */
.hc-features {
  padding: 80px 0;
}

.hc-features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.hc-feature-card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 28px 24px;
  text-align: center;
  transition: var(--transition);
}

.hc-feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  border-color: var(--hc-accent-light);
}

.hc-feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--hc-accent-light);
  color: var(--hc-accent-dark);
  margin-bottom: 16px;
}

.hc-feature-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
}

.hc-feature-desc {
  font-size: 14px;
  color: var(--color-text-light);
  line-height: 1.6;
}

/* Pricing */
.hc-pricing {
  padding: 80px 0;
  background-color: var(--color-background-alt);
}

.hc-pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: stretch;
}

.hc-pricing-card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 32px 28px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: var(--transition);
}

.hc-pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
}

.hc-pricing-card.featured {
  border: 2px solid var(--hc-accent);
  box-shadow: 0 8px 24px rgba(166, 139, 75, 0.12);
}

.hc-pricing-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--hc-accent-dark);
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 14px;
  border-radius: 20px;
  white-space: nowrap;
}

.hc-pricing-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 4px;
  margin-top: 8px;
}

.hc-pricing-subtitle {
  font-size: 14px;
  color: var(--color-text-light);
  margin-bottom: 20px;
}

.hc-pricing-price {
  margin-bottom: 24px;
}

.hc-price-value {
  font-size: 36px;
  font-weight: 700;
  color: var(--color-text);
}

.hc-price-unit {
  font-size: 14px;
  color: var(--color-text-light);
}

.hc-pricing-features {
  list-style: none;
  padding: 0;
  text-align: left;
  width: 100%;
  flex: 1;
  margin-bottom: 24px;
}

.hc-pricing-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  margin-bottom: 10px;
}

.hc-pricing-features li.included {
  color: var(--color-text);
}

.hc-pricing-features li.included svg {
  color: var(--hc-accent-dark);
  flex-shrink: 0;
}

.hc-pricing-features li.excluded {
  color: var(--color-text-light);
  opacity: 0.6;
}

.hc-pricing-features li.excluded svg {
  flex-shrink: 0;
}

.hc-pricing-btn {
  width: 100%;
  justify-content: center;
  padding: 12px 24px;
  font-size: 15px;
  border-radius: 10px;
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
}

.btn-outline:hover {
  border-color: var(--hc-accent);
  background: var(--hc-accent-light);
}

/* CTA */
.hc-cta {
  padding: 80px 0;
}

.hc-cta-inner {
  text-align: center;
  max-width: 480px;
  margin: 0 auto;
}

.hc-cta-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
}

.hc-cta-desc {
  font-size: 16px;
  color: var(--color-text-light);
  margin-bottom: 28px;
  line-height: 1.6;
}

.hc-cta-btn {
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 10px;
}

/* Responsive */
@media (max-width: 1024px) {
  .hc-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hc-pricing-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hc-hero .container {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .hc-hero {
    padding: 60px 0;
  }

  .hc-hero-title {
    font-size: 32px;
  }

  .hc-hero-subtitle {
    font-size: 26px;
  }

  .hc-hero-tagline br {
    display: none;
  }

  .hc-hero-btn-desktop {
    display: none;
  }

  .hc-hero-btn-mobile {
    display: inline-flex;
  }

  .hc-scopes-grid {
    grid-template-columns: 1fr;
  }

  .hc-features-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .hc-section-title {
    font-size: 26px;
  }
}
</style>
