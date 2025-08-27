import Circle from "../../Circle";
import { advantagesData } from "./advantages.data";
import * as styles from "./style";

export default function Advantages() {
  return (
    <section css={styles.section}>
      <div css={styles.titleBlock}>
        <Circle />
        <h2 css={styles.title}>{advantagesData.title}</h2>
      </div>
      <ul css={styles.list}>
        {advantagesData.items.map(({ id, title, description, img }) => (
          <li key={id}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
