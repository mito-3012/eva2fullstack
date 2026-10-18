import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Registro() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    run: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
    passConfirm: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de registro:', formData);
    // Lógica para enviar los datos de registro o redireccionar
    // navigate('/login');
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
          <Link to="/productos">Catálogo</Link>
        </nav>
      </header>

      <main className="container flex-center">
        <div className="form-card wide-card">
          <div className="card-header">REGISTRO DE USUARIO GAMER</div>
          <form id="user-form" onSubmit={handleSubmit} noValidate>
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
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <span className="error-message" id="err-user-lastname"></span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="user-email">CORREO (@duoc.cl, @profesor.duoc.cl, @gmail.com)</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="error-message" id="err-user-email"></span>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="user-pass">CONTRASEÑA (4 a 10 carac.)</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span className="error-message" id="err-user-pass"></span>
              </div>
              <div className="form-group">
                <label htmlFor="user-pass-confirm">CONFIRMAR CONTRASEÑA</label>
                <input
                  type="password"
                  id="passConfirm"
                  className="form-control"
                  value={formData.passConfirm}
                  onChange={handleChange}
                />
                <span className="error-message" id="err-user-pass-confirm"></span>
              </div>
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
                  <option value="">-- Seleccione la región --</option>
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
                  <option value="">-- Seleccione la comuna --</option>
                </select>
                <span className="error-message" id="err-user-comuna"></span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="user-address">DIRECCIÓN DE DESPACHO</label>
              <input
                type="text"
                id="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
              />
              <span className="error-message" id="err-user-address"></span>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              CREAR CUENTA GAMER
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}