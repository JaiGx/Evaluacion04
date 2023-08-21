import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import $ from 'jquery';
import 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [tableInitialized, setTableInitialized] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jubilant-space-trout-vx77677w55426pj-8080.app.github.dev/api/ModelosEvo04/getAll');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [deleteConfirmation]); // Reload table data when deleteConfirmation changes

  useEffect(() => {
    if (products.length > 0 && !tableInitialized) {
      $('#productTable').DataTable({
        data: products,
        columns: [
          { title: 'Nombre', data: 'name' },
          { title: 'Categoría', data: 'categoria' },
          { title: 'Precio', data: 'price' },
          {
            title: 'Acciones',
            data: null,
            createdCell: (cell, cellData, rowData) => {
              const editButton = document.createElement('button');
              editButton.className = 'btn btn-primary';
              editButton.innerText = 'Editar';
              editButton.addEventListener('click', () => handleEdit(rowData));

              const deleteButton = document.createElement('button');
              deleteButton.className = 'btn btn-danger';
              deleteButton.innerText = 'Eliminar';
              deleteButton.addEventListener('click', () => handleDelete(
rowData.id
));

              cell.innerHTML = '';
              cell.appendChild(editButton);
              cell.appendChild(deleteButton);
            },
          },
        ],
      });
  
      setTableInitialized(true);
    }
  }, [products, tableInitialized]);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setShowEditModal(true);
  };

  const handleEditClose = () => {
    setShowEditModal(false);
    setSelectedItem(null);
  };

  const handleEditSave = async () => {
    try {
      const response = await fetch(`https://test1-sv0s.onrender.com/api/walmart/update/${
selectedItem.id
}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedItem),
      });

      if (response.ok) {
        setDeleteConfirmation(true); // Reload the table
        handleEditClose();
        console.log('Ítem actualizado con éxito.');
      } else {
        console.error('Error al actualizar el ítem:', response.statusText);
      }
    } catch (error) {
      console.error('Error al actualizar el ítem:', error);
    }
  };

  const handleDelete = async (itemId) => {
    const confirmDelete = window.confirm('¿Está seguro de que desea eliminar este ítem?');
    if (confirmDelete) {
      try {
        const response = await fetch(`https://test1-sv0s.onrender.com/api/walmart/delete/${itemId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setDeleteConfirmation(true); // Reload the table
          console.log('Ítem eliminado con éxito.');
        } else {
          console.error('Error al eliminar el ítem:', response.statusText);
        }
      } catch (error) {
        console.error('Error al eliminar el ítem:', error);
      }
    }
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      <table id="productTable" className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
      </table>

      {/* Modal de edición */}
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Ítem</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Formulario para editar el ítem */}
          <input
            type="text"
            value={selectedItem?.name || ''}
            onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })}
          />
          <input
            type="text"
            value={selectedItem?.categoria || ''}
            onChange={(e) => setSelectedItem({ ...selectedItem, categoria: e.target.value })}
          />
          <input
            type="number"
            value={selectedItem?.price || ''}
            onChange={(e) => setSelectedItem({ ...selectedItem, price: parseFloat(e.target.value) })}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>Cancelar</Button>
          <Button variant="primary" onClick={handleEditSave}>Guardar Cambios</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductList; 