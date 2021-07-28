import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button } from 'reactstrap';
import LoginButton from './Login';
import logo from '../assets/logo.png'
import coat from '../assets/coat.jpg'
import { layoutGenerator } from 'react-break';
import { globalStore } from '../ContextAPI/globalStore';
import useWindowSize from '../components/utility/useWindowSize'


const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
});

const OnMobile = layout.is('mobile');
const OnAtLeastTablet = layout.isAtLeast('tablet');
const OnAtMostPhablet = layout.isAtMost('phablet');
const OnDesktop = layout.is('desktop');


const NavBar = (props) => {
    const { width } = useWindowSize();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const { state, dispatch } = useContext(globalStore)
    console.log(state)
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
                            <img style={{ height: '50px', width: '50px' }} src={logo} alt='logo' />
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
                            <img style={{ height: '120px', width: '120px' }} src={logo} alt='logo' />
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


            }

        </div >
    );
}

export default NavBar;