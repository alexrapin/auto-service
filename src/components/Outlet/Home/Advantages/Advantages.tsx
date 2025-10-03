/* eslint-disable @next/next/no-img-element */
import theme from "@/constants/theme";
import Circle from "../../Circle";
import { advantagesData } from "./advantages.data";
import * as styles from "./style";
import Image from "next/image";

export default function Advantages() {
  return (
    <section css={styles.section}>
      <div css={styles.titleBlock}>
        <Circle />
        <h2 css={styles.title(theme)}>{advantagesData.title}</h2>
      </div>
      <ul css={styles.list(theme)}>
        {advantagesData.items.map(({ id, title, description, img }) => (
          <li key={id}>
            <Image src={img} alt={title} width={40} height={40} />
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
