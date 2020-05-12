import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { logout, getLocalStorageItem } from '../utilis/helper';
import history from '../history/history';
import '../styles/header.css';
import { LOCAL_STORAGE_KEYS } from '../utilis/constants';

const Header = props => {
    const location = useLocation()["pathname"];
    const loggedInUser = getLocalStorageItem(LOCAL_STORAGE_KEYS.USER) || {};

    const secureRoutes = ['/accounts', '/invite', '/', '/manage_accounts'];
    return (

        <div>
            {console.log(loggedInUser, 'loggedInUser')}
            {location !== '/login' &&
                <Navbar bg="light" expand="lg">
                    <Link to='/' className='mr-3'>
                        <img
                            src={require("../assets/images/logo.png")}
                            height="40"
                            alt='logo'
                        />
                    </Link>
                    {
                        loggedInUser.userType === 'Default' ?
                            secureRoutes.indexOf(location) !== -1 && (
                                <>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav>
                                            <Link to='invite' className='nav-links'>Invitation</Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </>
                            ) : loggedInUser.userType === 'Super Admin' ? (
                                <>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav>
                                            <Link to='users' className='nav-links'>Users</Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </>
                            ) : null
                    }


                    {
                        loggedInUser.userType === 'Default' ?
                            secureRoutes.indexOf(location) !== -1 && (
                                <NavDropdown title="Profile" id="basic-nav-dropdown" alignRight={true}>
                                    <NavDropdown.Item onClick={() => history.push('/manage_accounts')}>Manage Accounts</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => history.push('/accounts')}>Switch Account</NavDropdown.Item>
                                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            )
                            : loggedInUser.userType === 'Super Admin' ? (
                                <NavDropdown title="Profile" id="basic-nav-dropdown" alignRight={true}>
                                    <NavDropdown.Item onClick={() => history.push('/profile')}>My Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : null
                    }


                </Navbar>
            }


        </div>
    );
};

export default Header;