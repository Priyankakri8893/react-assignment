import { useState } from 'react';
import './resume.css'

const Resume = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleDownload = () => {
    const resumeLink = 'https://drive.google.com/file/d/1pRfDtdMu6nhL5doxSM3a5rEYmtwTO8Oi/view?usp=drive_link';
    window.open(resumeLink, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDownload();
  };

  return (
    <div className="form-container">
      <h2>Download Resume</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Resume;
