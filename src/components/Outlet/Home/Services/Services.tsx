/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Circle from "../../Circle";
import { servicesData } from "./services.data";
import * as styles from "./style";

export default function Services() {
  return (
    <section css={styles.section}>
      <div css={styles.titleBlock}>
        <Circle />
        <h2 css={styles.title}>{servicesData.title}</h2>
      </div>
      <ul css={styles.list}>
        {servicesData.items.map(({ id, title, descriptionTitle, description, img }) => (
          <li key={id}>
            <Link css={styles.link} href={`/services/${id}`}>
              <h3>{title}</h3>
              <img src={img} alt={title} />
              <h4>{descriptionTitle}</h4>
              <p>{description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
