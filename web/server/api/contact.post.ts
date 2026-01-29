import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, subject, message, products } = body

  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: '請填寫所有必填欄位'
    })
  }

  if (subject.length > 20) {
    throw createError({
      statusCode: 400,
      statusMessage: '主旨不得超過 20 字'
    })
  }

  if (message.length > 500) {
    throw createError({
      statusCode: 400,
      statusMessage: '訊息內容不得超過 500 字'
    })
  }

  const config = useRuntimeConfig()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.gmailUser,
      pass: config.gmailAppPassword
    }
  })

  const productLabels: Record<string, string> = {
    'travel-diary': '旅行日記 TravelDiary',
    'cotton-friend': '棉棉好朋友 CottonFriend',
    'rag-pilot': '數據領航員 RAGPilot',
    'custom': '客製化開發諮詢'
  }

  const selectedProducts = (products as string[])
    ?.map(p => productLabels[p] || p)
    .join('、') || '未選擇'

  const htmlContent = `
    <p>${name} 您好，</p>
    <p>感謝您的來信諮詢，我們已經收到您的訊息，將會盡快安排專人回覆您。</p>
    <p>以下是您提交的內容備份：</p>
    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
    <p><strong>感興趣的項目：</strong>${selectedProducts}</p>
    <p><strong>主旨：</strong>${subject}</p>
    <p><strong>訊息內容：</strong></p>
    <p style="white-space: pre-line;">${message.replace(/\n/g, '<br>')}</p>
    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
    <p>如有任何緊急需求，歡迎直接回覆此信件。</p>
    <br>
    <p>扣握貝果 CodeWorldBagel 團隊</p>
  `

  const recipients = [email, 'nickchen1998@gmail.com', 'honey881212@gmail.com']

  await transporter.sendMail({
    from: `扣握貝果 CodeWorldBagel <${config.gmailUser}>`,
    to: recipients.join(', '),
    subject: `[扣握貝果] 已收到您的諮詢 - ${subject}`,
    html: htmlContent
  })

  return { success: true }
})
