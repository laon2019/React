import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  let dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const searchKeyWord = (event) =>{
    event.preventDefault();
    dispatch({type: "KEYWORD", payload: {keyword}})
  }
  return (
    <Form  className="search-form" onSubmit={searchKeyWord}>
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={(event)=>setKeyword(event.target.value)}
          />
        </Col>
        <Col>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;