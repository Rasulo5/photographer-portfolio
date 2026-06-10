import { FaChevronDown } from "react-icons/fa";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.heroContent}`}>
        <h1 className={styles.title}>
          Запечатлею <span>ваши лучшие</span> моменты
        </h1>
        <p className={styles.subtitle}>
          Свадебный и семейный фотограф в Москве. Создаю истории, которые
          останутся с вами навсегда.
        </p>
        <div className={styles.buttons}>
          <a href="#portfolio" className={styles.btnPrimary}>
            Смотреть работы
          </a>
          <a href="#contact" className={styles.btnOutline}>
            Связаться
          </a>
        </div>
        <a
          href="#portfolio"
          className={styles.scrollDown}
          aria-label="Скролл вниз"
        >
          <FaChevronDown />
        </a>
      </div>
    </section>
  );
};

export default Hero;
