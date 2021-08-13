import React, { useContext, useEffect, useState } from 'react'
import { Card, Button } from 'reactstrap'
import { viewPageAction } from '../../ContextAPI/actions/inmateActions';
import { globalStore } from '../../ContextAPI/globalStore';



function Profile() {

    const { state, dispatch  } = useContext(globalStore)
    const inmate = state.inmate
    const dob = inmate

    return (
        <div className='d-flex flex-row justify-content-center align-items-center' style={{width:'85vh'}} >
           
           
            <Card className='w-100 d-flex mt-2 flex-column justify-content-center align-items-center'>
                <img
                    // src={inmate.img}
                    alt='Inmate Pic'
                    className='rounded-circle border mt-2'
                    style={{ height: '100px', width: '100px' }}
                />

                <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25'><p className='ml-3'>Code:  </p> </div>
                    <div> <p className='text-uppercase font-weight-bold ml-3'>{inmate.code}</p></div>
                    <hr />
                </div>
                <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25'><p className='ml-3'> First Name:  </p> </div>
                    <div> <p className='text-uppercase font-weight-bold ml-3 ml'>{inmate.f_name}</p></div>
                    <hr />
                </div>
                <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25 '><p className='ml-3'> Middle t Name:  </p> </div>
                    <div> <p className='text-uppercase font-weight-bold ml-3 '>{inmate.m_name}</p></div>
                    <hr />
                </div>

                <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25 '><p className='ml-3'> Last Name:  </p> </div>
                    <div> <p className='text-uppercase font-weight-bold ml-3 '>{inmate.l_name}</p></div>
                    <hr />
                </div>
<div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25 '><p className='ml-3'> Gender:  </p> </div>
                    <div> <p className='text-uppercase font-weight-bold ml-3 '>{inmate.gender}</p></div>
                    <hr />
                </div>

                <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25 '><p className='ml-3'> Date of Birth:  </p> </div>
                    <div> <p className='text-uppercase font-weight-bold ml-3 '>{inmate.dob}</p></div>
                    <hr />
                </div>
                <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25 '><p className='ml-3'> Phone:  </p>  </div>
                    <div> <p className='text-uppercase font-weight-bold ml-3 '>+234 {inmate.phone}</p> </div>
                </div>
                <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25 '><p className='ml-3'> Resident Address:  </p>  </div>
                    <div> <p className=' text-uppercase font-weight-bold ml-3 '>{inmate.haddress}</p> </div>
                </div>
                <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25 '><p className='ml-3'> L.G.A: </p>  </div>
                    <div> <p className=' text-uppercase font-weight-bold ml-3 '>{inmate.ilga}</p> </div>
                </div>

                <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25 '><p className='ml-3'> State:  </p>  </div>
                    <div> <p className='text-uppercase font-weight-bold  ml-3 '>{inmate.istate}</p> </div>
                </div>

                 <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25 '><p className='ml-3'> Nature of Crime:  </p>  </div>
                    <div> <p className='text-uppercase font-weight-bold  ml-3 '>{inmate.crime}</p> </div>
                </div>
                  
                  <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25 '><p className='ml-3'> Date of Imprisonment:  </p>  </div>
                    <div> <p className='text-uppercase font-weight-bold  ml-3 '>{inmate.doi}</p> </div>
                </div>

                 <div className='d-flex w-100 text-success border-bottom'>
                    <div className='w-25 '><p className='ml-3'> Date of Release:  </p>  </div>
                    <div> <p className='text-uppercase font-weight-bold  ml-3 '>{inmate.dor.getDate()}</p> </div>
                </div>
                


            </Card >
        </div >
    )
}

export default Profile
