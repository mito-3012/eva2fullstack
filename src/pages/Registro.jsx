import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Datos simulados de Regiones y Comunas de Chile
const regionesYComunas = {
  "Región Metropolitana": ["Santiago", "Puente Alto", "Maipú", "La Florida"],
  "Valparaíso": ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana"],
  "Biobío": ["Concepción", "Talcahuano", "Los Ángeles", "San Pedro de la Paz"]
};

// --- FUNCIÓN PARA VALIDAR EL RUT CHILENO (Módulo 11) ---
const validarRutChileno = (rutCompleto) => {
  if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto) && !/^[0-9]+[0-9kK]{1}$/.test(rutCompleto)) {
    return false;
  }
  
  // Limpiar puntos y guiones por si el usuario los pone
  const rutLimpio = rutCompleto.replace(/[^0-9kK]/g, '').toUpperCase();
  if (rutLimpio.length < 2) return false;

  const cuerpo = rutLimpio.slice(0, -1);
  const dv = rutLimpio.slice(-1);

  let suma = 0;
  let multiplo = 2;

  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += multiplo * cuerpo.charAt(i);
    multiplo = multiplo < 7 ? multiplo + 1 : 2;
  }

  const dvEsperado = 11 - (suma % 11);
  let dvCalculado = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString();

  return dvCalculado === dv;
};

// --- FUNCIÓN PARA VALIDAR EL CORREO ---
const validarCorreo = (correo) => {
  // Verifica que tenga @ y que termine en uno de los dominios solicitados
  const regex = /^[a-zA-Z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
  return regex.test(correo);
};

export default function Registro() {
  const navigate = useNavigate();

  // Estado para simular una base de datos de usuarios
  const [usuariosRegistrados, setUsuariosRegistrados] = useState([]);

  // Estado inicial del formulario (lo guardamos en una constante para reutilizarlo al limpiar)
  const initialState = {
    run: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
    passConfirm: '',
    region: '',
    comuna: '',
    address: '',
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    
    setFormData((prev) => {
      const newData = { ...prev, [id]: value };
      if (id === 'region') newData.comuna = ''; // Reiniciar comuna si cambia la región
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Validar que no haya campos vacíos
    if (Object.values(formData).some(value => value.trim() === '')) {
      alert("Por favor, completa todos los campos del formulario.");
      return;
    }

    // 2. Validar formato del RUT y Dígito Verificador
    if (!validarRutChileno(formData.run)) {
      alert("El RUT ingresado no es válido. Revisa el dígito verificador.");
      return;
    }

    // 3. Validar el Correo Electrónico
    if (!validarCorreo(formData.email)) {
      alert("El correo debe contener un '@' y ser de dominio @duoc.cl, @profesor.duoc.cl o @gmail.com");
      return;
    }

    // 4. Validar Contraseñas
    if (formData.password !== formData.passConfirm) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    if (formData.password.length < 4 || formData.password.length > 10) {
      alert("La contraseña debe tener entre 4 y 10 caracteres.");
      return;
    }

    // 5. Validar duplicidad de RUT o Correo
    const existeUsuario = usuariosRegistrados.some(
      (user) => user.run.toUpperCase() === formData.run.toUpperCase() || user.email.toLowerCase() === formData.email.toLowerCase()
    );

    if (existeUsuario) {
      alert("Error: Ya existe una cuenta registrada con este RUT o Correo Electrónico.");
      return;
    }

    // --- REGISTRO EXITOSO ---
    // Guardar usuario en nuestra "base de datos" simulada
    setUsuariosRegistrados(prev => [...prev, formData]);
    
    alert(`¡Registro exitoso! Bienvenido ${formData.name}`);
    
    // Limpiar los campos del formulario volviendo al estado inicial
    setFormData(initialState);

    // Si deseas redirigir después del éxito, descomenta esta línea:
    // navigate('/login'); 
  };

  const comunasDisponibles = formData.region ? regionesYComunas[formData.region] : [];

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
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">CORREO (@duoc.cl, @profesor.duoc.cl, @gmail.com)</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">CONTRASEÑA (4 a 10 carac.)</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="passConfirm">CONFIRMAR CONTRASEÑA</label>
                <input
                  type="password"
                  id="passConfirm"
                  className="form-control"
                  value={formData.passConfirm}
                  onChange={handleChange}
                />
              </div>
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
                  <option value="">-- Seleccione la región --</option>
                  {Object.keys(regionesYComunas).map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="comuna">Comuna</label>
                <select
                  id="comuna"
                  className="form-control"
                  value={formData.comuna}
                  onChange={handleChange}
                  disabled={!formData.region}
                >
                  <option value="">-- Seleccione la comuna --</option>
                  {comunasDisponibles.map((comuna) => (
                    <option key={comuna} value={comuna}>
                      {comuna}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">DIRECCIÓN DE DESPACHO</label>
              <input
                type="text"
                id="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
              />
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