import React, { useState } from 'react';
import { Button, Table, Modal, Form, Badge } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash, FaBan, FaCheckCircle } from 'react-icons/fa';

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: "Welcome to the Farmer-Buyer Portal!", status: 'active' },
    { id: 2, title: "System maintenance on Sunday", status: 'active' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  const openModal = (announcement = null) => {
    setEditing(announcement);
    setNewTitle(announcement?.title || '');
    setShowModal(true);
  };

  const handleSave = () => {
    if (!newTitle.trim()) return;

    if (editing) {
      setAnnouncements(announcements.map(a =>
        a.id === editing.id ? { ...a, title: newTitle } : a
      ));
    } else {
      const newAnn = {
        id: Date.now(),
        title: newTitle,
        status: 'active',
      };
      setAnnouncements([newAnn, ...announcements]);
    }

    setShowModal(false);
    setEditing(null);
    setNewTitle('');
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this announcement?")) {
      setAnnouncements(announcements.filter(a => a.id !== id));
    }
  };

  const handleToggleStatus = (id) => {
    setAnnouncements(announcements.map(a =>
      a.id === id ? { ...a, status: a.status === 'active' ? 'blocked' : 'active' } : a
    ));
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="text-success">Announcements</h4>
        <Button variant="success" onClick={() => openModal()}>
          <FaPlus className="me-2" />
          Add Announcement
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead className="table-success">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {announcements.map((ann, index) => (
            <tr key={ann.id}>
              <td>{index + 1}</td>
              <td>{ann.title}</td>
              <td>
                <Badge bg={ann.status === 'active' ? 'success' : 'secondary'}>
                  {ann.status}
                </Badge>
              </td>
              <td>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => openModal(ann)}
                  className="me-2"
                >
                  <FaEdit />
                </Button>
                <Button
                  variant={ann.status === 'active' ? 'outline-warning' : 'outline-success'}
                  size="sm"
                  onClick={() => handleToggleStatus(ann.id)}
                  className="me-2"
                >
                  {ann.status === 'active' ? <FaBan /> : <FaCheckCircle />}
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleDelete(ann.id)}
                >
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for add/edit */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editing ? 'Edit Announcement' : 'Add Announcement'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Announcement Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter announcement title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="success" onClick={handleSave}>
            {editing ? 'Update' : 'Add'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Announcement;
