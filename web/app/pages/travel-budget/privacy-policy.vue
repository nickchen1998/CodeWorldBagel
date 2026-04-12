<script setup lang="ts">
const siteUrl = 'https://code-world-bagel.com'
const pageUrl = `${siteUrl}/travel-budget/privacy-policy`

useSeoMeta({
  title: 'Privacy Policy — 熊好算 TravelBudget',
  description: 'Privacy Policy for 熊好算 TravelBudget. Learn about data collection, cloud storage, advertising, and data deletion.',
  ogTitle: 'Privacy Policy — 熊好算 TravelBudget',
  ogDescription: 'Privacy Policy for 熊好算 TravelBudget. Learn about data collection, cloud storage, advertising, and data deletion.',
  ogImage: `${siteUrl}/images/travel-budget/icon.png`,
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
        <NuxtLink to="/travel-budget" class="back-link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Back to TravelBudget
        </NuxtLink>

        <h1 class="privacy-title">Privacy Policy</h1>
        <p class="privacy-app">熊好算 TravelBudget</p>
        <p class="privacy-updated">Last Updated: 2026-03-30</p>

        <section class="privacy-section">
          <h2>Overview</h2>
          <p>熊好算 TravelBudget ("the App") is a travel expense tracking application developed by 扣握貝果 CodeWorldBagel. We respect your privacy and are committed to protecting your personal information.</p>
        </section>

        <section class="privacy-section">
          <h2>Data Collection</h2>
          <h3>Using the App Without an Account</h3>
          <p>You may use all core features of the App without signing in. In this case:</p>
          <ul>
            <li>All trip and expense data is stored <strong>locally on your device only</strong>.</li>
            <li>No personal information is collected or transmitted to our servers.</li>
          </ul>

          <h3>Signing In with Apple (Optional)</h3>
          <p>If you choose to sign in using Sign in with Apple, the following data may be collected and stored on our cloud server (Supabase):</p>
          <table class="privacy-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Purpose</th>
                <th>Linked to Identity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name (from Apple ID)</td>
                <td>Display in account section</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Email address (from Apple ID)</td>
                <td>Account identification</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Trip and expense data</td>
                <td>Cloud backup & collaboration</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
          <p>Signing in is optional and only required to use cloud backup or trip collaboration features.</p>
        </section>

        <section class="privacy-section">
          <h2>Cloud Storage</h2>
          <p>When you are signed in, your trip and expense data is synchronized to <strong>Supabase</strong> (supabase.com), a third-party cloud platform. Data stored includes trip names, budgets, currencies, expense records, and dates. No financial account information or payment data is ever stored.</p>
          <p>Supabase's privacy policy is available at: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">https://supabase.com/privacy</a></p>
        </section>

        <section class="privacy-section">
          <h2>Trip Collaboration</h2>
          <p>If you share a trip with other users via an invite link, collaborators will have access to the trip's data (name, budget, expense records) according to their assigned role (editor or viewer). You can remove collaborators at any time from the share sheet.</p>
        </section>

        <section class="privacy-section">
          <h2>Advertising</h2>
          <p>The App displays banner ads provided by <strong>Google AdMob</strong>. If you grant App Tracking Transparency (ATT) permission, AdMob may use device identifiers to serve personalized ads. If you deny ATT, only non-personalized ads are shown.</p>
          <p>You may permanently remove all advertisements by purchasing the <strong>"Remove Ads"</strong> in-app purchase.</p>
          <p>For more information on Google's data practices, see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.</p>
        </section>

        <section class="privacy-section">
          <h2>Photos</h2>
          <p>The App may request access to your photo library to allow you to select a cover image for your trips. Selected images are stored locally on your device and are never uploaded to our servers.</p>
        </section>

        <section class="privacy-section">
          <h2>Data Deletion</h2>
          <p><strong>Without an account:</strong> Delete the App to remove all local data.</p>
          <p><strong>With an account:</strong> Use <strong>Settings → Account → Delete Account</strong> within the App to permanently delete your account and all associated cloud data (profile, trips, and collaboration records). This action is irreversible.</p>
        </section>

        <section class="privacy-section">
          <h2>Data Retention</h2>
          <p>If you delete your account, all data stored on our servers is deleted immediately. Trip data you created remains on your device in local storage until you delete the App.</p>
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
  color: #E8763A;
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
  color: #E8763A;
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

.privacy-section h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
  margin: 20px 0 8px;
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
  color: #E8763A;
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
