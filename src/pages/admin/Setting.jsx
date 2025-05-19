import React, { useState } from 'react';
import { Button, Form, Card, Row, Col } from 'react-bootstrap';

const SettingsModule = () => {
  // State to manage form data for profile, password, and preferences
  const [profileData, setProfileData] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
  });
  
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [preferences, setPreferences] = useState({
    theme: 'Light',
    language: 'English',
  });

  // Handle Profile Data Change
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Password Change
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Preferences Change
  const handlePreferencesChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Profile Update Submit
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Implement API call for updating profile (e.g., email, name)
    alert('Profile updated successfully!');
  };

  // Handle Password Change Submit
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New password and confirmation do not match!');
    } else {
      // Implement API call for changing password
      alert('Password changed successfully!');
    }
  };

  // Handle Preferences Submit
  const handlePreferencesSubmit = (e) => {
    e.preventDefault();
    // Implement API call for updating preferences (theme, language)
    alert('Preferences updated successfully!');
  };

  return (
    <div className="container mt-4">
      <h2>Settings</h2>

      <Row className="mt-4">
        {/* Profile Section */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Profile Information</Card.Title>
              <Form onSubmit={handleProfileSubmit}>
                <Form.Group controlId="profileName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleProfileChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="profileEmail" className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                  Update Profile
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Password Section */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Change Password</Card.Title>
              <Form onSubmit={handlePasswordSubmit}>
                <Form.Group controlId="oldPassword">
                  <Form.Label>Old Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="oldPassword"
                    value={passwordData.oldPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="newPassword" className="mt-3">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="confirmPassword" className="mt-3">
                  <Form.Label>Confirm New Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                  Change Password
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        {/* Preferences Section */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>System Preferences</Card.Title>
              <Form onSubmit={handlePreferencesSubmit}>
                <Form.Group controlId="theme" className="mt-3">
                  <Form.Label>Theme</Form.Label>
                  <Form.Control
                    as="select"
                    name="theme"
                    value={preferences.theme}
                    onChange={handlePreferencesChange}
                    required
                  >
                    <option value="Light">Light</option>
                    <option value="Dark">Dark</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="language" className="mt-3">
                  <Form.Label>Language</Form.Label>
                  <Form.Control
                    as="select"
                    name="language"
                    value={preferences.language}
                    onChange={handlePreferencesChange}
                    required
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Spanish">Spanish</option>
                  </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                  Save Preferences
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SettingsModule;
