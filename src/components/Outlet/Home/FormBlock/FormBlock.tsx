/* eslint-disable @next/next/no-img-element */
import theme from "@/constants/theme";
import { formBlockData } from "./formBlock.data";
import * as styles from "./style";
import { useState } from "react";

export default function FormBlock() {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        setFormData({});
      }
    } catch (err) {
      console.error("Помилка:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='diagnostics' css={styles.section(theme)}>
      <div css={styles.left}>
        <h2 css={styles.title(theme)}>{formBlockData.contact.title}</h2>
        <p css={styles.description(theme)}>{formBlockData.contact.description}</p>
        <div css={styles.phones(theme)}>
          <div>{formBlockData.contact.phones}</div>
        </div>
        <div css={styles.carImg(theme)}>
          <img src={formBlockData.bgImage} alt="car" />
        </div>
      </div>

      <div css={styles.right}>
        <h3 css={styles.formTitle}>{formBlockData.form.title}</h3>
        <p css={styles.formDescription}>{formBlockData.form.description}</p>

        <form css={styles.form} onSubmit={handleSubmit}>
          {formBlockData.fields.map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              css={styles.input}
              value={formData[field.name] || ""}
              onChange={handleChange}
            />
          ))}

          <button type="submit" css={styles.button} disabled={loading}>
            {loading ? "Відправка..." : "ЗАПИСАТИСЬ"}
          </button>
        </form>

        {success && <p style={{ color: "green" }}>✅ Повідомлення надіслано!</p>}
      </div>
    </section>
  );
}
