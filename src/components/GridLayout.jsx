
/**
 * Componente de diseño para envolver contenidos en una sección centrada.
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido o elementos que se renderizarán dentro de la sección.
 * @param {string} [props.titulo] - (Opcional) Título principal que se muestra en la parte superior.
 * @returns {JSX.Element} Una sección estructurada con soporte para accesibilidad.
 */

function GridLayout({ children, titulo }) {
  return (
    <section
      aria-labelledby="main-section-title" // Describe la sección mediante el h1
      className="w-full max-w-7xl text-center"
    >
      {/* Renderizado condicional del título */}
      {titulo && (
        <h1
          id="main-section-title"    // Punto de referencia accesible
          className="h1__basketmall mb-6" // Clase personalizada del proyecto
        >
          {titulo}
        </h1>
      )}

      {/* Contenido pasado como children */}
      {children}
    </section>
  );
}

export default GridLayout;
