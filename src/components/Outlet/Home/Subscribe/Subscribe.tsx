/* eslint-disable @next/next/no-img-element */
import { subscribeData } from "./subscribe.data";
import * as styles from "./style";

import { useState } from "react";
import theme from "@/constants/theme";
import Link from "next/link";

export default function Subscribe() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", phone: "", comment: "" });
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
            <img
              css={styles.navImg(theme)}
              src={img}
              alt={title}
              data-active={hoveredId === String(id)}
            />
            <div css={styles.circle(theme)}></div>
            <span css={styles.navText(theme)}>{title}</span>
          </Link>
        ))}
        <div css={styles.line}></div>
      </nav>
      <div css={styles.subscribeContainer(theme)}>
        <img src={subscribeData.image} alt="garageImage" css={styles.image} />
        <form css={styles.form} onSubmit={handleSubmit}>
          <h2 css={styles.title}>Запис на сервіс</h2>
          <div css={styles.inputsContainer}>
            <input
              css={styles.input}
              type="text"
              placeholder="Ім'я"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              css={styles.input}
              type="text"
              placeholder="Телефон"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <input
              css={styles.input}
              type="text"
              placeholder="Коментар"
              value={formData.comment}
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
