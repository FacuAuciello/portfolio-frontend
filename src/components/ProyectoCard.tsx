interface ProyectoCardProps {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
}

function ProyectoCard({nombre, descripcion, tecnologias}: ProyectoCardProps) {
  return (
    <article>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <ul>
         {/* por cada tecnologia del array genero un li = lista */}

         {tecnologias.map(tecnologia => (
      <li key={tecnologia}>
      </li> 
  ))}
</ul>
    </article>
  );
}

export default ProyectoCard;