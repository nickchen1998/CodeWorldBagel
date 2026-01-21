# 扣握貝果官網 - Nuxt.js 操作指南

## 目錄結構

```
web/
├── app/
│   ├── app.vue          # 主要應用程式框架
│   ├── pages/           # 頁面目錄 (自動路由)
│   │   └── index.vue    # 首頁 (對應路徑 /)
│   │   └── about.vue    # 關於頁面 (對應路徑 /about)
│   ├── components/      # 可重用組件
│   └── assets/          # 靜態資源 (CSS、圖片等)
├── public/              # 公開靜態檔案 (favicon 等)
├── nuxt.config.ts       # Nuxt 設定檔
└── package.json         # 專案依賴
```

---

## 一、本地開發環境

### 1. 啟動開發伺服器

```bash
cd web
npm run dev
```

開啟瀏覽器訪問 `http://localhost:3000` 即可預覽網站。
修改檔案後會自動熱更新，不需重新啟動。

### 2. 停止開發伺服器

在終端機按 `Ctrl + C`

---

## 二、修改首頁內容

編輯 `web/app/app.vue` 檔案：

```vue
<template>
  <div class="container">
    <header>
      <h1>扣握貝果</h1>           <!-- 修改公司名稱 -->
      <p class="subtitle">CodeWorldBagel</p>  <!-- 修改副標題 -->
    </header>
    <main>
      <p>歡迎來到扣握貝果官方網站</p>  <!-- 修改歡迎文字 -->
    </main>
  </div>
</template>

<style>
/* 在這裡修改樣式 */
</style>
```

---

## 三、新增頁面

### 1. 建立頁面檔案

在 `web/app/pages/` 目錄下建立 `.vue` 檔案，檔名即為路由路徑。

**範例：建立「關於我們」頁面**

建立 `web/app/pages/about.vue`：

```vue
<template>
  <div class="page">
    <h1>關於扣握貝果</h1>
    <p>我們是一間專注於軟體開發的公司...</p>

    <NuxtLink to="/">返回首頁</NuxtLink>
  </div>
</template>

<style scoped>
.page {
  padding: 2rem;
}
</style>
```

訪問路徑：`/about`

### 2. 頁面路由對應表

| 檔案路徑 | 網址路徑 |
|---------|---------|
| `pages/index.vue` | `/` |
| `pages/about.vue` | `/about` |
| `pages/contact.vue` | `/contact` |
| `pages/services/index.vue` | `/services` |
| `pages/services/web.vue` | `/services/web` |

### 3. 使用多頁面時修改 app.vue

當你有多個頁面時，需要修改 `app.vue` 加入 `<NuxtPage />`：

```vue
<template>
  <div>
    <!-- 導航列 -->
    <nav>
      <NuxtLink to="/">首頁</NuxtLink>
      <NuxtLink to="/about">關於我們</NuxtLink>
      <NuxtLink to="/contact">聯絡我們</NuxtLink>
    </nav>

    <!-- 頁面內容會顯示在這裡 -->
    <NuxtPage />
  </div>
</template>
```

---

## 四、建立可重用組件

### 1. 建立組件

在 `web/app/components/` 目錄下建立組件檔案。

**範例：建立頁首組件**

建立 `web/app/components/Header.vue`：

```vue
<template>
  <header class="header">
    <div class="logo">扣握貝果</div>
    <nav>
      <NuxtLink to="/">首頁</NuxtLink>
      <NuxtLink to="/about">關於</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #333;
  color: white;
}

nav a {
  color: white;
  margin-left: 1rem;
}
</style>
```

### 2. 使用組件

組件會自動註冊，直接在頁面中使用即可：

```vue
<template>
  <div>
    <Header />  <!-- 自動引入，不需 import -->
    <main>
      <h1>頁面內容</h1>
    </main>
  </div>
</template>
```

---

## 五、新增圖片和靜態資源

### 1. public 目錄 (推薦)

放在 `web/public/` 目錄下的檔案可直接透過 URL 訪問。

```
web/public/
├── logo.png
├── favicon.ico
└── images/
    └── banner.jpg
```

使用方式：
```vue
<template>
  <img src="/logo.png" alt="Logo" />
  <img src="/images/banner.jpg" alt="Banner" />
</template>
```

### 2. assets 目錄

放在 `web/app/assets/` 的檔案會經過打包處理。

```vue
<template>
  <img src="~/assets/images/photo.jpg" alt="Photo" />
</template>
```

---

## 六、修改網站標題和 SEO

### 1. 全站標題

編輯 `web/nuxt.config.ts`：

```typescript
export default defineNuxtConfig({
  app: {
    head: {
      title: '扣握貝果 CodeWorldBagel',
      meta: [
        { name: 'description', content: '扣握貝果官方網站 - 專業軟體開發服務' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
```

### 2. 單頁標題

在頁面中使用 `useHead`：

```vue
<script setup>
useHead({
  title: '關於我們 - 扣握貝果',
  meta: [
    { name: 'description', content: '了解扣握貝果的故事' }
  ]
})
</script>

<template>
  <div>
    <h1>關於我們</h1>
  </div>
</template>
```

---

## 七、部署更新流程

### 方法一：直接在伺服器上重新建置

```bash
cd /path/to/CodeWorldBagel
docker-compose up -d --build
```

### 方法二：只重建 Nuxt 服務

```bash
docker-compose up -d --build nuxt
```

### 方法三：完整重啟流程

```bash
# 停止服務
docker-compose down

# 重新建置並啟動
docker-compose up -d --build
```

---

## 八、常用指令速查表

| 指令 | 說明 |
|-----|------|
| `npm run dev` | 啟動本地開發伺服器 |
| `npm run build` | 建置生產版本 |
| `npm run preview` | 預覽生產版本 |
| `docker-compose up -d --build` | 部署到 Docker |
| `docker-compose logs nuxt` | 查看 Nuxt 服務日誌 |
| `docker-compose restart nuxt` | 重啟 Nuxt 服務 |

---

## 九、常見問題

### Q: 修改後沒有更新？

1. 本地開發：確認開發伺服器正在運行 (`npm run dev`)
2. Docker 部署：需要重新建置 (`docker-compose up -d --build nuxt`)

### Q: 樣式沒有套用？

確認 `<style>` 標籤：
- `<style scoped>` - 樣式只套用於當前組件
- `<style>` - 樣式套用於全域

### Q: 連結如何設定？

```vue
<!-- 內部連結 -->
<NuxtLink to="/about">關於我們</NuxtLink>

<!-- 外部連結 -->
<a href="https://example.com" target="_blank">外部網站</a>
```

### Q: 如何加入 Google Analytics？

編輯 `nuxt.config.ts`：

```typescript
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID',
          async: true
        }
      ]
    }
  }
})
```

---

## 十、學習資源

- [Nuxt 官方文件](https://nuxt.com/docs)
- [Vue.js 官方文件](https://vuejs.org/guide/introduction.html)
