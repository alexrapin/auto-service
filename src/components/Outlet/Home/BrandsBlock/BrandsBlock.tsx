/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import theme from "@/constants/theme"; // Припускаємо, що у вас є файл з темою
import { brandsBlockData } from "./brandsBlock.data";
import * as styles from "./styles";

export default function BrandsBlock() {
  // Створюємо стан для відстеження, чи розкрито текст
  const [isExpanded, setIsExpanded] = useState(false);

  // Функція для перемикання стану
  const handleToggle = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <section css={styles.section(theme)}>
      <h2 css={styles.mainTitle(theme)}>{brandsBlockData.title}</h2>
      <img src={brandsBlockData.logos} alt="Brands" css={styles.logoImage} />

      <div css={styles.contentWrapper}>
        {/* Рендеримо видимий контент */}
        {brandsBlockData.visibleContent.map((block, index) => (
          <div key={`visible-${index}`}>
            <h3 css={styles.contentTitle(theme)}>{block.title}</h3>
            <p css={styles.contentDescription}>{block.description}</p>
          </div>
        ))}
        
        {/* Контейнер для прихованого контенту з анімацією */}
        <div css={styles.hiddenContent(isExpanded)}>
          {brandsBlockData.hiddenContent.map((block, index) => (
            <div key={`hidden-${index}`}>
              {block.title && <h3 css={styles.contentTitle(theme)}>{block.title}</h3>}
              <p css={styles.contentDescription}>{block.description}</p>
            </div>
          ))}
        </div>

        {/* Кнопка змінює текст і викликає функцію перемикання */}
        <button onClick={handleToggle} css={styles.button}>
          {isExpanded ? brandsBlockData.buttonTextHide : brandsBlockData.buttonTextShow}
        </button>
      </div>
    </section>
  );
}