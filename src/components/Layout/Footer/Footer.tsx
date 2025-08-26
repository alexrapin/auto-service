/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */
import { footerData } from "./footer.data";
import * as styles from "./style";

export default function Footer() {
  return (
    <footer css={styles.footer}>
      <div css={styles.top}>
        <div css={styles.logoBlock}>
          <img src={footerData.logoImg} alt="Logo" css={styles.logo} />
        </div>

        <div>
          <ul css={styles.ul}>
            {footerData.links.map(({ id, label, url }) => (
              <li css={styles.li} key={id}>
                <a href={url}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div css={styles.contactsBlock}>
          <div css={styles.phones}>
            <div css={styles.phoneRow}>
              <img
                src="./images/footer/phone.svg"
                alt="phone"
                css={styles.contactIcon}
              />
              <a href={footerData.phoneList.href}>
                {footerData.phoneList.label}
              </a>
            </div>
          </div>
          <div css={styles.emailRow}>
            <img
              src="./images/footer/gmail.svg"
              alt="mail"
              css={styles.contactIcon}
            />
            <a href={`mailto:${footerData.email}`}>{footerData.email}</a>
          </div>
          <div css={styles.addressRow}>
            <img
              src="./images/footer/location.svg"
              alt="address"
              css={styles.contactIcon}
            />
            <span>{footerData.address}</span>
          </div>
          <div css={styles.workTime}>
            {footerData.workTime.map((row, idx) => (
              <div css={styles.workTimeRow} key={idx}>
                <img
                  src="./images/footer/time.svg"
                  alt="clock"
                  css={styles.contactIcon}
                />
                <span>{row}</span>
              </div>
            ))}
          </div>
        </div>

        <div css={styles.callBlock}>
          <a css={styles.callBtn} href="tel:+380677216945">
            {footerData.text}
          </a>
        </div>
      </div>
    </footer>
  );
}
