// src/components/Certifications.jsx
import React from 'react';
import CertificationCard from './CertificationCard';
import '../CSS/Certifications.css';
import certificationsData from '../data/certifications.json';

const Certifications = () => {
  return (
    <div className="certifications-section" id="certifications">
      <h2>My Certifications</h2>
      <div className="certifications-list">
        {certificationsData.map((cert) => (
          <CertificationCard
            key={cert.id}
            title={cert.title}
            issuer={cert.issuer}
            date={cert.date}
            link={cert.link}
            image={cert.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
