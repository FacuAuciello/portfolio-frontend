import Presentacion from "./components/Presentacion";
import ProyectoCard from "./components/ProyectoCard";


function App() {
  
  const proyectos = [
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
];

  return(
    <>
      <Presentacion 
        nombre="Facundo Auciello"
        descripcion="Desarrollo de sistemas y aplicaciones web para negocios"      
      />

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
