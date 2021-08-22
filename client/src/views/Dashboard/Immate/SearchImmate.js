import React, { useState, useContext } from 'react'
import { Table, Button, Form, FormGroup, Input } from 'reactstrap';
import { globalStore } from '../../../ContextAPI/globalStore'
import { viewPageAction } from '../../../ContextAPI/actions/UserActions'
import { searchInmateByCodeorName } from '../../../ContextAPI/actions/inmateActions';


function SearchImmate() {
    const [searchText, setsearchText] = useState()
    // const [SearchType, setSearchType] = useState('1')

    const { state, dispatch } = useContext(globalStore)


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

    // const bgHanleChange = (e) => {
    //     const value = e.target.value
    //     setSearchType(value)
    //     console.log(value)
    // }

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
                        placeholder={"Enter Inmate's Name or Inmate's Code"} />
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
                                                <img
                                                    src={require(`../../../assets/uploads/${inmate.ipic}`).default}
                                                    alt='Inmate Pic'
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

        </div >
    )
}

export default SearchImmate
