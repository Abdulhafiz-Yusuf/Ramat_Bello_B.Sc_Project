import React, { useState } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
function SearchImmate() {
    const [searchId, setsearchId] = useState()

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
    return (
        <Form className='d-flex justify-content-center mt-5' style={{ height: '40px' }}>
            <FormGroup className='mr-3'>
                <Input type="number" name="searchId" value={searchId} onChange={handleChange} placeholder="Enter Inmate's ID Number " />
            </FormGroup>
            <Button color='success'
                onClick={onSearch}
                className='' >
                Search</Button>
        </Form>
    )
}

export default SearchImmate
