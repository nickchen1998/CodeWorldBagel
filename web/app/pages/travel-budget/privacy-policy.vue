<script setup lang="ts">
useSeoMeta({
  title: '隱私權政策 — 熊好算 TravelBudget',
  description: '熊好算 TravelBudget 隱私權政策，說明資料蒐集、雲端儲存、廣告及資料刪除方式。',
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
          返回熊好算頁面
        </NuxtLink>

        <h1 class="privacy-title">隱私權政策</h1>
        <p class="privacy-app">熊好算 TravelBudget</p>
        <p class="privacy-updated">最後更新：2026-03-30</p>

        <section class="privacy-section">
          <h2>概述</h2>
          <p>熊好算 TravelBudget（以下稱「本 App」）是由扣握貝果 CodeWorldBagel 開發的旅遊記帳應用程式。我們尊重並致力於保護您的個人資料。</p>
        </section>

        <section class="privacy-section">
          <h2>資料蒐集</h2>
          <h3>未登入使用</h3>
          <p>您可以在不登入的情況下使用本 App 的所有核心功能：</p>
          <ul>
            <li>所有旅行與消費資料僅儲存於<strong>您的裝置本機</strong>。</li>
            <li>不會蒐集或傳送任何個人資料至我們的伺服器。</li>
          </ul>

          <h3>使用 Apple 登入（選用）</h3>
          <p>若您選擇使用 Apple 登入，以下資料可能會被蒐集並儲存至我們的雲端伺服器：</p>
          <table class="privacy-table">
            <thead>
              <tr>
                <th>資料</th>
                <th>用途</th>
                <th>是否連結身分</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>姓名（來自 Apple ID）</td>
                <td>顯示於帳號區塊</td>
                <td>是</td>
              </tr>
              <tr>
                <td>電子郵件（來自 Apple ID）</td>
                <td>帳號識別</td>
                <td>是</td>
              </tr>
              <tr>
                <td>旅行與消費資料</td>
                <td>雲端備份與共編</td>
                <td>是</td>
              </tr>
            </tbody>
          </table>
          <p>登入為選用功能，僅在使用雲端備份或旅程共編功能時需要。</p>
        </section>

        <section class="privacy-section">
          <h2>雲端儲存</h2>
          <p>登入後，您的旅行與消費資料將同步至 <strong>Supabase</strong>（supabase.com）雲端平台。儲存的資料包含旅行名稱、預算、幣別、消費紀錄及日期。本 App 不儲存任何金融帳戶資訊或付款資料。</p>
          <p>Supabase 隱私政策：<a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">https://supabase.com/privacy</a></p>
        </section>

        <section class="privacy-section">
          <h2>旅程共編</h2>
          <p>若您透過邀請連結將旅程分享給其他使用者，共編成員可根據其角色（編輯者或查閱者）存取該旅程資料。您可隨時在分享頁面移除共編成員。</p>
        </section>

        <section class="privacy-section">
          <h2>廣告</h2>
          <p>本 App 使用 <strong>Google AdMob</strong> 顯示橫幅廣告。若您授予「允許追蹤（ATT）」權限，AdMob 可能使用裝置識別碼提供個人化廣告；若您拒絕，則僅顯示非個人化廣告。</p>
          <p>您可透過購買 App 內的「移除廣告」永久移除所有廣告。</p>
          <p>如需了解 Google 的資料處理方式，請參閱 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google 隱私權政策</a>。</p>
        </section>

        <section class="privacy-section">
          <h2>照片存取</h2>
          <p>本 App 可能會要求存取您的相簿，以便選取旅行封面圖片。所選圖片僅儲存於您的裝置本機，不會上傳至我們的伺服器。</p>
        </section>

        <section class="privacy-section">
          <h2>資料刪除</h2>
          <p><strong>未登入：</strong>刪除 App 即可移除所有本機資料。</p>
          <p><strong>已登入：</strong>請使用 App 內的「設定 → 帳號 → 刪除帳號」，永久刪除您的帳號及所有雲端資料。此操作無法復原。</p>
        </section>

        <section class="privacy-section">
          <h2>兒童隱私</h2>
          <p>本 App 不會有意蒐集 13 歲以下兒童的個人資訊。</p>
        </section>

        <section class="privacy-section">
          <h2>政策變更</h2>
          <p>本隱私權政策可能不定期更新，任何變更將於本頁面反映並更新日期。</p>
        </section>

        <section class="privacy-section">
          <h2>聯絡方式</h2>
          <p><strong>開發者：</strong>扣握貝果 CodeWorldBagel</p>
          <p><strong>Email：</strong><a href="mailto:codeworldbagel@gmail.com">codeworldbagel@gmail.com</a></p>
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
