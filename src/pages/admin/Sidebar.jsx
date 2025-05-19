import React, { useState } from 'react';
import { Link } from 'react-router';
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
const Sidebar = () => {
        const [collapsed, setCollapsed] = useState(false);
      
        const toggleSidebar = () => setCollapsed(!collapsed);
  return (
    <>
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
                <div className="sidebar-header">
                  <h4>{collapsed ? '' : 'Admin Panel'}</h4>
                  <button onClick={toggleSidebar} className="toggle-btn">
                    {collapsed ? <FaBars /> : <FaTimes />}
                  </button>
                </div>
                <ul className="sidebar-menu">
                  <li><Link to=""><FaTachometerAlt /> {!collapsed && 'Dashboard'}</Link></li>
                  <li><Link to="/admin/managefarmers"><FaUsers /> {!collapsed && 'Manage Farmers'}</Link></li>
                  <li><Link to="/admin/managebuyer"><FaUsers /> {!collapsed && 'Manage Buyers'}</Link></li>
                  <li><Link to='/admin/productlist'><FaBoxOpen /> {!collapsed && 'Product Listings'}</Link></li>
                  <li><Link to="/admin/ordermgmt"><FaShoppingCart /> {!collapsed && 'Order Management'}</Link></li>
                  <li><Link to="/admin/reports"><FaFileAlt /> {!collapsed && 'Reports'}</Link></li>
                  <li><Link to="/admin/announcement"><FaBullhorn /> {!collapsed && 'Announcements'}</Link></li>
                  <li><Link to="/admin/settings"><FaCog /> {!collapsed && 'Settings'}</Link></li>
                  <li><Link to="/"><FaSignOutAlt /> {!collapsed && 'Logout'}</Link></li>
                </ul>
              </div>
    </>
  )
}

export default Sidebar