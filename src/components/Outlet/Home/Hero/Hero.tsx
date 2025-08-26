import { heroData } from './hero.data';
import * as styles from './style';

export default function Hero() {
  return (
    <section css={ styles.hero }>
      <div css={ styles.content }>
        <h1>{heroData.title}</h1>
        <p>{heroData.subtitle}</p>
        <button>{heroData.buttonText}</button>
      </div>
    </section>
  )
}