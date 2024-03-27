import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Products from './components/Products'
import Home from './pages/Home';
function App() {
  return (
    <div className="">
      <Dashboard />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
