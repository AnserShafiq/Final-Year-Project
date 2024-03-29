import React, { useEffect, useState } from 'react';
import './styles.css';
// import { Paper } from "@material-ui/core";
import axios from 'axios';

const DisplayProducts = () => {
  const [outputProducts, setOutputProducts] = useState([]);
  const userdata = JSON.parse(localStorage.getItem('userData'));
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/products/${userdata?.userName}`);
        setOutputProducts(response.data);
      
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [userdata]);

  return (
    <div className='outsidePaperBody'>
      <h3 className='smallSectionHeads'>Products</h3>
      <div className='paperBody'>
        {/* Display the fetched products */}
        
        <ul>
          {outputProducts.map(product => (
            <li key={product._id}>
              
              <div>
                <span className='listHead'>Title:</span> {product.title}
                <span className='listHead'>, Type:</span> {product.type}
                <span className='listHead'>,<br/> Price:</span> {product.price}
                <span className='listHead'>, Quantity:</span> {product.quantity}
              </div>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DisplayProducts;
