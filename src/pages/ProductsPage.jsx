import GridLayout from "../components/GridLayout";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import productosBasket from "../data/productos";
import { useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";

/**
 * Página de catálogo de productos con buscador integrado.
 * Maneja el filtrado dinámico de la lista de productos basada en la entrada del usuario.
 * @returns {JSX.Element} La página de productos con buscador y grilla de resultados.
 */

function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    const productsWithIndex = productosBasket.map((p, index) => ({ ...p, originalIndex: index }));
    if (!searchTerm) return productsWithIndex;

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return productsWithIndex.filter((producto) =>
      producto.nombre.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  return (
    <GridLayout titulo="Productos">
      <p className="product-page__text">Listado de productos disponibles:</p>

      {/* 1. El SearchBar debe tener un input con id y label para que el lector de voz y el tab funcionen */}
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Buscar productos..."
      />

      <section className="product-list" aria-label="Catálogo de productos">
        <ul className="product-list__grid">
          {filteredProducts.map((producto) => (
            <li key={producto.originalIndex} className="product-list__item">
              <Link
                to={`/productos/${producto.originalIndex}`}
                className="product-list__item-link"
                aria-label={`Ver detalles de ${producto.nombre}`}
              >
                <Card
                  nombre={producto.nombre}
                  foto={producto.imagen}
                  categoria={producto.categoria}
                  precio={producto.precio}
                >
                  {producto.descripcion}
                </Card>
              </Link>
            </li>
          ))}
        </ul>
        {filteredProducts.length === 0 && (
          <p role="status" className="no-results">No se encontraron productos.</p>
        )}
      </section>
    </GridLayout>
  );
}

export default ProductsPage;