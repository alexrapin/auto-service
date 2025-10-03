/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Circle from "../../Circle";
import { servicesData } from "./services.data";
import * as styles from "./style";
import theme from "@/constants/theme";

export default function Services() {
  return (
    <section id="services" css={styles.section}>
      <div css={styles.titleBlock}>
        <Circle />
        <h2 css={styles.title}>{servicesData.title}</h2>
      </div>
      <ul css={styles.list(theme)}>
        {servicesData.items.map(
          ({ id, title, descriptionTitle, description, img }) => (
            <li key={id}>
              <div css={styles.link}>
                <h3>{title}</h3>
                <Image src={img} alt={title} width={200} height={170} />
                <h4>{descriptionTitle}</h4>
                <p>{description}</p>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
}
