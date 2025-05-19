import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Table, Button, Spinner } from 'react-bootstrap';
import { FaDownload, FaUsers, FaShoppingCart, FaRupeeSign, FaSeedling } from 'react-icons/fa';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';

const Reports = () => {
  const [loading, setLoading] = useState(true);
  const [report, setReport] = useState({
    totalFarmers: 0,
    totalBuyers: 0,
    totalOrders: 0,
    totalRevenue: 0,
    productsSold: [],
  });

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/reports/summary');
        setReport(res.data);
      } catch (err) {
        console.error('Error fetching report data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, []);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Farmer-Buyer System Report', 14, 22);
    doc.setFontSize(12);
    doc.text(`Total Farmers: ${report.totalFarmers}`, 14, 35);
    doc.text(`Total Buyers: ${report.totalBuyers}`, 14, 42);
    doc.text(`Total Orders: ${report.totalOrders}`, 14, 49);
    doc.text(`Total Revenue: ₹${report.totalRevenue}`, 14, 56);

    doc.autoTable({
      startY: 65,
      head: [['Product', 'Quantity Sold (kg)']],
      body: report.productsSold.map(p => [p._id, p.quantity]),
    });

    doc.save('report.pdf');
  };

  if (loading) return <div className="text-center mt-5"><Spinner animation="border" /></div>;

  return (
    <div className="container mt-4">
      <h2 className="text-success mb-4">Reports & Analytics</h2>

      <Row className="mb-4">
        <Col md={3}><Card bg="success" text="white"><Card.Body><FaUsers size={30} /><h5>Total Farmers</h5><h3>{report.totalFarmers}</h3></Card.Body></Card></Col>
        <Col md={3}><Card bg="info" text="white"><Card.Body><FaUsers size={30} /><h5>Total Buyers</h5><h3>{report.totalBuyers}</h3></Card.Body></Card></Col>
        <Col md={3}><Card bg="warning" text="white"><Card.Body><FaShoppingCart size={30} /><h5>Total Orders</h5><h3>{report.totalOrders}</h3></Card.Body></Card></Col>
        <Col md={3}><Card bg="danger" text="white"><Card.Body><FaRupeeSign size={30} /><h5>Revenue</h5><h3>₹{report.totalRevenue}</h3></Card.Body></Card></Col>
      </Row>

      <h4 className="text-secondary mt-4">Product Sales Summary</h4>
      <Table striped bordered hover className="mt-3">
        <thead className="table-success">
          <tr>
            <th><FaSeedling /> Product</th>
            <th>Quantity Sold (kg)</th>
          </tr>
        </thead>
        <tbody>
          {report.productsSold.map((prod, idx) => (
            <tr key={idx}><td>{prod._id}</td><td>{prod.quantity}</td></tr>
          ))}
        </tbody>
      </Table>

      <Button variant="outline-success" className="mt-3" onClick={handleDownloadPDF}>
        <FaDownload className="me-2" /> Download Report
      </Button>
    </div>
  );
};

export default Reports;
