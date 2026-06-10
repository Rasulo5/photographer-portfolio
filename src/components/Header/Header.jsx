import { useState, useEffect } from "react";
import { FaCamera, FaBars, FaTimes } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Главная", href: "#hero" },
    { label: "Портфолио", href: "#portfolio" },
    { label: "Обо мне", href: "#about" },
    { label: "Контакты", href: "#contact" },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.headerContainer}`}>
        <a href="#hero" className={styles.logo}>
          <FaCamera />
          <span>Анна Смирнова</span>
        </a>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={handleMenuClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Меню"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
