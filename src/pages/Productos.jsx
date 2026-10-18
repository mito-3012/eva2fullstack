import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Productos() {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const agregarAlCarritoGamer = (id) => {
    console.log(`Añadiendo al carrito el producto ID: ${id}`);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Suscrito al boletín con:', newsletterEmail);
  };

  return (
    <div>
      {/* HEADER / NAVEGACIÓN */}
      <header className="main-header">
        <div className="logo">
          <span className="logo-icon">🎮</span>
          <h1>GamerZone</h1>
        </div>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/productos" className="active">Catálogo</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/blogs">Noticias</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <div className="header-right">
          <div className="auth-links">
            <Link to="/login">Iniciar sesión</Link> |{' '}
            <Link to="/registro">Registrar usuario</Link>
          </div>
          <Link to="/carrito" className="cart-btn">
            🛒 Cart (<span id="cart-count">0</span>)
          </Link>
        </div>
      </header>

      <main className="container">
        {/* HERO BANNER */}
        <section className="hero-banner">
          <div className="hero-text">
            <h2>TIENDA ONLINE</h2>
            <p>
              Explora nuestro catálogo con las mejores ofertas en consolas, videojuegos de última generación y accesorios exclusivos gamer.
            </p>
            <a href="#all-products-container" className="btn btn-outline">
              ↓ Ver productos
            </a>
          </div>

          <div className="hero-image">
            <img
              src="../mescla.jpg"
              alt="Escena gamer con control y audífonos luces neón"
              className="hero-img"
            />
          </div>
        </section>

        {/* TÍTULO DE SECCIÓN */}
        <h1 className="page-title">CATÁLOGO DE VIDEOJUEGOS Y CONSOLAS</h1>

        {/* GRILLA DE PRODUCTOS */}
        <div className="product-grid" id="all-products-container">
          <div className="product-card">
            <div className="img-box">
              <img src="../play5.jpg" alt="Consola PlayStation 5 Sony Slim Digital" />
            </div>
            <h3 className="product-title">PlayStation 5 Sony Slim Digital</h3>
            <div className="product-footer">
              <span className="attributes">Consola</span>
              <span className="price">$499.999</span>
            </div>
            <button
              type="button"
              onClick={() => agregarAlCarritoGamer(1)}
              className="btn btn-primary btn-block"
              style={{ marginTop: '10px' }}
            >
              🛒 Añadir al carrito
            </button>
          </div>

          <div className="product-card">
            <div className="img-box">
              <img src="../switch2.jpg" alt="Consola Nintendo Switch 2 NS2 LCD" />
            </div>
            <h3 className="product-title">Consola Nintendo Switch 2 NS2 LCD</h3>
            <div className="product-footer">
              <span className="attributes">Consola</span>
              <span className="price">$669.990</span>
            </div>
            <button
              type="button"
              onClick={() => agregarAlCarritoGamer(2)}
              className="btn btn-primary btn-block"
              style={{ marginTop: '10px' }}
            >
              🛒 Añadir al carrito
            </button>
          </div>

          <div className="product-card">
            <div className="img-box">
              <img src="../grandtheft.jpg" alt="Videojuego Grand Theft Auto VI PS5" />
            </div>
            <h3 className="product-title">PlayStation 5 Grand Theft Auto VI</h3>
            <div className="product-footer">
              <span className="attributes">Videojuego</span>
              <span className="price">$94.990</span>
            </div>
            <button
              type="button"
              onClick={() => agregarAlCarritoGamer(3)}
              className="btn btn-primary btn-block"
              style={{ marginTop: '10px' }}
            >
              🛒 Añadir al carrito
            </button>
          </div>

          <div className="product-card">
            <div className="img-box">
              <img src="../1348.jpg" alt="Videojuego 1348 Ex Voto PS5" />
            </div>
            <h3 className="product-title">PlayStation 5 1348 Ex Voto</h3>
            <div className="product-footer">
              <span className="attributes">Videojuego</span>
              <span className="price">$69.990</span>
            </div>
            <button
              type="button"
              onClick={() => agregarAlCarritoGamer(4)}
              className="btn btn-primary btn-block"
              style={{ marginTop: '10px' }}
            >
              🛒 Añadir al carrito
            </button>
          </div>

          <div className="product-card">
            <div className="img-box">
              <img src="../grandtheft.jpg" alt="Videojuego Grand Theft Auto VI Switch" />
            </div>
            <h3 className="product-title">Nintendo Switch Grand Theft Auto VI</h3>
            <div className="product-footer">
              <span className="attributes">Videojuego</span>
              <span className="price">$24.990</span>
            </div>
            <button
              type="button"
              onClick={() => agregarAlCarritoGamer(5)}
              className="btn btn-primary btn-block"
              style={{ marginTop: '10px' }}
            >
              🛒 Añadir al carrito
            </button>
          </div>

          <div className="product-card">
            <div className="img-box">
              <img src="../ac3nswchico.jpg" alt="Videojuego Assassin's Creed III" />
            </div>
            <h3 className="product-title">Nintendo Switch Assassin's Creed III Remastered</h3>
            <div className="product-footer">
              <span className="attributes">Videojuego</span>
              <span className="price">$94.990</span>
            </div>
            <button
              type="button"
              onClick={() => agregarAlCarritoGamer(6)}
              className="btn btn-primary btn-block"
              style={{ marginTop: '10px' }}
            >
              🛒 Añadir al carrito
            </button>
          </div>

          <div className="product-card">
            <div className="img-box">
              <img src="../Super-Pack-3-2.jpg" alt="Pack de videojuegos 9 en 1" />
            </div>
            <h3 className="product-title">9 JUEGOS EN 1 PACK MEGA NINTENDO SWITCH</h3>
            <div className="product-footer">
              <span className="attributes">Videojuego</span>
              <span className="price">$80.000</span>
            </div>
            <button
              type="button"
              onClick={() => agregarAlCarritoGamer(7)}
              className="btn btn-primary btn-block"
              style={{ marginTop: '10px' }}
            >
              🛒 Añadir al carrito
            </button>
          </div>

          <div className="product-card">
            <div className="img-box">
              <img src="../mario.jpg" alt="Videojuego Super Mario Bros U Deluxe" />
            </div>
            <h3 className="product-title">Super Mario Bros U Deluxe Nintendo Switch</h3>
            <div className="product-footer">
              <span className="attributes">Videojuego</span>
              <span className="price">$59.000</span>
            </div>
            <button
              type="button"
              onClick={() => agregarAlCarritoGamer(8)}
              className="btn btn-primary btn-block"
              style={{ marginTop: '10px' }}
            >
              🛒 Añadir al carrito
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="main-footer">
        <div className="footer-cols">
          <div className="footer-left">
            <span className="footer-brand">GamerZone</span>
            <div className="payment-methods">
              <span className="pay-card">VISA</span>
              <span className="pay-card">MC</span>
              <span className="pay-card">AMEX</span>
            </div>
          </div>

          <div className="footer-links">
            <a href="#all-products-container">Consolas</a> |{' '}
            <a href="#all-products-container">Videojuegos</a> |{' '}
            <a href="#all-products-container">Accesorios</a>
          </div>

          <div className="footer-newsletter">
            <p>Stay In Touch! Join our Newsletter.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter Email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}