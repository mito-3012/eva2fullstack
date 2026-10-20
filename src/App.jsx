import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Vistas públicas
import Home from './pages/Home';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Nosotros from './pages/Nosotros';
import Blogs from './pages/Blogs';
import Contacto from './pages/Contacto';

// Vistas de administración
import AdminHome from './pages/AdminHome';
import AdminProductos from './pages/AdminProductos';
import AdminUsuarios from './pages/AdminUsuarios';
import AdminNuevoProducto from './pages/AdminNuevoProducto';
import AdminNuevoUsuario from './pages/AdminNuevoUsuario';

export default function App() {
  
  // Carga de inventario inicial por defecto
  useEffect(() => {
    const inventarioInicial = [
      {
        id: 'PS5-001',
        nombre: 'Consola PlayStation 5',
        desc: 'Consola de nueva generación ultra rápida.',
        precio: 549990,
        stock: 15,
        stockCritico: 5,
        categoria: 'PlayStation 5',
        imagen: '/play5.jpg' //[cite: 3]
      },
      {
        id: 'JUE-001',
        nombre: 'Grand Theft Auto V',
        desc: 'Aventura de mundo abierto aclamada por la crítica.',
        precio: 29990,
        stock: 8,
        stockCritico: 10,
        categoria: 'PlayStation 5',
        imagen: '/grandtheft.jpg' //[cite: 3]
      },
      {
        id: 'JUE-002',
        nombre: 'Super Mario Bros. Wonder',
        desc: 'Aventura clásica en 2D con un nuevo giro.',
        precio: 49990,
        stock: 20,
        stockCritico: 5,
        categoria: 'Nintendo Switch',
        imagen: '/mario.jpg' //[cite: 3]
      },
      {
        id: 'JUE-003',
        nombre: 'Assassin\'s Creed III',
        desc: 'Remasterización del clásico juego de acción y aventura.',
        precio: 24990,
        stock: 4,
        stockCritico: 5,
        categoria: 'Nintendo Switch',
        imagen: '/ac3nswchico.jpg' //[cite: 3]
      },
      {
        id: 'CON-002',
        nombre: 'Nintendo Switch OLED',
        desc: 'Consola híbrida con pantalla vibrante.',
        precio: 349990,
        stock: 12,
        stockCritico: 5,
        categoria: 'Nintendo Switch',
        imagen: '/switch2.jpg' //[cite: 3]
      }
    ];

    const productosGuardados = localStorage.getItem('productos');
    
    if (!productosGuardados || JSON.parse(productosGuardados).length === 0) {
      localStorage.setItem('productos', JSON.stringify(inventarioInicial));
      console.log('Inventario inicial cargado exitosamente.');
    }
  }, []);

  return (
    <Routes>
      {/* Rutas Públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/producto/:id" element={<DetalleProducto />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contacto" element={<Contacto />} />

      {/* Rutas Admin */}
      <Route path="/admin-home" element={<AdminHome />} />
      <Route path="/admin-productos" element={<AdminProductos />} />
      <Route path="/admin-usuarios" element={<AdminUsuarios />} />
      <Route path="/admin-nuevo-producto" element={<AdminNuevoProducto />} />
      <Route path="/admin-nuevo-usuario" element={<AdminNuevoUsuario />} />
    </Routes>
  );
}