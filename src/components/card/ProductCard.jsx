import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <Link to={`/product/${props.product.id}`}>
      <div className="product-card">
        <div className="product-img-container">
          <img
            src={props.product.image}
            alt={props.product.title}
            className="product-img transparent"
          />
        </div>
        <h4 className="product-title">{props.product.title}</h4>
        <h6>£{props.product.price}</h6>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
