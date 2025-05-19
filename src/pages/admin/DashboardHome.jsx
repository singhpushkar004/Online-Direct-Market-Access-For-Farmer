import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col, Container, Spinner } from 'react-bootstrap';
import { FaUserTie, FaUsers, FaBox, FaBullhorn, FaChartLine, FaRupeeSign } from 'react-icons/fa';

const AdminDashboardHome = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/dashboard/stats');
      setStats(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  const cardData = [
    { title: 'Total Farmers', value: stats.farmers, icon: <FaUserTie />, color: 'primary' },
    { title: 'Total Buyers', value: stats.buyers, icon: <FaUsers />, color: 'success' },
    { title: 'Total Products', value: stats.products, icon: <FaBox />, color: 'warning' },
    { title: 'Announcements', value: stats.announcements, icon: <FaBullhorn />, color: 'info' },
    { title: 'Total Orders', value: stats.orders, icon: <FaChartLine />, color: 'dark' },
    { title: 'Total Revenue', value: `₹${stats.revenue}`, icon: <FaRupeeSign />, color: 'danger' }
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Admin Dashboard Overview</h2>
      <Row>
        {cardData.map((card, idx) => (
          <Col md={4} className="mb-4" key={idx}>
            <Card bg={card.color} text="white" className="shadow">
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-center">
                  {card.icon}
                  <span>{card.title}</span>
                </Card.Title>
                <h3 className="text-center mt-3">{card.value}</h3>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AdminDashboardHome;
