import { Route } from "react-router-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Catergory from "./components/catergory/Catergory";
import Home from "./components/Home";
import "./App.css";
import Product from "./components/product/Product";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd, amount) => {
    const existingProductIndex = cart.findIndex(
      (product) => product.id === productToAdd.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = cart.map((product, index) => {
        if (index === existingProductIndex) {
          return {
            ...product,
            count: product.count + amount,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      const newProduct = {
        ...productToAdd,
        count: amount,
      };
      setCart([...cart, newProduct]);
    }
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/jewelery"
          element={<Catergory catergory={"jewelery"} />}
        />
        <Route
          path="/men"
          element={<Catergory catergory={"men's clothing"} />}
        />
        <Route
          path="/women"
          element={<Catergory catergory={"women's clothing"} />}
        />
        <Route
          path="/electronics"
          element={<Catergory catergory={"electronics"} />}
        />
        <Route
          path="/product/:productId"
          element={<Product addToCart={addToCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
