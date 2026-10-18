import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminNuevoUsuario() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: '',
    run: '',
    name: '',
    lastname: '',
    email: '',
    region: '',
    comuna: '',
    address: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const cerrarSesionGamer = (e) => {
    e.preventDefault();
    console.log('Cerrando sesión...');
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del usuario a guardar:', formData);
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
        <h1 style={{ fontFamily: "'Orbitron', sans-serif", color: 'var(--primary-cyan)' }}>
          NUEVO USUARIO (ADMINISTRACIÓN)
        </h1>
        <p style={{ marginTop: '10px', color: 'var(--text-muted)', fontSize: '1rem' }}>
          Registra un nuevo usuario asignándole un perfil de acceso específico.
        </p>

        <div className="form-card wide-card" style={{ marginTop: '25px' }}>
          <form id="user-admin-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="admin-user-role">TIPO DE USUARIO (ROLES)</label>
              <select
                id="role"
                className="form-control"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">-- Seleccionar Perfil --</option>
                <option value="Administrador">Administrador (Acceso total)</option>
                <option value="Vendedor">Vendedor (Gestión de ventas)</option>
                <option value="Cliente">Cliente Gamer</option>
              </select>
              <span className="error-message" id="err-admin-user-role"></span>
            </div>

            <div className="form-group">
              <label htmlFor="user-run">RUN (Sin puntos ni guión. Ej: 19011022K)</label>
              <input
                type="text"
                id="run"
                className="form-control"
                placeholder="19011022K"
                value={formData.run}
                onChange={handleChange}
              />
              <span className="error-message" id="err-user-run"></span>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="user-name">NOMBRE</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Ej: Juan"
                  value={formData.name}
                  onChange={handleChange}
                />
                <span className="error-message" id="err-user-name"></span>
              </div>
              <div className="form-group">
                <label htmlFor="user-lastname">APELLIDOS</label>
                <input
                  type="text"
                  id="lastname"
                  className="form-control"
                  placeholder="Ej: Pérez González"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <span className="error-message" id="err-user-lastname"></span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="user-email">CORREO ELECTRÓNICO</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="error-message" id="err-user-email"></span>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="user-region">Región</label>
                <select
                  id="region"
                  className="form-control"
                  value={formData.region}
                  onChange={handleChange}
                >
                  <option value="">-- Seleccione --</option>
                </select>
                <span className="error-message" id="err-user-region"></span>
              </div>
              <div className="form-group">
                <label htmlFor="user-comuna">Comuna</label>
                <select
                  id="comuna"
                  className="form-control"
                  value={formData.comuna}
                  onChange={handleChange}
                >
                  <option value="">-- Seleccione --</option>
                </select>
                <span className="error-message" id="err-user-comuna"></span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="user-address">DIRECCIÓN</label>
              <input
                type="text"
                id="address"
                className="form-control"
                placeholder="Av. Siempre Viva 742"
                value={formData.address}
                onChange={handleChange}
              />
              <span className="error-message" id="err-user-address"></span>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              GUARDAR USUARIO
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}