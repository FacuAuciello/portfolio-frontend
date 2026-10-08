import { useEffect, useState } from "react";

import Presentacion from "./components/Presentacion";
import ProyectoCard from "./components/ProyectoCard";

interface Proyecto {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
}

function App() {
  
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);

   useEffect(() => {
    console.log("App se cargo");
  }, []);
  
  function cargarProyectos() {
  setProyectos([
    {
      nombre: "ConectarDocentes",
      descripcion: "Plataforma para docentes e instituciones",
      tecnologias: ["Java", "Spring Boot", "React"]
    },
    {
      nombre: "Consultorio",
      descripcion: "Sistema de gestion para consultorio odontologico",
      tecnologias: ["Java", "Spring Boot", "MySQL"]
    }
  ]);
}
 
  return(
    <>
      <Presentacion 
        nombre="Facundo Auciello"
        descripcion="Desarrollo de sistemas y aplicaciones web para negocios"      
      />

      <button onClick={cargarProyectos}>
              Cargar Proyectos
      </button>

      
      {/* recorre proyectos, toma cada objeto y por cada uno genera un ProyectoCard */}
      {proyectos.map(proyecto => (
        <ProyectoCard
        key={proyecto.nombre}
        nombre={proyecto.nombre}
        descripcion={proyecto.descripcion}
        tecnologias={proyecto.tecnologias}
  />
  ))}
    </>
  );
}

export default App;
