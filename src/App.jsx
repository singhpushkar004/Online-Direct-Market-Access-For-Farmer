import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router , Routes , Route } from 'react-router'
import Home from './pages/Home'
import Footer from './components/Footer';
import IntroductionPage from './pages/IntroductionPage';
import PurposePage from './pages/PurposePage';
import ObjectivesPage from './pages/ObjectivesPage';
import LoginPage from './pages/Loginpage';
import SignUpPage from './pages/SignUpPage';
import AdminDashboard from './pages/admin/Adash';
import ManageFarmers from './pages/admin/ManageFarmers';
import ManageBuyers from './pages/admin/ManageBuyers';
import ProductList from './pages/admin/ProductList';
import OrderManagement from './pages/admin/OrderManagement';
import Reports from './pages/admin/Reports';
import AnnouncementModule from './pages/admin/AnnouncementModule';
import SettingsModule from './pages/admin/Setting';
import UserDashboard from './pages/user/UserDash';
import ProductManagement from './pages/user/Productmgmt';
import BrowseAndBuy from './pages/user/BrowseAndBuy';
import Announcement from './pages/user/Announcement';
import Settings from './pages/user/Settings';
import AdminDashboardHome from './pages/admin/DashboardHome';
// import AdminLogin from './pages/admin/AdminLogin ';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/introduction' element={<IntroductionPage/>}></Route>
          <Route path='/purpose' element={<PurposePage/>}></Route>
          <Route path='/objectives' element={<ObjectivesPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/signup' element={<SignUpPage/>}></Route>
          {/* admin route */}
          <Route path='/admin' element={<AdminDashboard/>}>
            <Route index element={<AdminDashboardHome/>}></Route>
            <Route path='managefarmers' element={<ManageFarmers/>}></Route>          
            <Route path='managebuyer' element={<ManageBuyers/>}></Route>          
            <Route path='productlist' element={<ProductList/>}></Route>          
            <Route path='ordermgmt' element={<OrderManagement/>}></Route>          
            <Route path='reports' element={<Reports/>}></Route>          
            <Route path='announcement' element={<AnnouncementModule/>}></Route>          
            <Route path='settings' element={<SettingsModule/>}></Route>          
          </Route>
          {/* user route */}
          {/* <Route path='/adlogin' element={<AdminLogin/>}></Route> */}
          <Route path='/user/' element={<UserDashboard/>}>
            <Route path='productmgmt' element={<ProductManagement/>}></Route>
            <Route path='orders' element={<OrderManagement/>}></Route>
            <Route path='browse' element={<BrowseAndBuy/>}></Route>
            <Route path='announcement' element={<Announcement/>}></Route>
            <Route path='settings' element={<Settings/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
