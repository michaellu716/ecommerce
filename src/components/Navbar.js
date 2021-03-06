import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../amazon-logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
  render() {
    return (
     <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
            <img src={logo} alt="store" className="navbar-brand logo"/>
        </Link>
        <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
                <Link to="/" className="nav-link">
                    products
                </Link>
            </li>
        </ul>
        <Link to="/cart" className="ml-auto">
            <ButtonContainer>
                <span>
                    <i className="fa fa-cart-plus mycart">
                    &nbsp;cart
                    </i>
                </span>
            </ButtonContainer>
        </Link>
     </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform: capitalize;
    }
`;