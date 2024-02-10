import { useCallback, useEffect, useState } from "react";
import ProductCard from "./card/ProductCard";
import hero from "../assets/hero.jpg";
import "./Home.css";
import Logo from "../assets/Logo";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    console.log("products are: ", products);
  }, [products]);

  return (
    <div>
      <div className="hero">
        <img src={hero} alt="" />
        <div className="hero-title">
          <h2>Welcome to</h2>
          <h1>Fake Store</h1>
          <Logo />
        </div>
      </div>
      <h1 className="declare">Products</h1>
      <div className="selection">
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Home;
