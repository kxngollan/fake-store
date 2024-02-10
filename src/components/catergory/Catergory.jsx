import { useCallback, useEffect, useState } from "react";
import ProductCard from "../card/ProductCard";
import PropTypes from "prop-types";

const Catergory = (props) => {
  const [products, setProducts] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${props.catergory}`
      );
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  }, [props.catergory]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="selection">
      {products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
};

Catergory.propTypes = {
  catergory: PropTypes.string.isRequired,
};

export default Catergory;
