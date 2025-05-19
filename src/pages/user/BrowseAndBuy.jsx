import React, { useState } from 'react';
import { Card, Button, Row, Col, Form, Modal } from 'react-bootstrap';

const productsData = [
  { id: 1, name: 'Wheat', price: 20, category: 'Grains', availableQty: 100, farmer: 'Ravi' },
  { id: 2, name: 'Rice', price: 25, category: 'Grains', availableQty: 80, farmer: 'Suresh' },
  { id: 3, name: 'Tomato', price: 15, category: 'Vegetables', availableQty: 60, farmer: 'Anil' },
  { id: 4, name: 'Mango', price: 40, category: 'Fruits', availableQty: 50, farmer: 'Mukesh' },
];

const BrowseAndBuy = () => {
  const [products] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState('All');
  const [orderQty, setOrderQty] = useState(1);

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setOrderQty(1);
    setShowModal(true);
  };

  const handlePlaceOrder = () => {
    if (orderQty < 1 || orderQty > selectedProduct.availableQty) {
      alert('Invalid quantity');
      return;
    }

    alert(`Order placed for ${orderQty} kg of ${selectedProduct.name} successfully!`);
    setShowModal(false);
  };

  const filteredProducts = category === 'All'
    ? products
    : products.filter(p => p.category === category);

  return (
    <div className="container mt-4">
      <h3 className="text-success mb-3">Browse & Buy Products</h3>

      <Form.Select
        className="mb-4 w-25"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Grains">Grains</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
      </Form.Select>

      <Row>
        {filteredProducts.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Category: {product.category}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Price:</strong> ₹{product.price}/kg<br />
                  <strong>Available:</strong> {product.availableQty} kg<br />
                  <strong>Farmer:</strong> {product.farmer}
                </Card.Text>
                <Button
                  variant="success"
                  onClick={() => handleBuyClick(product)}
                >
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Buy Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Buy {selectedProduct?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Price:</strong> ₹{selectedProduct?.price}/kg</p>
          <p><strong>Available:</strong> {selectedProduct?.availableQty} kg</p>
          <Form.Group>
            <Form.Label>Enter quantity to order (kg)</Form.Label>
            <Form.Control
              type="number"
              min={1}
              max={selectedProduct?.availableQty}
              value={orderQty}
              onChange={(e) => setOrderQty(Number(e.target.value))}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handlePlaceOrder}>
            Place Order
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BrowseAndBuy;
