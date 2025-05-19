import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Table, Badge, Form } from 'react-bootstrap';
import { FaEye, FaTrash } from 'react-icons/fa';

export default function OrderManagement() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const statusOptions = ['Pending', 'Shipped', 'Delivered'];

  // Fetch all orders on component mount
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/orders');
      setOrders(res.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/orders/${id}`);
      fetchOrders(); // refresh list
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const handleView = (order) => {
    setSelectedOrder(order);
    setShowViewModal(true);
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/orders/${id}/status`, { status: newStatus });
      fetchOrders(); // refresh list
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-success mb-4">Order Management</h2>

      <Table striped bordered hover responsive>
        <thead className="table-success">
          <tr>
            <th>Buyer</th>
            <th>Email</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total (₹)</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order.buyer?.name || 'N/A'}</td>
              <td>{order.buyer?.email || 'N/A'}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.total}</td>
              <td>
                <Badge bg={
                  order.status === 'Pending' ? 'warning' :
                  order.status === 'Shipped' ? 'info' : 'success'
                }>
                  {order.status}
                </Badge>
              </td>
              <td>
                <Button
                  variant="info"
                  size="sm"
                  className="me-2"
                  onClick={() => handleView(order)}
                >
                  <FaEye />
                </Button>
                <Form.Select
                  size="sm"
                  value={order.status}
                  onChange={(e) => handleStatusChange(order._id, e.target.value)}
                  style={{ width: '130px', display: 'inline-block', marginRight: '10px' }}
                >
                  {statusOptions.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </Form.Select>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(order._id)}
                >
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* View Modal */}
      <Modal show={showViewModal} onHide={() => setShowViewModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <>
              <p><strong>Buyer:</strong> {selectedOrder.buyer?.name}</p>
              <p><strong>Email:</strong> {selectedOrder.buyer?.email}</p>
              <p><strong>Product:</strong> {selectedOrder.product}</p>
              <p><strong>Quantity:</strong> {selectedOrder.quantity}</p>
              <p><strong>Total Amount:</strong> ₹{selectedOrder.total}</p>
              <p><strong>Shipping Address:</strong> {selectedOrder.address}</p>
              <p><strong>Status:</strong> {selectedOrder.status}</p>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
