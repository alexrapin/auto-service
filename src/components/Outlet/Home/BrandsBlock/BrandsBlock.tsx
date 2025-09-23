/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import theme from "@/constants/theme";
import { brandsBlockData } from "./brandsBlock.data";
import * as styles from "./styles";

export default function BrandsBlock() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <section id="about" css={styles.section(theme)}>
      <h2 css={styles.mainTitle(theme)}>{brandsBlockData.title}</h2>
      <div css={styles.grid}>
        {brandsBlockData.brands.map((brand, index) => (
          <div key={index} css={styles.card}>
            <img src={brand.img} alt={brand.name} css={styles.brandImage} />
            <h3 css={styles.brandTitle}>{brand.name}</h3>
          </div>
        ))}
      </div>

      <div css={styles.contentWrapper}>
        {brandsBlockData.visibleContent.map((block, index) => (
          <div key={`visible-${index}`}>
            <h3 css={styles.contentTitle(theme)}>{block.title}</h3>
            <p css={styles.contentDescription}>{block.description}</p>
          </div>
        ))}

        <div css={styles.hiddenContent(isExpanded)}>
          {brandsBlockData.hiddenContent.map((block, index) => (
            <div key={`hidden-${index}`}>
              {block.title && (
                <h3 css={styles.contentTitle(theme)}>{block.title}</h3>
              )}
              <p css={styles.contentDescription}>{block.description}</p>
            </div>
          ))}
        </div>

        <button onClick={handleToggle} css={styles.button}>
          {isExpanded
            ? brandsBlockData.buttonTextHide
            : brandsBlockData.buttonTextShow}
        </button>
      </div>
    </section>
  );
}
