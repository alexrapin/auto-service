/* eslint-disable @next/next/no-img-element */
import theme from "@/constants/theme";
import { headerData } from "./header.data";
import * as styles from "./style";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header css={styles.section}>
      <div css={styles.top(theme)}>
        <Link href="/">
          <Image
            width={220}
            height={80}
            src={headerData.logoImg}
            alt="Logo"
            css={styles.logo(theme)}
          />
        </Link>
        <div>
          <p css={styles.phone}>{headerData.phone}</p>
          <a css={styles.textLink} href="tel:+380677216945">
            {headerData.text}
          </a>
        </div>
      </div>
      <div css={styles.bottom}>
        <nav css={styles.nav(theme)}>
          <ul css={styles.ul}>
            {headerData.links.map((link, index) => (
              <li css={styles.li(theme)} key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
