import { useContext } from "react";

import { ProductsContext } from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./shope.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
