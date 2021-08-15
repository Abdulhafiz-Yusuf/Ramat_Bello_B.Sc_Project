import React, { useContext, useState, } from 'react'
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { } from '../../../ContextAPI/actions/inmateActions'
import { globalStore } from '../../../ContextAPI/globalStore'
//DATEPICKER AND ITS CSS
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { RegisterInmate, uploadImage } from '../../../ContextAPI/actions/inmateActions';

import { NaijaStates, NaijaLGA } from './stateLGAData';

/*==========================
REGISTRATION COMPLETION PAGE
=============================*/

export default function RegInmate(props) {

    const { dispatch } = useContext(globalStore)
    const [Images, setImages] = useState([])
    const [selectedFile, setSelectedFile] = useState({
        name: '',
        file: ''
    })
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

    const handleChange = (e) => {
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
            fName: profile.fName,
            lName: profile.lName,
            mName: profile.mName,
            gender: profile.gender,
            phone: profile.phone,
            dob: profile.dob,
            inmate_loc_state: profile.inmate_loc_state,
            loc_lga: profile.loc_lga,
            homeAdd: profile.homeAdd,
            email: profile.email,
            cCenter: profile.cCenter,
            code: profile.code,
            doi: profile.doi,
            dor: profile.dor,
            crime: profile.crime,

        }
        // dispatch(completeRegistration(dataToSubmit))
        if (
            dataToSubmit.fName === '' ||
            dataToSubmit.lName === '' ||
            dataToSubmit.mName === '' ||
            dataToSubmit.phone === '' ||
            dataToSubmit.homeAdd === '' ||
            dataToSubmit.email === '' ||
            dataToSubmit.cCenter === '' ||
            dataToSubmit.code === '' ||
            dataToSubmit.crime === ''
        ) {
            alert('All fields are required, Field cannot be empty')
        }
        else {
            RegisterInmate(dispatch, dataToSubmit)

        }
    }


    let formData = new FormData();

    const onImageUpload = (files) => {

        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", selectedFile.file)
        //save the Image we chose inside the Node Server 
        uploadImage(dispatch, formData, config, setImages)
    }


    const onfileSelect = (e) => {

        setSelectedFile({
            name: e.target.files[0].name,
            file: e.target.files[0]
        })

    }

    const onfileUpload = (e) => {

    }



    return (
        <div className='w-75'>
            <div style={{ height: '10px' }}></div>
            <Card className='container w-100 shadow-lg p-3'>
                <div className='d-flex justify-content-lg-center '>
                    <h2 className='text-success font-weight-bold'>Register an Inmate</h2>
                </div>

                <Form>

                    {/* <FormGroup >
                        <Label for="fName">Inmate Passport</Label>
                        <div class='d-flex'>
                            <Input type="file" name="fName" onChange={onfileSelect} placeholder={selectedFile.name} />
                            <Button color='success' className='font-weight-bold' onClick={onImageUpload}>Upload</Button>
                        </div> */}
                    {/* <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll' }}>

                            {
                                Images.map((image, index) => {
                                    console.log(image)

                                    return (
                                        <img style={{ minWidth: '150px', width: '150px', height: '150px' }}
                                            // src={`/${image}`}
                                            // src={require(`../../../assets/uploads/1629034748132_Screenshot from 2021-08-11 17-53-21.png${image}`)}
                                            src={require('./2.png')}
                                            // src={img}
                                            alt={`${image}`}
                                        />
                                    )
                                })
                            }


                        </div> */}
                    {/* </FormGroup> */}

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

                    <FormGroup>
                        <Label for="nameOfCorrCenter">Name of Correctional Center</Label>
                        <Input type="text" name="cCenter" value={profile.nameOfCorrCenter} onChange={handleChange} placeholder="Name of Correctional Center" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="cellCode">Cell Code</Label>
                        <Input type="text" name="code" value={profile.cellCode} onChange={handleChange} placeholder="Cell Code" />
                    </FormGroup>

                    <FormGroup className='d-flex flex-column'>
                        <Label for="doi">Date of Imprisonment</Label>
                        <DatePicker className='w-100 border border-secondary rounded' style={{ height: '100px' }} selected={profile.doi} calendarClassName="rasta-stripes" onChange={date => { setProfile({ ...profile, doi: date }); }} />
                    </FormGroup>

                    <FormGroup className='d-flex flex-column'>
                        <Label for="dor">Date of Release</Label>
                        <DatePicker className='w-100 border border-secondary rounded' style={{ height: '100px' }} selected={profile.dor} calendarClassName="rasta-stripes" onChange={date => { setProfile({ ...profile, dor: date }); }} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="natureOfCrime">Nature of Crime</Label>
                        <Input type="textarea" name="crime" value={profile.natureOfCrime} onChange={handleChange} placeholder="Nature of crime" />
                    </FormGroup>

                    <div className='d-flex justify-content-lg-center '>
                        <Button color='success' className='font-weight-bold' onClick={onSubmit}>Submit</Button>
                    </div>

                </Form>

            </Card >
            <div style={{ height: '20px' }}></div>
        </div >
    )
}


