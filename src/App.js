import './App.css';
import Navbar from './layout/navbar/Navbar';
import Contacto from './pages/contacto/Contacto';
import Inicio from './pages/inicio/Inicio';
import Login from './pages/login/Login';
import {Route,Routes} from "react-router-dom";
import {Panel} from './pages/panel/Panel';
// import {RequireAuth} from "./fb/RequireAuth";
import Prueba from './pages/prueba/Prueba';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/prueba" element={<Prueba />} />
          <Route path="/iniciar" element={<Login />} />
          <Route path="/panel" element={<Panel />} />

        </Route>

        {/* <Route element={<RequireAuth />}>
          <Route path="/panel" element={<Panel />} />
        </Route>        */}
      </Routes>
    </div>
  );
}

export default App;
