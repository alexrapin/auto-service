import theme from "@/constants/theme";
import { heroData } from "./hero.data";
import * as styles from "./style";
import Link from "next/link";

export default function Hero() {
  return (
    <section css={styles.hero(theme)}>
      <div css={styles.content(theme)}>
        <h1>{heroData.title}</h1>
        <p>{heroData.subtitle}</p>
        <button>
          <Link href="#fix">{heroData.buttonText}</Link>
        </button>
      </div>
    </section>
  );
}
