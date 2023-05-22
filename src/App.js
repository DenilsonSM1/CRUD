import Cadastro from "./componentes/Cadastro";
import Login from "./componentes/Login";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div className="App">
      
      <Router>
        
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastro />} />
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
