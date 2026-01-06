import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

/**
 * Componente de navegación con menú responsivo.
 * Gestiona un estado local para abrir/cerrar el menú en dispositivos móviles
 * y proporciona enlaces de navegación semánticos.
 * @returns {JSX.Element} Una sección de navegación con soporte para escritorio y móvil.
 */

function Nav() {
  const [open, setOpen] = useState(false); // Controla la apertura del menú móvil

  return (
    <section
      role="navigation"
      aria-label="Navegación principal"
      className="nav-main"
    >
      {/* Menú principal para pantallas grandes */}
      <nav className="nav-main__list" aria-label="Enlaces principales">
        <Link to="/" className="nav-main__link">Inicio</Link>
        <Link to="/productos" className="nav-main__link">Productos</Link>
        <Link to="/admin" className="nav-main__link">Administrador</Link>
      </nav>

      {/* Botón hamburguesa para móvil */}
      <button
        onClick={() => setOpen(!open)}                     // Alterna estado
        className="nav-main__toggle"
        aria-expanded={open}                               // Estado accesible
        aria-controls="mobile-menu"                        // Asocia botón con menú
        aria-haspopup="true"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}   // Texto accesible
      >
        ☰
      </button>

      {/* Menú móvil colapsable */}
      <nav
        id="mobile-menu"
        className={`nav-main__mobile-menu ${
          open ? "nav-main__mobile-menu--open" : "nav-main__mobile-menu--closed"
        }`}
        aria-hidden={!open}                                   // Indica si está oculto
        aria-label="Menú móvil"
      >
        <NavLink
          to="/"
          onClick={() => setOpen(false)}                      // Cierra el menú al navegar
          className="nav-main__link"
        >
          Inicio
        </NavLink>

        <NavLink
          to="/productos"
          onClick={() => setOpen(false)}
          className="nav-main__link"
        >
          Productos
        </NavLink>

        <NavLink
          to="/admin"
          onClick={() => setOpen(false)}
          className="nav-main__link"
        >
          Administrador
        </NavLink>
      </nav>
    </section>
  );
}

export default Nav;
