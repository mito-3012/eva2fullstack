import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Iniciando sesión con:', formData);
    // Aquí puedes integrar la lógica con auth.js o redirigir
    // navigate('/admin-home'); // o navigate('/');
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
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/blogs">Noticias</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <div className="header-right">
          <Link to="/carrito" className="cart-btn">
            🛒 Cart (<span id="cart-count">0</span>)
          </Link>
        </div>
      </header>

      <main className="container flex-center">
        <div className="form-card">
          <div className="brand-box">
            <span className="logo-icon">🎮</span>
            <h2>GamerZone</h2>
          </div>
          <div className="card-header">INICIO DE SESIÓN</div>

          <form id="login-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="login-email">CORREO</label>
              <input
                type="email"
                id="login-email"
                name="email"
                className="form-control"
                placeholder="gamer@duoc.cl"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="error-message" id="err-login-email"></span>
            </div>

            <div className="form-group">
              <label htmlFor="login-pass">CONTRASEÑA</label>
              <input
                type="password"
                id="login-pass"
                name="password"
                className="form-control"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
              />
              <span className="error-message" id="err-login-pass"></span>
            </div>

            <button type="submit" className="btn btn-outline btn-block">
              INGRESAR
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}