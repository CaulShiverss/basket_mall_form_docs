import ProductoForm from "../components/ProductForm";

/**
 * Vista de administración principal.
 * Actúa como contenedor para las herramientas de gestión de inventario (ProductoForm).
 * @returns {JSX.Element} La página de administrador renderizada.
 */

function AdminPage() {
  return (
    <section className="h-screen w-full overflow-hidden flex flex-col">
      {/* Título del panel administrativo */}
      <p className="h1__basketmall text-center pb-5">
        Panel de Administrador
      </p>
      <ProductoForm />
    </section>
  );
}

export default AdminPage;
