import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

export default function Carrito() {
  const {
    carrito,
    cambiarCantidad,
    eliminarDelCarrito,
    vaciarCarrito,
    aplicarCuponGamer,
    procesarCompraGamer,
    totalCarrito,
    subtotalCarrito,
    descuentoAplicado,
    rutaImagenProducto,
    cartCount
  } = useShop();

  const [cuponInput, setCuponInput] = useState('');

  const handleAplicarCupon = () => {
    if (!cuponInput.trim()) return;
    aplicarCuponGamer(cuponInput);
    setCuponInput('');
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
          <Link to="/productos">Catálogo</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/blogs">Noticias</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <div className="header-right">
          <Link to="/carrito" className="cart-btn active">
            🛒 Cart (<span>{cartCount}</span>)
          </Link>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="container" style={{ marginTop: '30px', marginBottom: '50px' }}>
        <h1 className="page-title">MI CARRITO GAMER</h1>

        {carrito.length === 0 ? (
          <div className="cart-empty-state" style={{ textAlign: 'center', padding: '50px 20px' }}>
            <p style={{ fontSize: '1.2rem', color: '#a4b0be', marginBottom: '20px' }}>
              Tu carrito gamer está vacío. ¡Explora nuestro catálogo y agrega tus juegos o consolas favoritas!
            </p>
            <Link to="/productos" className="btn btn-primary">
              Ver Catálogo
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            {/* LISTADO DINÁMICO DE PRODUCTOS */}
            <div className="cart-items" id="cart-items-list">
              {carrito.map((item) => {
                const itemSubtotal = item.precio * item.cantidad;
                return (
                  <div key={item.id} className="cart-item">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <img
                        src={rutaImagenProducto(item.imagen)}
                        alt={item.nombre}
                        style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '6px' }}
                        onError={(e) => { e.target.src = '/play5.jpg'; }}
                      />
                      <div>
                        <strong>{item.nombre}</strong>
                        <br />
                        <small style={{ color: '#a4b0be' }}>
                          ${Number(item.precio).toLocaleString('es-CL')} c/u
                        </small>
                      </div>
                    </div>

                    {/* Controles de Cantidad */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        style={{ padding: '2px 8px' }}
                        onClick={() => cambiarCantidad(item.id, -1)}
                      >
                        -
                      </button>
                      <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>
                        {item.cantidad}
                      </span>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        style={{ padding: '2px 8px' }}
                        onClick={() => cambiarCantidad(item.id, 1)}
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal del Producto */}
                    <div>
                      <strong style={{ color: '#2ed573' }}>
                        ${itemSubtotal.toLocaleString('es-CL')}
                      </strong>
                    </div>

                    {/* Botón Eliminar */}
                    <button
                      type="button"
                      className="btn btn-action btn-delete"
                      onClick={() => eliminarDelCarrito(item.id)}
                      title="Eliminar producto"
                      style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}
                    >
                      🗑️
                    </button>
                  </div>
                );
              })}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={vaciarCarrito}
                >
                  Vaciar Carrito
                </button>
                <Link to="/productos" className="btn btn-outline">
                  ← Seguir Comprando
                </Link>
              </div>
            </div>

            {/* RESUMEN DE PAGO */}
            <div className="cart-summary">
              <div style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Subtotal:</span>
                  <span>${subtotalCarrito.toLocaleString('es-CL')}</span>
                </div>

                {descuentoAplicado > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: '#2ed573' }}>
                    <span>Descuento (20%):</span>
                    <span>-${Math.round(subtotalCarrito * descuentoAplicado).toLocaleString('es-CL')}</span>
                  </div>
                )}

                <h2 style={{ borderTop: '1px solid #3d3d3d', paddingTop: '10px', marginTop: '10px' }}>
                  TOTAL: <span id="cart-total-price">${totalCarrito.toLocaleString('es-CL')}</span>
                </h2>
              </div>

              {/* Formulario de Cupón */}
              <div className="coupon-box">
                <input
                  type="text"
                  id="coupon-input"
                  placeholder="Cupón Gamer (Ej: DUOCGAMER)"
                  value={cuponInput}
                  onChange={(e) => setCuponInput(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleAplicarCupon}
                  className="btn btn-secondary"
                >
                  APLICAR
                </button>
              </div>

              {/* Botón Finalizar Compra */}
              <button
                type="button"
                onClick={procesarCompraGamer}
                className="btn btn-success btn-block btn-lg"
                style={{ width: '100%', marginTop: '15px' }}
              >
                COMPRAR AHORA
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}