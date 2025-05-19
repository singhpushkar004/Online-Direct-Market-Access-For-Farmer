import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEye, FaBan, FaPlus } from 'react-icons/fa';

const API_URL = 'http://localhost:5000/api/products';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', status: 'Active' });

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      // console.log("Fetched Products:", res.data);
      setProducts(res.data);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };

  useEffect(() => {
    console.log("Component mounted");
    fetchProducts();
  }, []);

  const handleView = (product) => {
    setSelectedProduct(product);
    setShowViewModal(true);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchProducts();
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const handleBlock = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === 'Active' ? 'Blocked' : 'Active';
      await axios.put(`${API_URL}/${id}`, { status: newStatus });
      fetchProducts();
    } catch (err) {
      console.error('Block/unblock failed:', err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${API_URL}/${selectedProduct._id}`, selectedProduct);
      setShowEditModal(false);
      fetchProducts();
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  const handleAddProduct = async () => {
    if (newProduct.name && newProduct.price) {
      try {
        await axios.post(API_URL, {
          ...newProduct,
          price: parseFloat(newProduct.price),
        });
        setNewProduct({ name: '', price: '', status: 'Active' });
        setShowAddModal(false);
        fetchProducts();
      } catch (err) {
        console.error('Add failed:', err);
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-success">Product Listing</h2>
        <Button variant="success" onClick={() => setShowAddModal(true)}>
          <FaPlus className="me-2" /> Add Product
        </Button>
      </div>

      <table className="table table-bordered shadow">
        <thead className="table-success">
          <tr>
            <th>Name</th>
            <th>Price (₹)</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map(prod => (
              <tr key={prod._id}>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>
                  <span className={`badge bg-${prod.status === 'Active' ? 'success' : 'danger'}`}>
                    {prod.status}
                  </span>
                </td>
                <td>
                  <Button variant="info" size="sm" className="me-2" onClick={() => handleView(prod)}><FaEye /></Button>
                  <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(prod)}><FaEdit /></Button>
                  <Button variant="danger" size="sm" className="me-2" onClick={() => handleDelete(prod._id)}><FaTrash /></Button>
                  <Button variant="secondary" size="sm" onClick={() => handleBlock(prod._id, prod.status)}><FaBan /></Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No products found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* View Modal */}
      <Modal show={showViewModal} onHide={() => setShowViewModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Name:</strong> {selectedProduct?.name}</p>
          <p><strong>Price:</strong> ₹{selectedProduct?.price}</p>
          <p><strong>Status:</strong> {selectedProduct?.status}</p>
        </Modal.Body>
      </Modal>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={selectedProduct?.name || ''}
                onChange={(e) =>
                  setSelectedProduct({ ...selectedProduct, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price (₹)</Form.Label>
              <Form.Control
                type="number"
                value={selectedProduct?.price || ''}
                onChange={(e) =>
                  setSelectedProduct({ ...selectedProduct, price: e.target.value })
                }
              />
            </Form.Group>
            <Button variant="success" onClick={handleUpdate}>
              Update Product
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Add Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price (₹)</Form.Label>
              <Form.Control
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddProduct}>
              Add Product
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
