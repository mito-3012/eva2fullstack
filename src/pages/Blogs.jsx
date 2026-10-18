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
          {/* PRIMERA NOTICIA */}
          <article className="blog-card">
            <img src="../blog-1.jpg" alt="Novedades del mundo gamer" className="blog-img" />
            <div className="blog-card-content">
              <h2>Las novedades que están marcando el mundo gamer</h2>
              <p>
                Sony ha patentado una tecnología que le sentaría genial a PS6.
              </p>
              <a 
                href="https://www.3djuegos.com/ps5/noticias/sony-ha-patentado-tecnologia-que-le-sentaria-genial-a-ps6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Leer noticia
              </a>
            </div>
          </article>

          {/* SEGUNDA NOTICIA */}
          <article className="blog-card">
            <img src="../blog1.jpg" alt="Guía de periféricos competitivos" className="blog-img" />
            <div className="blog-card-content">
              <h2>Últimas noticias de Videojuegos</h2>
              <p>
                Descubre todas las novedades y la actualidad del mundo de los videojuegos. 
                Mantente informado minuto a minuto sobre actualizaciones, fechas de lanzamiento,
                 anuncios importantes y tráileres de tus títulos preferidos.
              </p>
              <a 
                href="https://vandal.elespanol.com/noticias/videojuegos" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Leer noticia
              </a>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}