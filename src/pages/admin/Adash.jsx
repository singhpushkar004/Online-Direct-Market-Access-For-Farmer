import React, { useState , useEffect } from 'react';
import {
  FaTachometerAlt,
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaFileAlt,
  FaBullhorn,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaUserCircle,
} from 'react-icons/fa';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router';
import {  useNavigate } from 'react-router';
const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

//   const navigate = useNavigate();
  

//   const validate =()=>{
//     if(!localStorage.getItem('admin')){
//       navigate('/adlogin');
//     }
//   }
// useEffect(()=>{
// validate();
// },[]);


  return (
    <div className="dashboard-container">
      {/* Sidebar */}
     <Sidebar/>

      {/* Main Content */}
      <div className="main-content">
        <div className="topbar">
          <div className="topbar-left">
            {!collapsed && <h3>Admin Dashboard</h3>}
          </div>
          <div className="topbar-right">
            <FaUserCircle size={28} className="profile-icon" />
          </div>
        </div>

        <div className="content-body">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
