import React from "react";
import "../style/tree.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductCard from "../components/productcard";
import useFetch from "../ApiService/useFetch";

const Shop = () => {
  const {
    data: products,
    error,
    isPending,
  } = useFetch("http://localhost:3001/api/get");

  return (
    <div>
      <Container>
        <Row>
          <h1>Trees</h1>
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {products && <ProductCard products={products} />}
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
