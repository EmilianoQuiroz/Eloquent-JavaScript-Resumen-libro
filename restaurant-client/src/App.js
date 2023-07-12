import { Routes, Route } from 'react-router';

import Ordenes from './components/paginas/Ordenes';
import Menu from './components/paginas/Menu';
import NuevoPlato from './components/paginas/NuevoPlato';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Ordenes /> } />
        <Route path="/menu" element={ <Menu /> } />
        <Route path="/nuevo-plato" element={ <NuevoPlato /> } />
      </Routes>
    </div>
  );
}

export default App;
