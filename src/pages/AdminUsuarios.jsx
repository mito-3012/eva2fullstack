import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminUsuarios() {
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
          <Link to="/admin-productos">🎮 INVENTARIO</Link>
          <Link to="/admin-usuarios" className="active">👥 USUARIOS</Link>
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
              Mantenedor de Usuarios
            </h1>
            <p style={{ marginTop: '5px', color: 'var(--text-muted)', fontSize: '1rem' }}>
              Gestión e inspección de cuentas de usuario y roles del sistema.
            </p>
          </div>
          <Link to="/admin-nuevo-usuario" className="btn btn-primary">
            + NUEVO USUARIO
          </Link>
        </div>

        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>RUN</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Perfil</th>
                <th>Región / Comuna</th>
              </tr>
            </thead>
            <tbody id="admin-users-table">
              <tr>
                <td>19011022K</td>
                <td>Gonzalo Gamer</td>
                <td>gonzalo@duoc.cl</td>
                <td>
                  <span className="badge badge-admin">Administrador</span>
                </td>
                <td>Región Metropolitana / Santiago</td>
              </tr>
              <tr>
                <td>201234567</td>
                <td>Camila Player</td>
                <td>camila@gmail.com</td>
                <td>
                  <span className="badge badge-client">Cliente</span>
                </td>
                <td>Región de la Araucanía / Temuco</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}