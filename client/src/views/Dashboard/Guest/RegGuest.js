import React, {
    useState,
    // useContext
} from 'react'
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { } from '../../../ContextAPI/actions/UserActions'
// import { globalStore } from '../../../ContextAPI/globalStore'
//DATEPICKER AND ITS CSS
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/*==========================
REGISTRATION COMPLETION PAGE
=============================*/

export default function RegGuest(props) {

    // const { state, dispatch } = useContext(globalStore)


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
    return (
        <div className='w-75'>
            <div style={{ height: '10px' }}></div>
            <Card className='container w-100 shadow-lg p-3'>
                <div className='d-flex justify-content-lg-center '>
                    <h2 className='text-success font-weight-bold'>Register a Guest</h2>
                </div>

                <Form>
                    <FormGroup >
                        <Label for="fName">First Name</Label>
                        <Input type="text" name="fName" value={profile.fName} onChange={handleChange} placeholder="First Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" name="lastName" value={profile.sName} onChange={handleChange} placeholder="Last Name" />
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
                        <Label for="phone">phone</Label>
                        <Input type="text" name="phone" value={profile.phone} onChange={handleChange} placeholder="080xxxxxxx" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="homeAdd">Home Address</Label>
                        <Input type="text" name="homeAdd" value={profile.homeAdd} onChange={handleChange} placeholder="Home Address" />
                    </FormGroup>

                    <div className='d-flex justify-content-lg-center '>
                        <Button color='success' className='font-weight-bold' onClick={onSubmit}>Submit</Button>
                    </div>

                </Form>

            </Card >
            <div style={{ height: '20px' }}></div>
        </div>
    )
}


