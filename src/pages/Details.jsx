import BackButton from "../components/BackButton";
import GridLayout from "../components/GridLayout";
import productosBasket from "../data/productos";
import { useParams } from "react-router-dom";

/**
 * Vista de detalles de un producto.
 * Obtiene el ID del producto mediante parámetros de ruta y renderiza su información.
 * Incluye un estado de error si el producto no existe en la base de datos local.
 * @returns {JSX.Element} La página de detalles del producto o un mensaje de error.
 */

function Details() {
  const { id } = useParams();                     // Obtiene el id desde la ruta
  const producto = productosBasket[id];           // Busca el producto correspondiente

  return (
    <GridLayout titulo="">
      {/* Navegación secundaria: botón de volver */}
      <nav
        className="w-full flex justify-start mb-4"
        aria-label="Navegación secundaria"
      >
        <BackButton />
      </nav>

      <article aria-label="Product details">
        {producto ? (
          <section className="mt-4 flex flex-col items-center lg:flex-row lg:items-start gap-20">
            {/* Imagen del producto */}
            <figure className="w-full max-w-xl sm:w-1/2 lg:w-1/3">
              <img
                src={producto.imagen}
                alt={`Cartelera de la película ${producto.nombre}`} // Texto alternativo accesible
                className="w-full rounded-lg mb-4"
              />
              <figcaption className="sr-only">
                Cartel de {producto.nombre}
              </figcaption>
            </figure>

            {/* Datos del producto */}
            <section className="product-details">
              <ul className="product-details__list space-y-2">
                <li className="font-heading-h2">{producto.nombre}</li>
                <li className="product-details__category">
                  {producto.categoria}
                </li>
                <li className="font-heading-h2">{producto.precio} €</li>
              </ul>

              <p className="product-details__description body-text mt-2">
                {producto.descripcion}
              </p>
            </section>
          </section>
        ) : (
          // Mensaje en caso de producto no encontrado
          <p className="body-text">
            Lo sentimos, no se encontró la película solicitada.
          </p>
        )}
      </article>
    </GridLayout>
  );
}

export default Details;
