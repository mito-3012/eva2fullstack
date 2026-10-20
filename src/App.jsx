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

      {/* Rutas Admin (Corregidas con guiones para que coincidan con tus links) */}
      <Route path="/admin-home" element={<AdminHome />} />
      <Route path="/admin-productos" element={<AdminProductos />} />
      <Route path="/admin-usuarios" element={<AdminUsuarios />} />
      <Route path="/admin-nuevo-producto" element={<AdminNuevoProducto />} />
      <Route path="/admin-nuevo-usuario" element={<AdminNuevoUsuario />} />
    </Routes>
  );
}