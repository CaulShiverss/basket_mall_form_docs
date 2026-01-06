import Nav from "./Nav";

/**
 * Componente de cabecera principal de la aplicación.
 * Renderiza el logo/título y el menú de navegación en un contenedor con estilos de Tailwind.
 * @returns {JSX.Element} El encabezado completo del sitio.
 */

function Header() {
  return (
    <header className="text-white p-4 shadow-lg primary-bg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Título principal del sitio */}
        <h1 className="text-2xl font-bold">Basket Mall</h1>

        {/* Barra de navegación */}
        <Nav />
      </div>
    </header>
  );
}

export default Header;
