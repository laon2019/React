import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useDispatch , useSelector} from "react-redux";
import {productAction} from "../redux/actions/productAction"

const ProductDetail = () => {
  const product = useSelector((state)=>state.product.productDetailList);
  const dispatch = useDispatch();
  let { id } = useParams();
  // const [product, setProduct] = useState(null);
  const getProductDetail = () => {
    dispatch(productAction.getProductDetail(id))
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            {product?.size.map((item, index)=>(
              <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
