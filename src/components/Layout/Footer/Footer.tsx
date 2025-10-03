/* eslint-disable @next/next/no-img-element */
import theme from "@/constants/theme";
import { footerData } from "./footer.data";
import * as styles from "./style";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contacts" css={styles.footer}>
      <div css={styles.top(theme)}>
        <Link href="/" css={styles.logoBlock}>
          <Image
            width={100}
            height={40}
            src={footerData.logoImg}
            alt="Logo"
            css={styles.logo}
          />
        </Link>

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
              <Image
                src={footerData.images.phone}
                alt="phone"
                css={styles.contactIcon}
                width={20}
                height={20}
              />
              <a href={footerData.phoneList.href}>
                {footerData.phoneList.label}
              </a>
            </div>
          </div>
          <div css={styles.emailRow}>
            <Image
              src={footerData.images.gmail}
              alt="mail"
              css={styles.contactIcon}
              width={20}
              height={20}
            />
            <a href={`mailto:${footerData.email}`}>{footerData.email}</a>
          </div>
          <div css={styles.addressRow}>
            <a
              href="https://www.google.com/maps/place/%D0%A1%D0%A2%D0%9E+%D0%91%D0%A3%D0%9C%D0%95%D0%A0/@46.9710446,32.0668626,110m/data=!3m1!1e3!4m15!1m8!3m7!1s0x40c5ca5b1c62e8ff:0x521831c74e7bf550!2zMTA5Qiwg0YPQuy4g0KLRgNC-0LjRhtC60LDRjywgMTA50JEsINCd0LjQutC-0LvQsNC10LIsINCd0LjQutC-0LvQsNC10LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNTQwMDA!3b1!8m2!3d46.9711504!4d32.0672083!16s%2Fg%2F1v2pnqjg!3m5!1s0x40c5cb529f9bb439:0x2f7698c85355d747!8m2!3d46.971117!4d32.06726!16s%2Fg%2F11fmbj5r28?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              css={styles.addressRow}
            >
              <Image
                src={footerData.images.location}
                alt="address"
                css={styles.contactIcon}
                width={20}
                height={20}
              />
              <span>{footerData.address}</span>
            </a>
          </div>
          <div css={styles.workTime}>
            {footerData.workTime.map((row) => (
              <div css={styles.workTimeRow} key={row}>
                <Image
                  src={footerData.images.time}
                  alt="clock"
                  css={styles.contactIcon}
                  width={20}
                  height={20}
                />
                <span>{row}</span>
              </div>
            ))}
          </div>
        </div>

        <div css={styles.callBlock(theme)}>
          <a css={styles.callBtn} href="tel:+380677216945">
            {footerData.text}
          </a>
        </div>
      </div>
    </footer>
  );
}
