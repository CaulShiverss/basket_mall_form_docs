/**
 * Vista de la página de inicio (Home).
 * Punto de entrada principal de la aplicación que muestra el mensaje de bienvenida
 * y establece la identidad visual de la landing page.
 * @returns {JSX.Element} El contenedor de la página de inicio estilizado.
 */

function HomePage() {
  return (
    <section className="flex items-center justify-center min-h-[70vh]">
      {/* Título principal */}
      <p className="h1__basketmall">
        Página principal
      </p>
    </section>
  );
}

export default HomePage;
