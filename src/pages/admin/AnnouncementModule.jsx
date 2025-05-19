import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, Form, Table } from 'react-bootstrap';
import { FaEdit, FaTrashAlt, FaEye, FaEyeSlash } from 'react-icons/fa';

const AnnouncementModule = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '', status: 'active' });

  const fetchAnnouncements = async () => {
    const res = await axios.get('http://localhost:5000/api/announcements');
    setAnnouncements(res.data);
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleShowModal = (announcement = null) => {
    if (announcement) {
      setSelectedAnnouncement(announcement);
      setFormData(announcement);
    } else {
      setSelectedAnnouncement(null);
      setFormData({ title: '', description: '', status: 'active' });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedAnnouncement) {
      await axios.put(`http://localhost:5000/api/announcements/${selectedAnnouncement._id}`, formData);
    } else {
      await axios.post('http://localhost:5000/api/announcements', formData);
    }
    setShowModal(false);
    fetchAnnouncements();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/announcements/${id}`);
    fetchAnnouncements();
  };

  const handleBlockUnblock = async (announcement) => {
    const updated = {
      ...announcement,
      status: announcement.status === 'active' ? 'blocked' : 'active'
    };
    await axios.put(`http://localhost:5000/api/announcements/${announcement._id}`, updated);
    fetchAnnouncements();
  };

  return (
    <div>
      <h2>Admin Announcement Management</h2>
      <Button variant="primary" onClick={() => handleShowModal()}>
        Add Announcement
      </Button>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {announcements.map((announcement) => (
            <tr key={announcement._id}>
              <td>{announcement.title}</td>
              <td>{announcement.description}</td>
              <td>
                {announcement.status === 'active' ? (
                  <span className="text-success">Active</span>
                ) : (
                  <span className="text-danger">Blocked</span>
                )}
              </td>
              <td>
                <Button variant="warning" onClick={() => handleShowModal(announcement)}>
                  <FaEdit />
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(announcement._id)}>
                  <FaTrashAlt />
                </Button>{' '}
                <Button
                  variant={announcement.status === 'active' ? 'secondary' : 'primary'}
                  onClick={() => handleBlockUnblock(announcement)}
                >
                  {announcement.status === 'active' ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedAnnouncement ? 'Edit Announcement' : 'Add Announcement'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="active">Active</option>
                <option value="blocked">Blocked</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              {selectedAnnouncement ? 'Update Announcement' : 'Create Announcement'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AnnouncementModule;
