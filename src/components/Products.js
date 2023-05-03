import React, { useState, useEffect } from "react";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch =useDispatch()
  const [Products, setProducts] = useState([]);
// console.log('Products', Products)
  
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      // console.log("data", data);
      // fetch('https://fakestoreapi.com/products')
      // .then(res=>res.json())
      // .then(json=>console.log(json))
      setProducts(data);
    };

    fetchProducts();
  }, []);


  // const handleAdd = (Products) =>{
  //   dispatch(addToCart(Products));

  // }

  return (
    <div>
      <>
        <div className="productswrapper">
          {Products.map((Products) => {
            console.log('Shubham', Products) 
            return(
                <div className="card" key={Products.id}>
              <img className="photo"src={Products.image} alt="" />
              <h4>{Products.title}</h4>
              <h5>{Products.price}</h5>
              <button onClick={()=>{dispatch(addToCart(Products));}} className="btn">Add To Cart</button>
            </div>
            )
            
          })}
        </div>
      </>
    </div>
  );
};

export default Products;
