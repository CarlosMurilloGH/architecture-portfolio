import './App.css';
import Navbar from './layout/navbar/Navbar';
import Contacto from './pages/contacto/Contacto';
import Inicio from './pages/inicio/Inicio';
import Login from './pages/login/Login';
import {Route,Routes} from "react-router-dom";
import RequireAuth from './fb/RequireAuth';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        
        <Route>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/contacto" element={<Contacto />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path="/iniciar" element={<Login />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
