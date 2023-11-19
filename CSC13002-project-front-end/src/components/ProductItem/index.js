import {React, useEffect, useState} from "react";
import axios from "axios";
import {
  ProductItemImage,
  ProductItemImageLabel,
  ProductItemInfo,
  ProductItemPrice,
  ProductItemPriceSub,
  ProductItemPriceText,
  ProductItemShortDesc,
  ProductItemTitle,
  ProductItemWrapper,
} from "./styles";

const ProductItem = ({ item, style }) => {
  const { name,price,originPrice,shortDesc,images, discount } = item;
  return (
    <ProductItemWrapper style={style}>
      <ProductItemImage>
        <img src={`http://localhost:5000/picture${images[0]}`} alt="" style={{width : '270px',height: '250px' }}/>
        {discount && discount !== "" && (
          <ProductItemImageLabel>{discount}</ProductItemImageLabel>
        )}
      </ProductItemImage>

      <ProductItemInfo>
        <ProductItemTitle>{name}</ProductItemTitle>
        <ProductItemShortDesc>{shortDesc}</ProductItemShortDesc>
        <ProductItemPrice>
          <ProductItemPriceText>
            {discount && discount !== "" ? price : originPrice}
          </ProductItemPriceText>
          {discount && discount !== "" && (
            <ProductItemPriceSub>{originPrice}</ProductItemPriceSub>
          )}
        </ProductItemPrice>
      </ProductItemInfo>
    </ProductItemWrapper>
  );
};

export default ProductItem;
