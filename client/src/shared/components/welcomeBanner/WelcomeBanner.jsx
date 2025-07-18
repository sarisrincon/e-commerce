import React from 'react';
import './welcome-banner.scss';

const WelcomeBanner = ({ onClose }) => {
  return (
    <div className="welcome-tooltip">
      <div className="welcome-tooltip__arrow" />
      <div className="welcome-tooltip__content">
        <div className="welcome-tooltip__header">
          <strong>Hola</strong>
          <button className="welcome-tooltip__close" onClick={onClose}>×</button>
        </div>
        <p className="welcome-tooltip__text">
          Para realizar búsquedas, solo debes ingresar el nombre de lo que necesites. Pueden ser productos, marcas y más…
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
