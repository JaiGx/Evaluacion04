import React, { useState } from 'react';
//import '../styles/ProductRegister.css';

function ProductRegister() {
  const [Nombre, setName] = useState('');
  const [Apellido, setCategoria] = useState('');
  const [Edad, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jubilant-space-trout-vx77677w55426pj-8080.app.github.dev/api/ModelosEvo04/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Nombre,
          Apellido,
          Edad: parseFloat(Edad),
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
        <input type="text" className="form-control" value={Nombre} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Apellido:</label>
        <input type="text" className="form-control" value={Apellido} onChange={(e) => setCategoria(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Edad:</label>
        <input type="text" className="form-control" value={Edad} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Registrar</button>
    </form>
  </div>
  );
}

export default ProductRegister; 