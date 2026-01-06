/**
 * Componente de barra de búsqueda reutilizable.
 * @param {object} props - Propiedades del componente.
 * @param {string} props.searchTerm - El término de búsqueda actual.
 * @param {function} props.onSearchChange - Función para actualizar el término de búsqueda.
 * @param {string} [props.placeholder] - Texto placeholder del input.
 */
function SearchBar({ searchTerm, onSearchChange, placeholder = "Buscar..." }) {
  return (
    <div className="mb-8 w-full max-w-lg mx-auto">
      <label htmlFor="search-input" className="sr-only">
        {placeholder}
      </label>
      <input
        id="search-input"
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        // Llama a la función proporcionada por el padre en cada cambio
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-bar"
        aria-label={placeholder}
      />
    </div>
  );
}

export default SearchBar;