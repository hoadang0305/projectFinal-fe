import React, { useState, useEffect } from "react";
import { HeaderTitle, OurProductsButton, OurProductsWrapper } from "./styles";
//import { PRODUCTS } from "./constants";
import { Col, Row } from "antd";
import { chunk } from "lodash";
import ProductItem from "../../components/ProductItem";
import axios from "axios";

const OurProducts = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/product')
      .then(response => {
        setProduct(response.data);
        console.log(product);
      })
      .catch(error => {
        console.log(error);
      })
  },[]);
  return (
    <OurProductsWrapper>
      <HeaderTitle>Our Products</HeaderTitle>
      <div style={{ width: "100%" }}>
        {chunk(product.slice(0, 8), 4).map((row) => (
          <Row gutter={[16, 16]} justify="center" style={{ marginTop: 32 }}>
            {row.map((item) => (
              <Col span={5} key={item.id}>
                <ProductItem item={item} />
              </Col>
            ))}
          </Row>
        ))}
      </div>
      <OurProductsButton to="shop">Show More</OurProductsButton>
    </OurProductsWrapper>
  );
};

export default OurProducts;
