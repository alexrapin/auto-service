import theme from "@/constants/theme";
import { heroData } from "./hero.data";
import * as styles from "./style";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section css={styles.hero(theme)}>
      <Image
        src={heroData.bgImage}
        alt={heroData.title}
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      <div css={styles.content(theme)}>
        <h1>{heroData.title}</h1>
        <p>{heroData.subtitle}</p>
        <Link href="#fix">
          <button>{heroData.buttonText}</button>
        </Link>
      </div>
    </section>
  );
}
