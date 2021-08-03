import React, { useState, useContext } from 'react'
import { Table, Label, Button, Form, FormGroup, Input } from 'reactstrap';
import { globalStore } from '../../../ContextAPI/globalStore'
import { viewPageAction } from '../../../ContextAPI/actions/UserActions'
function SearchImmate() {
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



    const viewHandler = () => {

    }

    return (
        <div className='w-75'>
            <Form className='d-flex flex-column justify-content-start ' >
                <h4 className=' text-success text-center font-weight-bold'>SEARCH INMATE</h4>
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
                        onChange={handleChange}
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
                                <td><img src={inmate.img} alt='Inmate Pic' style={{ height: '50px', width: '50px' }} /></td>
                                <td>{inmate.loclga} </td>
                                <td>{inmate.qty}</td>
                                <td >
                                    <Button
                                        id={index}
                                        onClick={viewHandler}
                                        className='ml-2 text-light bg-success font-weight-bold'>View </Button>
                                    <Button
                                        id={index}
                                        onClick={() => dispatch(viewPageAction('generatePass'))}
                                        className='ml-2 text-light bg-success font-weight-bold'>Generate Pass</Button>

                                </td>
                            </tr>
                        )
                    })

                    }
                </tbody>
            </Table>
        </div >
    )
}

export default SearchImmate
