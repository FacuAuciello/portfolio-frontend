
import "./App.css";

import Presentacion from "./components/Presentacion";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";

function App() {
    return (
        <>
            <header className="navbar">
                <div className="navbar-contenido">
                    <span className="navbar-nombre">
                        Facundo Auciello
                    </span>

                    <a
                        href="#contacto"
                        className="navbar-contacto"
                    >
                        Contactarme
                    </a>
                </div>
            </header>

            <main>
                <Presentacion
                    nombre="Facundo Auciello"
                    descripcion="Desarrollo de páginas web y sistemas de gestión para negocios y profesionales"
                />

                <Servicios />

                <Contacto />
            </main>
        </>
    );
}

export default App;
