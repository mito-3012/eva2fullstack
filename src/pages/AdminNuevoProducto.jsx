import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminNuevoProducto() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    code: '',
    name: '',
    desc: '',
    price: '',
    stock: '',
    criticalStock: '',
    category: '',
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
    console.log('Datos del producto a guardar:', formData);
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
        <h1 style={{ fontFamily: "'Orbitron', sans-serif", color: 'var(--primary-cyan)' }}>
          REGISTRAR NUEVO JUEGO / PRODUCTO
        </h1>
        <p style={{ marginTop: '10px', color: 'var(--text-muted)', fontSize: '1rem' }}>
          Ingresa los detalles del nuevo elemento para integrarlo al catálogo global.
        </p>

        <div className="form-card wide-card" style={{ marginTop: '25px' }}>
          <form id="product-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="prod-code">CÓDIGO PRODUCTO (Mín. 3 carac. Ej: PS5-001)</label>
              <input
                type="text"
                id="code"
                className="form-control"
                placeholder="PS5-001"
                value={formData.code}
                onChange={handleChange}
              />
              <span className="error-message" id="err-prod-code"></span>
            </div>

            <div className="form-group">
              <label htmlFor="prod-name">TÍTULO DEL JUEGO / PRODUCTO (Máx 100)</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Ej: Grand Theft Auto VI"
                value={formData.name}
                onChange={handleChange}
              />
              <span className="error-message" id="err-prod-name"></span>
            </div>

            <div className="form-group">
              <label htmlFor="prod-desc">SINOPSIS / DESCRIPCIÓN (Opcional - Máx 500)</label>
              <textarea
                id="desc"
                className="form-control"
                rows="4"
                placeholder="Descripción detallada del producto..."
                value={formData.desc}
                onChange={handleChange}
              ></textarea>
              <span className="error-message" id="err-prod-desc"></span>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="prod-price">PRECIO ($ &gt;= 0)</label>
                <input
                  type="number"
                  id="price"
                  className="form-control"
                  step="1"
                  placeholder="59990"
                  value={formData.price}
                  onChange={handleChange}
                />
                <span className="error-message" id="err-prod-price"></span>
              </div>

              <div className="form-group">
                <label htmlFor="prod-stock">STOCK (Entero &gt;= 0)</label>
                <input
                  type="number"
                  id="stock"
                  className="form-control"
                  placeholder="10"
                  value={formData.stock}
                  onChange={handleChange}
                />
                <span className="error-message" id="err-prod-stock"></span>
              </div>

              <div className="form-group">
                <label htmlFor="prod-critical">STOCK CRÍTICO (Opcional)</label>
                <input
                  type="number"
                  id="criticalStock"
                  className="form-control"
                  placeholder="5"
                  value={formData.criticalStock}
                  onChange={handleChange}
                />
                <span className="error-message" id="err-prod-critical"></span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="prod-cat">CATEGORÍA / PLATAFORMA</label>
              <select
                id="category"
                className="form-control"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">-- Seleccionar --</option>
                <option value="PlayStation 5">PlayStation 5</option>
                <option value="Xbox Series X">Xbox Series X</option>
                <option value="Nintendo Switch">Nintendo Switch</option>
                <option value="PC Gaming">PC Gaming</option>
                <option value="Accesorios">Accesorios &amp; Periféricos</option>
              </select>
              <span className="error-message" id="err-prod-cat"></span>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              GUARDAR JUEGO
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}