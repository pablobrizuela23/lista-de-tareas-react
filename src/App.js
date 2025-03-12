import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import LogoFreeCodeCamp from './componentes/LogoFreeCodeCamp';


function App() {
  return (
    <div className="App">
      <LogoFreeCodeCamp/>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas/>
        
      </div>
    </div>
  );
}

export default App;
