import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./Navbar.css";

import { ButtonContainer } from "../Shared/Button";
import logo from "../../logo.svg";

export default function Navbar() {
  return (
    <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} className="navbar-brand" alt="store" />
      </Link>
      <ul className="navbar-nav align-item-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link text-dark">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus" />
            my cart
          </span>
        </ButtonContainer>
      </Link>
    </Nav>
  );
}

const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
    $:hover {
      color: var(--mainWhite) !important;
    }
  }
`;
