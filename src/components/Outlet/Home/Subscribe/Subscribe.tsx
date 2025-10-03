/* eslint-disable @next/next/no-img-element */
import { subscribeData } from "./subscribe.data";
import * as styles from "./style";

import { useState } from "react";
import theme from "@/constants/theme";
import Link from "next/link";
import Image from "next/image";

export default function Subscribe() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const formatPhone = (value: string) => {
    let digits = value.replace(/\D/g, "");
    if (digits.startsWith("")) digits = digits.slice(3);
    if (!digits.startsWith("0")) digits = "0" + digits;
    digits = digits.slice(0, 10);
    let formatted = "+38 (";
    formatted += digits.slice(0, 3);
    if (digits.length > 3) formatted += ") " + digits.slice(3, 6);
    if (digits.length > 6) formatted += "-" + digits.slice(6, 8);
    if (digits.length > 8) formatted += "-" + digits.slice(8, 10);
    return formatted;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // чистимо номер для бекенду
      const payload = { ...formData };
      if (formData.phone) {
        const digits = formData.phone.replace(/\D/g, ""); // "671234567"
        payload.phone = "+" + digits; // ✅ "+380671234567"
      }

      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", phone: "+38 (0", comment: "" });
      }
    } catch (err) {
      console.error("Помилка:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="fix" css={styles.section(theme)}>
      <nav css={styles.nav(theme)}>
        {subscribeData.nav.map(({ id, title, url, img }) => (
          <Link
            css={styles.navLink(theme)}
            key={id}
            href={url}
            onMouseEnter={() => setHoveredId(String(id))}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Image
              css={styles.navImg(theme)}
              src={img}
              alt={title}
              data-active={hoveredId === String(id)}
              width={40}
              height={40}
            />
            <div css={styles.circle(theme)}></div>
            <span css={styles.navText(theme)}>{title}</span>
          </Link>
        ))}
        <div css={styles.line}></div>
      </nav>
      <div css={styles.subscribeContainer(theme)}>
        <Image
          width={600}
          height={400}
          src={subscribeData.image}
          alt="garageImage"
          css={styles.image}
        />
        <form css={styles.form} onSubmit={handleSubmit}>
          <h2 css={styles.title}>{subscribeData.formData.title}</h2>
          <p css={styles.subtitle}>{subscribeData.formData.subtitle}</p>
          <p css={styles.text}>{subscribeData.formData.text}</p>
          <div css={styles.inputsContainer}>
            <input
              css={styles.input}
              type="text"
              placeholder="Ім'я"
              value={formData.name}
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              css={styles.input}
              type="text"
              placeholder="Телефон"
              value={formData.phone}
              required
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: formatPhone(e.target.value),
                })
              }
              onClick={(e) => {
                const input = e.target as HTMLInputElement;
                if (input.selectionStart !== null && input.selectionStart < 7) {
                  input.setSelectionRange(7, 7);
                }
              }}
              onFocus={(e) => {
                const input = e.target as HTMLInputElement;
                if (input.selectionStart !== null && input.selectionStart < 7) {
                  input.setSelectionRange(7, 7);
                }
              }}
            />
            <input
              css={styles.input}
              type="text"
              placeholder="Коментар"
              value={formData.comment}
              required
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
            />
            <button css={styles.button} type="submit" disabled={loading}>
              {loading ? "Відправка..." : "Записатись"}
            </button>
          </div>
          {success && (
            <p style={{ color: "green" }}>✅ Повідомлення надіслано!</p>
          )}
        </form>
      </div>
    </section>
  );
}
