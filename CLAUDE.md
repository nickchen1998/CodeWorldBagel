# 頁面開發原則

## 產品頁面結構

每個產品頁面必須遵循統一的區塊順序：

1. **Hero** — 全螢幕置中佈局
2. **Showcase（產品預覽）** — 左右交錯圖文展示
3. **Features（核心功能）** — 四欄 grid 卡片
4. **CTA（行動呼籲）** — 置中文案 + 按鈕
5. **ContactSection** — 聯絡表單元件

若產品尚無截圖或尚未上線，Showcase 區塊以 Coming Soon placeholder 替代，不得省略。

## Hero 區塊規範

- 使用 `min-height: 100dvh`，垂直置中
- 容器使用 `display: flex; justify-content: center`，內容水平置中
- 內容最大寬度 `max-width: 560px`，文字置中
- 元素順序：badge → icon 圖片（80x80, border-radius: 18px）→ 標題 → 英文副標 → 標語 → CTA 按鈕
- 產品狀態 badge（如「產品準備中」）緊跟分類 badge 之後，使用黃色系（`color: #b45309; background: #fef3c7`）
- 手機版：`min-height: auto`，hero-content 內使用 `min-height: calc(100dvh - 60px - 80px)` + flex column 置中

## Showcase 區塊規範

- 使用 `grid-template-columns: 1fr 1fr` 左右佈局
- 奇偶交錯使用 `direction: rtl` 實現左右翻轉
- 手機版 App 截圖 `max-width: 200px`（手機截圖）或 `max-width: 100%`（網頁截圖）
- 相鄰項目之間以 `border-top: 1px solid var(--color-border)` 分隔

## Features 區塊規範

- 背景色使用 `var(--color-background-alt)`
- 四欄 grid（`repeat(4, 1fr)`），1024px 以下改兩欄，768px 以下改單欄
- 卡片：14px border-radius、hover 上移 4px + box-shadow
- icon 容器：56x56、14px border-radius、accent-light 背景 + accent-dark 文字色
- 每個產品恰好 4 個 feature 卡片

## CTA 區塊規範

- 內容置中，`max-width: 480px`
- 已上線產品使用外部連結（App Store / 網站），按鈕為 `<a>` 標籤
- 未上線產品使用 `<button>` 觸發 Coming Soon modal

## CSS 命名慣例

- 每個產品使用兩字母前綴避免衝突：`tb-`（travel-budget）、`tl-`（travel-language）、`td-`（travel-diary）、`rp-`（rag-pilot）
- CSS 自訂變數定義在頁面根元素：`--{prefix}-accent`、`--{prefix}-accent-dark`、`--{prefix}-accent-light`
- 全站共用變數（如 `--color-text`、`--color-border`）直接引用，不重複定義

## 品牌色定義

- 各產品自有品牌色定義在各自頁面的 `<style scoped>` 內
- travel-budget：`#E8A73A` 系
- travel-language：`#C75B3F` 系
- travel-diary / rag-pilot：使用全站主色 `var(--color-primary)` 系

## 首頁產品列表

- 產品 grid 使用 `repeat(2, 1fr)` 雙欄佈局，手機版單欄
- 每張卡片：icon 圖片（64x64）→ 產品名稱 → 一句話描述
- 未上線產品在 icon 旁顯示「產品準備中」小標籤（黃色系，`position: absolute`）

## 導覽列同步

新增或移除產品時，以下位置必須同步更新：

- `NavBar.vue` — dropdown 項目
- `index.vue` — 首頁產品 grid
- `ContactSection.vue` — `productLabels` 物件 + checkbox 選項

## 聯絡表單

- 每個產品頁面底部皆包含 `<ContactSection :default-product="xxx" />`
- 所有產品必須在 `ContactSection.vue` 的 `productLabels` 中註冊
- 最後一個 checkbox 固定為「客製化開發諮詢」

## 響應式斷點

- `1024px` — features grid 兩欄、showcase gap 縮小
- `768px` — 單欄佈局、hero 調整、font-size 縮小

## SEO / GEO 規範

### 基本 Meta（每個頁面必備）

每個頁面的 `<script setup>` 必須包含：

```ts
const siteUrl = 'https://code-world-bagel.com'
const pageUrl = `${siteUrl}/your-path`

useSeoMeta({
  title: '頁面標題 - 扣握貝果',
  description: '頁面描述',
  ogTitle: '同 title',
  ogDescription: '同 description',
  ogImage: `${siteUrl}/images/...`,  // 必須是完整 URL
  ogUrl: pageUrl,
  ogType: 'website',
  twitterCard: 'summary_large_image',  // 有大圖用 summary_large_image，否則 summary
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
})
```

### 全站 Meta（nuxt.config.ts 管理）

以下由 `nuxt.config.ts` 全域注入，頁面內不重複設定：
- `og:locale`（`zh_TW`）
- `og:site_name`（`扣握貝果 CodeWorldBagel`）
- Organization JSON-LD

### JSON-LD 結構化資料

- 首頁：`WebSite` schema
- 產品頁：`SoftwareApplication` schema，包含 name、description、applicationCategory、operatingSystem、offers、author
- 未上線產品的 offers.availability 設為 `https://schema.org/PreOrder`
- JSON-LD 透過 `useHead({ script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({...}) }] })` 注入

### ogImage 規則

- 必須使用完整 URL（`https://code-world-bagel.com/images/...`），不可使用相對路徑
- 產品頁使用產品截圖，隱私權政策頁使用產品 icon

### 新增頁面 SEO checklist

1. `useSeoMeta` 含完整欄位（title, description, og*, twitterCard）
2. `useHead` 含 canonical link
3. 產品頁含對應 JSON-LD
4. ogImage 使用完整 URL
