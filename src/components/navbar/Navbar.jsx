import { PropTypes } from "prop-types";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo";
import { FaShoppingCart, FaGithub } from "react-icons/fa";
import { TiThMenu, TiTimes } from "react-icons/ti";
import { MdFindInPage, MdDelete } from "react-icons/md";
import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = ({ cart, sidenav, sideCart, toggle }) => {
  const [total, setTotal] = useState(0);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
    { name: "Jewelery", path: "/jewelery" },
    { name: "Electronics", path: "/electronics" },
  ];

  const socials = [
    {
      icon: <MdFindInPage className="sidenav-icon" />,
      href: "https://fakestoreapi.com/",
    },
    {
      icon: <FaGithub className="sidenav-icon" />,
      href: "https://github.com/keikaavousi/fake-store-api",
    },
  ];

  useEffect(() => {
    let tempTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      tempTotal += cart[i].price * cart[i].count;
    }
    setTotal(parseFloat(tempTotal).toFixed(2));
  }, [cart]);

  const location = useLocation();

  return (
    <nav>
      <div className="mobile-nav">
        <TiThMenu className="nav-icon" onClick={() => toggle("sidenav")} />
        {sidenav ? (
          <div className="mobile">
            <div className="overflow" onClick={() => toggle("sidenav")}></div>
            <div className="mobile-sidenav">
              <TiTimes className="nav-icon" onClick={() => toggle("sidenav")} />
              <ul className="sidenav-links">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className={
                      link.path === location.pathname ? "active-link" : ""
                    }
                  >
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
              <div className="socials">
                {socials.map((social, index) => (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social"
                    key={index}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <a
                href="https://github.com/kxngollan"
                target="_blank"
                rel="noreferrer"
              >
                Coded by Ollan Muza
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <Link to={"/"} className="nav-home">
        <div className="nav-title">
          <h1>Fake Store</h1>
          <Logo />
        </div>
      </Link>
      <ul className="nav-links">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={link.path === location.pathname ? "active-link" : ""}
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <FaShoppingCart className="nav-icon" onClick={() => toggle("sideCart")} />
      {sideCart ? (
        <div className="sideCart">
          <div className="overflow" onClick={() => toggle("sideCart")}></div>
          <div className="sideCart-content">
            <div className="sideCart-title">
              <TiTimes
                className="nav-icon sideChart-icon"
                onClick={() => toggle("sideCart")}
              />
              <h1>Cart</h1>
            </div>
            <div className="sideCart-items">
              {cart.length > 0 ? (
                cart.map((item, index) => {
                  return (
                    <div className="sideCart-item" key={index}>
                      <img src={item.image} alt={item.title} />
                      <div className="desc">
                        <h3>{item.title}</h3>
                        <p>
                          <strong>£{parseFloat(item.price).toFixed(2)}</strong>{" "}
                          x {item.count}
                        </p>
                      </div>
                      <button type="button" className="delete-button">
                        <MdDelete className="delete-icon" />
                      </button>
                    </div>
                  );
                })
              ) : (
                <h1> Cart is empty</h1>
              )}
            </div>
            <div className="sideCart-checkout">
              <h1>
                Total: <strong>£{total}</strong>
              </h1>
              <button type="button" className="finalise">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

Navbar.propTypes = {
  cart: PropTypes.array.isRequired,
  sidenav: PropTypes.bool.isRequired,
  sideCart: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Navbar;
