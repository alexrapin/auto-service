/* eslint-disable @next/next/no-img-element */
import { formBlockData } from './formBlock.data';
import * as styles from './style';

export default function FormBlock() {
  return (
    <section css={styles.section}>
      <div css={styles.left}>
        <h2 css={styles.title}>{formBlockData.contact.title}</h2>
        <p css={styles.description}>{formBlockData.contact.description}</p>
        <div css={styles.phones}>
          <span>{formBlockData.contact.phone}</span>
        </div>
        <div css={styles.carImg}>
          <img src={formBlockData.bgImage} alt="car" />
        </div>
      </div>
      <div css={styles.right}>
        <h3 css={styles.formTitle}>{formBlockData.contact.title}</h3>
        <p css={styles.formDescription}>{formBlockData.contact.description}</p>
        <form css={styles.form}>
          {formBlockData.fields.map(field => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              css={styles.input}
            />
          ))}
          <button type="submit" css={styles.button}>ЗАПИСАТИСЯ</button>
        </form>
      </div>
    </section>
  );
}