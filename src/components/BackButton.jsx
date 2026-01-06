import { useNavigate } from "react-router-dom";

/**
 * Botón funcional de retroceso.
 * Utiliza el hook 'useNavigate' para volver a la página anterior en el historial de navegación.
 * @returns {JSX.Element} Un botón estilizado con soporte de navegación programática.
 */

function BackButton() {
  const navigate = useNavigate(); // Hook para controlar navegación programática

  return (
    <button
      onClick={() => navigate(-1)} // Retrocede una página en el historial
      aria-label="Volver a la página anterior" // Accesibilidad para lectores de pantalla
      className="back-button"
    >
      {/* Flecha decorativa: aria-hidden evita que la lean los lectores de pantalla */}
      <span aria-hidden="true">←</span>

      {/* Texto principal del botón */}
      Volver
    </button>
  );
}

export default BackButton;
