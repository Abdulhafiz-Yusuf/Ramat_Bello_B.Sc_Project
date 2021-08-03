

import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button } from 'reactstrap';
import logo from '../assets/logo.png'
import coat from '../assets/coat.jpg'

import { globalStore } from '../ContextAPI/globalStore';
import useWindowSize from '../components/utility/useWindowSize'
import { fetchCurrentUser, onLogOut } from '../ContextAPI/actions/UserActions';





export default function NavBar(props) {

    const [user, setuser] = useState()

    const { state, dispatch } = useContext(globalStore)
    console.log(state)

    const { width } = useWindowSize();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);




    const history = useHistory()

    useEffect(() => {
        // const user = Firebase.auth().currentUser;
        // setuser(user)
        fetchCurrentUser(dispatch, setuser)

    }, [dispatch])
    console.log(user)
    // 







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
                                                <Button
                                                    onClick={() => { onLogOut(dispatch, history) }}
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
                                            user ?
                                                <Button
                                                    onClick={() => { onLogOut(dispatch, history) }}
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
                        <NavbarBrand to="/" className='font-weight-bold'>
                            <img className='rounded-circle' style={{ height: '120px', width: '120px' }} src={coat} alt='coat' />
                        </NavbarBrand>

                    </Navbar>


            }

        </div >
    );
}

