import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminHome() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalProducts: 0,
    lowStock: 0,
    cartItems: 0
  });

  // 1. Nuevo estado para guardar y mostrar la lista del inventario
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    let storedProducts = [];
    let storedCart = [];

    try {
      const prodData = localStorage.getItem('productos');
      const cartData = localStorage.getItem('carrito');

      if (prodData) storedProducts = JSON.parse(prodData);
      if (cartData) storedCart = JSON.parse(cartData);
    } catch (error) {
      console.error('Error al leer el localStorage:', error);
    }

    if (!Array.isArray(storedProducts)) storedProducts = [];
    if (!Array.isArray(storedCart)) storedCart = [];

    const total = storedProducts.length;
    const low = storedProducts.filter(producto => producto.stock < 10).length;
    const cartCount = storedCart.reduce((acc, item) => acc + (item.cantidad || 1), 0);

    setStats({
      totalProducts: total, 
      lowStock: low,           
      cartItems: cartCount 
    });

    // 2. Guardamos los productos encontrados para mostrarlos en la tabla
    setProductos(storedProducts);
  }, []);

  const cerrarSesionGamer = (e) => {
    e.preventDefault();
    console.log('Cerrando sesión...');
    navigate('/login');
  };

  return (
    <div className="admin-body">
      <aside className="sidebar">
        <div className="sidebar-brand">⚡ ADMIN PANEL</div>
        <nav className="sidebar-nav">
          <Link to="/admin-home" className="active">📊 DASHBOARD</Link>
          <Link to="/admin-productos">🎮 INVENTARIO</Link>
          <Link to="/admin-usuarios">👥 USUARIOS</Link>
          <Link to="/">🛍️ IR A TIENDA</Link>
          <a
            href="#"
            onClick={cerrarSesionGamer}
            style={{ color: 'var(--primary-pink)', marginTop: '20px' }}
          >
            🚪 CERRAR SESIÓN
          </a>
        </nav>
      </aside>

      <main className="admin-content">
        <h1 style={{ fontFamily: "'Orbitron', sans-serif", color: 'var(--primary-cyan)' }}>
          PANEL ADMINISTRATIVO GAMERZONE
        </h1>
        <p style={{ marginTop: '10px', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          Resumen en tiempo real del estado de la tienda.
        </p>

        {/* SECCIÓN 1: TARJETAS DEL DASHBOARD */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginTop: '30px',
          }}
        >
          <div className="form-card" style={{ margin: 0, textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>TOTAL PRODUCTOS</h3>
            <p
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '2.5rem',
                color: 'var(--primary-cyan)',
                marginTop: '10px',
              }}
            >
              {stats.totalProducts}
            </p>
          </div>

          <div className="form-card" style={{ margin: 0, textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              STOCK BAJO (&lt; 10 u.)
            </h3>
            <p
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '2.5rem',
                color: 'var(--primary-pink)',
                marginTop: '10px',
              }}
            >
              {stats.lowStock}
            </p>
          </div>

          <div className="form-card" style={{ margin: 0, textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>ITEMS EN CARRITOS</h3>
            <p
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '2.5rem',
                color: '#fff',
                marginTop: '10px',
              }}
            >
              {stats.cartItems}
            </p>
          </div>
        </div>

        {/* SECCIÓN 2: TABLA DE INVENTARIO */}
        <div style={{ marginTop: '50px' }}>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", color: 'var(--primary-cyan)', marginBottom: '20px' }}>
            📦 INVENTARIO ACTUAL
          </h2>
          
          {productos.length === 0 ? (
            <p style={{ color: 'var(--text-muted)' }}>No hay productos registrados en el inventario.</p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--primary-cyan)' }}>
                    <th style={{ padding: '15px' }}>ID</th>
                    <th style={{ padding: '15px' }}>Nombre</th>
                    <th style={{ padding: '15px' }}>Precio</th>
                    <th style={{ padding: '15px' }}>Stock</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((prod, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <td style={{ padding: '15px' }}>{prod.id || index + 1}</td>
                      <td style={{ padding: '15px' }}>{prod.nombre || prod.titulo}</td>
                      <td style={{ padding: '15px' }}>${prod.precio}</td>
                      <td style={{ 
                        padding: '15px', 
                        color: prod.stock < 10 ? 'var(--primary-pink)' : '#fff',
                        fontWeight: prod.stock < 10 ? 'bold' : 'normal'
                      }}>
                        {prod.stock} {prod.stock < 10 && '⚠️'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}