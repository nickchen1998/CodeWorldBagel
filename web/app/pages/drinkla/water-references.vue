<script setup lang="ts">
const siteUrl = 'https://code-world-bagel.com'
const pageUrl = `${siteUrl}/drinkla/water-references`

useSeoMeta({
  title: '飲水量文獻 — 喝啦 DrinkLa',
  description: '一天到底要喝多少水？整理 EFSA、NASEM、Holliday-Segar 等國際權威建議與環境調整係數，附完整參考文獻與中英文對照。',
  ogTitle: '飲水量文獻 — 喝啦 DrinkLa',
  ogDescription: '一天到底要喝多少水？整理 EFSA、NASEM、Holliday-Segar 等國際權威建議與環境調整係數，附完整參考文獻與中英文對照。',
  ogImage: `${siteUrl}/images/drinkla/icon.png`,
  ogUrl: pageUrl,
  ogType: 'article',
  twitterCard: 'summary',
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
})

const activeTab = ref<'zh' | 'en'>('zh')

const tocItems = [
  { id: 's1', zh: '一、先打破一個迷思', en: '1. First, a Common Myth' },
  { id: 's2', zh: '二、影響你需要多少水的四個關鍵', en: '2. Four Key Factors' },
  { id: 's3', zh: '三、最簡單的個人化算法', en: '3. The Simplest Formula' },
  { id: 's4', zh: '四、依環境調整：你今天在哪？', en: '4. Adjust for Environment' },
  { id: 's5', zh: '五、特殊情況要多喝（或要小心）', en: '5. Special Cases' },
  { id: 's6', zh: '六、好習慣比數字更重要', en: '6. Habits Matter More' },
  { id: 's7', zh: '七、一個簡單的口訣', en: '7. A Simple Rule of Thumb' },
  { id: 's8', zh: '八、最後提醒', en: '8. One Final Reminder' },
  { id: 'refs', zh: '參考文獻', en: 'References' },
]

const activeId = ref<string>('s1')
let observer: IntersectionObserver | null = null

const setupObserver = async () => {
  if (typeof window === 'undefined') return
  await nextTick()
  observer?.disconnect()
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      }
    },
    { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
  )
  tocItems.forEach(({ id }) => {
    const el = document.getElementById(id)
    if (el) observer!.observe(el)
  })
}

onMounted(setupObserver)
watch(activeTab, setupObserver)
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div class="references-page">
    <div class="container">
      <div class="references-content">
        <NuxtLink to="/drinkla" class="back-link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {{ activeTab === 'zh' ? '返回喝啦' : 'Back to DrinkLa' }}
        </NuxtLink>

        <h1 class="references-title">
          {{ activeTab === 'zh' ? '一天到底要喝多少水？看這篇就夠' : 'How Much Water Do You Really Need? One Article Has You Covered' }}
        </h1>
        <p class="references-app">喝啦 DrinkLa</p>

        <div class="lang-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            :aria-selected="activeTab === 'zh'"
            class="lang-tab"
            :class="{ active: activeTab === 'zh' }"
            @click="activeTab = 'zh'"
          >
            中文
          </button>
          <button
            type="button"
            role="tab"
            :aria-selected="activeTab === 'en'"
            class="lang-tab"
            :class="{ active: activeTab === 'en' }"
            @click="activeTab = 'en'"
          >
            English
          </button>
        </div>

        <!-- Mobile / 窄螢幕：可收合 inline 目錄 -->
        <details class="toc-mobile">
          <summary>{{ activeTab === 'zh' ? '本篇目錄' : 'Table of Contents' }}</summary>
          <ul>
            <li v-for="item in tocItems" :key="item.id">
              <a :href="`#${item.id}`">{{ activeTab === 'zh' ? item.zh : item.en }}</a>
            </li>
          </ul>
        </details>

        <!-- Desktop / 寬螢幕：右側 sticky 浮動目錄 -->
        <aside class="toc-desktop" aria-label="Table of contents">
          <p class="toc-title">{{ activeTab === 'zh' ? '本篇目錄' : 'On this page' }}</p>
          <ul>
            <li
              v-for="item in tocItems"
              :key="item.id"
              :class="{ active: item.id === activeId }"
            >
              <a :href="`#${item.id}`">{{ activeTab === 'zh' ? item.zh : item.en }}</a>
            </li>
          </ul>
        </aside>

        <!-- 中文版 -->
        <article v-if="activeTab === 'zh'" class="article">
          <p class="ai-note">本文使用 Claude Opus 4.7 協助彙整。</p>
          <p>你大概聽過「一天八杯水」、「2000 cc」、「體重乘 30」之類的說法。哪個才對？答案是：<strong>沒有單一數字適合所有人</strong>，但用幾個簡單的因素就能算出屬於你自己的合理範圍。</p>
          <p>這篇用最白話的方式，幫你理解三件事：</p>
          <ol>
            <li>為什麼每個人需要的水量不一樣</li>
            <li>怎麼快速算出你自己的目標</li>
            <li>在冷氣房、戶外時要怎麼調整</li>
          </ol>

          <section id="s1" class="article-section">
            <h2>一、先打破一個迷思</h2>
            <blockquote><strong>「一天一定要喝滿 2000 cc」並不是真理。</strong></blockquote>
            <p>權威機構（歐洲 EFSA、美國 IOM）公布的數字是「<strong>平均建議攝取量</strong>」——女性大約 2 公升、男性大約 2.5 公升。但這個數字包含<strong>所有來源</strong>：白開水、茶、湯、咖啡，甚至蔬果裡的水分都算。</p>
            <p>實際上，吃下肚的食物大約提供你 <strong>2 成</strong> 的水分，剩下 8 成才是你需要「喝」進來的。所以<strong>真正要喝的水</strong>比帳面上少。</p>
            <p>另外一件事：你的身體有「口渴」這個非常準的內建感測器。健康成人多半<strong>跟著口渴喝水就夠了</strong>，不必硬逼自己達標。</p>
          </section>

          <section id="s2" class="article-section">
            <h2>二、影響你需要多少水的四個關鍵</h2>
            <div class="table-wrap">
              <table class="references-table">
                <thead>
                  <tr><th>因素</th><th>為什麼有影響</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>體重</strong></td><td>越重的人，代謝跟散熱面積越大，需要的水越多。這是最重要的一個因子。</td></tr>
                  <tr><td><strong>身高</strong></td><td>跟體重一起決定身體表面積，影響散熱與水分蒸發。</td></tr>
                  <tr><td><strong>年齡</strong></td><td>嬰幼兒每公斤需要的水比大人多；65 歲以上則因為腎臟濃縮能力與口渴感變弱，<strong>反而要小心別喝過量</strong>。</td></tr>
                  <tr><td><strong>所在環境</strong></td><td>戶外、流汗、低濕度的冷氣房都會加快水分流失。</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="s3" class="article-section">
            <h2>三、最簡單的個人化算法</h2>
            <p>如果你想要一個快速的數字，用這個三段式公式（醫學上叫做 Holliday-Segar 法）：</p>
            <blockquote>
              <strong>體重前 10 公斤</strong>：每公斤 × 100 cc<br>
              <strong>體重 11–20 公斤</strong>：每公斤 × 50 cc<br>
              <strong>體重超過 20 公斤的部分</strong>：每公斤 × 20 cc<br>
              把三段加起來，就是你一天的「總水分」需求。
            </blockquote>
            <p>再乘以 <strong>0.8</strong> 就是你真正要「喝下去」的量（其餘從食物來）。</p>

            <h3>算給你看</h3>
            <p><strong>70 公斤的大人</strong></p>
            <ul>
              <li>前 10 公斤 → 10 × 100 = 1000</li>
              <li>11–20 公斤 → 10 × 50 = 500</li>
              <li>21–70 公斤 → 50 × 20 = 1000</li>
              <li>加總：2500 cc 總水分 → <strong>× 0.8 = 約 2000 cc 要喝</strong></li>
            </ul>
            <p><strong>25 公斤的小朋友</strong></p>
            <ul>
              <li>前 10 公斤 → 1000</li>
              <li>11–20 公斤 → 500</li>
              <li>21–25 公斤 → 100</li>
              <li>加總：1600 cc 總水分 → <strong>約 1280 cc 要喝</strong></li>
            </ul>
            <p><strong>12 公斤的幼兒</strong></p>
            <ul>
              <li>12 × 100 = 1200 cc 總水分 → <strong>約 960 cc</strong>（含奶、湯、副食品的水分）</li>
            </ul>
            <p>這個算法從嬰幼兒到成人都適用，是世界各地醫院長年在用的標準。</p>
          </section>

          <section id="s4" class="article-section">
            <h2>四、依環境調整：你今天在哪？</h2>
            <p>算出基本量之後，根據你今天主要待的環境再「乘一個倍數」：</p>
            <div class="table-wrap">
              <table class="references-table">
                <thead>
                  <tr><th>你的環境</th><th>乘多少</th><th>為什麼</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>冷氣房</strong>（室內、乾燥）</td><td>× 1.05</td><td>冷氣會把空氣濕度降到 30 % 以下，皮膚和呼吸的「無感蒸發」會悄悄加速。</td></tr>
                  <tr><td><strong>一般室內</strong>（沒開空調或舒適溫度）</td><td>× 1.00</td><td>這是基本款，不用調整。</td></tr>
                  <tr><td><strong>戶外</strong>（炎熱、走動或工作）</td><td>× 1.30</td><td>30 °C 以上加上活動，需求大約多 3 成。</td></tr>
                  <tr><td><strong>戶外＋大量流汗</strong>（運動、勞動）</td><td>× 1.50</td><td>身體研究指出 30 °C 需求約倍增、40 °C 約三倍，職場建議每小時補 700–950 cc。</td></tr>
                </tbody>
              </table>
            </div>
            <h3>舉例：一個 70 公斤的上班族</h3>
            <ul>
              <li>在家或舒適辦公室：約 <strong>2000 cc</strong></li>
              <li>整天待強冷氣房：約 <strong>2100 cc</strong></li>
              <li>假日去戶外走跳：約 <strong>2600 cc</strong></li>
              <li>在烈日下打球或登山：約 <strong>3000 cc 以上</strong></li>
            </ul>
          </section>

          <section id="s5" class="article-section">
            <h2>五、特殊情況要多喝（或要小心）</h2>
            <p><strong>這幾種情況通常需要再增加：</strong></p>
            <ul>
              <li><strong>發燒、感冒、腹瀉、嘔吐</strong></li>
              <li><strong>懷孕</strong>：每天多約 300 cc</li>
              <li><strong>哺乳</strong>：每天多約 700 cc</li>
              <li><strong>高蛋白飲食、低碳飲食、生酮</strong></li>
              <li><strong>高海拔旅行</strong></li>
            </ul>
            <p><strong>這幾種情況反而不要喝太多：</strong></p>
            <ul>
              <li><strong>腎臟病、心臟衰竭、嚴重肝病</strong>：請依醫師建議</li>
              <li><strong>服用利尿劑或某些慢性病藥物</strong>：先問醫師</li>
              <li><strong>65 歲以上</strong>：感受口渴的能力下降，但身體排水也變慢，<strong>穩定少量、分多次喝</strong>比一次灌一大瓶安全</li>
            </ul>
          </section>

          <section id="s6" class="article-section">
            <h2>六、好習慣比數字更重要</h2>
            <p>達不達標不是重點，<strong>喝水的方式</strong>反而決定了你會不會脫水：</p>
            <ol>
              <li><strong>睡醒先喝一杯</strong>——晚上呼吸蒸發掉的水，醒來你已經輕度缺水。</li>
              <li><strong>每 1–2 小時補一小杯</strong>，比忙到下班再灌兩瓶有用得多。</li>
              <li><strong>看尿色當儀表板</strong>——淡黃色像稀釋的檸檬水最理想；深黃就是該補水了。</li>
              <li><strong>運動前後要稱重</strong>——運動前後體重差幾乎都是水分，差多少就補多少。</li>
              <li><strong>別等到口渴才喝</strong>——感覺到口渴時，身體大概已經失去 1–2% 的水分，反應速度跟專注力都已經下降。</li>
            </ol>
          </section>

          <section id="s7" class="article-section">
            <h2>七、一個簡單的口訣</h2>
            <blockquote>
              <strong>體重 × 30 cc</strong> 是大人在一般環境下、最快速的粗估值。<br>
              例如：60 公斤 × 30 = 1800 cc。<br>
              冷氣房再 +5 %，戶外再 +30 %，運動流汗再 +50 %。<br>
              不必精準，當作這幾天「我有沒有差太多」的參考即可。
            </blockquote>
          </section>

          <section id="s8" class="article-section">
            <h2>八、最後提醒</h2>
            <p>水可以救命，但<strong>過量也會出事</strong>——短時間內喝下太多水（例如 1 小時超過 1.5 公升而沒有流汗）會稀釋血液中的鈉，造成「水中毒」。<strong>每天總攝取超過 4 公升、又不是在大量流汗</strong>的情境下，請先停一下、想想真的需要嗎。</p>
            <p>口渴、尿色、活動量、環境——把這四個指標當作你的「水分儀表板」，比任何一個固定數字都可靠。</p>
          </section>

          <section id="refs" class="article-section">
            <h2>參考文獻</h2>
            <p>本篇文章所有數字與建議皆引用自下列國際權威機構與同儕審查期刊。</p>

            <h3>官方機構建議</h3>
            <ol class="ref-list">
              <li>
                <strong>歐洲食品安全局（EFSA）每日水分建議攝取量</strong> — EFSA Panel on Dietetic Products, Nutrition, and Allergies. <em>Scientific Opinion on Dietary Reference Values for water</em>. EFSA Journal. 2010;8(3):1459.（提供成人女性 2.0 L、男性 2.5 L，以及嬰幼兒到青少年的分齡建議）<br>
                👉 <a href="https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2010.1459" target="_blank" rel="noopener noreferrer">efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2010.1459</a>
              </li>
              <li>
                <strong>美國國家科學院 IOM／NASEM 水分建議攝取量</strong> — Institute of Medicine, Food and Nutrition Board. <em>Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate</em>. National Academies Press; 2005.（成人女性 2.7 L、男性 3.7 L；說明 80 % 來自飲品、20 % 來自食物）<br>
                👉 <a href="https://www.nationalacademies.org/read/10925/chapter/6" target="_blank" rel="noopener noreferrer">nationalacademies.org/read/10925/chapter/6</a>
              </li>
              <li>
                <strong>美國職業安全衛生研究所（NIOSH）高溫工作補水建議</strong> — OSHA·NIOSH. <em>Protecting Workers from Heat Illness</em> (Infosheet).（戶外工作每小時 710–950 cc）<br>
                👉 <a href="https://www.osha.gov/sites/default/files/publications/osha-niosh-heat-illness-infosheet.pdf" target="_blank" rel="noopener noreferrer">osha.gov/.../osha-niosh-heat-illness-infosheet.pdf</a>
              </li>
            </ol>

            <h3>醫學計算公式</h3>
            <ol class="ref-list" start="4">
              <li>
                <strong>Holliday-Segar 法（100/50/20 三段式公式）</strong> — Holliday MA, Segar WE. <em>The maintenance need for water in parenteral fluid therapy</em>. Pediatrics. 1957;19(5):823–832.（沿用至今的小兒與成人維持液體計算標準）<br>
                👉 兒科麻醉手冊整理：<a href="https://www.maskinduction.com/the-4-2-1-rule-for-maintenance-fluid-therapy-in-infants-and-children.html" target="_blank" rel="noopener noreferrer">maskinduction.com/the-4-2-1-rule-...</a>
              </li>
              <li>
                <strong>體表面積（BSA）法</strong>（每平方公尺 1500 cc）— Cleveland Clinic Journal of Medicine. <em>Does my patient need maintenance fluids?</em> CCJM. 2019;86(10):653–664.<br>
                👉 <a href="https://www.ccjm.org/content/86/10/653" target="_blank" rel="noopener noreferrer">ccjm.org/content/86/10/653</a>
              </li>
            </ol>

            <h3>環境與生理因素</h3>
            <ol class="ref-list" start="6">
              <li>
                <strong>環境溫度對飲水需求的影響</strong> — Sawka MN, Cheuvront SN, Carter R. <em>Human water needs</em>. Nutrition Reviews. 2005;63(6 Pt 2):S30–S39.（30 °C 需求倍增、40 °C 三倍）<br>
                👉 <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1753-4887.2005.tb00152.x" target="_blank" rel="noopener noreferrer">onlinelibrary.wiley.com/doi/abs/10.1111/j.1753-4887.2005.tb00152.x</a>
              </li>
              <li>
                <strong>冷氣房低濕度對腎臟與水分流失的影響</strong> — Lin YC, et al. <em>Effects of Air Conditioning-Induced Humidity Reduction on Glomerular Filtration Rate in Healthy Adults</em>. 2024.<br>
                👉 <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12143181/" target="_blank" rel="noopener noreferrer">pmc.ncbi.nlm.nih.gov/articles/PMC12143181</a>
              </li>
              <li>
                <strong>每日水分平衡與「真的每日需求」之辯</strong> — Armstrong LE, Johnson EC. <em>Water Intake, Water Balance, and the Elusive Daily Water Requirement</em>. Nutrients. 2018;10(12):1928.（口渴自然調節、過量風險）<br>
                👉 <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6315424/" target="_blank" rel="noopener noreferrer">pmc.ncbi.nlm.nih.gov/articles/PMC6315424</a>
              </li>
              <li>
                <strong>運動與熱壓力下的補水建議</strong> — Sawka MN, et al. <em>American College of Sports Medicine Position Stand: Exercise and Fluid Replacement</em>. Med Sci Sports Exerc. 2007;39(2):377–390.<br>
                👉 <a href="https://pubmed.ncbi.nlm.nih.gov/9303999/" target="_blank" rel="noopener noreferrer">pubmed.ncbi.nlm.nih.gov/9303999</a>
              </li>
              <li>
                <strong>體重 × mL 法在族群層級的實證</strong> — Wilson MMG, Morley JE. <em>Total water intake by kilogram of body weight: Analysis of the Australian 2011–2013 NNPAS</em>. PubMed; 2021.（成人中位數約 35.5 mL/kg）<br>
                👉 <a href="https://pubmed.ncbi.nlm.nih.gov/34327801/" target="_blank" rel="noopener noreferrer">pubmed.ncbi.nlm.nih.gov/34327801</a>
              </li>
            </ol>

            <h3>兒童與長者特別需求</h3>
            <ol class="ref-list" start="11">
              <li>
                <strong>兒童與成人之營養與水分需求總論</strong> — StatPearls Publishing. <em>Nutrition and Hydration Requirements In Children and Adults</em>. NCBI Bookshelf.<br>
                👉 <a href="https://www.ncbi.nlm.nih.gov/books/NBK562207/" target="_blank" rel="noopener noreferrer">ncbi.nlm.nih.gov/books/NBK562207</a>
              </li>
              <li>
                <strong>長者腎臟濃縮能力與口渴感下降之研究</strong> — Cleveland Clinic Foundation. <em>Water balance, hydration status, and fat-free mass hydration in younger and older adults</em>. PMC.<br>
                👉 <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2495085/" target="_blank" rel="noopener noreferrer">pmc.ncbi.nlm.nih.gov/articles/PMC2495085</a>
              </li>
            </ol>
          </section>

          <p class="disclaimer"><em>本文內容為一般保健資訊，不能取代醫療建議。有腎臟、心臟、肝臟疾病、服用利尿劑或慢性病藥物者，以及孕婦、哺乳婦女、嬰幼兒，請依醫師或營養師個別指示為準。</em></p>
        </article>

        <!-- English version -->
        <article v-else class="article">
          <p class="ai-note">This article was compiled with the help of Claude Opus 4.7.</p>
          <p>You've probably heard "8 glasses a day," "2000 cc," or "weight × 30." Which is right? The answer is: <strong>no single number works for everyone</strong>, but a few simple factors will get you to a sensible range that fits you.</p>
          <p>This article explains three things in plain language:</p>
          <ol>
            <li>Why everyone's water needs are different</li>
            <li>How to quickly calculate your personal target</li>
            <li>How to adjust for air-conditioned rooms vs. the outdoors</li>
          </ol>

          <section id="s1" class="article-section">
            <h2>1. First, a Common Myth</h2>
            <blockquote><strong>"You must drink exactly 2000 cc per day"</strong> is not the truth.</blockquote>
            <p>The numbers from authoritative bodies (EFSA in Europe, IOM in the US) are <strong>average recommended intakes</strong> — about 2 L for women, 2.5 L for men. But these numbers cover <strong>all sources</strong>: plain water, tea, soup, coffee, even the water in fruits and vegetables.</p>
            <p>In practice, food provides about <strong>20%</strong> of your water; the remaining 80% is what you actually need to drink. So the amount you need to <strong>drink</strong> is less than the headline number suggests.</p>
            <p>One more thing: your body has a very accurate built-in sensor — thirst. For healthy adults, <strong>drinking when you feel thirsty is usually enough</strong>; you don't have to force yourself to hit a target.</p>
          </section>

          <section id="s2" class="article-section">
            <h2>2. Four Key Factors That Affect Your Water Needs</h2>
            <div class="table-wrap">
              <table class="references-table">
                <thead>
                  <tr><th>Factor</th><th>Why it matters</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Body weight</strong></td><td>Heavier people have higher metabolism and a larger heat-dissipating surface area, so they need more water. This is the most important factor.</td></tr>
                  <tr><td><strong>Height</strong></td><td>Together with weight, height determines body surface area, which affects heat dissipation and water evaporation.</td></tr>
                  <tr><td><strong>Age</strong></td><td>Infants need more water per kg than adults; people over 65 have weaker kidney concentrating ability and reduced thirst sensation, so they should <strong>be careful not to overdrink</strong>.</td></tr>
                  <tr><td><strong>Environment</strong></td><td>Outdoors, sweating, and low-humidity air-conditioned rooms all accelerate water loss.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="s3" class="article-section">
            <h2>3. The Simplest Personalized Formula</h2>
            <p>If you want a quick number, use this three-tier formula (medically known as the Holliday-Segar method):</p>
            <blockquote>
              <strong>First 10 kg of body weight</strong>: 100 cc per kg<br>
              <strong>Body weight 11–20 kg</strong>: 50 cc per kg<br>
              <strong>Body weight above 20 kg</strong>: 20 cc per kg<br>
              Add the three tiers — that's your daily total water requirement.
            </blockquote>
            <p>Multiply by <strong>0.8</strong> for the amount you actually need to <strong>drink</strong> (the rest comes from food).</p>

            <h3>Worked Examples</h3>
            <p><strong>70 kg adult</strong></p>
            <ul>
              <li>First 10 kg → 10 × 100 = 1000</li>
              <li>11–20 kg → 10 × 50 = 500</li>
              <li>21–70 kg → 50 × 20 = 1000</li>
              <li>Total: 2500 cc → <strong>× 0.8 = about 2000 cc to drink</strong></li>
            </ul>
            <p><strong>25 kg child</strong></p>
            <ul>
              <li>First 10 kg → 1000</li>
              <li>11–20 kg → 500</li>
              <li>21–25 kg → 100</li>
              <li>Total: 1600 cc → <strong>about 1280 cc to drink</strong></li>
            </ul>
            <p><strong>12 kg toddler</strong></p>
            <ul>
              <li>12 × 100 = 1200 cc total → <strong>about 960 cc</strong> (including water from milk, soup, and solids)</li>
            </ul>
            <p>This formula works from infants to adults and has been the hospital standard worldwide for decades.</p>
          </section>

          <section id="s4" class="article-section">
            <h2>4. Adjust for Your Environment</h2>
            <p>Once you have your baseline, multiply by a factor for the environment you'll spend most of the day in:</p>
            <div class="table-wrap">
              <table class="references-table">
                <thead>
                  <tr><th>Environment</th><th>Multiplier</th><th>Why</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Air-conditioned room</strong> (indoor, dry)</td><td>× 1.05</td><td>AC drops humidity below 30%, quietly accelerating "insensible" loss through skin and breath.</td></tr>
                  <tr><td><strong>Normal indoor</strong> (no AC, comfortable temp)</td><td>× 1.00</td><td>Baseline — no adjustment needed.</td></tr>
                  <tr><td><strong>Outdoors</strong> (hot, walking or working)</td><td>× 1.30</td><td>Above 30 °C with activity, you need about 30% more.</td></tr>
                  <tr><td><strong>Outdoors + heavy sweating</strong> (sport, labor)</td><td>× 1.50</td><td>Studies show needs roughly double at 30 °C and triple at 40 °C; workplace guidance is 700–950 cc per hour.</td></tr>
                </tbody>
              </table>
            </div>
            <h3>Example: a 70-kg office worker</h3>
            <ul>
              <li>At home or in a comfortable office: about <strong>2000 cc</strong></li>
              <li>All day in heavy AC: about <strong>2100 cc</strong></li>
              <li>Outdoor weekend trip: about <strong>2600 cc</strong></li>
              <li>Sports or hiking under hot sun: <strong>over 3000 cc</strong></li>
            </ul>
          </section>

          <section id="s5" class="article-section">
            <h2>5. Special Cases — Drink More (or Be Careful)</h2>
            <p><strong>These usually require more water:</strong></p>
            <ul>
              <li><strong>Fever, cold, diarrhea, vomiting</strong></li>
              <li><strong>Pregnancy</strong>: about 300 cc more per day</li>
              <li><strong>Breastfeeding</strong>: about 700 cc more per day</li>
              <li><strong>High-protein, low-carb, or ketogenic diets</strong></li>
              <li><strong>High-altitude travel</strong></li>
            </ul>
            <p><strong>These call for caution:</strong></p>
            <ul>
              <li><strong>Kidney disease, heart failure, severe liver disease</strong>: follow your doctor's advice</li>
              <li><strong>Diuretics or certain chronic medications</strong>: ask your doctor first</li>
              <li><strong>Over 65</strong>: thirst sensation declines but excretion also slows — <strong>steady, small, frequent sips</strong> are safer than one big bottle</li>
            </ul>
          </section>

          <section id="s6" class="article-section">
            <h2>6. Habits Matter More Than Numbers</h2>
            <p>Hitting a target isn't the point. <strong>How you drink</strong> matters more for whether you stay hydrated:</p>
            <ol>
              <li><strong>Drink when you wake up</strong> — overnight breathing dries you out; you wake up mildly dehydrated.</li>
              <li><strong>A small cup every 1–2 hours</strong> beats two big bottles after work.</li>
              <li><strong>Use urine color as a dashboard</strong> — pale yellow like diluted lemonade is ideal; dark yellow means drink up.</li>
              <li><strong>Weigh yourself before and after exercise</strong> — almost all the difference is water; replace what you lost.</li>
              <li><strong>Don't wait until you're thirsty</strong> — by the time you feel thirsty, you've lost 1–2% of your body water, and your reaction time and focus are already down.</li>
            </ol>
          </section>

          <section id="s7" class="article-section">
            <h2>7. A Simple Rule of Thumb</h2>
            <blockquote>
              <strong>Body weight × 30 cc</strong> is the fastest rough estimate for adults in normal conditions.<br>
              e.g. 60 kg × 30 = 1800 cc.<br>
              Air-conditioned room: +5%. Outdoors: +30%. Sweating sport: +50%.<br>
              Don't aim for precision — use it as a "did I drink way too little this week" check.
            </blockquote>
          </section>

          <section id="s8" class="article-section">
            <h2>8. One Final Reminder</h2>
            <p>Water can save your life, but <strong>too much can also cause harm</strong>. Drinking too much in a short time (e.g. more than 1.5 L in an hour without sweating) dilutes blood sodium, causing "water intoxication." If your daily total exceeds 4 L <strong>without heavy sweating</strong>, pause and ask whether you really need that much.</p>
            <p>Thirst, urine color, activity, environment — treat these four signals as your "hydration dashboard." They're more reliable than any fixed number.</p>
          </section>

          <section id="refs" class="article-section">
            <h2>References</h2>
            <p>All numbers and recommendations in this article are drawn from the international authorities and peer-reviewed journals listed below.</p>

            <h3>Official Guidelines</h3>
            <ol class="ref-list">
              <li>
                <strong>EFSA daily water intake recommendations</strong> — EFSA Panel on Dietetic Products, Nutrition, and Allergies. <em>Scientific Opinion on Dietary Reference Values for water</em>. EFSA Journal. 2010;8(3):1459. (Adult women 2.0 L, men 2.5 L; age-tiered guidance for infants through adolescents.)<br>
                👉 <a href="https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2010.1459" target="_blank" rel="noopener noreferrer">efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2010.1459</a>
              </li>
              <li>
                <strong>US National Academies (IOM/NASEM) water intake recommendations</strong> — Institute of Medicine, Food and Nutrition Board. <em>Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate</em>. National Academies Press; 2005. (Adult women 2.7 L, men 3.7 L; explains 80% comes from drinks, 20% from food.)<br>
                👉 <a href="https://www.nationalacademies.org/read/10925/chapter/6" target="_blank" rel="noopener noreferrer">nationalacademies.org/read/10925/chapter/6</a>
              </li>
              <li>
                <strong>OSHA / NIOSH heat-stress hydration guidance</strong> — OSHA·NIOSH. <em>Protecting Workers from Heat Illness</em> (Infosheet). (710–950 cc per hour for outdoor workers.)<br>
                👉 <a href="https://www.osha.gov/sites/default/files/publications/osha-niosh-heat-illness-infosheet.pdf" target="_blank" rel="noopener noreferrer">osha.gov/.../osha-niosh-heat-illness-infosheet.pdf</a>
              </li>
            </ol>

            <h3>Medical Calculation Methods</h3>
            <ol class="ref-list" start="4">
              <li>
                <strong>Holliday-Segar method (100/50/20 three-tier formula)</strong> — Holliday MA, Segar WE. <em>The maintenance need for water in parenteral fluid therapy</em>. Pediatrics. 1957;19(5):823–832. (Still the standard for pediatric and adult maintenance fluid calculations.)<br>
                👉 Pediatric anesthesia summary: <a href="https://www.maskinduction.com/the-4-2-1-rule-for-maintenance-fluid-therapy-in-infants-and-children.html" target="_blank" rel="noopener noreferrer">maskinduction.com/the-4-2-1-rule-...</a>
              </li>
              <li>
                <strong>Body surface area (BSA) method</strong> (1500 cc per m²) — Cleveland Clinic Journal of Medicine. <em>Does my patient need maintenance fluids?</em> CCJM. 2019;86(10):653–664.<br>
                👉 <a href="https://www.ccjm.org/content/86/10/653" target="_blank" rel="noopener noreferrer">ccjm.org/content/86/10/653</a>
              </li>
            </ol>

            <h3>Environmental and Physiological Factors</h3>
            <ol class="ref-list" start="6">
              <li>
                <strong>Effect of ambient temperature on water needs</strong> — Sawka MN, Cheuvront SN, Carter R. <em>Human water needs</em>. Nutrition Reviews. 2005;63(6 Pt 2):S30–S39. (Needs roughly double at 30 °C, triple at 40 °C.)<br>
                👉 <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1753-4887.2005.tb00152.x" target="_blank" rel="noopener noreferrer">onlinelibrary.wiley.com/doi/abs/10.1111/j.1753-4887.2005.tb00152.x</a>
              </li>
              <li>
                <strong>Effect of low AC humidity on kidney and water loss</strong> — Lin YC, et al. <em>Effects of Air Conditioning-Induced Humidity Reduction on Glomerular Filtration Rate in Healthy Adults</em>. 2024.<br>
                👉 <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12143181/" target="_blank" rel="noopener noreferrer">pmc.ncbi.nlm.nih.gov/articles/PMC12143181</a>
              </li>
              <li>
                <strong>The elusive "true" daily water requirement</strong> — Armstrong LE, Johnson EC. <em>Water Intake, Water Balance, and the Elusive Daily Water Requirement</em>. Nutrients. 2018;10(12):1928. (Self-regulation by thirst; risks of overconsumption.)<br>
                👉 <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6315424/" target="_blank" rel="noopener noreferrer">pmc.ncbi.nlm.nih.gov/articles/PMC6315424</a>
              </li>
              <li>
                <strong>Hydration during exercise and heat stress</strong> — Sawka MN, et al. <em>American College of Sports Medicine Position Stand: Exercise and Fluid Replacement</em>. Med Sci Sports Exerc. 2007;39(2):377–390.<br>
                👉 <a href="https://pubmed.ncbi.nlm.nih.gov/9303999/" target="_blank" rel="noopener noreferrer">pubmed.ncbi.nlm.nih.gov/9303999</a>
              </li>
              <li>
                <strong>Population evidence for the weight × mL method</strong> — Wilson MMG, Morley JE. <em>Total water intake by kilogram of body weight: Analysis of the Australian 2011–2013 NNPAS</em>. PubMed; 2021. (Adult median around 35.5 mL/kg.)<br>
                👉 <a href="https://pubmed.ncbi.nlm.nih.gov/34327801/" target="_blank" rel="noopener noreferrer">pubmed.ncbi.nlm.nih.gov/34327801</a>
              </li>
            </ol>

            <h3>Special Needs in Children and Older Adults</h3>
            <ol class="ref-list" start="11">
              <li>
                <strong>Overview of nutrition and hydration needs across the lifespan</strong> — StatPearls Publishing. <em>Nutrition and Hydration Requirements In Children and Adults</em>. NCBI Bookshelf.<br>
                👉 <a href="https://www.ncbi.nlm.nih.gov/books/NBK562207/" target="_blank" rel="noopener noreferrer">ncbi.nlm.nih.gov/books/NBK562207</a>
              </li>
              <li>
                <strong>Decline in kidney concentrating ability and thirst with age</strong> — Cleveland Clinic Foundation. <em>Water balance, hydration status, and fat-free mass hydration in younger and older adults</em>. PMC.<br>
                👉 <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2495085/" target="_blank" rel="noopener noreferrer">pmc.ncbi.nlm.nih.gov/articles/PMC2495085</a>
              </li>
            </ol>
          </section>

          <p class="disclaimer"><em>This article is general health information and is not a substitute for medical advice. People with kidney, heart, or liver disease, those taking diuretics or chronic medications, pregnant or breastfeeding women, and infants should follow their physician's or dietitian's individual guidance.</em></p>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.references-page {
  padding: 60px 0 80px;
}

.references-content {
  max-width: 760px;
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

.references-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 8px;
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.references-app {
  font-size: 16px;
  font-weight: 500;
  color: #3B82C4;
  margin-bottom: 24px;
}

/* Language tabs */
.lang-tabs {
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  background-color: var(--color-background-alt);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  margin-bottom: 40px;
}

.lang-tab {
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-light);
  background: transparent;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: var(--transition);
}

.lang-tab:hover {
  color: #3B82C4;
}

.lang-tab.active {
  background-color: #3B82C4;
  color: #ffffff;
  box-shadow: 0 2px 6px rgba(59, 130, 196, 0.25);
}

/* Article body */
.article > p,
.article > ol,
.article > ul {
  font-size: 15px;
  color: var(--color-text-light);
  line-height: 1.85;
  margin-bottom: 16px;
}

.article > ol,
.article > ul {
  padding-left: 22px;
}

.article-section {
  margin-top: 36px;
  padding-top: 36px;
  border-top: 1px solid var(--color-border);
  scroll-margin-top: 100px;
}

.article-section h2 {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 14px;
  letter-spacing: -0.01em;
}

.article-section h3 {
  font-size: 17px;
  font-weight: 600;
  color: var(--color-text);
  margin-top: 24px;
  margin-bottom: 10px;
}

.article-section p,
.article-section li {
  font-size: 15px;
  color: var(--color-text-light);
  line-height: 1.85;
}

.article-section p {
  margin-bottom: 12px;
}

.article-section ul,
.article-section ol {
  padding-left: 22px;
  margin-bottom: 12px;
}

.article-section li {
  margin-bottom: 6px;
}

.article-section a {
  color: #3B82C4;
  text-decoration: underline;
  text-underline-offset: 2px;
  word-break: break-all;
}

.article-section a:hover {
  color: #2967a3;
}

blockquote {
  margin: 16px 0;
  padding: 14px 18px;
  background-color: #e8f1f9;
  border-left: 4px solid #3B82C4;
  border-radius: 6px;
  font-size: 15px;
  color: var(--color-text);
  line-height: 1.85;
}

.table-wrap {
  overflow-x: auto;
  margin: 16px 0;
}

.references-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.references-table th {
  background-color: var(--color-background-alt);
  color: var(--color-text);
  font-weight: 600;
  padding: 10px 14px;
  text-align: left;
  border: 1px solid var(--color-border);
  vertical-align: top;
}

.references-table td {
  padding: 10px 14px;
  color: var(--color-text-light);
  border: 1px solid var(--color-border);
  vertical-align: top;
  line-height: 1.7;
}

.ref-list {
  padding-left: 22px;
}

.ref-list li {
  margin-bottom: 14px;
  line-height: 1.8;
}

.disclaimer {
  margin-top: 36px;
  padding: 16px 18px;
  background-color: var(--color-background-alt);
  border-radius: 8px;
  font-size: 14px;
  color: var(--color-text-light);
  line-height: 1.7;
}

.ai-note {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 20px;
  font-size: 13px;
  color: var(--color-text-light);
  background-color: var(--color-background-alt);
  border-radius: 6px;
  border-left: 3px solid #3B82C4;
}

/* TOC — mobile inline (collapsible) */
.toc-mobile {
  margin-bottom: 32px;
  padding: 14px 18px;
  background-color: var(--color-background-alt);
  border: 1px solid var(--color-border);
  border-radius: 10px;
}

.toc-mobile > summary {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.toc-mobile > summary::-webkit-details-marker {
  display: none;
}

.toc-mobile > summary::before {
  content: '';
  width: 0;
  height: 0;
  border-left: 5px solid var(--color-text-light);
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  transition: transform 0.2s ease;
}

.toc-mobile[open] > summary::before {
  transform: rotate(90deg);
}

.toc-mobile ul {
  list-style: none;
  padding: 12px 0 0 0;
  margin: 0;
}

.toc-mobile li {
  margin: 0;
}

.toc-mobile a {
  display: block;
  padding: 6px 0;
  font-size: 14px;
  color: var(--color-text-light);
  text-decoration: none;
  transition: var(--transition);
}

.toc-mobile a:hover {
  color: #3B82C4;
}

/* TOC — desktop fixed sidebar */
.toc-desktop {
  display: none;
}

@media (min-width: 1200px) {
  .toc-mobile {
    display: none;
  }

  .toc-desktop {
    display: block;
    position: fixed;
    top: 120px;
    right: calc(50% + 400px);
    width: 220px;
    max-height: calc(100vh - 160px);
    overflow-y: auto;
    padding-right: 16px;
    border-right: 1px solid var(--color-border);
  }

  .toc-desktop .toc-title {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-text-light);
    margin-bottom: 12px;
  }

  .toc-desktop ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .toc-desktop li {
    margin: 0;
  }

  .toc-desktop a {
    display: block;
    padding: 6px 12px 6px 0;
    margin-right: -17px;
    font-size: 13px;
    line-height: 1.5;
    color: var(--color-text-light);
    text-decoration: none;
    border-right: 2px solid transparent;
    transition: var(--transition);
  }

  .toc-desktop a:hover {
    color: #3B82C4;
  }

  .toc-desktop li.active a {
    color: #3B82C4;
    font-weight: 600;
    border-right-color: #3B82C4;
  }
}

@media (max-width: 768px) {
  .references-page {
    padding: 40px 0 60px;
  }

  .references-title {
    font-size: 24px;
  }

  .article-section h2 {
    font-size: 19px;
  }

  .article-section h3 {
    font-size: 16px;
  }
}
</style>
