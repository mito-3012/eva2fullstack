import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DetalleProducto() {
  const [cantidad, setCantidad] = useState(1);

  const handleAddToCart = () => {
    console.log('Agregando al carrito:', cantidad);
  };

  return (
    <div>
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
          <Link to="/carrito" className="cart-btn">
            🛒 Cart (<span id="cart-count">0</span>)
          </Link>
        </div>
      </header>

      <main className="container">
        <div className="breadcrumb">
          Home {' > '} Videojuegos {' > '} <span id="p-title-bread">Cargando...</span>
        </div>

        <div className="product-detail-layout">
          <div className="product-media">
            <img
              id="p-main-img"
              src="https://via.placeholder.com/400?text=Cargando+Imagen"
              alt="Imagen Juego"
              className="main-detail-img"
            />
          </div>

          <div className="product-info-box">
            <h1 id="p-name">Cargando producto...</h1>
            <div className="price" id="p-price">$0</div>
            <p id="p-desc">
              Sumérgete en una aventura épica con gráficos de última generación, historia inmersiva y un sistema de combate totalmente optimizado.
            </p>

            <p className="stock-info" style={{ color: '#ff4757', fontWeight: 'bold', marginBottom: '15px' }}>
              Stock disponible: <span id="p-stock">Cargando...</span>
            </p>

            <div className="qty-selector">
              <label htmlFor="p-qty">Unidades:</label>
              <input
                type="number"
                id="p-qty"
                value={cantidad}
                min="1"
                onChange={(e) => setCantidad(Number(e.target.value))}
              />
            </div>

            <button
              id="add-to-cart-btn"
              className="btn btn-primary btn-block"
              onClick={handleAddToCart}
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}