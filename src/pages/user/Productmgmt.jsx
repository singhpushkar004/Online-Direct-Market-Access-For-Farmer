import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { FaEdit, FaTrash, FaPlus, FaBan, FaCheck } from 'react-icons/fa';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
    description: '',
    blocked: false,
  });

  const openModal = (index = null) => {
    if (index !== null) {
      setForm(products[index]);
      setEditIndex(index);
    } else {
      setForm({ name: '', category: '', price: '', quantity: '', description: '', blocked: false });
      setEditIndex(null);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setForm({ name: '', category: '', price: '', quantity: '', description: '', blocked: false });
    setEditIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = form;
      setProducts(updated);
    } else {
      setProducts([...products, form]);
    }
    closeModal();
  };

  const handleDelete = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  const toggleBlock = (index) => {
    const updated = [...products];
    updated[index].blocked = !updated[index].blocked;
    setProducts(updated);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-success mb-4">Product Management</h2>
      <Button variant="success" onClick={() => openModal()} className="mb-3">
        <FaPlus className="me-2" /> Add Product
      </Button>

      <Table bordered hover responsive>
        <thead className="table-success">
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price (₹)</th>
            <th>Quantity (kg)</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <tr key={idx}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.description}</td>
              <td>{product.blocked ? 'Blocked' : 'Active'}</td>
              <td>
                <Button variant="info" size="sm" className="me-2" onClick={() => openModal(idx)}>
                  <FaEdit />
                </Button>
                <Button variant="danger" size="sm" className="me-2" onClick={() => handleDelete(idx)}>
                  <FaTrash />
                </Button>
                <Button
                  variant={product.blocked ? 'secondary' : 'warning'}
                  size="sm"
                  onClick={() => toggleBlock(idx)}
                >
                  {product.blocked ? <FaCheck /> : <FaBan />}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? 'Edit Product' : 'Add Product'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control name="name" value={form.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control name="category" value={form.category} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" name="price" value={form.price} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" name="quantity" value={form.quantity} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={form.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            {editIndex !== null ? 'Update' : 'Add'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductManagement;
