/**
 * Tarjeta de contenido visual con soporte para imagen y descripción.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.foto - URL de la imagen que se mostrará en la parte superior.
 * @param {string} props.nombre - Título o nombre principal de la tarjeta.
 * @param {React.ReactNode} [props.children] - Contenido adicional (descripción, etiquetas, etc.) que aparece debajo del título.
 * @returns {JSX.Element} Un artículo estructurado con efectos de hover y accesibilidad.
 */
function Card(props) {
    const { foto, nombre } = props;

    return (
        <article
            className="card-basket"
            aria-label={`${nombre}`} // Etiqueta accesible con el nombre
        >
            {/* Imagen representativa del recurso */}
            <figure className="card-basket__figure">
                <img
                    src={foto}
                    alt={`Foto de ${nombre}`} // Texto alternativo accesible
                    loading="lazy"            // Optimización de rendimiento
                    className="card-basket__img"
                />

                {/* Figcaption oculto visualmente, útil si children añade significado */}
                <figcaption className="sr-only">
                    {props.children}
                </figcaption>
            </figure>

            {/* Título del recurso */}
            <header>
                <h2 className="card-basket__title">
                    <strong>{nombre}</strong>
                </h2>
            </header>

            {/* Descripción opcional pasada como children */}
            <p className="
                text-(--body-text-font-size) 
                leading-(--body-text-line-height)
            ">
                {props.children}
            </p>
        </article>
    );
}

export default Card;
