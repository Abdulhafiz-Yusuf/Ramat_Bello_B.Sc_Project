import React, { useContext, useEffect, useState } from 'react'
import { Card, Button } from 'reactstrap'
import { viewPageAction } from '../../ContextAPI/actions/UserActions';
import { globalStore } from '../../ContextAPI/globalStore';



function Profile() {

    const { dispatch, state } = useContext(globalStore)
    const user = state.inmate
    let bg;


    // useEffect(() => {


    // }, [])

    return (
        <div className='w-75 d-flex flex-row justify-content-center align-items-center' >
            <Card className='w-100 d-flex mt-2 flex-column justify-content-center align-items-center'>
                <img
                    // src={inmate.img}
                    alt='Inmate Pic'
                    className='rounded-circle border mt-2'
                    style={{ height: '100px', width: '100px' }}
                />

                <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25'><p className='ml-5'>ID:  </p> </div>
                    <div> <p className='text-uppercase font-weight-bold'>{user.f_name}</p></div>
                    <hr />
                </div>
                <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25'><p className='ml-5'> First Name:  </p> </div>
                    <div> <p className='text-uppercase font-weight-bold'>{user.f_name}</p></div>
                    <hr />
                </div>
                <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25 '><p className='ml-5'> Last Name:  </p> </div>
                    <div> <p className='text-uppercase font-weight-bold '>{user.l_name}</p></div>
                    <hr />
                </div>

                <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25 '><p className='ml-5'> Phone:  </p>  </div>
                    <div> <p className='text-uppercase font-weight-bold '>+234 {user.phone}</p> </div>
                </div>
                <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25 '><p className='ml-5'> State of Resident:  </p>  </div>
                    <div> <p className=' text-uppercase font-weight-bold '>{user.user_loc_state}</p> </div>
                </div>
                <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25 '><p className='ml-5'> L.G.A: </p>  </div>
                    <div> <p className=' text-uppercase font-weight-bold '>{user.loc_lga}</p> </div>
                </div>

                <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25 '><p className='ml-5'> Are you a Donor:  </p>  </div>
                    <div> <p className='font-weight-bold '>{user.donor}</p> </div>
                </div>

            </Card >
        </div >
    )
}

export default Profile
