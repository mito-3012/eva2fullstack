import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

export default function DetalleProducto() {
  const { id } = useParams(); // Obtiene el id desde la URL (/producto/1)
  const { productos, agregarAlCarritoConCantidad, cartCount, rutaImagenProducto } = useShop();
  const [cantidad, setCantidad] = useState(1);

  // Buscar el producto por su ID
  const prod = productos.find(p => p.id === Number(id)) || productos[0];

  const handleAddToCart = () => {
    if (prod) {
      agregarAlCarritoConCantidad(prod.id, cantidad);
    }
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
            🛒 Cart (<span>{cartCount}</span>)
          </Link>
        </div>
      </header>

      <main className="container">
        <div className="breadcrumb">
          Home {' > '} Videojuegos {' > '} <span>{prod ? prod.nombre : 'Cargando...'}</span>
        </div>

        {prod ? (
          <div className="product-detail-layout">
            <div className="product-media">
              <img
                src={rutaImagenProducto(prod.imagen)}
                alt={prod.nombre}
                className="main-detail-img"
              />
            </div>

            <div className="product-info-box">
              <h1>{prod.nombre}</h1>
              <div className="price">${prod.precio.toLocaleString("es-CL")}</div>
              <p>
                Sumérgete en una aventura épica con gráficos de última generación, historia inmersiva y un sistema de combate totalmente optimizado.
              </p>

              <p className="stock-info" style={{ color: prod.stock > 0 ? '#2ed573' : '#ff4757', fontWeight: 'bold', marginBottom: '15px' }}>
                Stock disponible: <span>{prod.stock} u.</span>
              </p>

              <div className="qty-selector">
                <label htmlFor="p-qty">Unidades:</label>
                <input
                  type="number"
                  id="p-qty"
                  value={cantidad}
                  min="1"
                  max={prod.stock}
                  disabled={prod.stock <= 0}
                  onChange={(e) => setCantidad(Number(e.target.value))}
                />
              </div>

              <button
                type="button"
                className="btn btn-primary btn-block"
                disabled={prod.stock <= 0}
                onClick={handleAddToCart}
              >
                {prod.stock <= 0 ? 'Agotado' : 'Agregar al Carrito'}
              </button>
            </div>
          </div>
        ) : (
          <p>Producto no encontrado.</p>
        )}
      </main>
    </div>
  );
}