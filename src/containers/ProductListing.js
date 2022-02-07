import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import {setProducts} from '../redux/actions/productActions';
import { Link } from 'react-router-dom';

function ProductListing() {
//    let products = null;
  let products = useSelector((state) => state.allproduct.products);
  console.log(products);

  const dispatch = useDispatch();
  const fetchApi = async () =>{
      try{
          const response = await axios.get('https://fakestoreapi.com/products');
          const data = response.data;
          dispatch(setProducts(data));
      }
      catch(error){
          console.log("error", error);
      }
  }

  useEffect(()=>{
      fetchApi();
  },[]);
  
  if(products.length != 0){
  return (
      <div className='ProductListApp container'>
          {
              products.map((ele)=>{
                  const url = `/product/${ele.id}`
                  return (
                      <Link to={url} >
                        <ProductComponent id={ele.id} title={ele.title} category={ele.category} imgurl={ele.image} />
                      </Link>
                  )
              })
          }
      </div>
  );
  }
  else{
    return (
        <div className="detailLoading">
        <div class="container_balls">
           <ul>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
           </ul>
       </div>
           <h6>Loading</h6>
     </div>
    )
  }
}

export default ProductListing;
