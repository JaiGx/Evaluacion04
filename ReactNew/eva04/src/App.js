import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importa el componente "Routes"
import { Container, Nav } from 'react-bootstrap';
import ProductList from './Componentes/ProductList';
import ProductRegister from './Componentes/ProductRegister';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Container>
        <h1>Mi Proyecto de React</h1>
        <Nav variant="tabs" defaultActiveKey="/list">
          <Nav.Item>
            <
Nav.Link
 as={Link} to="/list">Listar</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <
Nav.Link
 as={Link} to="/register">Registrar</Nav.Link>
          </Nav.Item>
        </Nav>
        <Routes> {/* Utiliza el componente "Routes" */}
          <Route path="/list" element={<ProductList />} />
          <Route path="/register" element={<ProductRegister />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App; 
