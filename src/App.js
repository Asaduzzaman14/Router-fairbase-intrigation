import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import Product from './components/Product/Product'
import Order from './components/Order/Order'
import Register from './components/Register/Register';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
      </Routes>

    </div>
  );
}

export default App;
