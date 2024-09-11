import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./ContactForm.module.css";
import airplaneHeader from "../../assets/images/air_plane_01.jpg";
import logo from "../../assets/images/logo-final.png";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

interface FormField {
  value: string;
  touched: boolean;
}

interface ContactFormState {
  name: FormField;
  email: FormField;
  subject: FormField;
  message: FormField;
}

export default function ContactUs() {
  const [formState, setFormState] = useState<ContactFormState>({
    name: { value: "", touched: false },
    email: { value: "", touched: false },
    subject: { value: "", touched: false },
    message: { value: "", touched: false },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: { value, touched: true },
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formState);
    setIsSubmitted(true);
  };

  return (
    <div>
      <img src={airplaneHeader} alt="Marine Airplane"  className={styles.contactFormImage} />
    <div className={styles.contactFormContainer}>
      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <div className={styles.leftColumnHeader}>
            <img src={logo} alt="Flyby Spotter Logo" className={styles.contactFormLogo} />
            <h1>Get In Touch</h1>
          </div>
          <h2 className={styles.leftColumnTitle}>Contact Info</h2>
          <p><FaEnvelope /> FlyBYass@gmail.com</p>
          <div className={styles.socialIcons}>
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            
          </div>
        </div>

        <div className={styles.rightColumn}>
          {isSubmitted ? (
            <div className={styles.successMessage}>
              Thank you for your message. We'll get back to you soon!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <h2>Send us a Message</h2>
              <div className={styles.formGroup}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formState.name.value}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formState.email.value}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formState.subject.value}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formState.message.value}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
