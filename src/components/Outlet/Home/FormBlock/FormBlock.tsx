/* eslint-disable @next/next/no-img-element */
import theme from "@/constants/theme";
import { formBlockData } from "./formBlock.data";
import * as styles from "./style";
import { useState } from "react";
import Image from "next/image";

export default function FormBlock() {
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const formatPhone = (value: string) => {
    // залишаємо тільки цифри
    let digits = value.replace(/\D/g, "");

    // прибираємо +38, якщо користувач його ввів
    if (digits.startsWith("")) {
      digits = digits.slice(3);
    }

    // гарантуємо що номер починається з 0
    if (!digits.startsWith("0")) {
      digits = "0" + digits;
    }

    // максимум 10 цифр (0 + ще 9)
    digits = digits.slice(0, 10);

    // маска
    let formatted = "+38 (";
    formatted += digits.slice(0, 3); // 0XX
    if (digits.length > 3) formatted += ") " + digits.slice(3, 6);
    if (digits.length > 6) formatted += "-" + digits.slice(6, 8);
    if (digits.length > 8) formatted += "-" + digits.slice(8, 10);

    return formatted;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? formatPhone(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Формируем номер для отправки: +380XXXXXXXXX
      const payload = { ...formData };
      if (formData.phone) {
        const digits = formData.phone.replace(/\D/g, "");
        payload.phone = "+" + digits;
      }
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ phone: "+38 (0" }); // очищаємо і повертаємо базовий телефон
      }
    } catch (err) {
      console.error("Помилка:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="diagnostics" css={styles.section(theme)}>
      <div css={styles.left}>
        <h2 css={styles.title(theme)}>{formBlockData.contact.title}</h2>
        <p css={styles.description(theme)}>
          {formBlockData.contact.description}
        </p>
        <div css={styles.phones(theme)}>
          <div>{formBlockData.contact.phones}</div>
        </div>
        <div css={styles.carImg(theme)}>
          <Image
            src={formBlockData.bgImage}
            alt="car"
            width={500}
            height={300}
          />
        </div>
      </div>

      <div css={styles.right}>
        <h3 css={styles.formTitle}>{formBlockData.form.title}</h3>
        <p css={styles.formDescription}>{formBlockData.form.description}</p>

        <form css={styles.form} onSubmit={handleSubmit}>
          {formBlockData.fields.map((field) => {
            if (field.name === "phone") {
              return (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  css={styles.input}
                  required
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  onClick={(e) => {
                    // Запретить курсор перед '0'
                    const input = e.target as HTMLInputElement;
                    if (
                      input.selectionStart !== null &&
                      input.selectionStart < 7
                    ) {
                      input.setSelectionRange(7, 7);
                    }
                  }}
                  onFocus={(e) => {
                    // При фокусе курсор после '0'
                    const input = e.target as HTMLInputElement;
                    if (
                      input.selectionStart !== null &&
                      input.selectionStart < 7
                    ) {
                      input.setSelectionRange(7, 7);
                    }
                  }}
                />
              );
            }
            return (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                css={styles.input}
                value={formData[field.name] || ""}
                required
                onChange={handleChange}
              />
            );
          })}

          <button type="submit" css={styles.button} disabled={loading}>
            {loading ? "Відправка..." : "ЗАПИСАТИСЬ"}
          </button>
        </form>

        {success && (
          <p style={{ color: "green" }}>✅ Повідомлення надіслано!</p>
        )}
      </div>
    </section>
  );
}
