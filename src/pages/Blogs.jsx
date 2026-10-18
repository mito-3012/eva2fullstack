import React from 'react';
import { Link } from 'react-router-dom';

export default function Blogs() {
  return (
    <div>
      <header className="main-header">
        <div className="logo">
          <span className="logo-icon">🎮</span>
          <h1>GamerZone</h1>
        </div>

        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/productos">Catálogo</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/blogs" className="active">Noticias</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <div className="header-right">
          <Link to="/carrito" className="cart-btn">
            🛒 Cart (<span id="cart-count">0</span>)
          </Link>
        </div>
      </header>

      <main className="container">
        <div className="breadcrumb">Home &gt; Noticias</div>

        <h1 style={{ fontFamily: "'Orbitron', sans-serif", color: 'var(--primary-cyan)' }}>
          Noticias Gamer
        </h1>
        <p style={{ color: 'var(--text-muted)', margin: '10px 0 30px' }}>
          Mantente al día con las novedades, juegos y consejos del mundo gamer.
        </p>

        <div className="blog-grid">
          <article className="blog-card">
            <img src="../blog-1.jpg" alt="Novedades del mundo gamer" className="blog-img" />
            <div className="blog-card-content">
              <h2>Las novedades que están marcando el mundo gamer</h2>
              <p>
                Revisa algunas de las noticias y novedades más importantes
                para los fanáticos de los videojuegos.
              </p>
              <Link to="/detalle-blog-1" className="btn btn-primary">
                Leer noticia
              </Link>
            </div>
          </article>

          <article className="blog-card">
            <img src="../blog1.jpg" alt="Guía de periféricos competitivos" className="blog-img" />
            <div className="blog-card-content">
              <h2>Guía de periféricos competitivos</h2>
              <p>
                Conoce recomendaciones para mejorar tu setup y conseguir
                un mejor rendimiento en tus partidas.
              </p>
              <Link to="/detalle-blog-2" className="btn btn-primary">
                Leer noticia
              </Link>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}