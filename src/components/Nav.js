import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {FiShoppingCart} from 'react-icons/fi';

const Nav = () => {
    const Nav =styled.nav`
    positon : relative;

    .cart-trolley {
        position : absolute;
        font-size : 3.2rem; 
    }

    .cart-total--item{
        width: 2.4rem;
        height: 2.4rem;
        position : absolute;
        background-color : #000;
        color: #000;
        border-radius:50%;
        display:grid;
        place-items:center;
        top: -15%;
        left:70%;
        background-color :${({ theme }) => theme.colors.helper}
    }
    

    .navbar{
        display: flex;
        justify-content:flex-end;
    }
    .navbar-lists{
        display:flex;
        gap:4.8rem;
        align-items:center;

        .navbar-link{
            &:link,
            &:visited{
                display: inline-block;
                text-decoration:none;
                font-size:1.8rem;
                font-weight:600;
                text-transform:uppercase;
                color:${({ theme}) => theme.colors.black };
                transition : color 0.3s linear;
            }

            &:hover,
            &:active{
                color: ${({ theme }) => theme.colors.helper}
            }
        }
    }

    .mobile-navbar-btn{
        display:none;
        background-color :transparent;
        cursor:.pointer;
        border :none;
    }

    .mobile-nav-icon[name="close-outline"] {
        display: none;
    }

    .close-outline {
        display:none
    }

    .cart-trolley--link{
        position: relative;

        .cart-trolley {
            position: relative;
            font-size : 3.2rem;
        }

        .cart-total--item{
            width:2.4rem;
            height:2.4rem;
            position: absolute;
            background-color :#000;
            color: #000;
            border-radius:50%;
            display:grid;
            place-items:center;
            top: -20%;
            left:70%;
            background-color : ${({ theme }) => theme.colors.helper}
        }
    }

    .user-login--name{
        text-transform : capitalize;
    }

    .user-logout,
    .user-login {
        font-size: 1.4rem;
        padding: 0.8rem 1.4rem;
    }
    `
  return (
    <Nav>
        <div className="navbar">
            <ul className="navbar-lists">
                <li>
                    <NavLink to="/" className="navbar-link home-link">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="navbar-link">ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to="/product" className="navbar-link">PRODUCT</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="navbar-link">CONTACT</NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className="navbar-link cart-trolley ">
                        <FiShoppingCart className="cart-trolley" />
                        <span className="cart-total--item"> 10 </span> 
                    </NavLink>
                </li>
            </ul>
        </div>
    </Nav>
  )
}



export default Nav;