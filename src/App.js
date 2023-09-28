import './App.css';
import Cajas from './componentes/Cajas.jsx';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>COLLAGE DE IMAGENES SURREALISTAS</h1>
        <Cajas
          subtitulo='Las grandes metrópolis'
          imagen='futuro'
          texto='La imagen es una muestra del nuevo transporte donde cabinas se desplazan por medio de rieles, y se pueden observar por encima de los rascacielos de la metrópolis.' />
        <Cajas
          subtitulo='El gran diseño detrás de los juegos'
          imagen='juego'
          texto='Las imágenes de los juegos muestran la imaginación y creación de otros mundos, son diseños que permiten recrear escenas imaginarias.' />
        <Cajas
          subtitulo='Los cambios que trae el futuro'
          imagen='walper'
          texto='El futuro esta cerca y podemos observar las metrópolis y sus grandes cambios futuristas, las nuevas edificaciones son obras de arte nunca antes vistas.' />
      </div>


    </div>
  );
}

export default App;
