import React from 'react'
import { Link } from 'react-router-dom';
// import Navbar from "./components/Navbar";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const items = useSelector((state)=>state.cart)
  console.log('items', items);

  return (
    <>
    <div style={{display:"flex",alignItems:'center',justifyContent:"space-between"}}>
      <span className="logo">Redux Store</span>
      <Link className="navLink" to= "/">Home</Link>
      <Link  className="navLink" to ="/cart">Cart</Link>
      <span className="cartCount">Cart Items:{items.length}</span>
      </div>
      
      </>
    
  
  )
}

export default Navbar;