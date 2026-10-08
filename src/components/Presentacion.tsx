interface PresentacionProps{
    nombre: string;
    descripcion: string;
}

function Presentacion({nombre, descripcion}: PresentacionProps){
    return(
        <section>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
        </section>
    );
}

export default Presentacion;