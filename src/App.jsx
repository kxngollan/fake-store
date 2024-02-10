import { Route } from "react-router-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Catergory from "./components/catergory/Catergory";
import Home from "./components/Home";
import "./App.css";
import Product from "./components/product/Product";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([])



  return (
    <Router>
      <Navbar cart={cart}/>
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
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
