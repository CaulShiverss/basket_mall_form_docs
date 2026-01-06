// CONTROLADO - Formulario de Película usando useState
import { useState } from "react";

const initialProductData = {
  nombre: "",
  descripcion: "",
  precio: "",
  categoria: "",
  imagen: "",
};

// Función de validación para el formulario de Película
const validateProduct = (data) => {
  const errors = {};

  if (!data.nombre.trim()) {
    errors.nombre = "El nombre es obligatorio.";
  } else if (data.nombre.trim().length <= 3) {
    errors.nombre = "El nombre tiene que tener más de caracteres";
  }

  if (!data.descripcion.trim()) {
    errors.descripcion = "La descripcion es obligatoria.";
  }

  if (!data.precio) {
    errors.precio = "El precio es obligatorio.";
  } else if (Number(data.precio) <= 0) {
    errors.precio = "El precio debe ser mayor que 0.";
  }

  if (!data.imagen.trim()) {
    errors.imagen = "La URL de la foto es obligatoria";
  } else if (!data.imagen.startsWith("http")) {
    errors.imagen = "Debe ser una URL válida.";
  }

  return errors;
};

function ProductForm() {
  const [productData, setProductData] = useState(initialProductData);
  const [productErrors, setProductErrors] = useState({});

  /**
   * Manejador genérico para la actualización del estado agrupado de la Película.
   */
  const handleProductChange = (e) => {
    const { id, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Limpiar el error en tiempo real si el campo se corrige
    if (productErrors[id]) {
      setProductErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  /**
   * Envío del formulario de Película.
   */
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const errors = validateProduct(productData);
    setProductErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Nuevo Producto:", productData);
      alert(`Producto: ${productData.nombre} añadido.`);
      setProductData(initialProductData); // Resetear formulario
    } else {
      console.log("Errores de validación en Productos:", errors);
    }
  };

  return (
    <section className="form-admin">
      {/* Usamos la clase BEM que hereda de h4__basketmall */}
      <h3 className="form-admin__title">
        Añadir Nuevo Producto
      </h3>

      <form onSubmit={handleProductSubmit} className="space-y-4" noValidate>
        
        {/* 1. Nombre */}
        <div className="form-admin__field">
          <label htmlFor="nombre" className="form-admin__label">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            value={productData.nombre}
            onChange={handleProductChange}
            className={`form-admin__input ${
              productErrors.nombre ? "form-admin__input--error" : ""
            }`}
            aria-invalid={!!productErrors.nombre}
          />
          {productErrors.nombre && (
            <p className="form-admin__error-text">{productErrors.nombre}</p>
          )}
        </div>

        {/* 2. Descripcion */}
        <div className="form-admin__field">
          <label htmlFor="descripcion" className="form-admin__label">
            Descripcion
          </label>
          <input
            id="descripcion"
            type="text"
            value={productData.descripcion}
            onChange={handleProductChange}
            className={`form-admin__input ${
              productErrors.descripcion ? "form-admin__input--error" : ""
            }`}
            aria-invalid={!!productErrors.descripcion}
          />
          {productErrors.descripcion && (
            <p className="form-admin__error-text">{productErrors.descripcion}</p>
          )}
        </div>

        {/* 3. Precio */}
        <div className="form-admin__field">
          <label htmlFor="precio" className="form-admin__label">
            Precio
          </label>
          <input
            id="precio"
            type="number"
            value={productData.precio}
            onChange={handleProductChange}
            className={`form-admin__input ${
              productErrors.precio ? "form-admin__input--error" : ""
            }`}
            aria-invalid={!!productErrors.precio}
          />
          {productErrors.precio && (
            <p className="form-admin__error-text">{productErrors.precio}</p>
          )}
        </div>

        {/* 4. Categoria */}
        <div className="form-admin__field">
          <label htmlFor="categoria" className="form-admin__label">
            Categoria 
          </label>
          <input
            id="categoria"
            type="text"
            value={productData.categoria}
            onChange={handleProductChange}
            className="form-admin__input" 
          />
          {/* Este campo no tiene validación obligatoria en tu lógica, 
              así que no necesita el modificador de error ni el mensaje */}
        </div>

        {/* 5. URL Imágen */}
        <div className="form-admin__field">
          <label htmlFor="imagen" className="form-admin__label">
            URL Imágen
          </label>
          <input
            id="imagen"
            type="url"
            value={productData.imagen}
            onChange={handleProductChange}
            className={`form-admin__input ${
              productErrors.imagen ? "form-admin__input--error" : ""
            }`}
            aria-invalid={!!productErrors.imagen}
          />
          {productErrors.imagen && (
            <p className="form-admin__error-text">{productErrors.imagen}</p>
          )}
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="form-admin__button"
          disabled={Object.values(productErrors).some(e => e)}
        >
          Añadir Producto
        </button>

      </form>
    </section>
  );
}

export default ProductForm;