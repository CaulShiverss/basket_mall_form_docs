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
    // 1. Aplanar la lista de actores y agregar información necesaria para el enlac

    if (!searchTerm) {
      return productosBasket; // Si no hay término, devuelve la lista completa
    }

    // 2. Filtrar por el nombre del actor
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return productosBasket.filter((producto) =>
      producto.nombre.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]); //

  return (

    <GridLayout titulo="Productos">

      {/* Introducción al listado */}
      <p className="body-text pb-6">
        Listado de productos disponibles:
      </p>

      <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Buscar productos..."
        />

      {/* Sección con la grilla de productos */}
      <section className="w-full mt-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 items-stretch">
          {filteredProducts.map((producto, index) => (
            // Enlace a la página de detalles del producto
            <Link to={`/productos/${index}`} key={index} className="no-underline">

              <Card
                key={index}                // Clave para iteración en React
                nombre={producto.nombre}   // Nombre del producto
                foto={producto.imagen}     // Imagen del producto
                categoria={producto.categoria} // Categoría
                precio={producto.precio}   // Precio
              >
                {producto.descripcion}      {/* Descripción como children */}
              </Card>

            </Link>
          ))}
        </ul>
      </section>
    </GridLayout>
  );
}

export default ProductsPage;
