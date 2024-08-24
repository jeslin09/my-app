import React from 'react';
import './AboutContent.css';
import { Link } from 'react-router-dom';

const cardData = [
  {
    title: "Resume",
    link: "https://drive.google.com/uc?id=1JRVhea-lX951PYyPi61gu-HHYZt4RG07&export=download",
  },
  {
    title: "Certifications",
    link: "https://drive.google.com/drive/u/0/folders/1ylhLjN5k-C287yQ9fOzDh1qxODnxcsjr",
  }
];

const AboutContent = () => {
  return (
    <div className="cards-container">
      <div className="cards">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <h3>{card.title}</h3>
            {card.title === "Resume" && (
              <a
                href={card.link}
                download
                className="card-link"
                aria-label="Download Resume"
              >
                Download Resume
              </a>
            )}
            {card.title === "Certifications" && (
              <Link to={card.link} className="card-link">View More</Link>
            )}
            {card.description && <p>{card.description}</p>}
          </div>
        ))}
      </div>
      <div className="contact-card">
        <Link to="/contact" className="btn">Contact</Link>
      </div>
    </div>
  );
}

export default AboutContent;
