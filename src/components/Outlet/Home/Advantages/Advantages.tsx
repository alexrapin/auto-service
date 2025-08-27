import { advantagesData } from "./advantages.data";
import * as styles from "./style";

export default function Advantages() {
  return (
    <section css={styles.section}>
      <h2>{advantagesData.title}</h2>
      <ul>
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
