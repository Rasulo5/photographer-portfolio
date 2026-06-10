import { socialLinks } from "../../data/portfolio.js";
import { FaInstagram, FaTelegramPlane, FaVk, FaHeart } from "react-icons/fa";
import styles from "./Footer.module.css";

const iconMap = {
  FaInstagram: FaInstagram,
  FaTelegramPlane: FaTelegramPlane,
  FaVk: FaVk,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>Анна Смирнова</h3>
            <p>Фотограф в Москве</p>
          </div>

          <div className={styles.social}>
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={link.name}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {currentYear} Все права защищены. Сделано с{" "}
            <FaHeart className={styles.heart} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
