import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProducts } from '../redux/actions/productActions';


function ProductDetail() {
  const {productID} = useParams();
  console.log(productID);

  const dispatch = useDispatch();

  const fetchData = async () =>{
    try{
        const response = await axios.get(`https://fakestoreapi.com/products/${productID}`);
        dispatch(selectProducts(response.data))
        console.log("response data", response.data);
    }
    catch(err){
        console.log("error", err);
    }
  }

  useEffect(()=>{
      fetchData();
  },[]);

  const productDetail = useSelector((state)=>state.allproduct.selectedItem);
  console.log(productDetail);
  
  if(productDetail.id == null || productDetail.id != productID){
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

  return (
      <div className='ContainDetail'>
          <img src={productDetail.image} alt="" />
          <div className="allData">
              <h5>Title: {productDetail.title}</h5>
              <h5>Category: {productDetail.category}</h5>
              <h5>Price: $ {productDetail.price}</h5>
          </div>
      </div>
  );
}

export default ProductDetail;
