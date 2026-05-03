<script setup lang="ts">
const siteUrl = 'https://code-world-bagel.com'
const pageUrl = `${siteUrl}/drinkla/privacy-policy`

useSeoMeta({
  title: 'Privacy Policy — 喝啦 DrinkLa',
  description: 'Privacy Policy for 喝啦 DrinkLa. Learn about data collection, HealthKit, advertising, and data deletion.',
  ogTitle: 'Privacy Policy — 喝啦 DrinkLa',
  ogDescription: 'Privacy Policy for 喝啦 DrinkLa. Learn about data collection, HealthKit, advertising, and data deletion.',
  ogImage: `${siteUrl}/images/drinkla/icon.png`,
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
        <NuxtLink to="/drinkla" class="back-link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Back to DrinkLa
        </NuxtLink>

        <h1 class="privacy-title">Privacy Policy</h1>
        <p class="privacy-app">喝啦 DrinkLa</p>
        <p class="privacy-updated">Last Updated: 2026-05-03</p>

        <section class="privacy-section">
          <h2>Overview</h2>
          <p>喝啦 DrinkLa ("the App") is a hydration tracking application developed by 扣握貝果 CodeWorldBagel. The App helps users log daily water intake using their real bottles and cups. We respect your privacy and are committed to protecting your personal information.</p>
        </section>

        <section class="privacy-section">
          <h2>Data Collection</h2>
          <p>The App does <strong>not</strong> require any account or sign-in. All settings, containers, drink records, and statistics are stored <strong>locally on your device only</strong>.</p>
          <p>We do not collect, transmit, or store any personal information on our servers — we don't have any.</p>
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
                <td>Nickname, weight, activity level, environment</td>
                <td>Local device only</td>
                <td>Calculate daily water target</td>
              </tr>
              <tr>
                <td>Containers (name, capacity, color, emoji)</td>
                <td>Local device only</td>
                <td>Quick logging from your real bottles &amp; cups</td>
              </tr>
              <tr>
                <td>Drink records (timestamp, amount, source)</td>
                <td>Local device only</td>
                <td>History &amp; daily progress</td>
              </tr>
              <tr>
                <td>Notification preferences</td>
                <td>Local device only</td>
                <td>Schedule local reminders</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section class="privacy-section">
          <h2>Apple HealthKit</h2>
          <p>If you grant permission, the App writes each logged drink to <strong>Apple Health</strong> as a "Water" sample, so you can review hydration trends alongside the rest of your health data. The App only writes; it does not read your other health data.</p>
          <p>HealthKit data never leaves your device. You can revoke this permission at any time in <em>iOS Settings → Privacy &amp; Security → Health</em>.</p>
        </section>

        <section class="privacy-section">
          <h2>Local Notifications</h2>
          <p>The App schedules local reminder notifications based on a time window and frequency you choose. These are scheduled and delivered entirely on-device — we do not operate a push notification server.</p>
          <p>You can disable reminders or change permissions at any time in <em>iOS Settings → Notifications → 喝啦</em>.</p>
        </section>

        <section class="privacy-section">
          <h2>Advertising</h2>
          <p>The App may display rewarded ads when you choose to add a new container or custom amount beyond the defaults included at first launch. Ads are provided by <strong>Google AdMob</strong>. Watching is always optional — you can simply not add new items and continue using the App with everything you set up during onboarding.</p>
          <p>If you grant App Tracking Transparency (ATT) permission, AdMob may use device identifiers (such as IDFA) to serve personalized ads. If you deny ATT, only non-personalized ads are shown.</p>
          <p>For more information on Google's data practices, see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a> and the <a href="https://support.google.com/admob/answer/9012903" target="_blank" rel="noopener noreferrer">AdMob partner disclosure</a>.</p>
        </section>

        <section class="privacy-section">
          <h2>What We Do Not Do</h2>
          <ul>
            <li>We do not show ads on the home, history, knowledge, or settings pages.</li>
            <li>We do not have user accounts or cloud sync.</li>
            <li>We do not collect your name, email, phone, address, or financial information.</li>
            <li>We do not access your photos, microphone, camera, contacts, or location.</li>
            <li>The only third parties we share with are Apple HealthKit (drink samples, if you grant permission) and Google AdMob (when a rewarded ad plays).</li>
          </ul>
        </section>

        <section class="privacy-section">
          <h2>Data Deletion</h2>
          <p>Since all in-app data is stored locally on your device, deleting the App will remove all associated data, including settings, containers, drink history, and notification schedules. This action is irreversible.</p>
          <p>HealthKit "Water" samples written by the App remain in Apple Health until you delete them from the Health app — uninstalling 喝啦 will not remove them automatically.</p>
        </section>

        <section class="privacy-section">
          <h2>Children's Privacy</h2>
          <p>The App is not directed to children under the age of 13 and does not knowingly collect information from them.</p>
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
  color: #3B82C4;
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
  color: #3B82C4;
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
  color: #3B82C4;
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
