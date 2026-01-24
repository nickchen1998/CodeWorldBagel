<script setup lang="ts">
useSeoMeta({
  title: '棉棉好朋友 CottonFriend - 扣握貝果',
  description: '智慧生理期管理 Line 機器人，輕鬆記錄生理期、預測週期、推播提醒，貼心守護你的每一天。',
  ogTitle: '棉棉好朋友 CottonFriend - 扣握貝果',
  ogDescription: '智慧生理期管理 Line 機器人，輕鬆記錄生理期、預測週期、推播提醒，貼心守護你的每一天。',
  ogImage: '/images/cotton-friend/hero.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

const showComingSoon = ref(false)

const features = [
  {
    icon: 'calendar',
    title: '週期記錄',
    description: '輕鬆記錄生理期起訖，自動計算週期規律'
  },
  {
    icon: 'bell',
    title: '智慧提醒',
    description: '預測下次經期與排卵日，提前推播通知'
  },
  {
    icon: 'chat',
    title: 'Line 對話',
    description: '透過 Line 機器人互動，隨時記錄不需額外安裝 App'
  },
  {
    icon: 'heart',
    title: '衛生用品管理',
    description: '記錄剩餘衛生棉數量，低庫存時貼心提醒補貨'
  }
]
</script>

<template>
  <div class="cf-page">
    <!-- Hero -->
    <section class="cf-hero">
      <div class="cf-hero-bg"></div>
      <div class="container">
        <div class="cf-hero-content">
          <div class="cf-hero-badge">Line Bot</div>
          <h1 class="cf-hero-title">棉棉好朋友</h1>
          <p class="cf-hero-subtitle">CottonFriend</p>
          <p class="cf-hero-tagline">智慧生理期管理 Line 機器人，<br>貼心守護你的每一天。</p>
          <button class="btn btn-primary cf-hero-btn cf-hero-btn-desktop" @click="showComingSoon = true">加入好友</button>
        </div>
        <div class="cf-hero-screenshot">
          <div class="cf-coming-soon-placeholder">
            <span class="cf-coming-soon-text">Coming Soon ~</span>
          </div>
          <button class="btn btn-primary cf-hero-btn cf-hero-btn-mobile" @click="showComingSoon = true">加入好友</button>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="cf-features">
      <div class="container">
        <h2 class="cf-section-title">核心功能</h2>
        <p class="cf-section-subtitle">用最簡單的方式，照顧最重要的自己</p>
        <div class="cf-features-grid">
          <div v-for="feature in features" :key="feature.title" class="cf-feature-card">
            <div class="cf-feature-icon">
              <svg v-if="feature.icon === 'calendar'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="4" y="6" width="20" height="18" rx="3" stroke="currentColor" stroke-width="1.8"/>
                <path d="M4 12h20M10 4v4M18 4v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                <circle cx="14" cy="19" r="2" fill="currentColor"/>
              </svg>
              <svg v-if="feature.icon === 'bell'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4c-4 0-7 3-7 7v5l-2 2v1h18v-1l-2-2v-5c0-4-3-7-7-7z" stroke="currentColor" stroke-width="1.8"/>
                <path d="M11 22c0 1.7 1.3 3 3 3s3-1.3 3-3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
              <svg v-if="feature.icon === 'chat'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M5 6h18a2 2 0 012 2v10a2 2 0 01-2 2h-5l-4 4v-4H5a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/>
                <path d="M9 12h10M9 15h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
              <svg v-if="feature.icon === 'heart'" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 24s-8-5.5-8-11.5c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2a5.9 5.9 0 014.5-2c3.3 0 6 2.7 6 6C23 18.5 14 24 14 24z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="cf-feature-title">{{ feature.title }}</h3>
            <p class="cf-feature-desc">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cf-cta">
      <div class="container">
        <div class="cf-cta-inner">
          <h2 class="cf-cta-title">立即加入棉棉好朋友</h2>
          <p class="cf-cta-desc">只要加入 Line 好友，就能開始記錄你的生理週期。</p>
          <button class="btn btn-primary cf-cta-btn" @click="showComingSoon = true">加入 Line 好友</button>
        </div>
      </div>
    </section>

    <!-- Coming Soon Modal -->
    <Teleport to="body">
      <div v-if="showComingSoon" class="cf-modal-overlay" @click="showComingSoon = false">
        <div class="cf-modal" @click.stop>
          <h3 class="cf-modal-title">即將上架</h3>
          <p class="cf-modal-desc">敬請期待</p>
          <button class="btn btn-primary cf-modal-btn" @click="showComingSoon = false">好的</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.cf-page {
  --cf-accent: var(--color-primary);
  --cf-accent-dark: var(--color-primary-dark);
  --cf-accent-light: var(--color-primary-light);
}

/* Hero */
.cf-hero {
  position: relative;
  padding: 100px 0 80px;
  overflow: hidden;
}

.cf-hero .container {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
}

.cf-hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(166, 139, 75, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(139, 115, 64, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

.cf-hero-badge {
  display: inline-block;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cf-accent-dark);
  background-color: var(--cf-accent-light);
  border-radius: 20px;
  margin-bottom: 20px;
}

.cf-hero-title {
  font-size: 52px;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 8px;
}

.cf-hero-subtitle {
  font-size: 20px;
  font-weight: 500;
  color: var(--cf-accent-dark);
  margin-bottom: 20px;
}

.cf-hero-tagline {
  font-size: 17px;
  color: var(--color-text-light);
  line-height: 1.7;
}

.cf-hero-btn {
  margin-top: 24px;
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 10px;
}

.cf-hero-btn-mobile {
  display: none;
}

.cf-hero-screenshot {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cf-coming-soon-placeholder {
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

.cf-coming-soon-text {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-light);
  letter-spacing: 0.02em;
}

/* Section titles */
.cf-section-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.cf-section-subtitle {
  font-size: 16px;
  color: var(--color-text-light);
  text-align: center;
  margin-bottom: 48px;
}

/* Features */
.cf-features {
  padding: 80px 0;
  background-color: var(--color-background-alt);
}

.cf-features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.cf-feature-card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 28px 24px;
  text-align: center;
  transition: var(--transition);
}

.cf-feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  border-color: var(--cf-accent-light);
}

.cf-feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--cf-accent-light);
  color: var(--cf-accent-dark);
  margin-bottom: 16px;
}

.cf-feature-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
}

.cf-feature-desc {
  font-size: 14px;
  color: var(--color-text-light);
  line-height: 1.6;
}

/* CTA */
.cf-cta {
  padding: 80px 0;
}

.cf-cta-inner {
  text-align: center;
  max-width: 480px;
  margin: 0 auto;
}

.cf-cta-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
}

.cf-cta-desc {
  font-size: 16px;
  color: var(--color-text-light);
  margin-bottom: 28px;
  line-height: 1.6;
}

.cf-cta-btn {
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 10px;
}

/* Responsive */
@media (max-width: 1024px) {
  .cf-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .cf-hero .container {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .cf-hero {
    padding: 60px 0;
  }

  .cf-hero-title {
    font-size: 36px;
  }

  .cf-hero-tagline br {
    display: none;
  }

  .cf-hero-btn-desktop {
    display: none;
  }

  .cf-hero-btn-mobile {
    display: inline-flex;
  }

  .cf-features-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .cf-section-title {
    font-size: 26px;
  }
}

/* Modal */
.cf-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.cf-modal {
  background: var(--color-background);
  border-radius: 16px;
  padding: 40px 48px;
  text-align: center;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
  max-width: 360px;
  width: 90%;
}

.cf-modal-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 8px;
}

.cf-modal-desc {
  font-size: 16px;
  color: var(--color-text-light);
  margin-bottom: 28px;
}

.cf-modal-btn {
  padding: 10px 28px;
  font-size: 15px;
  border-radius: 10px;
}
</style>
