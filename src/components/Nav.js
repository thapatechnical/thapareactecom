import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FiShoppingCart } from "react-icons/fi";
const Nav = () => {
    const Nav = styled.nav`
    .navbar-lists{
        display:flex;
        gap:4.8rem;
        align-items:center;

        .navbar-link{
            &:link,&visited{
                display:inline-block;
                text-decoration:none;
                font-size:1.8rem;
                font-weight:500;
                text-transform:uppercase;
                color: ${({theme})=> theme.colors.black};
                transition:color 0.3s linear;
            }
            &:hover,&:active{
                color: ${({theme})=> theme.colors.helper};
            }
        }
    }
    .user-login{
        font-size:2.2rem;
        padding:0.8rem 1.4rem;
    }
    `
  return (
    <Nav>
      <div className="navbar">
     <ul className="navbar-lists">
        <li>
            <NavLink to="/" className="navbar-link home-link">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" className="navbar-link">About</NavLink>
        </li>
        <li>
            <NavLink to="/products" className="navbar-link">Products</NavLink>
        </li>
        <li>
            <NavLink to="/contact" className="navbar-link">Contact</NavLink>
        </li>
        <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
            <FiShoppingCart className="cart-trolley" />
            <span className="cart-total--item">10</span>
            </NavLink>
        </li>
     </ul>
      </div>
    </Nav>
  )
}

export default Nav
