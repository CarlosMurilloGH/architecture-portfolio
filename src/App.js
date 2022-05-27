import './App.css';
import Navbar from './layout/navbar/Navbar';
import Home from './pages/Home';
import BasicMasonry from './pages/Masonry/BasicMasonry';


function App() {
  return (
    <div className="App">
     <Navbar />
     <BasicMasonry />
    </div>
  );
}

export default App;
