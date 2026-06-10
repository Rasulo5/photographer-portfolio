import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Имитация отправки
    setStatus("sending");

    setTimeout(() => {
      console.log("Форма отправлена:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  const contacts = [
    { icon: <FaPhone />, text: "+7 (999) 123-45-67", href: "tel:+79991234567" },
    {
      icon: <FaEnvelope />,
      text: "hello@annasmirnova.ru",
      href: "mailto:hello@annasmirnova.ru",
    },
    { icon: <FaMapMarkerAlt />, text: "Москва, Россия" },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section-title">Свяжитесь со мной</h2>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Давайте обсудим вашу фотосессию</h3>
            <p>
              Я всегда открыта для новых проектов и интересных предложений.
              Заполните форму, и я свяжусь с вами в течение 24 часов.
            </p>

            <div className={styles.contactsList}>
              {contacts.map((item, index) => (
                <div key={index} className={styles.contactItem}>
                  <span className={styles.icon}>{item.icon}</span>
                  {item.href ? (
                    <a href={item.href}>{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Ваше сообщение"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Отправка..." : "Отправить"}
            </button>
            {status === "success" && (
              <p className={styles.successMsg}>
                Спасибо! Ваше сообщение отправлено.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
