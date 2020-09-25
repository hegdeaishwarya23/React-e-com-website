import React, { Component } from "react";
import logo from "../images/cupcake-icon.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

// import { AiOutlineUser } from "react-icons/ai";
export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Felony Friendly Jobs" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              {/* <FaAlignRight className="nav-icon" /> */}
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/store">STORE</Link>
            </li>
            <li>
              <Link to="/">SERVICES</Link>
            </li>
            <li>
              <Link to="/">ORDER</Link>
            </li>
            <li>
              <Link to="/">CONTACT US</Link>
            </li>
          </ul>
          <ul className="nav-links show-nav">
            <li>
              <Link to="/" style={{ float: "right", marginLeft: "200px" }}>
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
