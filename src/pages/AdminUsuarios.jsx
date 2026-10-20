import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminUsuarios() {
  const navigate = useNavigate();

  const cerrarSesionGamer = (e) => {
    e.preventDefault();
    console.log('Cerrando sesión...');
    navigate('/login');
  };

  // Función para simular el reseteo de la contraseña
  const handleResetPassword = (nombre, run) => {
    const confirmar = window.confirm(`¿Estás seguro de que deseas resetear la contraseña de ${nombre}?`);
    if (confirmar) {
      alert(`✅ La contraseña de ${nombre} ha sido reseteada.\nSu nueva clave temporal es su RUN: ${run}`);
    }
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
                <th>Contraseña</th> {/* Nueva columna */}
                <th>Perfil</th>
                <th>Región / Comuna</th>
                <th>Acciones</th> {/* Columna de botones */}
              </tr>
            </thead>
            <tbody id="admin-users-table">
              {/* Usuario 1: Administrador */}
              <tr>
                <td>19011022K</td>
                <td>Gonzalo Gamer</td>
                <td>gonzalo@duoc.cl</td>
                <td style={{ letterSpacing: '2px' }}>********</td>
                <td>
                  <span className="badge badge-admin">Administrador</span>
                </td>
                <td>Región Metropolitana / Santiago</td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button 
                      className="btn btn-sm btn-secondary" 
                      onClick={() => handleResetPassword('Gonzalo Gamer', '19011022K')}
                      style={{ backgroundColor: '#17a2b8' }}
                    >
                      🔑 Resetear Clave
                    </button>
                    <button className="btn btn-sm btn-danger">🗑️</button>
                  </div>
                </td>
              </tr>

              {/* Usuario 2: Cliente */}
              <tr>
                <td>201234567</td>
                <td>Camila Player</td>
                <td>camila@gmail.com</td>
                <td style={{ letterSpacing: '2px' }}>********</td>
                <td>
                  <span className="badge badge-client">Cliente</span>
                </td>
                <td>Región de la Araucanía / Temuco</td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button 
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleResetPassword('Camila Player', '201234567')}
                      style={{ backgroundColor: '#17a2b8' }}
                    >
                      🔑 Resetear Clave
                    </button>
                    <button className="btn btn-sm btn-danger">🗑️</button>
                  </div>
                </td>
              </tr>

              {/* Usuario 3: Empleado / Vendedor */}
              <tr>
                <td>156667778</td>
                <td>Carlos Vendedor</td>
                <td>carlos@tiendagamer.cl</td>
                <td style={{ letterSpacing: '2px' }}>********</td>
                <td>
                  <span className="badge badge-warning" style={{ backgroundColor: '#ffc107', color: '#000', padding: '4px 8px', borderRadius: '4px' }}>
                    Vendedor
                  </span>
                </td>
                <td>Región de Valparaíso / Viña del Mar</td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button 
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleResetPassword('Carlos Vendedor', '156667778')}
                      style={{ backgroundColor: '#17a2b8' }}
                    >
                      🔑 Resetear Clave
                    </button>
                    <button className="btn btn-sm btn-danger">🗑️</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}