import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./styles.css";

const NavBar = () => {
  return (    
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid navBar">          
        <Link className="navbar-brand" to="/">Total eSports</Link>        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/category/jewelery">
                Joyería
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/category/electronics">
                Electrónica
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/category/men's clothing">
                Ropa de hombres
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/category/women's clothing">
                Ropa de Mujer
              </Link>
            </li>
            {/*<li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Accesorios
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/#">
                    Bolsos y Mochilas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    Pelotas
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    Outdoors
                  </a>
                </li>
              </ul>
            </li>*
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="/#">Disabled</a>
            </li> */}
          </ul>          
        </div>
      </div>       
    <CartWidget/>
    {/*<span>3</span>*/}    
    </nav>   
  );
};

export default NavBar;
