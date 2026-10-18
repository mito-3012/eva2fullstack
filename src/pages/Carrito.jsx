import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Carrito() {
  const [cupon, setCupon] = useState('');

  const aplicarCuponGamer = () => {
    console.log('Aplicando cupón:', cupon);
  };

  const procesarCompraGamer = () => {
    console.log('Procesando compra...');
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
          <Link to="/carrito" className="cart-btn active">
            🛒 Cart (<span id="cart-count">0</span>)
          </Link>
        </div>
      </header>

      <main className="container">
        <h1>Mi Carrito Gamer</h1>
        <div className="cart-layout">
          <div className="cart-items" id="cart-items-list">
            {/* Contenido dinámico mediante Estado o Contexto de React */}
          </div>

          <div className="cart-summary">
            <h2>TOTAL: <span id="cart-total-price">$0</span></h2>
            <div className="coupon-box">
              <input
                type="text"
                id="coupon-input"
                placeholder="Cupón Gamer (Ej: DUOCGAMER)"
                value={cupon}
                onChange={(e) => setCupon(e.target.value)}
              />
              <button
                type="button"
                onClick={aplicarCuponGamer}
                className="btn btn-secondary"
              >
                APLICAR
              </button>
            </div>

            <button
              type="button"
              onClick={procesarCompraGamer}
              className="btn btn-success btn-block btn-lg"
            >
              COMPRAR AHORA
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
