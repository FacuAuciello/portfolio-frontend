import { useEffect, useState } from "react";
import "./App.css";

import Presentacion from "./components/Presentacion";
import ProyectoCard from "./components/ProyectoCard";
import Contacto from "./components/Contacto";

interface Proyecto {
    idProyecto: number;
    nombre: string;
    imagenes: string[];
    descripcion: string;
    tecnologias: string[];
}

function App() {
    const [proyectos, setProyectos] = useState<Proyecto[]>([]);

    useEffect(() => {
        async function cargarProyectos() {
            try {
                const respuesta = await fetch(
                    "http://localhost:8080/proyectos"
                );

                if (!respuesta.ok) {
                    throw new Error(
                        "No se pudieron cargar los proyectos"
                    );
                }

                const datos: Proyecto[] =
                    await respuesta.json();

                setProyectos(datos);
            } catch (error) {
                console.error(
                    "Error al cargar los proyectos:",
                    error
                );
            }
        }

        cargarProyectos();
    }, []);

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
    Contacto
</a>
                </div>
            </header>

            <main>
                <Presentacion
                    nombre="Facundo Auciello"
                    descripcion="Desarrollo de sistemas y aplicaciones web para negocios"
                />

                <section
                    id="proyectos"
                    className="proyectos-seccion"
                >
                    <h2>Proyectos</h2>

                    <div className="proyectos-grid">
                        {proyectos.map((proyecto) => (
                            <ProyectoCard
                                key={proyecto.idProyecto}
                                nombre={proyecto.nombre}
                                descripcion={proyecto.descripcion}
                                tecnologias={proyecto.tecnologias}
                                imagenes={proyecto.imagenes}
                            />
                        ))}
                    </div>
                </section>

                <Contacto />
            </main>
        </>
    );
}

export default App;