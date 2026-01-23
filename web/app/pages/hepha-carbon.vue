<script setup lang="ts">
useHead({
  title: '話燒碳盤查系統 HephaCarbon - 扣握貝果',
  meta: [
    { name: 'description', content: '話燒碳盤查系統 HephaCarbon - 智慧碳排放盤查與管理，輕鬆掌握企業碳足跡' }
  ]
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

const features = [
  {
    icon: 'calculate',
    title: '碳排計算',
    description: '依據 ISO 14064 標準，精準計算組織碳排放量'
  },
  {
    icon: 'report',
    title: '報表產出',
    description: '一鍵產出盤查報告，符合主管機關申報格式'
  },
  {
    icon: 'chart',
    title: '數據視覺化',
    description: '直覺圖表呈現碳排趨勢，掌握減碳進程'
  },
  {
    icon: 'compliance',
    title: '法規合規',
    description: '即時更新法規要求，確保企業合規無虞'
  }
]

const highlights = [
  { value: 'ISO 14064', label: '國際標準依循' },
  { value: '自動化', label: '排放係數帶入' },
  { value: '多據點', label: '集團管理架構' }
]
</script>

<template>
  <div class="hc-page">
    <!-- Hero -->
    <section class="hc-hero">
      <div class="hc-hero-bg"></div>
      <div class="container">
        <div class="hc-hero-content">
          <div class="hc-hero-badge">Carbon Product</div>
          <h1 class="hc-hero-title">話燒碳盤查系統</h1>
          <p class="hc-hero-subtitle">HephaCarbon</p>
          <p class="hc-hero-tagline">智慧碳排放盤查與管理，<br>輕鬆掌握企業碳足跡。</p>
          <a href="#" class="btn btn-primary hc-hero-btn hc-hero-btn-desktop">瞭解更多</a>
        </div>
        <div class="hc-hero-screenshot">
          <div class="hc-carousel">
            <template v-if="heroImages[0] === '/images/hepha-carbon/hero.png'">
              <!-- 圖片存在時顯示輪播 -->
              <img
                v-for="(src, index) in heroImages"
                :key="src"
                :src="src"
                :class="{ active: index === currentSlide }"
                alt="話燒碳盤查系統產品截圖"
                class="hc-carousel-slide"
              />
            </template>
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
          <a href="#" class="btn btn-primary hc-hero-btn hc-hero-btn-mobile">瞭解更多</a>
        </div>
      </div>
    </section>

    <!-- Highlights -->
    <section class="hc-highlights">
      <div class="container">
        <div class="hc-highlights-grid">
          <div v-for="item in highlights" :key="item.label" class="hc-highlight-item">
            <span class="hc-highlight-value">{{ item.value }}</span>
            <span class="hc-highlight-label">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="hc-features">
      <div class="container">
        <h2 class="hc-section-title">核心功能</h2>
        <p class="hc-section-subtitle">從盤查到減碳，一站式解決方案</p>
        <div class="hc-features-grid">
          <div v-for="feature in features" :key="feature.title" class="hc-feature-card">
            <div class="hc-feature-icon">
              <svg v-if="feature.icon === 'calculate'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" stroke-width="1.8"/>
                <path d="M9 10h10M9 14h10M9 18h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
              <svg v-if="feature.icon === 'report'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7 4h10l6 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/>
                <path d="M17 4v6h6M9 16h10M9 20h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
              <svg v-if="feature.icon === 'chart'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M4 24h20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                <rect x="6" y="14" width="4" height="10" rx="1" stroke="currentColor" stroke-width="1.8"/>
                <rect x="12" y="8" width="4" height="16" rx="1" stroke="currentColor" stroke-width="1.8"/>
                <rect x="18" y="4" width="4" height="20" rx="1" stroke="currentColor" stroke-width="1.8"/>
              </svg>
              <svg v-if="feature.icon === 'compliance'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 3L4 7v6c0 7 4.3 11.3 10 13 5.7-1.7 10-6 10-13V7L14 3z" stroke="currentColor" stroke-width="1.8"/>
                <path d="M10 14l3 3 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="hc-feature-title">{{ feature.title }}</h3>
            <p class="hc-feature-desc">{{ feature.description }}</p>
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
          <a href="#" class="btn btn-primary hc-cta-btn">聯絡我們</a>
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
  display: inline-block;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--hc-accent-dark);
  background-color: var(--hc-accent-light);
  border-radius: 20px;
  margin-bottom: 20px;
}

.hc-hero-title {
  font-size: 52px;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 8px;
}

.hc-hero-subtitle {
  font-size: 20px;
  font-weight: 500;
  color: var(--hc-accent-dark);
  margin-bottom: 20px;
}

.hc-hero-tagline {
  font-size: 17px;
  color: var(--color-text-light);
  line-height: 1.7;
}

.hc-hero-btn {
  margin-top: 24px;
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

/* Highlights */
.hc-highlights {
  padding: 48px 0;
  border-bottom: 1px solid var(--color-border);
}

.hc-highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  text-align: center;
}

.hc-highlight-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hc-highlight-value {
  font-size: 22px;
  font-weight: 700;
  color: var(--hc-accent-dark);
}

.hc-highlight-label {
  font-size: 14px;
  color: var(--color-text-light);
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

/* Features */
.hc-features {
  padding: 80px 0;
  background-color: var(--color-background-alt);
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
    font-size: 36px;
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

  .hc-highlights-grid {
    grid-template-columns: 1fr;
    gap: 20px;
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
