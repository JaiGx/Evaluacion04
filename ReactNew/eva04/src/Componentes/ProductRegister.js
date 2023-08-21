import React, { useState } from 'react';
//import '../styles/ProductRegister.css';

function ProductRegister() {
  const [name, setName] = useState('');
  const [categoria, setCategoria] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jubilant-space-trout-vx77677w55426pj-8080.app.github.dev/api/ModelosEvo04/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          categoria,
          price: parseFloat(price),
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
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Categoría:</label>
        <input type="text" className="form-control" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Precio:</label>
        <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Registrar</button>
    </form>
  </div>
  );
}

export default ProductRegister; 