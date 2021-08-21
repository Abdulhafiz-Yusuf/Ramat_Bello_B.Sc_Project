import React, { useContext, useState, } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button } from 'reactstrap';
// import logo from '/images/logo.png.png'
// import coat from '/images/coat.jpg.jpg'

import { globalStore } from '../ContextAPI/globalStore';
import useWindowSize from '../components/utility/useWindowSize'
import { onLogOut } from '../ContextAPI/actions/UserActions';

export default function NavBar({ user, setisLoading }) {

    const { dispatch } = useContext(globalStore)


    const { width } = useWindowSize();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const history = useHistory()


    return (
        <div className='bg-success container fixed-top rounded mb-5 '
        // style={{ backgroundImage: "url(/blood.jpeg)", backgroundRepeat: 'no-repeat', height: '300px' }}
        >
            {
                width < 500 ?

                    <Navbar
                        color="success"
                        light expand="md">
                        <NavbarBrand to="/" className='font-weight-bold'>
                            <img style={{ height: '50px', width: '50px' }} src={'/images/logo.png'} alt='logo' />
                        </NavbarBrand>

                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="d-flex flex-column mr-auto" navbar>
                                <h5 className='mt-3 text-light font-weight-bold'>  THE NIGERIAN CORRECTIONAL SERVICE (NCoS)</h5>

                                <ul className="nav">
                                    <li className="nav-item">
                                        <Button color='success'>
                                            <Link className="nav-link active text-light font-weight-bold" to="/">Home</Link>
                                        </Button>
                                    </li>
                                    <li className="nav-item">
                                        <Button color='success '>
                                            <Link className="nav-link active text-light font-weight-bold" to="/about">About</Link>
                                        </Button>
                                    </li>
                                    <li className="nav-item">
                                        {
                                            user ?
                                                <Button
                                                    onClick={() => { onLogOut(dispatch, history, setisLoading) }}
                                                    color='success'
                                                >
                                                    <Link className="nav-link active text-light font-weight-bold" >Logout</Link>
                                                </Button>
                                                :
                                                <Button color='success'>
                                                    <Link className="nav-link active text-light font-weight-bold" to="/login">Login</Link>
                                                </Button>
                                        }
                                    </li>
                                </ul>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    :
                    <Navbar
                        color="success"
                        light expand="md">
                        <NavbarBrand to="/" className='font-weight-bold'>
                            <img style={{ height: '120px', width: '120px' }} src={'/images/logo.png'} alt='logo' />
                        </NavbarBrand>

                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="d-flex flex-column mr-auto" navbar>
                                <h3 className='mt-3 text-light font-weight-bold'>  THE NIGERIAN CORRECTIONAL SERVICE (NCoS)</h3>

                                <ul className="nav">
                                    <li className="nav-item">
                                        <Button color='success'>
                                            <Link className="nav-link active text-light font-weight-bold" to="/">Home</Link>
                                        </Button>
                                    </li>
                                    <li className="nav-item">
                                        <Button color='success '>
                                            <Link className="nav-link active text-light font-weight-bold" to="/about">About</Link>
                                        </Button>
                                    </li>
                                    <li className="nav-item">

                                    </li>
                                    <li className="nav-item">
                                        {
                                            user ?
                                                <>
                                                    <Button color='success '>
                                                        <Link className="nav-link active text-light font-weight-bold" to="/dashboard">Dashboard</Link>
                                                    </Button>

                                                    <Button
                                                        onClick={() => { onLogOut(dispatch, history, setisLoading) }}
                                                        color='success'
                                                    >
                                                        <Link className="nav-link active text-light font-weight-bold" >Logout</Link>
                                                    </Button>
                                                </>
                                                :
                                                <Button color='success'>
                                                    <Link className="nav-link active text-light font-weight-bold" to="/login">Login</Link>
                                                </Button>
                                        }

                                    </li>

                                </ul>
                            </Nav>




                        </Collapse>
                        <NavbarBrand to="/" className='font-weight-bold'>
                            <img className='rounded-circle' style={{ height: '120px', width: '120px' }} src={'/images/coat.jpg'} alt='coat' />
                        </NavbarBrand>

                    </Navbar>
            }

        </div >
    );
}

