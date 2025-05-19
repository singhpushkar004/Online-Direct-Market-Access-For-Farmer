import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ManageFarmers() {
  const [farmers, setFarmers] = useState([]);  // Initialize as an array
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // Fetch farmers from the backend
  const fetchFarmers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      // Ensure the response is an array
      
        setFarmers(response.data);  // Set the farmers array
      
        // console.error('Expected an array, but got:', response.data);
      
    } catch (error) {
      console.error('Error fetching farmers:', error);
    }
  };

  // Fetch farmers when the component mounts
  useEffect(() => {
    fetchFarmers();
  }, []);

  const updateStatus = (id, status) => {
    const updated = farmers.map(f =>
      f.id === id ? { ...f, status } : f
    );
    setFarmers(updated);
  };

  const deleteFarmer = (id) => {
    if (window.confirm('Are you sure you want to delete this farmer?')) {
      setFarmers(farmers.filter(f => f.id !== id));
    }
  };

  const handleEditChange = (e) => {
    setSelectedFarmer({
      ...selectedFarmer,
      [e.target.name]: e.target.value
    });
  };

  const saveEdit = () => {
    const updated = farmers.map(f =>
      f.id === selectedFarmer.id ? selectedFarmer : f
    );
    setFarmers(updated);
    setSelectedFarmer(null);
    setEditMode(false);
  };

  return (
    <div className="manage-farmers">
      <h2>Manage Farmers</h2>
      <div className="farmer-list">
        {Array.isArray(farmers) && farmers.length > 0 ? (  // Ensure farmers is an array before mapping
          farmers.map(farmer => (
            <div className={`farmer-card ${farmer.status}`} key={farmer._id}>
              <h4>{farmer.name}</h4>
              <p><strong>Email:</strong> {farmer.email}</p>
              <p><strong>Phone:</strong> {farmer.phone}</p>
              <p><strong>Location:</strong> {farmer.location}</p>
              <p><strong>Status:</strong> {farmer.status}</p>

              <div className="action-buttons">
                <button onClick={() => setSelectedFarmer(farmer)} title="View"><i className="fas fa-eye"></i></button>
                <button onClick={() => { setSelectedFarmer(farmer); setEditMode(true); }} title="Edit"><i className="fas fa-edit"></i></button>
                <button onClick={() => deleteFarmer(farmer.id)} title="Delete"><i className="fas fa-trash-alt"></i></button>
                {farmer.status !== 'approved' && (
                  <button onClick={() => updateStatus(farmer.id, 'approved')} title="Approve"><i className="fas fa-check text-success"></i></button>
                )}
                {farmer.status !== 'blocked' && (
                  <button onClick={() => updateStatus(farmer.id, 'blocked')} title="Block"><i className="fas fa-ban text-danger"></i></button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No farmers available.</p>
        )}
      </div>

      {/* View Modal */}
      {selectedFarmer && !editMode && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <h3>Farmer Details</h3>
            <p><strong>Name:</strong> {selectedFarmer.name}</p>
            <p><strong>Email:</strong> {selectedFarmer.email}</p>
            <p><strong>Phone:</strong> {selectedFarmer.phone}</p>
            <p><strong>Location:</strong> {selectedFarmer.location}</p>
            <p><strong>Status:</strong> {selectedFarmer.status}</p>
            <button onClick={() => setSelectedFarmer(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {selectedFarmer && editMode && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <h3>Edit Farmer</h3>
            <input name="name" value={selectedFarmer.name} onChange={handleEditChange} placeholder="Name" />
            <input name="email" value={selectedFarmer.email} onChange={handleEditChange} placeholder="Email" />
            <input name="phone" value={selectedFarmer.phone} onChange={handleEditChange} placeholder="Phone" />
            <input name="location" value={selectedFarmer.location} onChange={handleEditChange} placeholder="Location" />
            <div className="modal-actions">
              <button onClick={saveEdit}>Save</button>
              <button onClick={() => { setEditMode(false); setSelectedFarmer(null); }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageFarmers;
