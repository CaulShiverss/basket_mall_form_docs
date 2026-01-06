/**
 * Componente de pie de página (footer) de la aplicación.
 * Muestra el copyright y mantiene la coherencia visual con el esquema de colores del sitio.
 * @returns {JSX.Element} Un elemento footer semántico con estilos de Tailwind.
 */

function Footer() {
    return (
        // Usamos la clase BEM que ya contiene el color primario
        <footer className="footer-main"> 
            <div className="footer-main__container">
                <p className="footer-main__copy">
                    &copy; 2024 Basket Mall. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
