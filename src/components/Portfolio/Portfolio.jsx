import { useState } from "react";
import { portfolioItems, categories } from "../../data/portfolio";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <h2 className="section-title">Портфолио</h2>

        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.filterBtn} ${
                activeCategory === category.id ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              onClick={() => setSelectedImage(item)}
            >
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
                <div className={styles.overlay}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Модальное окно */}
        {selectedImage && (
          <div className={styles.modal} onClick={() => setSelectedImage(null)}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.modalClose}
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <img src={selectedImage.image} alt={selectedImage.title} />
              <div className={styles.modalInfo}>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
