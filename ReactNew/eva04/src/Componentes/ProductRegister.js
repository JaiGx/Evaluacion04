import React, { useState } from 'react';
import './ProductRegister.css';
//import '../styles/ProductRegister.css';

function ProductRegister() {
  const [nombre, setName] = useState('');
  const [apellido, setCategoria] = useState('');
  const [edad, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/ModelosEvo04/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          apellido,
          edad: parseFloat(edad),
        }),
      });

      if (response.ok) {
        // El registro fue exitoso, puedes actualizar la lista de productos o realizar otras acciones
        alert('Producto registrado exitosamente');
      } else {
        alert('Error al registrar el producto');
      }
    } catch (error) {
      console.error('Error al registrar el producto:', error);
    }
  };

  return (
    <div className="product-register-container">
    <h2>Registrar Producto</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre:</label>
        <input type="text" className="form-control" value={nombre} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Apellido:</label>
        <input type="text" className="form-control" value={apellido} onChange={(e) => setCategoria(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Edad:</label>
        <input type="text" className="form-control" value={edad} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Registrar</button>
    </form>
  </div>
  );
}

export default ProductRegister; 