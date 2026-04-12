<script setup lang="ts">
useSeoMeta({
  title: '熊好講 TravelLanguage - 扣握貝果',
  description: '旅遊日語韓語情境對話學習 App，把旅遊對話變成一場好玩的破關練習。',
  ogTitle: '熊好講 TravelLanguage - 扣握貝果',
  ogDescription: '旅遊日語韓語情境對話學習 App，把旅遊對話變成一場好玩的破關練習。',
  ogImage: '/images/travel-language/screenshot-1.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

const showcases = [
  {
    src: '/images/travel-language/screenshot-1.png',
    title: '豐富的旅遊情境',
    description: '居酒屋、咖啡廳、機場、超市等真實場景，選擇想練習的情境開始闖關。'
  },
  {
    src: '/images/travel-language/screenshot-2.png',
    title: '沉浸式對話練習',
    description: '模擬真實對話情境，透過聽力選擇與跟讀練習，邊玩邊學實用會話。'
  },
  {
    src: '/images/travel-language/screenshot-3.png',
    title: '基礎假名一次掌握',
    description: '完整五十音表搭配發音練習，從零開始打好日語基礎。'
  },
  {
    src: '/images/travel-language/screenshot-4.png',
    title: '鍵盤輸入特訓',
    description: '練習用鍵盤打出假名與單字，訓練實際輸入能力。'
  },
]

const features = [
  {
    icon: 'scenario',
    title: '情境對話',
    description: '居酒屋、咖啡廳、機場、超市等真實旅遊場景，邊玩邊學實用會話'
  },
  {
    icon: 'quiz',
    title: '互動測驗',
    description: '聽力選擇、語音跟讀、填空練習，多種題型強化記憶'
  },
  {
    icon: 'alphabet',
    title: '假名 & 字母',
    description: '日文五十音、韓文字母表，搭配發音練習從基礎開始'
  },
  {
    icon: 'keyboard',
    title: '鍵盤輸入',
    description: '用鍵盤練習打出假名與單字，訓練實際輸入能力'
  }
]
</script>

<template>
  <div class="travel-language-page">
    <!-- Hero -->
    <section class="tl-hero">
      <div class="tl-hero-bg"></div>
      <div class="container">
        <div class="tl-hero-content">
          <div class="tl-hero-badge">旅遊語言</div>
          <div class="tl-hero-icon">
            <img src="/images/travel-language/icon.png" alt="熊好講 TravelLanguage" />
          </div>
          <h1 class="tl-hero-title">熊好講</h1>
          <p class="tl-hero-subtitle">TravelLanguage</p>
          <p class="tl-hero-tagline">把旅遊對話變成一場好玩的破關練習，<br>日語韓語輕鬆開口說。</p>
          <div class="tl-hero-actions">
            <a
              href="https://apps.apple.com/tw/app/%E7%86%8A%E5%A5%BD%E8%AC%9B-travellanguage/id6760996063"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary tl-hero-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store 下載
            </a>
          </div>
          <NuxtLink to="/travel-language/privacy-policy" class="tl-privacy-link">隱私權政策</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Showcase -->
    <section class="tl-showcase">
      <div class="container">
        <h2 class="tl-section-title">產品預覽</h2>
        <p class="tl-section-subtitle">滑動探索熊好講的核心體驗</p>
        <div
          v-for="(item, index) in showcases"
          :key="item.src"
          class="tl-showcase-item"
          :class="{ 'tl-showcase-reverse': index % 2 !== 0 }"
        >
          <div class="tl-showcase-image">
            <img :src="item.src" :alt="item.title" />
          </div>
          <div class="tl-showcase-text">
            <h3 class="tl-showcase-title">{{ item.title }}</h3>
            <p class="tl-showcase-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="tl-features">
      <div class="container">
        <h2 class="tl-section-title">核心功能</h2>
        <p class="tl-section-subtitle">出發前的語言準備，就靠這一個 App</p>
        <div class="tl-features-grid">
          <div v-for="feature in features" :key="feature.title" class="tl-feature-card">
            <div class="tl-feature-icon">
              <svg v-if="feature.icon === 'scenario'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M4 6h20v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" stroke="currentColor" stroke-width="1.8"/>
                <path d="M4 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2" stroke="currentColor" stroke-width="1.8"/>
                <path d="M9 12h10M9 16h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
              <svg v-if="feature.icon === 'quiz'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="10" stroke="currentColor" stroke-width="1.8"/>
                <path d="M11 11.5c0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.3-.83 2.4-2 2.82V16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                <circle cx="14" cy="19" r="1" fill="currentColor"/>
              </svg>
              <svg v-if="feature.icon === 'alphabet'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <text x="4" y="20" font-size="16" font-weight="600" fill="currentColor" font-family="serif">あ</text>
                <path d="M20 8v12M17 8l3 4 3-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-if="feature.icon === 'keyboard'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="3" y="8" width="22" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/>
                <path d="M7 12h2M12 12h4M20 12h2M7 16h2M10 16h8M20 16h2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="tl-feature-title">{{ feature.title }}</h3>
            <p class="tl-feature-desc">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="tl-cta">
      <div class="container">
        <div class="tl-cta-inner">
          <h2 class="tl-cta-title">出發前，先破關</h2>
          <p class="tl-cta-desc">免費下載，用旅遊情境練會話，<br>到了當地就能開口說。</p>
          <a
            href="https://apps.apple.com/tw/app/%E7%86%8A%E5%A5%BD%E8%AC%9B-travellanguage/id6760996063"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary tl-cta-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store 下載
          </a>
          <NuxtLink to="/travel-language/privacy-policy" class="tl-privacy-link">隱私權政策</NuxtLink>
        </div>
      </div>
    </section>

    <ContactSection default-product="travel-language" />
  </div>
</template>

<style scoped>
.travel-language-page {
  --tl-accent: #C75B3F;
  --tl-accent-dark: #a84830;
  --tl-accent-light: #fdf0ec;
}

/* Hero */
.tl-hero {
  position: relative;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  padding: 100px 0 80px;
  overflow: hidden;
}

.tl-hero .container {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
}

.tl-hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(199, 91, 63, 0.1) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(199, 91, 63, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.tl-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 560px;
}

.tl-hero-badge {
  display: inline-block;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--tl-accent-dark);
  background-color: var(--tl-accent-light);
  border-radius: 20px;
  margin-bottom: 24px;
}

.tl-hero-icon {
  margin-bottom: 24px;
}

.tl-hero-icon img {
  width: 80px;
  height: 80px;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(199, 91, 63, 0.25);
}

.tl-hero-title {
  font-size: 52px;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 8px;
}

.tl-hero-subtitle {
  font-size: 20px;
  font-weight: 500;
  color: var(--tl-accent-dark);
  margin-bottom: 20px;
}

.tl-hero-tagline {
  font-size: 17px;
  color: var(--color-text-light);
  line-height: 1.7;
  margin-bottom: 36px;
}

.tl-hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.tl-hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 10px;
  background-color: var(--tl-accent);
  color: white;
  border: none;
  text-decoration: none;
  transition: var(--transition);
}

.tl-hero-btn:hover {
  background-color: var(--tl-accent-dark);
  transform: translateY(-2px);
}

/* Showcase */
.tl-showcase {
  padding: 80px 0;
}

.tl-showcase-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 40px 0;
}

.tl-showcase-item + .tl-showcase-item {
  border-top: 1px solid var(--color-border);
}

.tl-showcase-reverse {
  direction: rtl;
}

.tl-showcase-reverse > * {
  direction: ltr;
}

.tl-showcase-image {
  display: flex;
  justify-content: center;
}

.tl-showcase-image img {
  width: 100%;
  max-width: 260px;
  border-radius: 28px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
  border: 1px solid var(--color-border);
}

.tl-showcase-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tl-showcase-title {
  font-size: 26px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
  letter-spacing: -0.01em;
}

.tl-showcase-desc {
  font-size: 16px;
  color: var(--color-text-light);
  line-height: 1.7;
}

/* Section titles */
.tl-section-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.tl-section-subtitle {
  font-size: 16px;
  color: var(--color-text-light);
  text-align: center;
  margin-bottom: 48px;
}

/* Features */
.tl-features {
  padding: 80px 0;
  background-color: var(--color-background-alt);
}

.tl-features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.tl-feature-card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 28px 24px;
  text-align: center;
  transition: var(--transition);
}

.tl-feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  border-color: var(--tl-accent-light);
}

.tl-feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--tl-accent-light);
  color: var(--tl-accent-dark);
  margin-bottom: 16px;
}

.tl-feature-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
}

.tl-feature-desc {
  font-size: 14px;
  color: var(--color-text-light);
  line-height: 1.6;
}

/* CTA */
.tl-cta {
  padding: 80px 0;
}

.tl-cta-inner {
  text-align: center;
  max-width: 480px;
  margin: 0 auto;
}

.tl-cta-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
}

.tl-cta-desc {
  font-size: 16px;
  color: var(--color-text-light);
  margin-bottom: 28px;
  line-height: 1.6;
}

.tl-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 10px;
  background-color: var(--tl-accent);
  color: white;
  border: none;
  text-decoration: none;
  transition: var(--transition);
}

.tl-cta-btn:hover {
  background-color: var(--tl-accent-dark);
  transform: translateY(-2px);
}

.tl-privacy-link {
  display: block;
  margin-top: 12px;
  font-size: 13px;
  color: var(--color-text-light);
  transition: var(--transition);
}

.tl-privacy-link:hover {
  color: var(--tl-accent-dark);
}

/* Responsive */
@media (max-width: 1024px) {
  .tl-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tl-showcase-item {
    gap: 40px;
  }

  .tl-showcase-image img {
    max-width: 220px;
  }
}

@media (max-width: 768px) {
  .tl-hero {
    min-height: auto;
    padding: 40px 0;
  }

  .tl-hero-content {
    min-height: calc(100dvh - 60px - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .tl-hero-title {
    font-size: 36px;
  }

  .tl-showcase {
    padding: 60px 0;
  }

  .tl-showcase-item {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
  }

  .tl-showcase-reverse {
    direction: ltr;
  }

  .tl-showcase-image img {
    max-width: 200px;
  }

  .tl-showcase-title {
    font-size: 22px;
  }

  .tl-features {
    padding: 60px 0;
  }

  .tl-features-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .tl-section-title {
    font-size: 26px;
  }

  .tl-cta {
    padding: 60px 0;
  }
}
</style>
