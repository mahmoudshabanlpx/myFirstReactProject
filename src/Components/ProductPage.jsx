import React, { useState } from "react";
import ProductInfo from "./ProductInfo";


export default function ProductPage() {
    const [products, setProducts]=useState(
        [ {id :1,Name : "Product 1",Price : 100},
          {id :2,Name : "Product 2",Price : 200},
          {id :3,Name : "Product 3",Price : 300}
        ]
);
const DeleteProduct=(id)=>{
    setProducts(products.filter((P)=>P.id !==id));
}
return(
    <>
    <h2>Product Page</h2>
    {products.map(p => (<ProductInfo key={p.id} product = {p} deletProduct = {DeleteProduct}/>))} 
    </>


);
}