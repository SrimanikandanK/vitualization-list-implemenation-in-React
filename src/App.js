import React from "react";
import { FixedSizeList as List } from "react-window";

const products = new Array(100)
  .fill()
  .map((_, index) => `Product ${index + 1}`);

const ProductList = () => (
  <List
    height={300} // height of the container
    itemCount={products.length} // total number of items
    itemSize={40} // height of each comment item
    width={500} // width of the container
  >
    {({ index, style }) => <div style={style}>{products[index]}</div>}
  </List>
);

export default ProductList;
