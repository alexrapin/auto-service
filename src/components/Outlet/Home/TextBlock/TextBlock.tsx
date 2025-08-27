import { textBlockData } from "./textBlock.data";
import * as styles from "./style";

export default function TextBlock() {
  return (
    <section
      css={styles.section}
      style={{ backgroundImage: `url(${textBlockData.img})` }}
    >
      <div css={styles.textBlock}>
        <h3 css={styles.title}>{textBlockData.title}</h3>
        <p css={styles.description}>{textBlockData.description}</p>
      </div>
    </section>
  );
}
