import React from 'react';
import { Link } from 'react-router-dom';

export default function DetalleBlog2() {
  return (
    <div>
      <header className="main-header">
        <div className="logo">
          <span className="logo-icon">🎮</span>
          <h1>GamerZone</h1>
        </div>

        <nav className="main-nav">
          <Link to="/blogs">← Volver a Noticias</Link>
        </nav>

        <div className="header-right">
          <Link to="/carrito" className="cart-btn">
            🛒 Cart (<span id="cart-count">0</span>)
          </Link>
        </div>
      </header>

      <main className="container">
        <h1>Guía de Periféricos Competitivos</h1>

        <img
          src="https://via.placeholder.com/800x300/0f3460/fff?text=Detalle+Noticia+2"
          alt="Blog Banner"
          className="blog-detail-img"
        />

        <p className="blog-content">
          Elegir un buen ratón con sensor óptico de alta precisión y un teclado mecánico con latencia ultrabaja marca la diferencia en partidas de eSports. Conoce nuestras recomendaciones técnicas para optimizar tu setup.
        </p>
      </main>
    </div>
  );
}