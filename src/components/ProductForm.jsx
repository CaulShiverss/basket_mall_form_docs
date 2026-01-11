import { useState } from "react";

const initialProductData = {
  nombre: "",
  descripcion: "",
  precio: "",
  categoria: "",
  imagen: "",
};

const validateProduct = (data) => {
  const errors = {};
  if (!data.nombre.trim()) errors.nombre = "El nombre es obligatorio.";
  else if (data.nombre.trim().length <= 3) errors.nombre = "El nombre debe tener al menos 4 caracteres.";
  
  if (!data.descripcion.trim()) errors.descripcion = "La descripción es obligatoria.";
  
  if (!data.precio) errors.precio = "El precio es obligatorio.";
  else if (Number(data.precio) <= 0) errors.precio = "El precio debe ser un número mayor que 0.";

  if (!data.imagen.trim()) errors.imagen = "La URL de la imagen es obligatoria";
  else if (!data.imagen.startsWith("http")) errors.imagen = "Introduce una URL válida (ej. http://...).";

  return errors;
};

function ProductForm() {
  const [productData, setProductData] = useState(initialProductData);
  const [productErrors, setProductErrors] = useState({});

  const handleProductChange = (e) => {
    const { id, value } = e.target;
    setProductData((prev) => ({ ...prev, [id]: value }));
    if (productErrors[id]) {
      setProductErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const errors = validateProduct(productData);
    setProductErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Nuevo Producto:", productData);
      alert(`Producto: ${productData.nombre} añadido correctamente.`);
      setProductData(initialProductData);
    }
  };

  return (
    <div className="admin-container">
      <section className="form-column">
        <h2 className="form-title" id="form-heading">Añadir Nuevo Producto</h2>
        
        <form 
          onSubmit={handleProductSubmit} 
          className="product-form" 
          noValidate 
          aria-labelledby="form-heading"
        >
          {/* CAMPO: NOMBRE */}
          <div className="field-group">
            <label htmlFor="nombre">Nombre del producto <span aria-hidden="true">*</span></label>
            <input
              id="nombre"
              type="text"
              required
              aria-required="true"
              aria-describedby={productErrors.nombre ? "nombre-error" : "nombre-hint"}
              value={productData.nombre}
              onChange={handleProductChange}
              className={productErrors.nombre ? "input-error" : "input-success"}
            />
            {productErrors.nombre && (
              <span id="nombre-error" role="alert" className="error-msg">{productErrors.nombre}</span>
            )}
          </div>

          {/* CAMPO: DESCRIPCIÓN */}
          <div className="field-group">
            <label htmlFor="descripcion">Descripción <span aria-hidden="true">*</span></label>
            <textarea
              id="descripcion"
              required
              aria-required="true"
              aria-describedby={productErrors.descripcion ? "desc-error" : undefined}
              value={productData.descripcion}
              onChange={handleProductChange}
            />
            {productErrors.descripcion && (
              <span id="desc-error" role="alert" className="error-msg">{productErrors.descripcion}</span>
            )}
          </div>

          <div className="row-group">
            {/* CAMPO: PRECIO */}
            <div className="field-group">
              <label htmlFor="precio">Precio (€) <span aria-hidden="true">*</span></label>
              <input
                id="precio"
                type="number"
                step="1.00"
                required
                aria-required="true"
                aria-describedby={productErrors.precio ? "precio-error" : undefined}
                value={productData.precio}
                onChange={handleProductChange}
              />
              {productErrors.precio && (
                <span id="precio-error" role="alert" className="error-msg">{productErrors.precio}</span>
              )}
            </div>

            {/* CAMPO: CATEGORÍA */}
            <div className="field-group">
              <label htmlFor="categoria">Categoría</label>
              <input
                id="categoria"
                type="text"
                value={productData.categoria}
                onChange={handleProductChange}
              />
            </div>
          </div>

          {/* CAMPO: IMAGEN */}
          <div className="field-group">
            <label htmlFor="imagen">URL de la Imagen <span aria-hidden="true">*</span></label>
            <input 
              id="imagen"
              type="url"
              required
              aria-required="true"
              placeholder="https://ejemplo.com/foto.jpg"
              aria-describedby={productErrors.imagen ? "imagen-error" : undefined}
              value={productData.imagen}
              onChange={handleProductChange}
            />
            {productErrors.imagen && (
              <span id="imagen-error" role="alert" className="error-msg">{productErrors.imagen}</span>
            )}
          </div>

          <button type="submit" className="submit-btn">Guardar Producto</button>
        </form>
      </section>
 
      {/* Columna de la Imágen*/}
      <section className="image-column" aria-hidden="true">
        <div className="image-overlay" />
      </section>
    </div>
  );
}

export default ProductForm;