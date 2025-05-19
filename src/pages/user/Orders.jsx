import React, { useState } from 'react';
import { Table, Button, Modal, Form, Badge } from 'react-bootstrap';

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      buyer: 'Ravi Kumar',
      product: 'Wheat',
      quantity: 100,
      amount: 2000,
      status: 'Pending',
      date: '2025-05-02',
    },
    {
      id: 2,
      buyer: 'Amit Sharma',
      product: 'Rice',
      quantity: 50,
      amount: 1500,
      status: 'Approved',
      date: '2025-05-01',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleView = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleStatusChange = (id, newStatus) => {
    const updated = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updated);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      setOrders(orders.filter(order => order.id !== id));
    }
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case 'Pending': return 'warning';
      case 'Approved': return 'info';
      case 'Delivered': return 'success';
      default: return 'secondary';
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-success mb-3">Order Management</h3>

      <Table striped bordered hover>
        <thead className="table-success">
          <tr>
            <th>Order ID</th>
            <th>Buyer</th>
            <th>Product</th>
            <th>Quantity (kg)</th>
            <th>Amount (₹)</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>#ORD{order.id}</td>
              <td>{order.buyer}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.amount}</td>
              <td>
                <Badge bg={getStatusVariant(order.status)}>
                  {order.status}
                </Badge>
              </td>
              <td>{order.date}</td>
              <td>
                <Button
                  variant="info"
                  size="sm"
                  className="me-2"
                  onClick={() => handleView(order)}
                >
                  View
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(order.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Order Details */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        {selectedOrder && (
          <Modal.Body>
            <p><strong>Buyer:</strong> {selectedOrder.buyer}</p>
            <p><strong>Product:</strong> {selectedOrder.product}</p>
            <p><strong>Quantity:</strong> {selectedOrder.quantity} kg</p>
            <p><strong>Amount:</strong> ₹{selectedOrder.amount}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <Form.Group className="mb-3">
              <Form.Label>Change Status</Form.Label>
              <Form.Select
                value={selectedOrder.status}
                onChange={(e) =>
                  handleStatusChange(selectedOrder.id, e.target.value)
                }
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Delivered">Delivered</option>
              </Form.Select>
            </Form.Group>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Orders;
