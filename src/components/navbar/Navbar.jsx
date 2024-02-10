import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo";
import { FaShoppingCart, FaGithub } from "react-icons/fa";
import { TiThMenu, TiTimes } from "react-icons/ti";
import { MdFindInPage } from "react-icons/md";

import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mobNav, setMobNav] = useState(false);

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
    const images = document.querySelectorAll("img");

    if (mobNav) {
      images.forEach((image) => image.classList.add("normal"));
    } else {
      images.forEach((image) => image.classList.remove("normal"));
    }
  }, [mobNav]);

  const location = useLocation();

  return (
    <nav>
      <div className="mobile-nav">
        <TiThMenu className="nav-icon" onClick={() => setMobNav(!mobNav)} />
        {mobNav ? (
          <div className="mobile">
            <div className="overflow" onClick={() => setMobNav(!mobNav)}></div>
            <div className="mobile-sidenav">
              <TiTimes
                className="nav-icon"
                onClick={() => setMobNav(!mobNav)}
              />
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
      <FaShoppingCart className="nav-icon" />
    </nav>
  );
};

export default Navbar;
