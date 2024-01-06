import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/ADMIN/Admin";
import Cooperative from "./components/COOPERATIVES/Cooperative";
import Ecom from "./components/E-COMMERCE/Ecom";
import Producteur from "./components/PRODUCTEUR/Producteur";
import MesRoutes from "./components/MesRoutes";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MesRoutes/>}/>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/cooperative/*" element={<Cooperative />} />
          <Route path="/ecom/*" element={<Ecom />} />
          <Route path="/producteur/*" element={<Producteur />} />
        </Routes>
      </div>
    </Router>
  ); 
}

export default App;
