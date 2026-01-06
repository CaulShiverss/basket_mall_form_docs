import { Outlet } from "react-router-dom";

/**
 * Contenedor principal de diseño que renderiza las rutas hijas.
 * Proporciona una estructura centrada y semántica para el contenido principal de la aplicación.
 * @returns {JSX.Element} El elemento <main> que actúa como punto de montaje para las rutas (Outlet).
 */

function Container() {
  return (
    <main
      id="main-content"          // Permite saltos rápidos con "Skip to content"
      role="main"                // Refuerza la semántica del área principal
      tabIndex="-1"              // Habilita enfoque programático accesible
      className="layout-main"
    >
      {/* Render dinámico de rutas hijas */}
      <Outlet />
    </main>
  );
}

export default Container;
