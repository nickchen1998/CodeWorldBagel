<script setup lang="ts">
useSeoMeta({
  title: '數據領航員 RAGPilot - 扣握貝果',
  description: '協助你在公開資料當中快速找尋想要的內容並進行深度研究，讓資料搜尋與分析更有效率。',
  ogTitle: '數據領航員 RAGPilot - 扣握貝果',
  ogDescription: '協助你在公開資料當中快速找尋想要的內容並進行深度研究，讓資料搜尋與分析更有效率。',
  ogImage: '/images/rag-pilot/icon.png',
  ogType: 'website',
  twitterCard: 'summary',
})

const showComingSoon = ref(false)

const features = [
  {
    icon: 'search',
    title: '智慧搜尋',
    description: '從大量公開資料中精準定位你需要的內容，省去大海撈針的時間'
  },
  {
    icon: 'brain',
    title: '深度研究',
    description: '自動彙整多來源資訊，產出完整的研究脈絡與洞察'
  },
  {
    icon: 'summary',
    title: '摘要生成',
    description: '將冗長的資料濃縮為重點摘要，快速掌握核心資訊'
  },
  {
    icon: 'link',
    title: '來源追溯',
    description: '每筆結果皆附帶原始來源連結，確保資訊可信可查'
  }
]
</script>

<template>
  <div class="rp-page">
    <!-- Hero -->
    <section class="rp-hero">
      <div class="rp-hero-bg"></div>
      <div class="container">
        <div class="rp-hero-content">
          <div class="rp-hero-badge">AI Research</div>
          <h1 class="rp-hero-title">數據領航員</h1>
          <p class="rp-hero-subtitle">RAGPilot</p>
          <p class="rp-hero-tagline">協助你在公開資料當中快速找尋想要的內容，<br>並進行深度研究。</p>
          <button class="btn btn-primary rp-hero-btn rp-hero-btn-desktop" @click="showComingSoon = true">免費試用</button>
        </div>
        <div class="rp-hero-visual">
          <div class="rp-coming-soon-placeholder">
            <span class="rp-coming-soon-text">Coming Soon ~</span>
          </div>
          <button class="btn btn-primary rp-hero-btn rp-hero-btn-mobile" @click="showComingSoon = true">免費試用</button>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="rp-features">
      <div class="container">
        <h2 class="rp-section-title">核心功能</h2>
        <p class="rp-section-subtitle">讓公開資料成為你的研究利器</p>
        <div class="rp-features-grid">
          <div v-for="feature in features" :key="feature.title" class="rp-feature-card">
            <div class="rp-feature-icon">
              <svg v-if="feature.icon === 'search'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="1.8"/>
                <path d="M17 17l6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                <path d="M10 12h4M12 10v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
              <svg v-if="feature.icon === 'brain'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4c-3 0-5.5 2-6 4.5C6 9 4.5 10.5 4.5 13c0 2 1 3.5 2.5 4.2V22a2 2 0 002 2h10a2 2 0 002-2v-4.8c1.5-.7 2.5-2.2 2.5-4.2 0-2.5-1.5-4-3.5-4.5C19.5 6 17 4 14 4z" stroke="currentColor" stroke-width="1.8"/>
                <path d="M11 15h6M14 12v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
              <svg v-if="feature.icon === 'summary'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="5" y="4" width="18" height="20" rx="2" stroke="currentColor" stroke-width="1.8"/>
                <path d="M9 9h10M9 13h10M9 17h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
              <svg v-if="feature.icon === 'link'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M12 16l4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                <path d="M15 19l2-2a4 4 0 000-5.6l-.4-.4a4 4 0 00-5.6 0l-2 2a4 4 0 000 5.6l.4.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                <path d="M13 9l-2 2a4 4 0 000 5.6l.4.4a4 4 0 005.6 0l2-2a4 4 0 000-5.6l-.4-.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="rp-feature-title">{{ feature.title }}</h3>
            <p class="rp-feature-desc">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="rp-cta">
      <div class="container">
        <div class="rp-cta-inner">
          <h2 class="rp-cta-title">即將推出</h2>
          <p class="rp-cta-desc">數據領航員正在打造中，敬請期待。</p>
          <button class="btn btn-primary rp-cta-btn" @click="showComingSoon = true">免費試用</button>
        </div>
      </div>
    </section>

    <!-- Coming Soon Modal -->
    <Teleport to="body">
      <div v-if="showComingSoon" class="rp-modal-overlay" @click="showComingSoon = false">
        <div class="rp-modal" @click.stop>
          <h3 class="rp-modal-title">即將上線</h3>
          <p class="rp-modal-desc">敬請期待</p>
          <button class="btn btn-primary rp-modal-btn" @click="showComingSoon = false">好的</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.rp-page {
  --rp-accent: var(--color-primary);
  --rp-accent-dark: var(--color-primary-dark);
  --rp-accent-light: var(--color-primary-light);
}

/* Hero */
.rp-hero {
  position: relative;
  padding: 100px 0 80px;
  overflow: hidden;
}

.rp-hero .container {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.rp-hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(166, 139, 75, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(139, 115, 64, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

.rp-hero-badge {
  display: inline-block;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--rp-accent-dark);
  background-color: var(--rp-accent-light);
  border-radius: 20px;
  margin-bottom: 20px;
}

.rp-hero-title {
  font-size: 52px;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 8px;
}

.rp-hero-subtitle {
  font-size: 20px;
  font-weight: 500;
  color: var(--rp-accent-dark);
  margin-bottom: 20px;
}

.rp-hero-tagline {
  font-size: 17px;
  color: var(--color-text-light);
  line-height: 1.7;
}

.rp-hero-btn {
  margin-top: 24px;
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 10px;
}

.rp-hero-btn-mobile {
  display: none;
}

.rp-hero-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rp-coming-soon-placeholder {
  width: 100%;
  max-width: 520px;
  aspect-ratio: 16 / 10;
  border-radius: 12px;
  background-color: var(--color-background-alt);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
}

.rp-coming-soon-text {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-light);
  letter-spacing: 0.02em;
}

/* Section titles */
.rp-section-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.rp-section-subtitle {
  font-size: 16px;
  color: var(--color-text-light);
  text-align: center;
  margin-bottom: 48px;
}

/* Features */
.rp-features {
  padding: 80px 0;
  background-color: var(--color-background-alt);
}

.rp-features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.rp-feature-card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 28px 24px;
  text-align: center;
  transition: var(--transition);
}

.rp-feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  border-color: var(--rp-accent-light);
}

.rp-feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--rp-accent-light);
  color: var(--rp-accent-dark);
  margin-bottom: 16px;
}

.rp-feature-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
}

.rp-feature-desc {
  font-size: 14px;
  color: var(--color-text-light);
  line-height: 1.6;
}

/* CTA */
.rp-cta {
  padding: 80px 0;
}

.rp-cta-inner {
  text-align: center;
  max-width: 480px;
  margin: 0 auto;
}

.rp-cta-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
}

.rp-cta-desc {
  font-size: 16px;
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 28px;
}

.rp-cta-btn {
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 10px;
}

/* Modal */
.rp-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.rp-modal {
  background: var(--color-background);
  border-radius: 16px;
  padding: 40px 48px;
  text-align: center;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
  max-width: 360px;
  width: 90%;
}

.rp-modal-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 8px;
}

.rp-modal-desc {
  font-size: 16px;
  color: var(--color-text-light);
  margin-bottom: 28px;
}

.rp-modal-btn {
  padding: 10px 28px;
  font-size: 15px;
  border-radius: 10px;
}

/* Responsive */
@media (max-width: 1024px) {
  .rp-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .rp-hero .container {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .rp-hero {
    padding: 60px 0;
  }

  .rp-hero-title {
    font-size: 36px;
  }

  .rp-hero-tagline br {
    display: none;
  }

  .rp-hero-btn-desktop {
    display: none;
  }

  .rp-hero-btn-mobile {
    display: inline-flex;
  }

  .rp-features-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .rp-section-title {
    font-size: 26px;
  }
}
</style>
