/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import theme from "@/constants/theme";
import { faqBlockData } from "./faqBlock.data";
import * as styles from "./style";

export default function FaqBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" css={styles.section(theme)}>
      <h2 css={styles.mainTitle(theme)}>{faqBlockData.title}</h2>

      <div css={styles.contentWrapper}>
        {faqBlockData.items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} css={styles.faqItem(theme)}>
              <button
                css={styles.question(theme, isOpen)}
                onClick={() => handleToggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleToggle(index);
                  }
                }}
              >
                <span>{item.question}</span>
                <span className="arrow" aria-hidden="true" />
              </button>
              <div id={`faq-answer-${index}`} css={styles.answer(theme, isOpen)}>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}