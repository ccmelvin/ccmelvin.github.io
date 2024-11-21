import React, { useState } from 'react';
import usePageLeave from '../../hooks/usePageLeave';
import styles from './ExitWarningModal.module.css';

const ExitWarningModal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState('');

  usePageLeave(() => {
    setIsModalVisible(true);
  });

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleSubscribe = () => {
    // Logic to handle subscription goes here, e.g., sending email to server
    alert(`Subscribed with email: ${email}`);
    setIsModalVisible(false);
  };

  return (
    <div>
      {isModalVisible && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Don't Miss Out!</h2>
            <p>Subscribe to our newsletter to receive the latest updates and offers.</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={styles.input}
            />
            <div className={styles.buttons}>
              <button onClick={handleSubscribe} className={styles.subscribeButton}>Subscribe</button>
              <button onClick={closeModal} className={styles.closeButton}>No, thanks</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExitWarningModal;
