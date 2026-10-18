import React from 'react';
import { Link } from 'react-router-dom';

export default function Nosotros() {
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
          <Link to="/nosotros" className="active">Nosotros</Link>
          <Link to="/blogs">Noticias</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <div className="header-right">
          <Link to="/carrito" className="cart-btn">
            🛒 Cart (<span id="cart-count">0</span>)
          </Link>
        </div>
      </header>

      <main className="container">
        <h1>Quiénes Somos</h1>
        <div className="about-card">
          <h2>Nuestra Pasión es el Gaming</h2>
          <p>
            Aspiramos a consolidarnos como la tienda e-commerce referente en Chile dentro de la industria del entretenimiento digital, liderando el mercado a través de la innovación constante y la cercanía con la comunidad. Buscamos trascender el concepto tradicional de venta para convertirnos en un hub interactivo donde los jugadores encuentren no solo hardware de vanguardia y los mejores títulos, sino también un espacio activo para competir y conectar. Nuestro compromiso a largo plazo es impulsar el crecimiento del ecosistema local de esports y el desarrollo tecnológico, posicionando a GamerZone como el aliado indiscutible de todo gamer.
          </p>

          <h3>Squad Desarrollador</h3>
          <div className="imgens">
            <img src="PlayStation-Studios-Steam.jpg" alt="steam" />
            
          </div>
        </div>
      </main>
    </div>
  );
}