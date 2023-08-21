import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importa el componente "Routes"
import { Container, Nav } from 'react-bootstrap';
import ProductList from './Componentes/ProductList';
import ProductRegister from './Componentes/ProductRegister';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container className='fondo'>
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="h1">Evaluacion 04 MDLC</h1>
          <Nav variant="tabs" defaultActiveKey="/list" className="nav">
            <Nav.Item>
              <Nav.Link as={Link} to="/list" className="nav-link">
                Listar
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/register" className="nav-link">
                Registrar
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </header>
        <Container className="container">
          <Routes className="routes">
            <Route path="/list" element={<ProductList />} />
            <Route path="/register" element={<ProductRegister />} />
          </Routes>
        </Container>
      </div>
    </Router>

    </Container>

  );
}

export default App; 
