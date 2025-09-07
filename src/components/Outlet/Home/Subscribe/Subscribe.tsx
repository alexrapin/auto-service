/* eslint-disable @next/next/no-img-element */
import { subscribeData } from "./subscribe.data";
import * as styles from "./style";

import { useState } from "react";
import theme from "@/constants/theme";
import Link from "next/link";

export default function Subscribe() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id='fix' css={styles.section(theme)}>
      <nav css={styles.nav(theme)}>
        {subscribeData.nav.map(({id, title, url, img}) => (
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
        <form css={styles.form}>
          <div>
            <h2 css={styles.title}>{subscribeData.formData.title}</h2>
            <p css={styles.subtitle}>{subscribeData.formData.subtitle}</p>
            <p css={styles.text}>{subscribeData.formData.text}</p>
          </div>
          <div css={styles.inputsContainer}>
            <input css={styles.input} type="text" placeholder="Ім'я" />
            <input css={styles.input} type="text" placeholder="Телефон" />
            <input css={styles.input} type="text" placeholder="Коментар" />
            <button css={styles.button} type="submit">Записатись</button>
          </div>
        </form>
      </div>
    </section>
  );
}
