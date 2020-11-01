import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from "styled-components";

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper style={navbar} className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/' style={link}>
                    <ButtonContainer>
                    <i style={{fontSize:"20px"}} className="fas fa-home"/>
                    </ButtonContainer>
                </Link>
                <h3 className="ml-auto">E-commerce Website</h3>
                {/* <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' style={link} className="nav-link">
                            <ButtonContainer>Products</ButtonContainer>
                        </Link>
                    </li>
                </ul> */}
                <Link to='/cart' style={link} className='ml-auto'>
                    <ButtonContainer>
                    <i style={{fontSize:"20px"}} className="fas fa-cart-plus"/>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const link={
    fontSize:"20px",
    textDecoration:"none",
    color:"var(--mainYellow)"
}

const navbar={
    borderTop:"3px solid black",
    borderBottom:"3px solid black"
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    color: var(--mainYellow);
    .nav-link{
        text-decoration: none !important;
        font-size: 1.3rem;
    }
`;
