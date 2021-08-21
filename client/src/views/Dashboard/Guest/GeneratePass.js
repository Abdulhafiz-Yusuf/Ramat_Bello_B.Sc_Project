import React, { useState, useContext } from 'react'
import { Card, Table, Label, Button, Form, FormGroup, Input } from 'reactstrap';
import { globalStore } from '../../../ContextAPI/globalStore'
import { viewPageAction } from '../../../ContextAPI/actions/UserActions'
import { searchInmateByCodeorName } from '../../../ContextAPI/actions/inmateActions';
import { NaijaStates, NaijaLGA } from '../Immate/stateLGAData';
//DATEPICKER AND ITS CSS
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function SearchImmate() {



    const [searchText, setsearchText] = useState()
    // const [SearchType, setSearchType] = useState('1')

    const { state, dispatch } = useContext(globalStore)


    const [profile, setProfile] = useState({
        fName: '',
        lName: '',
        mName: '',
        gender: '',
        phone: '',
        dob: new Date(),
        inmate_loc_state: 'Abia',
        loc_lga: NaijaLGA['Abia'][0],
        homeAdd: '',
        email: '',
        cCenter: '',
        code: '',
        doi: new Date(),
        dor: new Date(),
        crime: ''

    })
    let LGAs = NaijaLGA[profile.inmate_loc_state]

    const onSearchTextChange = (e) => {
        const value = e.target.value
        setsearchText(value)
    }


    const onSearch = (e) => {
        e.preventDefault()
        const data = {
            searchText: searchText
        }
        // dispatch(completeRegistration(dataToSubmit))
        if (data.searchText === '') {
            alert('Field cannot be empty')
        }
        else {
            searchInmateByCodeorName(dispatch, data)
        }
    }

    const handleChange = (e) => {
        const value = e.target.value
        setProfile({
            ...profile,
            [e.target.name]: value
        })
        console.log(value)
    }

    const onSubmit = () => {

    }

    return (
        <div className='w-75'>
            <Form className='d-flex flex-column justify-content-start ' >
                <h4 className=' text-success text-center font-weight-bold'>SEARCH INMATE</h4>
                {/* <FormGroup tag="fieldset" className='d-flex flex-row' >
                     {
                        [
                            { label: 'Search by Code', key: '1' },
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
                */}
                < FormGroup className='mr-3'>
                    <Input
                        type="text"
                        name="searchText"
                        value={searchText}
                        onChange={onSearchTextChange}
                        placeholder={"Enter Inmate's Name or Inmate's Code search"} />
                </FormGroup>

                <Button color='success'
                    onClick={onSearch}
                    className='' >
                    Search</Button>
            </Form >
            {
                state.inmate.inmate ?
                    <Table className='text-success text-center mt-5 w-100' bordered hover striped>
                        <thead>
                            <tr>

                                <th>Image</th>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.inmate.inmate.length !== 0 &&
                                state.inmate.inmate.map((inmate, index) => {
                                    return (
                                        < tr key={index}>
                                            <td>
                                                <img src={inmate.img} alt='Inmate Pic'
                                                    className='rounded-circle border'
                                                    style={{ height: '100px', width: '100px' }} />
                                            </td>
                                            <td>{inmate.f_name} {inmate.m_name} {inmate.l_name}</td>
                                            <td>{inmate.code}</td>
                                            <td >
                                                <Button
                                                    onClick={() => dispatch(viewPageAction('profile', inmate))}
                                                    className='ml-2 text-light bg-success font-weight-bold'>View
                                                </Button>
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
                    :
                    <div>

                    </div>
            }
            <Card className='container mt-5 w-100 shadow-lg p-3 '>

                <div className='d-flex justify-content-lg-center '>
                    <h2 className='text-success font-weight-bold'>Visitor Information</h2>
                </div>

                <Form>
                    <FormGroup>
                        <Label for="fName">First Name</Label>
                        <Input type="text" name="fName" value={profile.fName} onChange={handleChange} placeholder="First Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" name="lName" value={profile.sName} onChange={handleChange} placeholder="Last Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="mName">Middle Name</Label>
                        <Input type="text" name="mName" value={profile.mName} onChange={handleChange} placeholder="Middle Name" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="gender">Gender</Label>
                        <Input type="select" name="gender" value={profile.gender} onChange={handleChange}>
                            {['Male', 'Female'].map((gender, index) => (
                                <option key={index} value={gender}> {gender}</option>
                            ))
                            }
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input type="text" name="phone" value={profile.phone} onChange={handleChange} placeholder="080xxxxxxx" />
                    </FormGroup>


                    <FormGroup className='d-flex flex-column'>
                        <Label for="dob">Date of Birth</Label>
                        <DatePicker className='w-100 border border-secondary rounded' style={{ height: '100px' }} selected={profile.dob} calendarClassName="rasta-stripes" onChange={date => { setProfile({ ...profile, dob: date }); }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">State</Label>
                        <Input type="select" name="inmate_loc_state" value={profile.inmate_loc_state} onChange={handleChange} >
                            {NaijaStates.map((state, index) => (
                                <option key={index} value={state}>{state}</option>
                            ))
                            }
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="state">L.G.A</Label>
                        <Input type="select" name="loc_lga" value={profile.loc_lga} onChange={handleChange}>
                            {LGAs.map((lga, index) => (
                                <option key={index} value={lga}> {lga}</option>
                            ))
                            }
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="homeAdd">Home Address</Label>
                        <Input type="text" name="homeAdd" value={profile.homeAdd} onChange={handleChange} placeholder="Home Address" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="emailAdd">Email Address</Label>
                        <Input type="email" name="email" value={profile.emailAdd} onChange={handleChange} placeholder="email Address" />
                    </FormGroup>


                </Form>

            </Card >
            <div className='d-flex justify-content-lg-center '>
                <Button color='success' className='font-weight-bold mt-3' onClick={onSubmit}>Generate Gate Pass</Button>
            </div>
            <div style={{ height: '20px' }}></div>


        </div >
    )
}

export default SearchImmate




