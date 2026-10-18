import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminProductos() {
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
          <Link to="/admin-home">📊 DASHBOARD</Link>
          <Link to="/admin-productos" className="active">🎮 INVENTARIO</Link>
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
        <div
          className="admin-top-bar"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '25px',
            flexWrap: 'wrap',
            gap: '15px',
          }}
        >
          <div>
            <h1 style={{ fontFamily: "'Orbitron', sans-serif", color: 'var(--primary-cyan)' }}>
              Catálogo e Inventario de Juegos
            </h1>
            <p style={{ marginTop: '5px', color: 'var(--text-muted)', fontSize: '1rem' }}>
              Gestión de stock, precios y catálogo de productos.
            </p>
          </div>
          <Link to="/admin-nuevo-producto" className="btn btn-primary">
            + AGREGAR JUEGO
          </Link>
        </div>

        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Título</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Plataforma / Cat.</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="admin-products-table">
              {/* Aquí se renderizarán dinámicamente los productos mediante estado en React */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}