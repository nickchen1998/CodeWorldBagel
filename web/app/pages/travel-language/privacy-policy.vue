<script setup lang="ts">
const siteUrl = 'https://code-world-bagel.com'
const pageUrl = `${siteUrl}/travel-language/privacy-policy`

useSeoMeta({
  title: 'Privacy Policy — 熊好講 TravelLanguage',
  description: 'Privacy Policy for 熊好講 TravelLanguage. Learn about data collection, advertising, and data deletion.',
  ogTitle: 'Privacy Policy — 熊好講 TravelLanguage',
  ogDescription: 'Privacy Policy for 熊好講 TravelLanguage. Learn about data collection, advertising, and data deletion.',
  ogImage: `${siteUrl}/images/travel-language/icon.png`,
  ogUrl: pageUrl,
  ogType: 'website',
  twitterCard: 'summary',
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
})
</script>

<template>
  <div class="privacy-page">
    <div class="container">
      <div class="privacy-content">
        <NuxtLink to="/travel-language" class="back-link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Back to TravelLanguage
        </NuxtLink>

        <h1 class="privacy-title">Privacy Policy</h1>
        <p class="privacy-app">熊好講 TravelLanguage</p>
        <p class="privacy-updated">Last Updated: 2026-04-04</p>

        <section class="privacy-section">
          <h2>Overview</h2>
          <p>熊好講 TravelLanguage ("the App") is a travel language learning application developed by 扣握貝果 CodeWorldBagel. The App helps users learn Japanese and Korean through interactive travel scenario dialogues. We respect your privacy and are committed to protecting your personal information.</p>
        </section>

        <section class="privacy-section">
          <h2>Data Collection</h2>
          <p>The App does <strong>not</strong> require any account or sign-in. All learning progress, preferences, and settings are stored <strong>locally on your device only</strong>.</p>
          <p>We do not collect, transmit, or store any personal information on external servers.</p>
          <table class="privacy-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Storage</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Learning progress</td>
                <td>Local device only</td>
                <td>Track completed levels</td>
              </tr>
              <tr>
                <td>Language preference</td>
                <td>Local device only</td>
                <td>Remember selected language</td>
              </tr>
              <tr>
                <td>Practice statistics</td>
                <td>Local device only</td>
                <td>Display accuracy and streak</td>
              </tr>
              <tr>
                <td>Purchase status</td>
                <td>Local device only</td>
                <td>Remember ad removal purchase</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section class="privacy-section">
          <h2>Microphone & Speech Recognition</h2>
          <p>The App may request access to your <strong>microphone</strong> and <strong>speech recognition</strong> for pronunciation practice features. Audio is processed on-device by the system speech recognition engine and is <strong>not</strong> recorded, stored, or transmitted to any server.</p>
          <p>You can deny these permissions and still use all other features of the App.</p>
        </section>

        <section class="privacy-section">
          <h2>Advertising</h2>
          <p>The App displays banner and interstitial ads provided by <strong>Google AdMob</strong>. If you grant App Tracking Transparency (ATT) permission, AdMob may use device identifiers to serve personalized ads. If you deny ATT, only non-personalized ads are shown.</p>
          <p>You may permanently remove all advertisements by purchasing the <strong>"Remove Ads"</strong> in-app purchase.</p>
          <p>For more information on Google's data practices, see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.</p>
        </section>

        <section class="privacy-section">
          <h2>In-App Purchases</h2>
          <p>The App offers a one-time, non-consumable in-app purchase to remove advertisements. This transaction is processed entirely by Apple's App Store. We do not have access to your payment information.</p>
        </section>

        <section class="privacy-section">
          <h2>Data Deletion</h2>
          <p>Since all data is stored locally on your device, deleting the App will remove all associated data, including learning progress, preferences, and statistics. This action is irreversible.</p>
        </section>

        <section class="privacy-section">
          <h2>Children's Privacy</h2>
          <p>The App does not knowingly collect information from children under the age of 13.</p>
        </section>

        <section class="privacy-section">
          <h2>Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date.</p>
        </section>

        <section class="privacy-section">
          <h2>Contact</h2>
          <p><strong>Developer:</strong> 扣握貝果 CodeWorldBagel</p>
          <p><strong>Email:</strong> <a href="mailto:codeworldbagel@gmail.com">codeworldbagel@gmail.com</a></p>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.privacy-page {
  padding: 60px 0 80px;
}

.privacy-content {
  max-width: 720px;
  margin: 0 auto;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--color-text-light);
  text-decoration: none;
  margin-bottom: 36px;
  transition: var(--transition);
}

.back-link:hover {
  color: #C75B3F;
}

.privacy-title {
  font-size: 36px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.privacy-app {
  font-size: 16px;
  font-weight: 500;
  color: #C75B3F;
  margin-bottom: 4px;
}

.privacy-updated {
  font-size: 14px;
  color: var(--color-text-light);
  margin-bottom: 48px;
}

.privacy-section {
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--color-border);
}

.privacy-section:last-child {
  border-bottom: none;
}

.privacy-section h2 {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
}

.privacy-section p {
  font-size: 15px;
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: 12px;
}

.privacy-section ul {
  padding-left: 20px;
  margin-bottom: 12px;
}

.privacy-section li {
  font-size: 15px;
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: 4px;
}

.privacy-section a {
  color: #C75B3F;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.privacy-table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 14px;
}

.privacy-table th {
  background-color: var(--color-background-alt);
  color: var(--color-text);
  font-weight: 600;
  padding: 10px 14px;
  text-align: left;
  border: 1px solid var(--color-border);
}

.privacy-table td {
  padding: 10px 14px;
  color: var(--color-text-light);
  border: 1px solid var(--color-border);
}
</style>
