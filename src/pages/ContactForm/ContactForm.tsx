import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./ContactForm.module.css";
import logo from "../../assets/logo/flyby-spotter-logo.png";
import { Helmet } from "react-helmet-async";
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Assuming there's an API endpoint to receive form submissions
    try {
      const response = await fetch("https://your-api-endpoint.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setIsSubmitted(true);
        
        // Optional: Redirect to a thank-you page or some other action
        window.location.href = "/thank-you";
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("An error occurred during form submission", error);
    }
  };
  

  return (
    <>
    <Helmet>
        <title>Contact Us | Flyby Spotter</title>
        <meta name="description" content="Get in touch with Flyby Spotter for inquiries, support, or collaborations." />
      </Helmet>
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.infoPanel}>
          <div className={styles.infoPanelContent}>
            <img src={logo} alt="Flyby Spotter Logo" className={styles.logo} />
            <h2>Get In Touch</h2>
              <div className={styles.emailContainer}>
                <FaEnvelope className={styles.icon} />
                <a href="mailto:FlyBYass@gmail.com">FlyBYass@gmail.com</a>
              </div>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/orlandocleaningsolutionsllc/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/flyby_spotter/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@FlyBySpotter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.formPanel}>
          {isSubmitted ? (
            <div className={styles.successMessage}>
              <h3>Thank you for reaching out!</h3>
              <p>We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <h2>We’d Love to Hear from You</h2>
              <div className={styles.formFields}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <label className={formData.firstName ? styles.filled : ""}>
                      First Name
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                    <label className={formData.lastName ? styles.filled : ""}>
                      Last Name
                    </label>
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label className={formData.email ? styles.filled : ""}>
                    Email Address
                  </label>
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <label className={formData.subject ? styles.filled : ""}>
                    Subject
                  </label>
                </div>
                <div className={styles.formGroup}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <label className={formData.message ? styles.filled : ""}>
                    Your Message
                  </label>
                </div>
                <button type="submit">Send Message</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
    </>
  );
}
