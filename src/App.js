import React from 'react';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route, Navigate,  } from 'react-router-dom';
import Success from './pages/Success';
import { useSelector } from 'react-redux';



const App = () => {

 // const user = () => {
   // if(JSON.parse(localStorage.getItem("user")).accessToken){
    //   return JSON.parse(localStorage.getItem("user")).accessToken
   // } else{
    //    return null;
  // }
//}

  const user = useSelector((state)=>state.user.currentUser)?.accessToken;
  // console.log(user)

  //const RequireAuth = ({children}) => {
  // return  user ? (children) : <Navigate to="/login"/>
 //}


  return (
    <div> 
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home/>} />
           <Route path="/register" element={ user ?(<Home/>) :(<Register/>) } /> 
           <Route path="/login" element={ user ? (<Home/>) : (<Login/>) } />
          <Route path="/products/:category" element={<ProductList/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/success" element={<Success/>} />


        </Routes>
      
      </Router>
        
    </div>
  );
}

export default App;

