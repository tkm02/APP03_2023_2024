import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import FormSendProducts from './FormSendProducts';
import CardProduct from './CardProduct';
import axios from "axios"
import { Buffer } from 'buffer';



const Stock = ({id}) => {
    // 
     
    const [productList, setproductList] = useState([])
    const [image, setImages] = useState([])
  const productsByType = {};

      
      useEffect(() => {
        axios
          .get(`http://localhost:5000/api/cooperative/dashboard/${id}/stock`)
          .then((res) => {
            const prod = res.data;
            
            const buffer = Buffer.from([res.data.photosProduit], 'base64');
            // const blob = new Blob([buffer], { type: 'image/jpeg' });
            // const blob = new Blob([res.data.photosProduit], { type: 'image/jpeg' });
            // const imageDataUrl = URL.createObjectURL(blob);

            console.log(buffer)
            // console.log(blob)
            // console.log(imageDataUrl)
            console.log(prod)
            setproductList(prod);
            // setImages(imageDataUrl)
          })
          .catch((err) => console.log(err));
      }, [id]);

      productList.forEach((product) => {
        // Si le type de produit n'existe pas encore dans productsByType, créez un tableau vide.
        if (!productsByType[product.typeProduit]) {
          productsByType[product.typeProduit] = [];
        }
        // Ajoutez le produit au tableau correspondant au type.
        productsByType[product.typeProduit].push(product);
      });
   
    const products = (
        <>
        <Link to={`/cooperative/dashboard/${id}/stock/add-products`}>Ajouter produits</Link>

        {Object.entries(productsByType).map(([type, products]) => (
            <div key={type}>
              <h3>{type}</h3>
              <div style={{width:"90%",margin:"0 auto",display:"flex",gap:"10"}}>
                {products.map((product) => (
                  <CardProduct key={product.id} product={product} image={image} />
                ))}
              </div>
            </div>
          ))}
        </>
    )
    return (
        <div>
            

            <Routes>
                <Route path='/add-products' element={<FormSendProducts/>}/>
                <Route path='/' element={products}/>
            </Routes>
        </div>
    );
}

export default Stock;
