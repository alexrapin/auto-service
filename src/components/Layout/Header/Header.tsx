import { headerData } from "./header.data";
import * as styles from "./style";

export default function Header() {
  return (
    <header>
      <div css={styles.top}>
        <img src={headerData.logoImg} alt="Logo" css={styles.logo} />
        <div>
          <p css={styles.phone}>{headerData.phone}</p>
          <a css={styles.textLink} href="tel:+380677216945">
            {headerData.text}
          </a>
        </div>
      </div>
      <div css={styles.bottom}>
        <nav css={styles.nav}>
          <ul css={styles.ul}>
            {headerData.links.map((link, index) => (
              <li css={styles.li} key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
