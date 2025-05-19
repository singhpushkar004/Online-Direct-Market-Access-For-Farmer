import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaEye, FaBan } from 'react-icons/fa';
import axios from 'axios';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isViewing, setIsViewing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch both farmers and buyers
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');  // Adjust based on your backend route
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const handleBlock = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: 'Blocked' } : u));
  };

  const handleView = (user) => {
    setSelectedUser(user);
    setIsViewing(true);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setUsers(users.map(u =>
      u.id === selectedUser.id ? selectedUser : u
    ));
    setIsEditing(false);
  };

  return (
    <div className="manage-users container">
      <h2 className="text-center mb-4">Manage Users</h2>
      <div className="table-responsive">
        <table className="table table-hover shadow-sm">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user , i=0) => (
              <tr key={user._id}>
                <td>{i++}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`badge ${user.status === 'Blocked' ? 'bg-danger' : 'bg-success'}`}>
                    {user.status}
                  </span>
                </td>
                <td>{user.role}</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleView(user)}>
                    <FaEye />
                  </button>
                  <button className="btn btn-sm btn-outline-success me-2" onClick={() => handleEdit(user)}>
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-outline-danger me-2" onClick={() => handleDelete(user.id)}>
                    <FaTrash />
                  </button>
                  <button className="btn btn-sm btn-outline-warning" onClick={() => handleBlock(user.id)}>
                    <FaBan />
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {isViewing && selectedUser && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">User Details</h5>
                <button type="button" className="btn-close" onClick={() => setIsViewing(false)}></button>
              </div>
              <div className="modal-body">
                <p><strong>ID:</strong> {selectedUser.id}</p>
                <p><strong>Name:</strong> {selectedUser.name}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Status:</strong> {selectedUser.status}</p>
                <p><strong>Role:</strong> {selectedUser.role}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setIsViewing(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditing && selectedUser && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit User</h5>
                <button type="button" className="btn-close" onClick={() => setIsEditing(false)}></button>
              </div>
              <div className="modal-body">
                <input
                  className="form-control mb-2"
                  type="text"
                  value={selectedUser.name}
                  onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
                />
                <input
                  className="form-control mb-2"
                  type="email"
                  value={selectedUser.email}
                  onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
                />
                <select
                  className="form-control"
                  value={selectedUser.status}
                  onChange={(e) => setSelectedUser({ ...selectedUser, status: e.target.value })}
                >
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                  <option value="Blocked">Blocked</option>
                </select>
                <select
                  className="form-control"
                  value={selectedUser.role}
                  onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })}
                >
                  <option value="farmer">Farmer</option>
                  <option value="buyer">Buyer</option>
                </select>
              </div>
              <div className="modal-footer">
                <button className="btn btn-success" onClick={handleSaveEdit}>Save</button>
                <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
