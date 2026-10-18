import React from 'react';
import { Link } from 'react-router-dom';

export default function DetalleBlog1() {
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
        <div className="breadcrumb">Home &gt; Noticias &gt; PlayStation Studios</div>

        <article className="blog-detail">
          <h1>Las novedades que están marcando el mundo gamer</h1>
          <p style={{ color: 'var(--text-muted)' }}>
            PlayStation Studios y sus próximos grandes lanzamientos
          </p>

          <img
            src="../blog-1.jpg"
            alt="PlayStation Studios y sus videojuegos"
            className="blog-detail-img"
          />

          <div className="blog-content">
            <p>
              PlayStation Studios continúa preparando nuevos proyectos y experiencias
              para los jugadores. Sus diferentes equipos de desarrollo trabajan en
              videojuegos que buscan destacar por su calidad gráfica, historias
              inmersivas y nuevas formas de jugar.
            </p>

            <p>
              Entre las novedades que más llaman la atención se encuentran los
              próximos lanzamientos y proyectos de algunos de los estudios más
              reconocidos de PlayStation. La compañía sigue apostando por grandes
              producciones para sus consolas y por ampliar la variedad de experiencias
              disponibles para los jugadores.
            </p>

            <p>
              Para los fanáticos de los videojuegos, estas novedades anticipan una
              temporada llena de nuevos títulos, aventuras y contenido. En GamerZone
              estaremos atentos a los próximos anuncios y actualizaciones para mantener
              informada a nuestra comunidad.
            </p>
          </div>

          <Link to="/blogs" className="btn btn-primary">
            ← Volver a Noticias
          </Link>
        </article>
      </main>
    </div>
  );
}