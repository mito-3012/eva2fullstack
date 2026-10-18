import { createContext, useContext, useState, useEffect } from 'react';

// ==========================================
// 1. DATOS INICIALES (SEED DATA)
// ==========================================
export const PRODUCTOS_INICIALES = [
  { id: 1, codigo: "PS5-001", nombre: "PlayStation 5 Sony Slim Digital", precio: 499999, stock: 10, critical: 5, categoria: "Consola", imagen: "play5.jpg" },
  { id: 2, codigo: "NSW-002", nombre: "Consola Nintendo Switch 2 NS2 LCD", precio: 669990, stock: 8, critical: 5, categoria: "Consola", imagen: "switch2.jpg" },
  { id: 3, codigo: "PS5-003", nombre: "PlayStation 5 Grand Theft Auto VI", precio: 94990, stock: 25, critical: 10, categoria: "Videojuego", imagen: "grandtheft.jpg" },
  { id: 4, codigo: "PS5-004", nombre: "PlayStation 5 1348 Ex Voto", precio: 69990, stock: 15, critical: 5, categoria: "Videojuego", imagen: "1348.jpg" },
  { id: 5, codigo: "NSW-005", nombre: "Nintendo Switch Grand Theft Auto VI", precio: 24990, stock: 4, critical: 5, categoria: "Videojuego", imagen: "grandtheft.jpg" },
  { id: 6, codigo: "NSW-006", nombre: "Nintendo Switch Assassin's Creed III Remastered", precio: 94990, stock: 12, critical: 5, categoria: "Videojuego", imagen: "ac3nswchico.jpg" },
  { id: 7, codigo: "NSW-007", nombre: "9 JUEGOS EN 1 PACK MEGA NINTENDO SWITCH", precio: 80000, stock: 30, critical: 10, categoria: "Videojuego", imagen: "Super-Pack-3-2.jpg" },
  { id: 8, codigo: "NSW-008", nombre: "Super Mario Bros U Deluxe Nintendo Switch", precio: 59000, stock: 0, critical: 5, categoria: "Videojuego", imagen: "mario.jpg" }
];

export const USUARIOS_INICIALES = [
  { run: "19011022K", name: "Gonzalo Gamer", email: "gonzalo@duoc.cl", password: "123", role: "Administrador", region: "Región Metropolitana de Santiago", comuna: "Santiago" },
  { run: "201234567", name: "Camila Player", email: "camila@gmail.com", password: "123", role: "Cliente", region: "Región de la Araucanía", comuna: "Temuco" }
];

export const REGIONES_DATA = [
  { region: "Región Metropolitana de Santiago", comunas: ["Santiago", "Puente Alto", "Maipú", "Las Condes", "La Florida", "Providencia"] },
  { region: "Región de Valparaíso", comunas: ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana"] },
  { region: "Región de la Araucanía", comunas: ["Temuco", "Padre Las Casas", "Villarrica", "Pucón"] }
];

const ShopContext = createContext();

// ==========================================
// 2. PROVEEDOR DEL CONTEXTO (ShopProvider)
// ==========================================
export const ShopProvider = ({ children }) => {
  // ESTADOS CON PERSISTENCIA EN LOCALSTORAGE
  const [productos, setProductos] = useState(() => {
    const saved = localStorage.getItem("gamer_products");
    return saved ? JSON.parse(saved) : PRODUCTOS_INICIALES;
  });

  const [carrito, setCarrito] = useState(() => {
    const saved = localStorage.getItem("gamer_cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [usuarios, setUsuarios] = useState(() => {
    const saved = localStorage.getItem("gamer_users");
    return saved ? JSON.parse(saved) : USUARIOS_INICIALES;
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("gamer_current_user");
    return saved ? JSON.parse(saved) : null;
  });

  const [descuentoAplicado, setDescuentoAplicado] = useState(0);

  // SINCRONIZACIÓN CON LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("gamer_products", JSON.stringify(productos));
  }, [productos]);

  useEffect(() => {
    localStorage.setItem("gamer_cart", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    localStorage.setItem("gamer_users", JSON.stringify(usuarios));
  }, [usuarios]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("gamer_current_user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("gamer_current_user");
    }
  }, [currentUser]);

  // AUXILIAR CORREGIDA: RUTA DE IMÁGENES DESDE LA CARPETA PUBLIC
  const rutaImagenProducto = (imagen) => {
    if (!imagen) return "/play5.jpg";
    if (imagen.startsWith("http")) return imagen;
    
    // Elimina prefijos antiguos como "../" o "./"
    const nombreLimpio = imagen.replace(/^(\.\.\/|\.\/)+/, "");
    return nombreLimpio.startsWith("/") ? nombreLimpio : "/" + nombreLimpio;
  };

  // ==========================================
  // 3. FUNCIONES DEL CARRITO DE COMPRAS
  // ==========================================
  const agregarAlCarritoConCantidad = (idProducto, cantidad = 1) => {
    if (cantidad <= 0) return;
    const prod = productos.find(p => p.id === Number(idProducto));
    if (!prod) return;

    if (prod.stock <= 0) {
      alert(`El producto ${prod.nombre} se encuentra agotado.`);
      return;
    }

    const itemIndex = carrito.findIndex(item => item.id === Number(idProducto));
    const cantidadActual = itemIndex > -1 ? carrito[itemIndex].cantidad : 0;

    if ((cantidadActual + cantidad) > prod.stock) {
      alert(`No puedes agregar más unidades. Solo quedan ${prod.stock} en stock.`);
      return;
    }

    let nuevoCarrito = [...carrito];
    if (itemIndex > -1) {
      nuevoCarrito[itemIndex] = {
        ...nuevoCarrito[itemIndex],
        cantidad: nuevoCarrito[itemIndex].cantidad + cantidad
      };
    } else {
      nuevoCarrito.push({ ...prod, cantidad });
    }

    setCarrito(nuevoCarrito);
    alert(`¡${cantidad} unidad(es) de ${prod.nombre} añadida(s) al carrito!`);
  };

  const agregarAlCarritoGamer = (idProducto) => {
    agregarAlCarritoConCantidad(idProducto, 1);
  };

  const cambiarCantidad = (idProducto, delta) => {
    const prod = productos.find(p => p.id === Number(idProducto));
    const itemIndex = carrito.findIndex(item => item.id === Number(idProducto));

    if (itemIndex === -1) return;

    if (delta > 0 && prod && (carrito[itemIndex].cantidad + delta) > prod.stock) {
      alert(`Has alcanzado el límite de stock para ${prod.nombre}.`);
      return;
    }

    let nuevoCarrito = [...carrito];
    nuevoCarrito[itemIndex].cantidad += delta;

    if (nuevoCarrito[itemIndex].cantidad <= 0) {
      nuevoCarrito.splice(itemIndex, 1);
    }

    setCarrito(nuevoCarrito);
  };

  const eliminarDelCarrito = (idProducto) => {
    setCarrito(prev => prev.filter(item => item.id !== Number(idProducto)));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setDescuentoAplicado(0);
  };

  const aplicarCuponGamer = (cupon) => {
    const codigo = cupon.trim().toUpperCase();
    if (codigo === "DUOCGAMER") {
      setDescuentoAplicado(0.20);
      alert("¡Cupón del 20% de descuento aplicado con éxito!");
    } else {
      setDescuentoAplicado(0);
      alert("Cupón no válido.");
    }
  };

  const procesarCompraGamer = () => {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío. Agrega productos antes de comprar.");
      return;
    }

    const nuevosProductos = productos.map(prod => {
      const itemCart = carrito.find(item => item.id === prod.id);
      if (itemCart) {
        const nuevoStock = prod.stock - itemCart.cantidad;
        return { ...prod, stock: nuevoStock < 0 ? 0 : nuevoStock };
      }
      return prod;
    });

    setProductos(nuevosProductos);
    setCarrito([]);
    setDescuentoAplicado(0);
    alert("¡Gracias por tu compra en GamerZone! Tu pedido ha sido procesado con éxito.");
  };

  // ==========================================
  // 4. AUTENTICACIÓN Y REGISTRO
  // ==========================================
  const loginUser = (email, password) => {
    const user = usuarios.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (user) {
      setCurrentUser(user);
      return { success: true, user };
    }
    return { success: false, message: "Correo o contraseña incorrectos" };
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  const registrarUsuario = (nuevoUsuario) => {
    const existe = usuarios.some(u => u.email.toLowerCase() === nuevoUsuario.email.toLowerCase() || u.run === nuevoUsuario.run);
    if (existe) {
      alert("El usuario con este RUN o correo ya se encuentra registrado.");
      return false;
    }

    const usuarioConRol = {
      ...nuevoUsuario,
      role: nuevoUsuario.role || "Cliente"
    };

    setUsuarios(prev => [...prev, usuarioConRol]);
    alert("¡Usuario registrado exitosamente!");
    return true;
  };

  // ==========================================
  // 5. FUNCIONES DE ADMINISTRACIÓN
  // ==========================================
  const eliminarProductoAdmin = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este producto del inventario?")) {
      setProductos(prev => prev.filter(p => p.id !== Number(id)));
    }
  };

  const agregarProductoAdmin = (nuevoProducto) => {
    const id = Date.now();
    setProductos(prev => [...prev, { ...nuevoProducto, id }]);
    alert("Producto agregado correctamente.");
  };

  const eliminarUsuarioAdmin = (run) => {
    if (window.confirm("¿Estás seguro de eliminar este usuario?")) {
      setUsuarios(prev => prev.filter(u => u.run !== run));
    }
  };

  // ==========================================
  // 6. VALORES CALCULADOS (METRICAS Y TOTALES)
  // ==========================================
  const cartCount = carrito.reduce((acc, item) => acc + (item.cantidad || 0), 0);
  const subtotalCarrito = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  const totalCarrito = descuentoAplicado > 0 ? Math.round(subtotalCarrito * (1 - descuentoAplicado)) : subtotalCarrito;

  const metricasDashboard = {
    totalProductos: productos.length,
    lowStock: productos.filter(p => Number(p.stock) < 10).length,
    cartItems: cartCount,
    totalUsuarios: usuarios.length
  };

  return (
    <ShopContext.Provider value={{
      productos,
      setProductos,
      carrito,
      usuarios,
      currentUser,
      descuentoAplicado,
      REGIONES_DATA,
      rutaImagenProducto,
      agregarAlCarritoConCantidad,
      agregarAlCarritoGamer,
      cambiarCantidad,
      eliminarDelCarrito,
      vaciarCarrito,
      aplicarCuponGamer,
      procesarCompraGamer,
      loginUser,
      logoutUser,
      registrarUsuario,
      eliminarProductoAdmin,
      agregarProductoAdmin,
      eliminarUsuarioAdmin,
      cartCount,
      subtotalCarrito,
      totalCarrito,
      metricasDashboard
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);