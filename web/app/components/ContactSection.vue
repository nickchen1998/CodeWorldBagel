<script setup lang="ts">
const props = defineProps<{
  defaultProduct?: string
}>()

const selectedProducts = ref<string[]>(props.defaultProduct ? [props.defaultProduct] : [])
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const sending = ref(false)
const sent = ref(false)
const error = ref('')

async function handleSubmit() {
  if (!name.value || !email.value || !subject.value || !message.value) {
    error.value = '請填寫所有必填欄位'
    return
  }

  sending.value = true
  error.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
        products: selectedProducts.value
      }
    })
    sent.value = true
    name.value = ''
    email.value = ''
    subject.value = ''
    message.value = ''
    selectedProducts.value = props.defaultProduct ? [props.defaultProduct] : []
  } catch (e: any) {
    error.value = e?.data?.statusMessage || '發送失敗，請稍後再試'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="contact-title">聯絡我們</h2>
      <p class="contact-subtitle">有任何問題或合作需求，歡迎填寫表單與我們聯繫</p>
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-row">
          <div class="form-group">
            <label for="contact-name" class="form-label">姓名</label>
            <input id="contact-name" v-model="name" type="text" class="form-input" placeholder="請輸入姓名" />
          </div>
          <div class="form-group">
            <label for="contact-email" class="form-label">電子信箱</label>
            <input id="contact-email" v-model="email" type="email" class="form-input" placeholder="請輸入電子信箱" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">感興趣的項目</label>
          <div class="form-checkbox-group">
            <label class="form-checkbox">
              <input v-model="selectedProducts" type="checkbox" value="travel-diary" />
              <span class="checkbox-label">旅行日記 TravelDiary</span>
            </label>
            <label class="form-checkbox">
              <input v-model="selectedProducts" type="checkbox" value="hepha-carbon" />
              <span class="checkbox-label">話燒碳盤查系統 HephaCarbon</span>
            </label>
            <label class="form-checkbox">
              <input v-model="selectedProducts" type="checkbox" value="cotton-friend" />
              <span class="checkbox-label">棉棉好朋友 CottonFriend</span>
            </label>
            <label class="form-checkbox">
              <input v-model="selectedProducts" type="checkbox" value="rag-pilot" />
              <span class="checkbox-label">數據領航員 RAGPilot</span>
            </label>
            <label class="form-checkbox">
              <input v-model="selectedProducts" type="checkbox" value="custom" />
              <span class="checkbox-label">我有想法，想諮詢客製化開發</span>
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="contact-subject" class="form-label">主旨 <span class="form-counter">{{ subject.length }}/20</span></label>
          <input id="contact-subject" v-model="subject" type="text" class="form-input" placeholder="請輸入主旨" maxlength="20" />
        </div>
        <div class="form-group">
          <label for="contact-message" class="form-label">訊息內容 <span class="form-counter">{{ message.length }}/500</span></label>
          <textarea id="contact-message" v-model="message" class="form-input form-textarea" placeholder="請輸入訊息內容" rows="5" maxlength="500"></textarea>
        </div>
        <p v-if="error" class="contact-error">{{ error }}</p>
        <button type="submit" class="btn btn-primary contact-submit" :disabled="sending">
          {{ sending ? '送出中...' : '送出' }}
        </button>
      </form>
    </div>
  </section>

  <Teleport to="body">
    <div v-if="sent" class="contact-modal-overlay" @click="sent = false">
      <div class="contact-modal" @click.stop>
        <h3 class="contact-modal-title">已收到您的訊息</h3>
        <p class="contact-modal-desc">我們已建立一份備份郵件給您，<br>將會儘速回覆，感謝您的來信。</p>
        <button class="btn btn-primary contact-modal-btn" @click="sent = false">好的</button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.contact {
  padding: 80px 0;
}

.contact-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 8px;
}

.contact-subtitle {
  font-size: 16px;
  color: var(--color-text-light);
  text-align: center;
  margin-bottom: 48px;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 6px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 15px;
  color: var(--color-text);
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition: var(--transition);
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-light);
}

.form-input::placeholder {
  color: var(--color-text-light);
  opacity: 0.6;
}

.form-checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.form-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 14px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition: var(--transition);
}

.form-checkbox:hover {
  border-color: var(--color-primary);
  background-color: var(--color-primary-light);
}

.form-checkbox:has(input:checked) {
  border-color: var(--color-primary);
  background-color: var(--color-primary-light);
}

.form-checkbox input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: var(--color-primary-dark);
  cursor: pointer;
}

.checkbox-label {
  font-size: 14px;
  color: var(--color-text);
  user-select: none;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-submit {
  display: block;
  width: 100%;
  padding: 14px;
  font-size: 16px;
  border-radius: 10px;
  margin-top: 8px;
}

.contact-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-counter {
  font-weight: 400;
  font-size: 12px;
  color: var(--color-text-light);
  margin-left: 4px;
}

.contact-error {
  color: #d32f2f;
  font-size: 14px;
  margin-bottom: 12px;
}

.contact-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.contact-modal {
  background: var(--color-background);
  border-radius: 16px;
  padding: 40px 48px;
  text-align: center;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
  max-width: 360px;
  width: 90%;
}

.contact-modal-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
}

.contact-modal-desc {
  font-size: 16px;
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 28px;
}

.contact-modal-btn {
  padding: 10px 28px;
  font-size: 15px;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
