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
    
    // 1. Validación básica para no guardar productos vacíos
    if (!formData.code || !formData.name || !formData.price || !formData.stock) {
      alert('Por favor completa los campos obligatorios: Código, Título, Precio y Stock.');
      return;
    }

    // 2. Preparamos el objeto con los nombres de propiedades que lee tu tabla
    const nuevoProducto = {
      id: formData.code,
      nombre: formData.name, 
      desc: formData.desc,
      precio: parseFloat(formData.price),
      stock: parseInt(formData.stock, 10),
      stockCritico: formData.criticalStock ? parseInt(formData.criticalStock, 10) : 5,
      categoria: formData.category || 'General'
    };

    // 3. Obtenemos lo que ya existe en el localStorage
    let productosActuales = [];
    try {
      const data = localStorage.getItem('productos');
      if (data) {
        productosActuales = JSON.parse(data);
      }
    } catch (error) {
      console.error('Error al leer productos', error);
    }

    // 4. Agregamos el nuevo producto al arreglo
    productosActuales.push(nuevoProducto);

    // 5. Guardamos el arreglo actualizado en el localStorage
    localStorage.setItem('productos', JSON.stringify(productosActuales));

    // 6. Mensaje de éxito y redirección automática al inventario
    alert('¡Juego registrado con éxito!');
    navigate('/admin-productos');
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
              <label htmlFor="code">CÓDIGO PRODUCTO (Mín. 3 carac. Ej: PS5-001)</label>
              <input
                type="text"
                id="code"
                className="form-control"
                placeholder="PS5-001"
                value={formData.code}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">TÍTULO DEL JUEGO / PRODUCTO (Máx 100)</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Ej: Grand Theft Auto VI"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="desc">SINOPSIS / DESCRIPCIÓN (Opcional - Máx 500)</label>
              <textarea
                id="desc"
                className="form-control"
                rows="4"
                placeholder="Descripción detallada del producto..."
                value={formData.desc}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="price">PRECIO ($ &gt;= 0)</label>
                <input
                  type="number"
                  id="price"
                  className="form-control"
                  step="1"
                  placeholder="59990"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="stock">STOCK (Entero &gt;= 0)</label>
                <input
                  type="number"
                  id="stock"
                  className="form-control"
                  placeholder="10"
                  value={formData.stock}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="criticalStock">STOCK CRÍTICO (Opcional)</label>
                <input
                  type="number"
                  id="criticalStock"
                  className="form-control"
                  placeholder="5"
                  value={formData.criticalStock}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="category">CATEGORÍA / PLATAFORMA</label>
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