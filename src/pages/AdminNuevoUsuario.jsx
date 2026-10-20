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
    // password: '', // Nota: Si el usuario va a iniciar sesión, probablemente necesites un campo para la contraseña
  });

  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Validación básica (puedes agregar más según necesites)
    if (!formData.role || !formData.run || !formData.name || !formData.email) {
      alert('Por favor, completa al menos los campos obligatorios (Rol, RUN, Nombre, Email).');
      return;
    }

    setIsLoading(true);

    try {
      // 2. Enviar los datos al Backend
      // REEMPLAZA la URL por la ruta real de tu API (ej: http://localhost:3000/api/usuarios)
      const response = await fetch('http://tu-api-backend.com/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}` // Descomenta si usas JWT para autenticación
        },
        body: JSON.stringify(formData),
      });

      // 3. Manejar la respuesta
      if (response.ok) {
        alert('¡Usuario creado exitosamente!');
        navigate('/admin-usuarios'); // Redirige a la lista de usuarios tras el éxito
      } else {
        const errorData = await response.json();
        alert(`Error al crear el usuario: ${errorData.message || 'Intenta nuevamente.'}`);
      }
    } catch (error) {
      console.error('Error de red al crear usuario:', error);
      alert('Error de conexión. Verifica si el servidor está funcionando.');
    } finally {
      setIsLoading(false);
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
        <h1 style={{ fontFamily: "'Orbitron', sans-serif", color: 'var(--primary-cyan)' }}>
          NUEVO USUARIO (ADMINISTRACIÓN)
        </h1>
        <p style={{ marginTop: '10px', color: 'var(--text-muted)', fontSize: '1rem' }}>
          Registra un nuevo usuario asignándole un perfil de acceso específico.
        </p>

        <div className="form-card wide-card" style={{ marginTop: '25px' }}>
          <form id="user-admin-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="role">TIPO DE USUARIO (ROLES)</label>
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
            </div>

            <div className="form-group">
              <label htmlFor="run">RUN (Sin puntos ni guión. Ej: 19011022K)</label>
              <input
                type="text"
                id="run"
                className="form-control"
                placeholder="19011022K"
                value={formData.run}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">NOMBRE</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Ej: Juan"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">APELLIDOS</label>
                <input
                  type="text"
                  id="lastname"
                  className="form-control"
                  placeholder="Ej: Pérez González"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">CORREO ELECTRÓNICO</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="region">Región</label>
                <select
                  id="region"
                  className="form-control"
                  value={formData.region}
                  onChange={handleChange}
                >
                  <option value="">-- Seleccione --</option>
                  {/* Aquí deberías mapear tus regiones */}
                  <option value="RM">Metropolitana</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="comuna">Comuna</label>
                <select
                  id="comuna"
                  className="form-control"
                  value={formData.comuna}
                  onChange={handleChange}
                >
                  <option value="">-- Seleccione --</option>
                  {/* Aquí deberías mapear tus comunas dependiendo de la región */}
                  <option value="Puente Alto">Puente Alto</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">DIRECCIÓN</label>
              <input
                type="text"
                id="address"
                className="form-control"
                placeholder="Av. Siempre Viva 742"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-block" 
              disabled={isLoading}
            >
              {isLoading ? 'GUARDANDO...' : 'GUARDAR USUARIO'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}