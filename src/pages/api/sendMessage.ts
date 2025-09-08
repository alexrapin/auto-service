// pages/api/sendMessage.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, phone, comment } = req.body;

  const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;

  if (!TELEGRAM_TOKEN || !CHAT_ID) {
    return res.status(500).json({ message: "Missing Telegram credentials" });
  }

  const text = `
🚗 Нова заявка з сайту:
👤 Ім'я: ${name || "-"}
📞 Телефон: ${phone || "-"}
💬 Коментар: ${comment || "-"}
  `;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(await response.text());
    }

    return res.status(200).json({ message: "Повідомлення надіслано" });
  } catch (error) {
    return res.status(500).json({ message: "Помилка відправки", error });
  }
}
