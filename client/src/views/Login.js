import React, { useContext, useEffect, useState } from 'react';
import { Card, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { globalStore } from '../ContextAPI/globalStore';
// import { dbServices } from '../../services/services';
import { Link } from 'react-router-dom'
import LoadScreen from '../components/LoadScreen'
import { login } from '../ContextAPI/actions/UserActions';


export default function Login() {

    const [loginStatus, setLoginStatus] = useState(false)
    const { state, dispatch } = useContext(globalStore)
    console.log(state)
    const [error, setError] = useState(false)
    const [Loading, setLoading] = useState(false)
    const [profile, setProfile] = React.useState({
        email: '',
        password: '',
    })


    // useEffect(() => {
    //     //initial DB with Admin Credentials
    //     dbServices.initalizeAdminCredentials()
    // }, [])

    const handleChange = (e) => {
        const value = e.target.value;
        setProfile({
            ...profile,
            [e.target.name]: value
        })

    }

    const onLogIn = (e) => {
        e.preventDefault()

        if (profile.username === '' || profile.password === '') {
            alert('username or password cannot be empty')
        }


        else {
            //authenticate Admin
            //dbServices.authenticateAdmin(profile)
            setLoading(true)
            login(dispatch, profile.email, profile.password, setError, setLoading)

        }
    }


    const renderButton = () => {
        if (Loading) {
            return (<LoadScreen size='small' text='Loging in....' />)
        }
        else {
            return (

                <div className='d-flex justify-content-lg-center '>
                    <Button className='text-light font-weight-bold'
                        color='success'
                        onClick={onLogIn}>Submit</Button>
                </div>

            )
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <div style={{ height: '200px' }}></div>

            <Card className='container w-25 shadow-lg pt-3 pb-4 d-flex flex-column align-items-center'>
                <h4 className='text-success font-weight-bold'>Login</h4>
                <Form >
                    <FormGroup >
                        <Label for="username" className='text-success font-weight-bold'>Email</Label>
                        <Input type="email" name="email" value={profile.username} onChange={handleChange} placeholder="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password" className='text-success font-weight-bold'>password</Label>
                        <Input type="password" name="password" value={profile.password} onChange={handleChange} placeholder="xxxxxxx" />
                    </FormGroup>
                </Form>

                <Label style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: 16,
                    textAlign: 'center',
                    fontStyle: 'italic',
                    margin: 2
                }}>
                    {error}
                </Label>
                {/* <h6 className='mt-3 mb-3 text-danger'>Forgot Password?
                 <Link to='/signup'>  Reset</Link>
                </h6> */}

                {renderButton()}

                {/* <h6 className='mt-3 mb-3'>Dont have an account?
                 <Link to='/signup'>  Register</Link>
                </h6> */}
            </Card >
        </div>
    )
}


