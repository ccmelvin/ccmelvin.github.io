// UploadModal.tsx
import React, { useState } from 'react';
import styles from './UploadModal.module.css';

interface UploadModalProps {
  onClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle image upload logic here
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Upload Your Photo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="file"

            // onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
            accept="image/*"
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit">Upload</button>
        </form>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

export default UploadModal;
