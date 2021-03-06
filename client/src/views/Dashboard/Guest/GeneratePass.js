import React, { useState, useEffect, useContext } from 'react'
import { Card, Table, Label, Button, Form, FormGroup, Input } from 'reactstrap';
import { globalStore } from '../../../ContextAPI/globalStore'
import { viewPageAction } from '../../../ContextAPI/actions/UserActions'
import { firebaseImageUploadforNewInmate, RegVisitor, searchInmateByCodeorName } from '../../../ContextAPI/actions/inmateActions';
import { NaijaStates, NaijaLGA } from '../Immate/stateLGAData';
//DATEPICKER AND ITS CSS
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function SearchImmate() {
    //Firebase file upload states
    const [Url, setUrl] = useState()
    const [progress, setProgress] = useState(0)
    const [selectedFile, setSelectedFile] = useState({ name: '', file: '' })
    const [prevPicName, setPrevPicName] = useState()

    const [searchText, setsearchText] = useState()
    const [EnterGuestInfor, setEnterGuestInfor] = useState(false)

    const { state, dispatch } = useContext(globalStore)


    const [profile, setProfile] = useState({
        fName: '',
        lName: '',
        mName: '',
        gender: '',
        phone: '',
        homeAdd: '',
        // dob: new Date(),
        // inmate_loc_state: 'Abia',
        // loc_lga: NaijaLGA['Abia'][0],
        // email: '',


    })
    let LGAs = NaijaLGA[profile.inmate_loc_state]



    useEffect(() => {

        setEnterGuestInfor(false)
    }, [])

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

    const handleChange = (e,) => {
        const value = e.target.value
        setProfile({
            ...profile,
            [e.target.name]: value
        })
        console.log(value)
    }

    const regVisitor = (e) => {
        e.preventDefault()

        const dataToSubmit = {
            fName: profile.fName,
            lName: profile.lName,
            mName: profile.mName,
            gender: profile.gender,
            phone: profile.phone,
            homeAdd: profile.homeAdd,
            vPicUrl: Url,
            vPicName: selectedFile.name
            // dob: profile.dob,
            // inmate_loc_state: profile.inmate_loc_state,
            // loc_lga: profile.loc_lga,
        }

        if (
            dataToSubmit.fName === '' ||
            dataToSubmit.lName === '' ||
            dataToSubmit.mName === '' ||
            dataToSubmit.phone === '' ||
            dataToSubmit.homeAdd === ''
        ) {
            alert('All fields are required, Field cannot be empty')
        }
        else if (!Url) {
            alert('Inmate Passport is required')
        }
        else {
            RegVisitor(dispatch, dataToSubmit, EnterGuestInfor.inmate)
        }
    }


    const onImageUpload = () => {

        firebaseImageUploadforNewInmate(dispatch, selectedFile, setUrl, setProgress, prevPicName, setPrevPicName)
        // uploadImage(dispatch, formData, config, setImage, setInmatePicName)
    }

    const onfileSelect = (e) => {
        e.preventDefault()
        setSelectedFile({
            name: e.target.files[0].name,
            file: e.target.files[0],
            img: URL.createObjectURL(e.target.files[0])
        })

    }

    return (
        <div className='w-75'>
            {
                !EnterGuestInfor &&
                <div>
                    <Form className='d-flex flex-column justify-content-start ' >
                        <h4 className=' text-success text-center font-weight-bold'>SEARCH INMATE</h4>
                        <h6>Please Search for Inmate to visit, then click on the visit button to enter visitor's information</h6>
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

                            state.inmate.inmate.length !== 0 &&
                            state.inmate.inmate.map((inmate, index) => {
                                return (
                                    <Card className='mt-5 w-100'>
                                        <div className='d-flex flex-row align-items-center text-success text-center w-100'>
                                            <div className='text-success text-center w-50' >
                                                <img src={inmate.ipicurl} alt='Inmate Pic'
                                                    className='rounded-circle border'
                                                    style={{ height: '100px', width: '100px' }}
                                                />
                                                <label className='text-uppercase font-weight-bold ml-3 '>{inmate.f_name} {inmate.m_name} {inmate.l_name}</label>
                                                <label className='text-uppercase font-weight-bold ml-3 '>{inmate.code}</label>
                                            </div>
                                            <div className=' d-flex flex-column text-success w-75 border text-left' >

                                                <div className='d-flex w-100 text-success border-bottom'>
                                                    <div className='w-25 '><label className='ml-3'> Gender:  </label> </div>
                                                    <div> <label className='text-uppercase font-weight-bold ml-3 '>{inmate.gender}</label></div>
                                                    <hr />
                                                </div>

                                                <div className='d-flex w-100 text-success border-bottom'>
                                                    <div className='w-25 '><label className='ml-3'> D.O.B:  </label> </div>
                                                    <div> <label className='text-uppercase font-weight-bold ml-3 '>{inmate.dob}</label></div>
                                                    <hr />
                                                </div>
                                                <div className='d-flex w-100 text-success border-bottom'>
                                                    <div className='w-25 '><label className='ml-3'> Phone:  </label>  </div>
                                                    <div> <label className='text-uppercase font-weight-bold ml-3 '>+234 {inmate.phone}</label> </div>
                                                </div>
                                                <div className='d-flex w-100 text-success border-bottom'>
                                                    <div className='w-25 '><label className='ml-3'> State: </label>  </div>
                                                    <div> <label className=' text-uppercase font-weight-bold ml-3 '>{inmate.istate}</label> </div>
                                                </div>

                                                <div className='d-flex w-100 text-success'>
                                                    <div className='w-25 '><label className='ml-3'> L.G.A:  </label>  </div>
                                                    <div> <label className='text-uppercase font-weight-bold  ml-3 '>{inmate.ilga}</label> </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Button
                                            onClick={() => setEnterGuestInfor({ displayVInfo: true, inmate: inmate, })}
                                            className='ml-2 text-light bg-success font-weight-bold'>Generate Visitor Gate-Pass
                                        </Button>
                                    </Card >
                                )
                            })

                            :
                            <div>

                            </div>
                    }

                </div>


            }

            {
                EnterGuestInfor.displayVInfo &&

                <div>
                    <Card className='container mt-2 w-100 shadow-lg p-3 '>

                        <div className='d-flex justify-content-lg-center '>
                            <h2 className='text-success font-weight-bold'>Visitor Information</h2>
                        </div>

                        <Form>
                            <FormGroup>
                                <Label for="fName">First Name:</Label>
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


                            {/* <FormGroup className='d-flex flex-column'>
                                <Label for="dob">Date of Birth</Label>
                                <DatePicker className='w-100 border border-secondary rounded' style={{ height: '100px' }} selected={profile.dob} calendarClassName="rasta-stripes" onChange={date => { setProfile({ ...profile, dob: date }); }} />
                            </FormGroup> */}
                            {/* <FormGroup>
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
                            </FormGroup> */}

                            <FormGroup>
                                <Label for="homeAdd">Home Address</Label>
                                <Input type="text" name="homeAdd" value={profile.homeAdd} onChange={handleChange} placeholder="Home Address" />
                            </FormGroup>



                            {/* Inmate Pic upload starts here */}

                            <Label for="fName">Visitor's Passport</Label>
                            <div className='d-flex'>
                                <Input type="file" name="fName" onChange={onfileSelect} placeholder={selectedFile.name} />
                                <Button color='success' className='font-weight-bold' onClick={onImageUpload}>Upload</Button>
                            </div>

                            {
                                selectedFile.file &&
                                <div>
                                    <progress value={progress} max='100' />
                                    <br />
                                    <br />
                                    <img style={{ minWidth: '100px', width: '100px', height: '100px' }}
                                        src={selectedFile.img}
                                        // src={'http://localhost:8000/' + image}
                                        alt={'productImg' + selectedFile.name}
                                    />

                                </div>

                            }




                            {/* <FormGroup>
                                <Label for="emailAdd">Email Address</Label>
                                <Input type="email" name="email" value={profile.emailAdd} onChange={handleChange} placeholder="email Address" />
                            </FormGroup> */}


                        </Form>

                    </Card >
                    <div className='d-flex justify-content-lg-center '>
                        <Button color='success' className='font-weight-bold mt-3' onClick={regVisitor}>Generate Gate Pass</Button>

                    </div>
                    <div style={{ height: '20px' }}></div>
                </div>
            }



        </div >
    )
}

export default SearchImmate




