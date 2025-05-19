import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SignUpPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, phone, address } = form;

    if (!name || !email || !password || !confirmPassword || !phone || !address) {
      setError('Please fill in all fields.');
      setSuccess('');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setSuccess('');
      return;
    }

    if (!validatePhone(phone)) {
      setError('Please enter a valid 10-digit phone number.');
      setSuccess('');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setSuccess('');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/users/signup', {
        name,
        email,
        password,
        phone,
        address,
      });

      setSuccess(res.data.message || 'Registration successful!');
      setError('');
      setForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
      });
    } catch (err) {
      setSuccess('');
      setError(err.response?.data?.message || 'Registration failed. Try again.');
    }
  };

  return (
    <>
      <Header />
      <div className="signup-horizontal-page py-5">
        <div className="container signup-horizontal-container shadow-lg rounded bg-white p-4">
          <h2 className="text-center mb-4 signup-title">Farmer Sign-Up</h2>
          <div className="row">
            <div className="col-sm-10 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />

                    <label className="form-label mt-3">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />

                    <label className="form-label mt-3">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                    />

                    <label className="form-label mt-3">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />

                    <label className="form-label mt-3">Address</label>
                    <textarea
                      name="address"
                      className="form-control"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Enter your address"
                    />
                  </div>
                </div>

                {error && <div className="alert alert-danger mt-3">{error}</div>}
                {success && <div className="alert alert-success mt-3">{success}</div>}

                <div className="text-center mt-4">
                  <button className="btn btn-success px-4 py-2" type="submit">Sign Up</button>
                </div>

                <div className="text-center mt-3">
                  <p>
                    Already have an account? <a href="/login" className="text-success fw-bold">Login here</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpPage;
