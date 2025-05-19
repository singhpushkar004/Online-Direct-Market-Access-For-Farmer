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
                  <h4>{collapsed ? '' : 'User Panel'}</h4>
                  <button onClick={toggleSidebar} className="toggle-btn">
                    {collapsed ? <FaBars /> : <FaTimes />}
                  </button>
                </div>
                <ul className="sidebar-menu">
                  <li><Link to=""><FaTachometerAlt /> {!collapsed && 'Dashboard'}</Link></li>
                  <li><Link to="/user/productmgmt"><FaUsers /> {!collapsed && 'Product Mgmt'}</Link></li>
                  <li><Link to='/user/orders'><FaBoxOpen /> {!collapsed && 'Orders'}</Link></li>
                  <li><Link to="/user/browse"><FaShoppingCart /> {!collapsed && 'Browse & Buy'}</Link></li>
                  
                  <li><Link to="/user/announcement"><FaBullhorn /> {!collapsed && 'Announcements'}</Link></li>
                  <li><Link to="/user/settings"><FaCog /> {!collapsed && 'Settings'}</Link></li>
                  <li><Link to="/"><FaSignOutAlt /> {!collapsed && 'Logout'}</Link></li>
                </ul>
              </div>
    </>
  )
}

export default Sidebar