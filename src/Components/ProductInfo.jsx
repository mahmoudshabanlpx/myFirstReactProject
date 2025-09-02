import React from 'react'

export default function ProductInfo({product,deletProduct}) {

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}} >
        <h3>id : {product.id}</h3>
        <h3>Name : {product.Name}</h3>
        <h3>Price : {product.Price}</h3>
        <button onClick={()=>deletProduct(product.id)}>Delete</button>
    </div>
  );
}
