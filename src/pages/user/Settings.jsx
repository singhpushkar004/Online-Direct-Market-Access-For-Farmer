import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';

const Settings = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [password, setPassword] = useState({
    current: '',
    newPass: '',
    confirm: '',
  });

  const [message, setMessage] = useState('');
  const [passMessage, setPassMessage] = useState('');

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/users/${userId}`);
        setProfile(res.data);
      } catch (err) {
        console.error('Error fetching profile:', err);
      }
    };

    if (userId) fetchProfile();
  }, [userId]);

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/users/${userId}`, profile);
      setMessage('Profile updated successfully!');
    } catch (err) {
      setMessage('Failed to update profile.');
    }
    setTimeout(() => setMessage(''), 3000);
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (password.newPass !== password.confirm) {
      setPassMessage('New password and confirm password do not match.');
    } else {
      try {
        await axios.put(`http://localhost:5000/api/users/${userId}/password`, {
          current: password.current,
          newPassword: password.newPass,
        });
        setPassMessage('Password changed successfully!');
      } catch (err) {
        setPassMessage(err.response?.data?.message || 'Failed to change password.');
      }
    }

    setTimeout(() => setPassMessage(''), 3000);
  };

  return (
    <div className="container mt-4">
      <h3 className="text-success mb-4">Settings</h3>

      {/* Profile Settings */}
      <Card className="mb-4 shadow-sm">
        <Card.Header><strong>Profile Settings</strong></Card.Header>
        <Card.Body>
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleProfileSubmit}>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleProfileChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={profile.phone}
                    onChange={handleProfileChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="success" type="submit">Update Profile</Button>
          </Form>
        </Card.Body>
      </Card>

      {/* Password Settings */}
      <Card className="shadow-sm">
        <Card.Header><strong>Change Password</strong></Card.Header>
        <Card.Body>
          {passMessage && (
            <Alert variant={passMessage.includes("not match") || passMessage.includes("Failed") ? "danger" : "success"}>
              {passMessage}
            </Alert>
          )}
          <Form onSubmit={handlePasswordSubmit}>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="current"
                    value={password.current}
                    onChange={handlePasswordChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="newPass"
                    value={password.newPass}
                    onChange={handlePasswordChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirm"
                    value={password.confirm}
                    onChange={handlePasswordChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">Change Password</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Settings;
