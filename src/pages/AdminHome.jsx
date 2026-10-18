import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminHome() {
  const navigate = useNavigate();

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

        {/* TARJETAS DE ESTADÍSTICAS SINCRO CON APP.JS */}
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
              id="dash-total-products"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '2.5rem',
                color: 'var(--primary-cyan)',
                marginTop: '10px',
              }}
            >
              0
            </p>
          </div>

          <div className="form-card" style={{ margin: 0, textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              STOCK BAJO (&lt; 10 u.)
            </h3>
            <p
              id="dash-low-stock"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '2.5rem',
                color: 'var(--primary-pink)',
                marginTop: '10px',
              }}
            >
              0
            </p>
          </div>

          <div className="form-card" style={{ margin: 0, textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>ITEMS EN CARRITOS</h3>
            <p
              id="dash-cart-items"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '2.5rem',
                color: '#fff',
                marginTop: '10px',
              }}
            >
              0
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}