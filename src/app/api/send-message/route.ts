// app/api/send-message/route.ts
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const { name, phoneNumber, subject, message } = await req.json()

    const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID

    if (!TELEGRAM_TOKEN || !CHAT_ID) {
        return NextResponse.json({ success: false, error: "Token yoki Chat ID topilmadi" }, { status: 500 })
    }

    const text = `
📬 Yangi kontakt xabari:
👤 Ismi: ${name}
📧 Telefon raqam: ${phoneNumber}
📝 Mavzu: ${subject}
💬 Xabar: ${message}
  `

    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`

    const telegramRes = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
        }),
    })

    const telegramText = await telegramRes.text()
    console.log("Telegram javobi:", telegramText)

    if (!telegramRes.ok) {
        return NextResponse.json(
            { success: false, error: "Telegramga yuborilmadi", response: telegramText },
            { status: 500 }
        )
    }

    return NextResponse.json({ success: true })
}