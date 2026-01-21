<script setup lang="ts">
useHead({
  title: '扣握貝果 - CodeWorldBagel',
  meta: [
    { name: 'description', content: '我們是肚子胖胖像貝果的工程師' }
  ]
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
          <p class="hero-description">我們是肚子胖胖像貝果的工程師</p>
          <div class="hero-actions">
            <a href="/n8n/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
              探索 N8N 平台
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M12 4H6M12 4V10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="hero-background"></div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                <path d="M16 28V16M16 16L4 10M16 16L28 10" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="feature-title">自動化流程</h3>
            <p class="feature-description">透過 N8N 打造強大的自動化工作流程</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="2"/>
                <path d="M16 10V16L20 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="feature-title">節省時間</h3>
            <p class="feature-description">讓重複性工作自動執行，專注於更重要的事</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6 16C6 10.477 10.477 6 16 6C21.523 6 26 10.477 26 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M26 16C26 21.523 21.523 26 16 26C10.477 26 6 21.523 6 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="16" cy="16" r="4" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3 class="feature-title">無限整合</h3>
            <p class="feature-description">連接數百種應用程式與服務</p>
          </div>
        </div>
      </div>
    </section>
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
  box-shadow: 0 8px 32px rgba(201, 168, 108, 0.3);
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
  background: radial-gradient(ellipse at 50% 0%, rgba(201, 168, 108, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

/* Features Section */
.features {
  padding: 80px 0;
  background-color: var(--color-background-alt);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.feature-card {
  background-color: var(--color-background);
  padding: 32px;
  border-radius: 16px;
  text-align: center;
  border: 1px solid var(--color-border);
  transition: var(--transition);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.feature-icon {
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

.feature-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 12px;
}

.feature-description {
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

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
