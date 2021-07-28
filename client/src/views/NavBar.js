import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button } from 'reactstrap';
import LoginButton from './Login';
import logo from '../assets/logo.png'
import coat from '../assets/coat.jpg'

import { globalStore } from '../ContextAPI/globalStore';




const NavBar = (props) => {


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const { state, dispatch } = useContext(globalStore)
    console.log(state)
    return (
        <div className='bg-success container fixed-top rounded mb-5 '
        // style={{ backgroundImage: "url(/blood.jpeg)", backgroundRepeat: 'no-repeat', height: '300px' }}
        >
            <Navbar
                color="success"
                light expand="md">
                <NavbarBrand to="/" className='font-weight-bold'>
                    <img style={{ height: '120px', width: '120px' }} src={logo} alt='logo' />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <ul className="nav">
                            <li className="nav-item">
                                <Button color='success'>
                                    <Link className="nav-link active text-light font-weight-bold" to="/">Home</Link>
                                </Button>
                            </li>
                            <li className="nav-item">
                                <Button color='success '>
                                    <Link className="nav-link active text-light font-weight-bold" to="/med-center">About</Link>
                                </Button>
                            </li>
                            <li className="nav-item">
                                {
                                    state.user ?
                                        < Button color='success'>
                                            <Link className="nav-link active text-light font-weight-bold" to="/">Log Out</Link>
                                        </Button>
                                        :
                                        <Button color='success'>
                                            <Link className="nav-link active text-light font-weight-bold" to="/login">Login</Link>
                                        </Button>
                                }
                                <li className="nav-item">
                                    <Button color='success '>
                                        <Link className="nav-link active text-light font-weight-bold" to="/dashboard">Dashboard</Link>
                                    </Button>
                                </li>
                            </li>
                            {/* 
                            <li className="nav-item">
                                <Button color='success '>
                                    <Link className="nav-link active text-light font-weight-bold" to='/testPage'>Testing Page</Link>
                                </Button>
                            </li>  */}
                        </ul>
                    </Nav>




                </Collapse>
                <NavbarBrand to="/" className='font-weight-bold'>
                    <img className='rounded-circle' style={{ height: '120px', width: '120px' }} src={coat} alt='coat' />
                </NavbarBrand>

            </Navbar>
        </div >
    );
}

export default NavBar;