import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

export default function Productos() {
  const { productos, agregarAlCarritoGamer, rutaImagenProducto, cartCount } = useShop();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Suscrito al boletín con: ${newsletterEmail}`);
    setNewsletterEmail('');
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
            🛒 Cart (<span>{cartCount}</span>)
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
              src="/mescla.jpg"
              alt="Escena gamer con control y audífonos luces neón"
              className="hero-img"
            />
          </div>
        </section>

        {/* TÍTULO DE SECCIÓN */}
        <h1 className="page-title">CATÁLOGO DE VIDEOJUEGOS Y CONSOLAS</h1>

        {/* GRILLA DE PRODUCTOS DINÁMICA */}
        <div className="product-grid" id="all-products-container">
          {productos.map((p) => (
            <div key={p.id} className="product-card">
              <Link to={`/producto/${p.id}`}>
                <div className="img-box">
                  <img
                    src={rutaImagenProducto(p.imagen)}
                    alt={p.nombre}
                    onError={(e) => { e.target.src = '/play5.jpg'; }}
                  />
                </div>
              </Link>
              <h3 className="product-title">{p.nombre}</h3>
              <div className="product-footer">
                <span className="attributes">{p.categoria}</span>
                <span className="price">${Number(p.precio).toLocaleString("es-CL")}</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                <Link to={`/producto/${p.id}`} className="btn btn-outline" style={{ flex: 1 }}>
                  Ver Detalle
                </Link>
                <button
                  type="button"
                  onClick={() => agregarAlCarritoGamer(p.id)}
                  disabled={p.stock <= 0}
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  {p.stock <= 0 ? 'Agotado' : '🛒 Agregar'}
                </button>
              </div>
            </div>
          ))}
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