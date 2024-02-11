import { Route } from "react-router-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Catergory from "./components/catergory/Catergory";
import Home from "./components/Home";
import "./App.css";
import Product from "./components/product/Product";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [sideCart, setSideCart] = useState(false);
  const [sidenav, setSidenav] = useState(false);

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

  const toggle = (section) => {
    if (section === "sidenav") {
      setSidenav(!sidenav);
    } else {
      setSideCart(!sideCart);
    }
  };

  useEffect(() => {
    const images = document.querySelectorAll("img");

    images.forEach((image) => {
      if (!sidenav && !sideCart) {
        image.classList.add("transparent");
      } else {
        image.classList.remove("transparent");
      }
    });
  }, [sidenav, sideCart]);

  return (
    <Router>
      <Navbar
        cart={cart}
        sidenav={sidenav}
        sideCart={sideCart}
        toggle={toggle}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/jewellery"
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
