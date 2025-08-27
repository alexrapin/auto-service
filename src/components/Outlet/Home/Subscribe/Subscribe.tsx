import { subscribeData } from "./subscribe.data";
import * as styles from "./style";

import { useState } from "react";

export default function Subscribe() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section css={styles.section}>
      <nav css={styles.nav}>
        {subscribeData.nav.map(({id, title, url, img}) => (
          <a
            css={styles.navLink}
            key={id}
            href={url}
            onMouseEnter={() => setHoveredId(String(id))}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              css={styles.navImg}
              src={img}
              alt={title}
              data-active={hoveredId === String(id)}
            />
            <div css={styles.circle}></div>
            <span css={styles.navText}>{title}</span>
          </a>
        ))}
        <div css={styles.line}></div>
      </nav>
      <div css={styles.subscribeContainer}>
        <img src={subscribeData.image} alt="garageImage" css={styles.image} />
        <form css={styles.form}>
          <div>
            <h2 css={styles.title}>{subscribeData.formData.title}</h2>
            <p css={styles.subtitle}>{subscribeData.formData.subtitle}</p>
            <p css={styles.text}>{subscribeData.formData.text}</p>
          </div>
          <div css={styles.inputsContainer}>
            <input css={styles.input} type="text" placeholder="Ім'я" />
            <input css={styles.input} type="text" placeholder="Марка авто" />
            <input css={styles.input} type="text" placeholder="Телефон" />
            <button css={styles.button} type="submit">Записатись</button>
          </div>
        </form>
      </div>
    </section>
  );
}
