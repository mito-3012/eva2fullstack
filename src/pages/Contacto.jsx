import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    comentario: '',
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
    
    if (!formData.nombre || !formData.correo || !formData.comentario) {
      alert('Por favor, completa todos los campos antes de enviar tu mensaje.');
      return;
    }

    console.log('Mensaje de contacto simulado y enviado:', formData);
    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo a la brevedad.');

    setFormData({
      nombre: '',
      correo: '',
      comentario: '',
    });
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
          <Link to="/contacto" className="active">Contacto</Link>
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
          <div className="card-header">CONTACTO GAMER</div>
          <form id="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="contact-name">NOMBRE COMPLETO</label>
              <input
                type="text"
                id="contact-name"
                name="nombre"
                className="form-control"
                autoComplete="name"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">CORREO</label>
              <input
                type="email"
                id="contact-email"
                name="correo"
                className="form-control"
                autoComplete="email"
                value={formData.correo}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-msg">MENSAJE / CONSULTA</label>
              <textarea
                id="contact-msg"
                name="comentario"
                className="form-control"
                rows="4"
                value={formData.comentario}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-outline btn-block">
              ENVIAR CONSULTA
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}