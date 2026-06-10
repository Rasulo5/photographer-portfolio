import styles from "./About.module.css";

const About = () => {
  const stats = [
    { number: "5+", label: "Лет опыта" },
    { number: "200+", label: "Счастливых клиентов" },
    { number: "50+", label: "Свадеб отснято" },
    { number: "15", label: "Наград" },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.image}>
            <img src="/images/about-photo.jpg" alt="Фотограф" />
          </div>
          <div className={styles.text}>
            <h2 className={styles.title}>Обо мне</h2>
            <p>
              Здравствуйте! Меня зовут Анна, и я профессиональный фотограф с
              более чем 5-летним опытом работы. Моя страсть — запечатлевать
              искренние эмоции и создавать истории в каждом кадре.
            </p>
            <p>
              Я специализируюсь на свадебной и семейной фотографии. Для меня
              важно не просто сделать красивые снимки, но и создать комфортную
              атмосферу во время съемки, чтобы вы чувствовали себя естественно и
              раскованно.
            </p>
            <p>
              Каждая фотосессия для меня — это новая история, которую мы пишем
              вместе. Я помогу вам расслабиться перед камерой и получить
              удовольствие от процесса.
            </p>

            <div className={styles.stats}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
