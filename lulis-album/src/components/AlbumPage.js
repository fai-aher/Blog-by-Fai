import React from 'react';
import './AlbumPage.css';

const AlbumPage = ({ data }) => {
  const renderPage = () => {
    switch (data.type) {
      case 'cover':
        return (
          <div className="cover-page">
            <div className="cover-icon">
              <div className="birthday-cake">🎂</div>
            </div>
            <h1 className="cover-title">{data.title}</h1>
            <h2 className="cover-subtitle">{data.subtitle}</h2>
            <div className="cover-content">{data.content}</div>
            <div className="cover-heart">
              <div className="pulsing-heart">💕</div>
            </div>
          </div>
        );

      case 'photo-text':
        return (
          <div className="photo-text-page">
            <div className="photo-container order-photo">
              <div className="image-wrapper">
                <img src={data.imageUrl} alt={data.title} className="page-image" />
                <div className="image-overlay"></div>
              </div>
            </div>
            <div className="text-container order-text">
              <h2 className="page-title">{data.title}</h2>
              <p className="page-description">{data.description}</p>
            </div>
          </div>
        );

      case 'text-photo':
        return (
          <div className="text-photo-page">
            <div className="text-container">
              <h2 className="page-title">{data.title}</h2>
              <p className="page-description">{data.description}</p>
            </div>
            <div className="photo-container">
              <div className="image-wrapper">
                <img src={data.imageUrl} alt={data.title} className="page-image" />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        );

      case 'full-photo':
        return (
          <div className="full-photo-page">
            <h2 className="page-title centered">{data.title}</h2>
            <div className="full-image-container">
              <div className="image-wrapper large">
                <img src={data.imageUrl} alt={data.title} className="page-image full" />
                <div className="image-overlay"></div>
              </div>
            </div>
            <p className="page-description centered">{data.description}</p>
          </div>
        );

      case 'double-photo':
        return (
          <div className="double-photo-page">
            <h2 className="page-title centered">{data.title}</h2>
            <div className="double-image-container">
              <div className="image-wrapper">
                <img src={data.imageUrl1} alt={`${data.title} 1`} className="page-image" />
                <div className="image-overlay"></div>
              </div>
              <div className="image-wrapper">
                <img src={data.imageUrl2} alt={`${data.title} 2`} className="page-image" />
                <div className="image-overlay"></div>
              </div>
            </div>
            <p className="page-description centered">{data.description}</p>
          </div>
        );

      case 'message':
        return (
          <div className="message-page">
            <h2 className="page-title centered large">{data.title}</h2>
            <div className="message-grid">
              {data.content.map((reason, index) => (
                <div key={index} className="message-item">
                  <span className="message-number">{index + 1}.</span>
                  <span className="message-text">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'final-message':
        return (
          <div className="final-message-page">
            <div className="celebration-icon">🎉</div>
            <h2 className="page-title centered large">{data.title}</h2>
            <div className="final-content">
              <p className="final-message">{data.content}</p>
            </div>
            <div className="celebration-emojis">
              <span className="emoji bounce-1">🎂</span>
              <span className="emoji bounce-2">💕</span>
              <span className="emoji bounce-3">🌸</span>
              <span className="emoji bounce-4">💕</span>
              <span className="emoji bounce-5">🎂</span>
            </div>
          </div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return <div className="album-page">{renderPage()}</div>;
};

export default AlbumPage;