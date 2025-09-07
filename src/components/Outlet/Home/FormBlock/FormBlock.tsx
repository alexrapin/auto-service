/* eslint-disable @next/next/no-img-element */
import theme from "@/constants/theme";
import { formBlockData } from "./formBlock.data";
import * as styles from "./style";

export default function FormBlock() {
  return (
    <section id='diagnostics' css={styles.section(theme)}>
      <div css={styles.left}>
        <h2 css={styles.title(theme)}>{formBlockData.contact.title}</h2>
        <p css={styles.description(theme)}>{formBlockData.contact.description}</p>
        <div css={styles.phones(theme)}>
          <div>{formBlockData.contact.phones}</div>
        </div>
        <div css={styles.carImg(theme)}>
          <img src={formBlockData.bgImage} alt="car" />
        </div>
      </div>
      <div css={styles.right}>
        <h3 css={styles.formTitle}>{formBlockData.form.title}</h3>
        <p css={styles.formDescription}>{formBlockData.form.description}</p>
        <form css={styles.form}>
          {formBlockData.fields.map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              css={styles.input}
            />
          ))}
          <button type="submit" css={styles.button}>
            ЗАПИСАТИСЬ
          </button>
        </form>
      </div>
    </section>
  );
}
