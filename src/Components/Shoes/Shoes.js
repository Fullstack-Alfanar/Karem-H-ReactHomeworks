import React from 'react'


function Shoes(props) {
    return (
      <div className="shoes">
        <div><label className="detail">{props.name}</label></div>
        <div><label className="detail">Size: {props.size}</label></div>
        <div><label className="detail">Price: {props.price}</label></div>
        <div><img className="image" src={props.img} alt="" /></div>
      </div>
    );
  }
  
  export default Shoes;