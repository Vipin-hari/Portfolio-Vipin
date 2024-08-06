import React from 'react';
import '../CSS/CertificationCard.css';

const CertificationCard = ({ title, issuer, date, image, link }) => {
  return (
    <div className="certification-card">
      <img src={image} alt={`${title} certification`} className="certification-image" />
      <div className="certification-info">
        <h3>{title}</h3>
        <p>{issuer}</p>
        <p>{date}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">View</a>
      </div>
    </div>
  );
};

export default CertificationCard;
