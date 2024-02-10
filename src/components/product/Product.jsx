import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Product.css";

const Product = () => {
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");

  const { productId } = useParams();

  const fetchData = useCallback(async () => {
    setError("");
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error("Error fetching product:", err);
      setError("Error fetching product");
    }
  }, [productId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (error) {
    return (
      <div className="product">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className="product">
      {product ? (
        product.id && (
          <>
            <div className="product-image">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </Link>
            </div>
            <div className="product-description">
              <div className="describe">
                <h3>Fake Store</h3>
                <h2>{product.title}</h2>
                <p className="rating">
                  <strong>{product.rating?.rate}/5</strong> by{" "}
                  {product.rating?.count} customers
                </p>
                <h5>{product.description}</h5>
                <h4>£{product.price}</h4>
              </div>
              <div className="add-to-cart">
                <div className="cart-amount">
                  <button
                    type="button"
                    onClick={() =>
                      setAmount((prev) => (prev > 0 ? prev - 1 : 0))
                    }
                  >
                    <FaMinus />
                  </button>
                  <input type="number" name="amount" value={amount} readOnly />
                  <button onClick={() => setAmount(amount + 1)}>
                    <FaPlus />
                  </button>
                </div>
                <button className="finalise">Add to Cart</button>
              </div>
            </div>
          </>
        )
      ) : (
        <h1>Finding Product...</h1>
      )}
    </div>
  );
};

export default Product;
