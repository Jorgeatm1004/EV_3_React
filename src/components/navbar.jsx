import { useState } from 'react';

function Navbar() {
  const categories = ['SUV', 'Sedan', 'Hatchback', 'Pickup', 'Coupe', 'Minivan', 'Convertible', 'Electric'];
  const [showCategories, setShowCategories] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-branding">
        <a className="navbar-brand" href="#inicio">
          Frontend React
        </a>
        <p className="navbar-note">Catálogo y seguimiento de vehículos</p>
      </div>

      <div className="navbar-links">
        <a href="#inicio">Inicio</a>
        <a href="#contacto">Contacto</a>
      </div>

      <div className="navbar-categories-panel">
        <button
          className="navbar-categories-toggle"
          type="button"
          aria-expanded={showCategories}
          aria-controls="navbar-categories-list"
          onClick={() => setShowCategories((currentValue) => !currentValue)}
        >
          Categorías
        </button>

        <div
          className={`navbar-categories ${showCategories ? 'navbar-categories--open' : ''}`}
          id="navbar-categories-list"
          aria-label="Categorias de autos"
        >
          {categories.map((category) => (
            <a key={category} href={`#${category.toLowerCase()}`}>
              {category}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;