import React from 'react';
import {useSelector} from 'react-redux';

function ProductComponent({id,title,category,imgurl}) {

  return (
    <div className="column">
    <div className="row s12 m3">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Card Title</span>
          <img src={imgurl} alt='image' style={{width:100,height:100}} />
          <h6>{id}</h6>
          <h6>{title}</h6>
          <h6>{category}</h6>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProductComponent;
