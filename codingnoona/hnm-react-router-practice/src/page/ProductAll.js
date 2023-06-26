import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container , Row, Col } from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {
  const [productsList, setProductsList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async() =>{
    let searchQuery = query.get('q') || "";
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductsList(data);
  }
 
  useEffect(()=>{
    getProducts();
  },[query])
  return (
    <div>
      <Container>
        <Row>
          {productsList.map((menu)=>(
            <Col lg={3}><ProductCard item={menu}/></Col>
          ))}
        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll;