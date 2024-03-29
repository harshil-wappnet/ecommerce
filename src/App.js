import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductView from './pages/ProductView';
import Login from '../src/pages/Login'
import Account from './components/Account';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
function App() {
  return (
    <div className="">
      <Dashboard />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path="/product-view/:id" element={<ProductView />} />
        <Route path='/login' element={<Login />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/account' element={<Account />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
