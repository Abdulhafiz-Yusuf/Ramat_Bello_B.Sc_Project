import React, {
    useState,
    useContext
} from 'react'
import { Table, Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import "react-datepicker/dist/react-datepicker.css";
import { globalStore } from '../../../ContextAPI/globalStore'
import { viewPageAction } from '../../../ContextAPI/actions/UserActions';
/*==========================
REGISTRATION COMPLETION PAGE
=============================*/

export default function GeneratePass(props) {

    const [profile, setProfile] = useState({
        fName: '',
        lastName: '',
        mName: '',
        gender: '',
        phone: '',
        dob: new Date(),
        homeAdd: '',
        emailAdd: '',
        nameOfCorrCenter: '',
        cellCode: '',
        doi: new Date(), //date of imprisonment
        dor: new Date(), //date of release
        natureOfCrime: ''

    })

    const handleGuestChange = (e) => {
        const value = e.target.value
        setProfile({
            ...profile,
            [e.target.name]: value
        })
        console.log(value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const dataToSubmit = {
            email: 'me@gmail.com',
            email_verified: false,
            username: profile.username,
            phone: profile.phone,
            user_loc_state: profile.user_loc_state,
            loc_lga: profile.loc_lga,
            donor: profile.donor,
            bg: profile.bg
        }
        // dispatch(completeRegistration(dataToSubmit))
        if (dataToSubmit.username === '' || dataToSubmit.phone === '') {
            alert('Field cannot be empty')
        }
        else {

        }
    }



    // searchInamate
    const [searchId, setsearchId] = useState()
    const [SearchType, setSearchType] = useState('1')

    const { dispatch } = useContext(globalStore)
    const handleChange = (e) => {
        const value = e.target.value
        setsearchId(value)

        console.log(value)
    }


    const onSearch = (e) => {
        e.preventDefault()
        const dataToSubmit = {
            searchId: searchId
        }
        // dispatch(completeRegistration(dataToSubmit))
        if (dataToSubmit.searchId === '') {
            alert('Field cannot be empty')
        }
        else {

        }
    }

    const bgHanleChange = (e) => {
        const value = e.target.value
        setSearchType(value)
        console.log(value)
    }



    return (
        <div className='w-75'>
            <div style={{ height: '10px' }}></div>


            <div className='d-flex flex-column align-items-center justify-content-lg-center '>
                <h2 className='text-success font-weight-bold'>GENERATE GATE PASS</h2>
                <h5 className='text-success text-center font-italic font-weight-bold'>
                    Please generate gate pass by searching for an inmate and providing
                    visitor's information below.
                    </h5>
            </div>
            <Card className='container w-100 shadow-lg p-3 mb-5'>
                <Form className='d-flex flex-column justify-content-start ' >
                    <h4 className=' text-success text-center font-weight-bold'>Search Inmate</h4>
                    <FormGroup tag="fieldset" className='d-flex flex-row' >
                        {
                            [
                                { label: 'Search by ID', key: '1' },
                                { label: 'Search by Name', key: '2' }

                            ].map((option, index) => {
                                return (
                                    <FormGroup check>
                                        <Label check className='text-success pl-5'>
                                            <Input id={index} type="radio" value={option.key} onChange={bgHanleChange} checked={option.key === SearchType} />
                                            {option.label}
                                        </Label>
                                    </FormGroup>
                                )
                            })
                        }
                    </FormGroup>
                    < FormGroup className='mr-3'>
                        <Input
                            type="text"
                            name="searchId"
                            value={searchId}
                            onChange={handleGuestChange}
                            placeholder={SearchType === '1' ? "Enter Inmate's ID Number " : "Enter Inmate's Name"} />
                    </FormGroup>

                    <Button color='success'
                        onClick={onSearch}
                        className='' >
                        Search</Button>
                </Form >

                <Table className='text-success text-center mt-5 w-100' bordered hover striped>
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {[1].map((inmate, index) => {
                            return (
                                < tr key={index}>
                                    <td>
                                        <img src={inmate.img} alt='Inmate Pic'
                                            className='rounded-circle border'
                                            style={{ height: '100px', width: '100px' }} />
                                    </td>
                                    <td>{inmate.loclga} </td>
                                    <td>{inmate.qty}</td>
                                    <td >
                                        <Button

                                            onClick={() => dispatch(viewPageAction('profile', inmate))}
                                            className='ml-2 text-light bg-success font-weight-bold'>View </Button>
                                        {/* <Button

                                        onClick={() => dispatch(viewPageAction('generatePass'))}
                                        className='ml-2 text-light bg-success font-weight-bold'>Generate Pass</Button> */}

                                    </td>
                                </tr>
                            )
                        })

                        }
                    </tbody>
                </Table>

            </Card>
            <Card className='container w-100 shadow-lg p-3 '>

                <Form>
                    <h4 className=' text-success text-center font-weight-bold mt-4'>Visitor Information</h4>
                    <FormGroup >
                        <Label for="fName">First Name</Label>
                        <Input type="text" name="fName" value={profile.fName} onChange={handleGuestChange} placeholder="First Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" name="lastName" value={profile.sName} onChange={handleGuestChange} placeholder="Last Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="mName">Middle Name</Label>
                        <Input type="text" name="mName" value={profile.mName} onChange={handleGuestChange} placeholder="Middle Name" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="gender">Gender</Label>
                        <Input type="select" name="gender" value={profile.gender} onChange={handleGuestChange}>
                            {['Male', 'Female'].map((gender, index) => (
                                <option key={index} value={gender}> {gender}</option>
                            ))
                            }
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="phone">phone</Label>
                        <Input type="text" name="phone" value={profile.phone} onChange={handleGuestChange} placeholder="080xxxxxxx" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="homeAdd">Home Address</Label>
                        <Input type="text" name="homeAdd" value={profile.homeAdd} onChange={handleGuestChange} placeholder="Home Address" />
                    </FormGroup>

                </Form>

            </Card >

            <div className='d-flex justify-content-lg-center '>
                <Button color='success' className='font-weight-bold mt-3' onClick={onSubmit}>Generate Gate Pass</Button>
            </div>
            <div style={{ height: '20px' }}></div>
        </div>
    )
}


