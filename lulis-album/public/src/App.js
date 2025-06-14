import React, { useState } from 'react';
import { Heart, Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import AlbumPage from './components/AlbumPage';
import { albumPages, correctPassword } from './data/albumData';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [flowersAnimated, setFlowersAnimated] = useState(false);

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setTimeout(() => {
        setShowWelcome(false);
        setFlowersAnimated(true);
      }, 5000);
    } else {
      alert('Esa no es la llave de mi corazón! 💝');
      setPassword('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handlePasswordSubmit();
    }
  };

  const nextPage = () => {
    if (currentPage < albumPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Floating flowers animation component
  const FloatingFlowers = () => (
    <div className="floating-flowers">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`floating-element flower ${flowersAnimated ? 'animated' : ''}`}
          style={{
            left: `${Math.random() * 90}%`,
            animationDelay: `${i * 500}ms`,
            animationDuration: `${3 + i}s`
          }}
        >
          🌸
        </div>
      ))}
      {[...Array(4)].map((_, i) => (
        <div
          key={`heart-${i}`}
          className={`floating-element heart ${flowersAnimated ? 'animated' : ''}`}
          style={{
            left: `${Math.random() * 90}%`,
            animationDelay: `${(i + 4) * 700}ms`,
            animationDuration: `${4 + i}s`
          }}
        >
          💕
        </div>
      ))}
    </div>
  );

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-icon">
              <Heart className="heart-icon" />
            </div>
            <h1 className="login-title">
              Bienvenida al Corazón de Fai
            </h1>
            <p className="login-subtitle">
              ¿Cuál es la clave de mi corazón?
            </p>
          </div>
          
          <div className="login-form">
            <div className="input-container">
              <Lock className="input-icon" />
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Clave secreta..."
                className="password-input"
              />
            </div>
            <button
              onClick={handlePasswordSubmit}
              className="login-button"
            >
              Enter Our World 💕
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Welcome animation screen
  if (showWelcome) {
    return (
      <div className="welcome-container">
        <div className="welcome-content">
          <div className="welcome-icon">
            <Heart className="welcome-heart" />
          </div>
          <h1 className="welcome-title">
            Bienvenida al Álbum de mi Corazón
          </h1>
          <p className="welcome-subtitle">
            Hecho con todo mi amor para ti, mi Luli💝
          </p>
        </div>
      </div>
    );
  }

  const currentPageData = albumPages[currentPage];

  return (
    <div className="app-container">
      <FloatingFlowers />
      
      {/* Main Album Container */}
      <div className="album-container">
        <div className="album-wrapper">
          <div className="album-book">
            
            {/* Decorative corner elements */}
            <div className="corner-decoration top-left">🌸</div>
            <div className="corner-decoration top-right">🌸</div>
            <div className="corner-decoration bottom-left">💕</div>
            <div className="corner-decoration bottom-right">💕</div>
            
            {/* Page Content */}
            <div className="page-content">
              <AlbumPage data={currentPageData} />
            </div>

            {/* Navigation */}
            <div className="navigation">
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`nav-button prev ${currentPage === 0 ? 'disabled' : ''}`}
              >
                <ChevronLeft className="nav-icon" />
                <span className="nav-text">Anterior</span>
              </button>

              <div className="page-indicator">
                <span className="page-counter">
                  Page {currentPage + 1} of {albumPages.length}
                </span>
                <div className="page-dots">
                  {albumPages.map((_, index) => (
                    <div
                      key={index}
                      className={`page-dot ${index === currentPage ? 'active' : ''}`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === albumPages.length - 1}
                className={`nav-button next ${currentPage === albumPages.length - 1 ? 'disabled' : ''}`}
              >
                <span className="nav-text">Siguiente</span>
                <ChevronRight className="nav-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;