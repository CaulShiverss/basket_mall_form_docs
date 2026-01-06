import ProductoForm from "../components/ProductForm";

/**
 * Vista de administración principal.
 * Actúa como contenedor para las herramientas de gestión de inventario (ProductoForm).
 * @returns {JSX.Element} La página de administrador renderizada.
 */

function AdminPage() {
  return (
    <section className="flex-col items-center justify-center min-h-[70vh]">
      {/* Título del panel administrativo */}
      <p className="h1__basketmall">
        Panel de Administrador
      </p>
      <ProductoForm />
    </section>
  );
}

export default AdminPage;
