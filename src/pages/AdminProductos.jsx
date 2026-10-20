import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminProductos() {
  const navigate = useNavigate();

  // 1. Estado para almacenar los productos
  const [productos, setProductos] = useState([]);

  // 2. Cargar los productos desde el localStorage al iniciar el componente
  useEffect(() => {
    try {
      const datosGuardados = localStorage.getItem('productos');
      if (datosGuardados) {
        setProductos(JSON.parse(datosGuardados));
      }
    } catch (error) {
      console.error('Error al cargar el inventario:', error);
    }
  }, []);

  // 3. Función para eliminar un producto
  const eliminarProducto = (indexAEliminar) => {
    const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este juego?');
    if (confirmar) {
      // Filtramos el array para quitar el producto seleccionado
      const nuevoInventario = productos.filter((_, index) => index !== indexAEliminar);
      
      // Actualizamos el estado en React
      setProductos(nuevoInventario);
      
      // Actualizamos la base de datos en localStorage
      localStorage.setItem('productos', JSON.stringify(nuevoInventario));
    }
  };

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
          <Link to="/admin-nuevo-producto" className="btn btn-primary" style={{ textDecoration: 'none', padding: '10px 20px', backgroundColor: 'var(--primary-cyan)', color: '#000', fontWeight: 'bold', borderRadius: '4px' }}>
            + AGREGAR JUEGO
          </Link>
        </div>

        <div className="table-responsive">
          <table className="data-table" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--primary-cyan)' }}>
                <th style={{ padding: '15px' }}>Código</th>
                <th style={{ padding: '15px' }}>Título</th>
                <th style={{ padding: '15px' }}>Precio</th>
                <th style={{ padding: '15px' }}>Stock</th>
                <th style={{ padding: '15px' }}>Categoría</th>
                <th style={{ padding: '15px', textAlign: 'center' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* 4. Renderizado dinámico: mapeamos el arreglo de productos o mostramos un mensaje vacío */}
              {productos.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
                    No hay productos registrados en el inventario.
                  </td>
                </tr>
              ) : (
                productos.map((producto, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <td style={{ padding: '15px' }}>{producto.id || `PROD-00${index + 1}`}</td>
                    <td style={{ padding: '15px' }}>{producto.nombre || producto.titulo}</td>
                    <td style={{ padding: '15px' }}>${producto.precio}</td>
                    <td style={{ 
                      padding: '15px', 
                      color: producto.stock < 10 ? 'var(--primary-pink)' : '#fff',
                      fontWeight: producto.stock < 10 ? 'bold' : 'normal'
                    }}>
                      {producto.stock} {producto.stock < 10 && '⚠️'}
                    </td>
                    <td style={{ padding: '15px' }}>{producto.categoria || producto.plataforma || 'General'}</td>
                    <td style={{ padding: '15px', textAlign: 'center' }}>
                      <button 
                        style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', marginRight: '15px' }}
                        title="Editar (Requiere vista de edición)"
                      >
                        ✏️
                      </button>
                      <button 
                        onClick={() => eliminarProducto(index)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}
                        title="Eliminar"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}